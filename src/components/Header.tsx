'use client'

import React from "react";
import Nav from "./Nav";
import CountryCarosel from "./CountryCarosel";
import Mask from "../images/Mask.png";
import Phone from "../images/leftPhone.png";
import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp, FadeInLeft, FadeInRight, FloatingAnimation, Parallax, HoverScale } from "./animations/ScrollAnimations";

// orange  FCC062, FBB03B
// blue 2A2D9D, 21237B

type Props = {};

const Header = (props: Props) => {

  return (
    <header className="min-h-screen py-6 md:py-10 font-semibold">
      <FadeInUp>
        <Nav />
      </FadeInUp>
      
      <FadeInUp delay={200} className="md:my-12 my-8">
        <div className="bg-gradient-to-tr from-[#2A2D9D] to-[#21237B] rounded-xl md:rounded-2xl flex flex-col lg:flex-row gap-6 lg:gap-x-8 justify-between md:p-10 lg:p-20 p-6 sm:p-8 relative overflow-hidden">
          {/* Background with parallax effect */}
          <Parallax speed={0.3}>
            <Image
              src={Mask}
              alt="mask"
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover opacity-30"
            />
          </Parallax>
          
          {/* Content Section */}
          <motion.div 
            className="lg:flex-1 z-10 lg:mt-8 xl:mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#FBB03B] font-bold leading-tight mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              lorem ipsum dolor sit amt consecutar
            </motion.h1>
            
            <motion.p 
              className="text-white text-sm md:text-base lg:text-lg py-3 sm:py-4 md:py-5 max-w-[90%] md:max-w-[500px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-x-6 mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <HoverScale scale={1.05}>
                <motion.button 
                  className="flex items-center gap-3 bg-gradient-to-b from-[#FCC062] to-[#FBB03B] rounded-lg px-6 py-3 text-sm md:text-base font-semibold text-black shadow-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                  <span>Start sending</span>
                </motion.button>
              </HoverScale>

              <HoverScale scale={1.02}>
                <motion.button 
                  className="flex items-center text-white gap-3 px-6 py-3 text-sm md:text-base font-medium border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={18} />
                  <span>Learn More</span>
                </motion.button>
              </HoverScale>
            </motion.div>
          </motion.div>
          
          {/* Phone Image Section with improved responsive design */}
          <div className="lg:flex-1 flex justify-center lg:justify-end items-center mt-8 lg:mt-0 relative z-10">
            <FloatingAnimation duration={4} yOffset={15}>
              <FadeInRight delay={600}>
                <div className="relative">
                  <Image
                    src={Phone}
                    alt="phone"
                    className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FCC062]/20 to-transparent rounded-full blur-xl -z-10 scale-110"></div>
                </div>
              </FadeInRight>
            </FloatingAnimation>
          </div>
        </div>
      </FadeInUp>
      
      <FadeInUp delay={400}>
        <CountryCarosel />
      </FadeInUp>
    </header>
  );
};

export default Header;
