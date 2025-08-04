"use client"
import { motion } from "framer-motion"
import { Orbit } from "@/components/Orbit"

export const Projects = () => {
    return (
        <section className="pb-[10000px]">
            <div className="container">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="container py-24 relative isolate overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            {/* Background Animation */}
            <motion.div

              className="absolute inset-0 -z-10"

              style={{
                background: `radial-gradient(circle at 50% 40%, rgba(168, 85, 247, 0.25), rgba(24, 24, 27, 0.95))`,
                WebkitMaskImage: `radial-gradient(circle at center, #63186a 50%, transparent 100%)`,
                maskImage: `radial-gradient(circle at center, #63186a 50%, transparent 84%)`,
                maskMode: "alpha",
                backgroundSize: "150% 150%",
              }}
            ></motion.div>

            {/* Orbits */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Orbit className="size-[350px]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Orbit className="size-[600px]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Orbit className="size-[850px]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Orbit className="size-[1100px]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Orbit className="size-[1350px]" />
                </div>
              </div>
            </motion.div>
            </motion.div>
            </div>
            
            
        </section>
    )
}