"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: clicking ? 1.8 : hovering ? 1.3 : 1,
          backgroundColor: clicking
            ? "rgba(156, 69, 255, 0.64)"
            : "rgba(0, 255, 255, 0.8)",
          boxShadow: clicking
            ? "0 0 20px rgba(156, 69, 255, 0.64)"
            : "0 0 15px rgba(0, 255, 255, 0.5)",
          mixBlendMode: "difference",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          position: "fixed",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      <AnimatePresence>
        {trail.map(({ x, y, id }) => (
          <motion.div
            key={id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-trail"
            style={{
              position: "fixed",
              left: x - 8,
              top: y - 8,
              width: "16px",
              height: "16px",
              backgroundColor: "rgba(0, 255, 255, 0.4)",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 9998,
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
