"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function MedicalShape({
  className,
  delay = 0,
  width = 200,
  height = 60,
  rotate = 0,
  gradient = "from-orange-flame/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
        rotate: rotate - 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px] border border-navy-blue/[0.1]",
            "shadow-[0_4px_20px_0_rgba(9,38,75,0.05)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function MedicalShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <MedicalShape
        delay={0.2}
        width={300}
        height={80}
        rotate={8}
        gradient="from-orange-flame/[0.06]"
        className="left-[-5%] top-[20%]"
      />

      <MedicalShape
        delay={0.4}
        width={200}
        height={60}
        rotate={-12}
        gradient="from-navy-blue/[0.06]"
        className="right-[5%] top-[70%]"
      />

      <MedicalShape
        delay={0.3}
        width={150}
        height={40}
        rotate={-5}
        gradient="from-orange-flame/[0.04]"
        className="left-[10%] bottom-[15%]"
      />

      <MedicalShape
        delay={0.5}
        width={120}
        height={30}
        rotate={15}
        gradient="from-navy-blue/[0.04]"
        className="right-[20%] top-[15%]"
      />
    </div>
  );
} 