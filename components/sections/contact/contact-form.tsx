"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "// Username must be at least 2 characters." }),
  email: z.string().email({ message: "// Please enter a valid email." }),
  message: z
    .string()
    .min(1, { message: "// Please enter a message to submit." }),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false); // Pop-up state

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
        setOpen(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>_Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your-Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>_Email</FormLabel>
                <FormControl>
                  <Input placeholder="your-email@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>_Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Let's Work Together!"
                    className="resize-y max-h-44"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="block ml-auto" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Form>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <DialogTitle>Message Sent Successfully! 🎉</DialogTitle>
          <DialogDescription>
            Thank you for reaching out! I'll get back to you soon.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
