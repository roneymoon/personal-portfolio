"use client";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import roney from "@/assets/images/roney.png";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import underlineImage from "@/assets/images/underline.svg?url";
import dashboard from "@/assets/images/robot.jpg";

import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import NoticeIcon from "@/components/NoticeIcon";

const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientX, [0, innerHeight], [0, 1]);

  useMotionValueEvent(clientX, "change", (latest) => {
    console.log("X:", latest); // FIXED
  });

  useMotionValueEvent(clientY, "change", (latest) => {
    console.log("Y:", latest); // optional
  });

  useEffect(() => {
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return { xProgress, yProgress };
};

export const Hero = () => {
  const sectionRef = useRef(null);
  const { xProgress, yProgress } = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
    layoutEffect: false, // ✅ Prevent hydration warning
  });

  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);


  return (
    <section ref={sectionRef} className="pt-24">
      <div className="container">
        <div className="border-l border-r border-gray-200/30">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="container md:py-12 relative isolate overflow-hidden"
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
            
            {/* Notice Icon */}
            <span className="absolute top-[30.4rem] right-[7.4rem]">Hover on this icon</span>
            <NoticeIcon  className="absolute top-[30rem] right-[4rem]"/>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-fit mb-8 sm:mt-[10rem] md:mt-2 rounded-full p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform mx-auto"
            >
              <Link
                href="#"
                className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-full text-sm font-medium text-white relative overflow-hidden"
              >
                {/* Tag */}
                <span className="text-xs font-bold text-white bg-blue-600 px-2 py-[2px] rounded-full shadow-md">
                  New
                </span>

                <div className="flex items-center justify-center">
                  {/* CTA Text with subtle shimmer */}
                  <motion.span
                    className="relative text-white flex items-center gap-2 justify-center"
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{ backgroundPosition: '200% 50%' }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, #fff, #aaa, #fff)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Streamify is live!
                  </motion.span>
                </div>
                {/* Arrow */}
                <ArrowRight size={16} className="text-white opacity-80" />
              </Link>
            </motion.div>

            {/* Heading */}
            <div className="w-full flex justify-center">
              <motion.h1
                className="text-4xl lg:text-6xl md:text-5xl font-semibold text-gray-100 text-center leading-tight max-w-4xl px-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Interfaces refined.{" "}
                <span className="relative inline-block">
                  Backends{" "}
                  <span className="relative z-10 text-gradient-animated">
                    optimized
                  </span>
                  <span
                    className="absolute w-full left-0 top-full max-w-[12rem] ml-[3rem] md:ml-[16rem] mt-2 lg:ml-[9rem] lg:max-w-full h-4 -translate-y-1/2"
                    style={{
                      background:
                        "linear-gradient(to right, #fbbf24, #14b8a6, #8b5cf6, #e879f9)",
                      WebkitMaskImage: `url(${underlineImage.src})`,
                      WebkitMaskSize: "100% 100%",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${underlineImage.src})`,
                      maskSize: "100% 100%",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />
                </span>
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.div
              className="flex md:flex-row flex-col items-center justify-center gap-4 text-xl mt-8 lg:w-[900px] text-gray-300 mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span>Hello, I'm Roney Moon</span>

              {/* Profile Image */}
              <motion.div
                className="relative z-10 rounded-full p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.3 }}
              >
                <Image
                  src={roney}
                  alt="my profile"
                  className="size-[4rem]  rounded-full object-cover"
                />
              </motion.div>

              <span className="hidden md:inline">a Full Stack Developer</span>
            </motion.div>


            {/* CTA Button */}
            <motion.div
              className="flex justify-center md:mb-[10rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button className="mt-10 text-gray-950 uppercase font-semibold px-6 py-3 rounded-lg bg-gray-100">
                Download Resume
              </button>
            </motion.div>

            {/* Planets and Cards */}
            <motion.div
              className="relative mt-16 w-fit mx-auto rounded-2xl p-[3px]"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #a78bfa, #38bdf8, #34d399, #f472b6, #fcd34d, #a78bfa)",
                backgroundSize: "400% 400%",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="relative isolate max-w-5xl mx-auto">
                {/* Planets */}
                {/* <div className="absolute top-0 left-1/2">
                  <motion.div
                    style={{
                      x: planetTransforms[0].x,
                      y: planetTransforms[0].y,
                    }}
                  >
                    <Planet
                      size="lg"
                      color="violet"
                      className="md:rotate-135 lg:-translate-x-[252px] lg:-translate-y-[76px] md:-translate-x-[302px] md:-translate-y-[76px] -translate-x-[172px] -translate-y-[156px] rotate-[220deg]"
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      x: planetTransforms[1].x,
                      y: planetTransforms[1].y,
                    }}
                  >
                    <Planet
                      size="md"
                      color="teal"
                      className="md:rotate-[230deg] lg:translate-x-[342px] lg:-translate-y-[160px] md:translate-x-[230px] md:-translate-y-[190px]  translate-x-[102px] -translate-y-[336px] rotate-[220deg]"
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      x: planetTransforms[2].x,
                      y: planetTransforms[2].y,
                    }}
                  >
                    <Planet
                      size="sm"
                      color="violet"
                      className="md:rotate-[135deg] lg:translate-x-[510px] lg:-translate-y-[306px] md:-translate-x-[122px] md:-translate-y-[176px] translate-x-[112px] -translate-y-[156px] rotate-[220deg]"
                    />
                  </motion.div>

                  <motion.div
                    style={{
                      x: planetTransforms[3].x,
                      y: planetTransforms[3].y,
                    }}
                  >
                    <Planet
                      size="sm"
                      color="violet"
                      className="md:rotate-[220deg] lg:translate-x-[74px] lg:-translate-y-[126px] md:translate-x-[302px] md:-translate-y-[346px]  translate-x-[72px] -translate-y-[460px] rotate-[150deg]"
                    />
                  </motion.div>

                  <motion.div
                    style={{
                      x: planetTransforms[4].x,
                      y: planetTransforms[4].y,
                    }}
                  >
                    <Planet
                      size="md"
                      color="fuchsia"
                      className="md:rotate-135 lg:-translate-x-[222px] lg:-translate-y-[496px] md:-translate-x-[352px] md:-translate-y-[336px]  -translate-x-[162px] -translate-y-[360px] rotate-[150deg]"
                    />
                  </motion.div>

                  <motion.div
                    style={{
                      x: planetTransforms[5].x,
                      y: planetTransforms[5].y,
                    }}
                  >
                    <Planet
                      size="md"
                      color="teal"
                      className="md:rotate-[165deg] lg:-translate-x-[372px] lg:-translate-y-[336px] md:-translate-x-[102px] md:-translate-y-[516px]  -translate-x-[252px] translate-y-[216px]"
                    />
                  </motion.div>
                </div> */}

                {/* Chat Bubbles */}
                <motion.div
                  className="hidden lg:block absolute bottom-[150px] left-5 z-10 -translate-x-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    style={{ y: transformedY }}
                    className="bg-gray-800/70 backdrop-blur-sm border shadow-md text-gray-200 border-gray-100 rounded-xl p-4 w-72"
                  >
                    <div>
                      Can you <strong>deploy</strong> a new version without downtime?
                    </div>
                    <div className="text-right mt-2 text-gray-400 text-sm font-semibold">
                      1m ago
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="hidden lg:block absolute top-[10px] -left-20 z-10 -translate-x-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    style={{ y: transformedY }}
                    className="bg-gray-800/70 backdrop-blur-sm border shadow-md text-gray-200 border-gray-100 rounded-xl p-4 w-72"
                  >
                    <div>
                      Can you <strong>optimize</strong> core web vitals for a SaaS dashboard?
                    </div>
                    <div className="text-right mt-2 text-gray-400 text-sm font-semibold">
                      1m ago
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="hidden lg:block absolute bottom-[100px] -right-[40px] z-10 -translate-x-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    style={{ y: transformedY }}
                    className="bg-gray-800/70 backdrop-blur-sm border shadow-md text-gray-200 border-gray-100 rounded-xl p-4 w-72"
                  >
                    <div>
                      Can you <strong>scale</strong> {" "}
                      the app for 100K+ users seamlessly?
                    </div>
                    <div className="text-right mt-2 text-gray-400 text-sm font-semibold">
                      Just now
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="hidden lg:block absolute top-[50px] -right-[90px] z-10 -translate-x-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    style={{ y: transformedY }}
                    className="bg-gray-800/70 backdrop-blur-sm border shadow-md text-gray-200 border-gray-100 rounded-xl p-4 w-72"
                  >
                    <div>
                      Can you <strong>scale</strong> {" "}
                      the app for 100K+ users seamlessly?
                    </div>
                    <div className="text-right mt-2 text-gray-400 text-sm font-semibold">
                      Just now
                    </div>
                  </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                  className="rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <Image
                    src={dashboard}
                    alt="Robot"
                    className="w-full max-w-4xl h-auto block"
                  />

                  {/* Floating CTA */}
                  <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 w-fit max-w-full p-[2px] rounded-full z-10"
                    animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "linear",
                    }}
                    style={{
                      backgroundImage:
                        "linear-gradient(270deg, #a78bfa, #38bdf8, #34d399, #f472b6, #fcd34d, #a78bfa)",
                      backgroundSize: "400% 400%",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    <div className="bg-gray-950/80 px-4 py-2 rounded-full backdrop-blur-md shadow-md items-center justify-center text-sm hidden md:flex lg:flex text-white font-semibold whitespace-nowrap">
                      ⚡ Reliable Rapid Development
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
