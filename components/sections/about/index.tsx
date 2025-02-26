"use client";
import { Separator } from "@/components/ui/separator";
import data from "@/data";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "./animated-counter";

export default function AboutSection() {
  const ref = useRef(null);
  useCurSection(ref);

  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-12 bg-muted text-sm md:text-base"
    >
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"-{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>

      <div className="flex gap-9 items-center flex-col lg:flex-row w-10/12 mx-auto p-5 rounded-lg container">
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="size-[200px] bg-gradient-primary p-1 rounded-[40px]"
          >
            <Image
              className="size-full grayscale-0 transition-all hover:grayscale rounded-[40px]"
              width={600}
              height={600}
              alt="about profile image"
              src={data.about.image}
            />
          </motion.div>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold">
            <span className="text-secondary">{"< "}</span>
            <span className="text-gradient-secondary">Who I&apos;m</span>
            <span className="text-secondary">{" />"}</span>
          </h2>
          <motion.p
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
            className="text-muted-foreground"
          >
            {data.about.description}
          </motion.p>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-6 mb-6">
        <Link href="https://www.linkedin.com/in/your-profile" target="_blank">
          <Linkedin className="size-8 text-muted-foreground hover:text-blue-500 transition duration-300" />
        </Link>
        <Link href="https://twitter.com/your-profile" target="_blank">
          <Twitter className="size-8 text-muted-foreground hover:text-blue-400 transition duration-300" />
        </Link>
        <Link href="https://instagram.com/your-profile" target="_blank">
          <Instagram className="size-8 text-muted-foreground hover:text-pink-500 transition duration-300" />
        </Link>
        <Link href="https://github.com/your-profile" target="_blank">
          <Github className="size-8 text-muted-foreground hover:text-gray-700 transition duration-300" />
        </Link>
      </div>

      <div className="flex gap-4 items-center justify-between text-center w-full md:w-3/5 max-w-[900px] h-[100px] m-0 md:mx-auto md:mt-7 mb-10 p-5">
        {data.about.numbers.map((number, i, arr) => (
          <Fragment key={number.name}>
            <div className="space-y-1">
              <p className="text-muted-foreground">{number.name}</p>
              <p className="text-2xl md:text-4xl font-bold">
                +<AnimatedCounter from={0} to={number.number} />
              </p>
            </div>
            {i + 1 < arr.length && <Separator orientation="vertical" />}
          </Fragment>
        ))}
      </div>

      {/* Social Media Links */}
    </div>
  );
}
