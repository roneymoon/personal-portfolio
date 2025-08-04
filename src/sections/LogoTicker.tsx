"use client"


import notion from "@/assets/images/notion.png"
import firebase from "@/assets/images/firebase.png"
import react from "@/assets/images/react.png"
import nodejs from "@/assets/images/nodejs.png"
import git from "@/assets/images/git.png"
import nextjs from "@/assets/images/nextjs.png"
import postgresql from "@/assets/images/postgresql.png"
import python from "@/assets/images/python.png"
import cpp from "@/assets/images/c++.png"
import django from "@/assets/images/django.png"
import figma from "@/assets/images/figma.png"
import docker from "@/assets/images/docker.png"



import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Notion", image: notion },
    { name: "Firebase", image: firebase },
    { name: "React", image: react },
    { name: "NodeJS", image: nodejs },
    { name: "Git", image: git },
    { name: "NextJS", image: nextjs },
    { name: "PostgreSQL", image: postgresql },
    { name: "Python", image: python },
    { name: "C++", image: cpp },
    { name: "Django", image: django },
    { name: "Figma", image: figma },
    { name: "Docker", image: docker },
    // { name: "Outside", image: outsideLogo },
    // { name: "Apex", image: apexLogo },
    // { name: "Celestial", image: celestialLogo },
    // { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl flex flex-row justify-center items-center">
                    Certified to Ship Clean Code <span className="ml-2 text-white hidden md:block text-white/50 ">in any Tech Stack</span>
                </h3>
                <div
                    className="flex overflow-hidden mt-12"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <motion.div
                    animate={{x: "-50%"}}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-none gap-16 pr-24 ">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Fragment key={index}>
                                {logos.map((logo) => (
                                    <div className="flex flex-row items-center gap-2">
                                    <Image
                                        src={logo.image}
                                        key={logo.name}
                                        alt={logo.name}
                                        className="h-14 w-full"
                                    />
                                    <span className="text-white/80 md:text-2xl text-lg">{logo.name}</span>
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}