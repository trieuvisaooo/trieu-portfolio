"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:py-24 px-4 bg-hero-gradient text-center flex flex-col justify-center items-center min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0033ff] to-[#0600ab]">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={["Trieu", 1000, "a Data Engineer", 1000, "a Data Analyst", 1000, "a Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white text-lg sm:text-xl mb-8">
          a lifelong learner with a passion for turning raw data into powerful, actionable insights
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-br from-[#0033ff] to-[#0600ab] hover:bg-opacity-90 text-white text-lg font-semibold"
          >
            Hire Me
          </Link>

          <Link
            href="/my_resume.pdf"
            target="_blank"
            className="px-1 py-1 rounded-full bg-gradient-to-br from-[#0600ab] to-[#00033d]"
          >
            <span className="block  hover:bg-[#00033d] rounded-full px-5 py-2 text-white text-lg font-semibold">
              My Resume
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
