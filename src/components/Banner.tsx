'use client'

import Image from "next/image";
import React from "react";
import Mask from "../images/maskTwo.png";
import Phone from "../images/topLeftPhone.png";
import { ArrowRight, Send, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp, FadeInLeft, FadeInRight, FloatingAnimation, HoverScale } from "./animations/ScrollAnimations";
import Link from "next/link";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="py-8 md:py-12">
      <FadeInUp>
        <div className="bg-gradient-to-br from-[#FF9900] to-[#E68A00] rounded-xl md:rounded-2xl flex flex-col lg:flex-row gap-6 lg:gap-0 p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <Image
            src={Mask}
            alt="background pattern"
            className="absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-2xl opacity-20"
          />
          
          {/* Content Section */}
          <div className="flex-1 z-10 text-white lg:pr-8">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Smartphone size={32} className="text-[#003399]" />
              <span className="text-[#003399] font-semibold text-lg">Ubuntu-X Mobile</span>
            </motion.div>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect Anywhere.<br />
              <span className="text-[#003399]">Ubuntu in Your Pocket.</span>
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium py-4 md:py-6 max-w-[90%] md:max-w-[500px] leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Experience the power of community-driven finance. Available on Android and iOS.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <HoverScale scale={1.05}>
                  <Link href="https://app-test.ubuntu-x.com" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  className="flex items-center gap-2 bg-gradient-to-b from-[#003399] to-[#002266] text-white rounded-lg px-6 py-4 text-lg font-semibold shadow-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                  <span>Get Started</span>
                </motion.button>
                  </Link>
              </HoverScale>

              <HoverScale scale={1.02}>
                <motion.button 
                  className="flex items-center gap-2 px-6 py-4 text-lg font-medium border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors text-white"
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={18} />
                  <span>Download App</span>
                </motion.button>
              </HoverScale>
            </motion.div>

            {/* Ubuntu philosophy quote */}
            <motion.div
              className="mt-8 p-4 bg-white/10 rounded-lg border-l-4 border-[#003399]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-white/90 italic text-sm">
                "I am because we are" - Ubuntu philosophy
              </p>
            </motion.div>
          </div>
          
          {/* Phone Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end items-center relative z-10 min-h-[200px] lg:min-h-[300px]">
            <FloatingAnimation duration={4} yOffset={20}>
              <FadeInRight delay={800}>
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-auto">
                  <Image
                    src={Phone}
                    alt="Ubuntu-X mobile app interface"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#003399]/20 to-transparent rounded-full blur-xl -z-10 scale-110"></div>
                </div>
              </FadeInRight>
            </FloatingAnimation>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
};

export default Banner;
