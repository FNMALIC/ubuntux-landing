'use client'

import React from "react";
import logo from "../images/logoTwo.png";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "./animations/ScrollAnimations";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-20 md:mt-32">
      <FadeInUp>
        <div className="bg-gradient-to-br from-[#003399] to-[#002266] rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-white mx-auto">
          {/* Top section */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6 md:gap-4 md:items-center justify-between w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col gap-2">
              <Image
                src={logo}
                alt="Ubuntu-X Logo"
                priority
                width={100}
                height={100}
                className="h-5 w-fit"
              />
              <p className="text-[#FF9900] text-sm font-medium">Connecting Africa. Building Together.</p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full hover:bg-[#FF9900]/20 transition-colors cursor-pointer"
              >
                <Facebook size={18} className="text-[#FF9900]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full hover:bg-[#FF9900]/20 transition-colors cursor-pointer"
              >
                <Twitter size={18} className="text-[#FF9900]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full hover:bg-[#FF9900]/20 transition-colors cursor-pointer"
              >
                <Instagram size={18} className="text-[#FF9900]" />
              </motion.div>
              <span className="ml-2 font-medium">@ubuntu-x</span>
            </div>
          </motion.div>

          {/* Ubuntu philosophy section */}
          {/*<motion.div*/}
          {/*  className="my-8 p-4 bg-white/5 rounded-lg border-l-4 border-[#FF9900]"*/}
          {/*  initial={{ opacity: 0, y: 20 }}*/}
          {/*  animate={{ opacity: 1, y: 0 }}*/}
          {/*  transition={{ duration: 0.6, delay: 0.3 }}*/}
          {/*>*/}
          {/*  <div className="flex items-center gap-2 mb-2">*/}
          {/*    <Heart size={16} className="text-[#FF9900]" />*/}
          {/*    <span className="text-[#FF9900] font-semibold text-sm">Ubuntu Philosophy</span>*/}
          {/*  </div>*/}
          {/*  <p className="text-white/90 text-sm italic">*/}
          {/*    "I am because we are. We are because I am." - Together we build bridges, not walls.*/}
          {/*  </p>*/}
          {/*</motion.div>*/}

          {/* Bottom section */}
          <motion.div 
            className="flex flex-col md:flex-row items-start md:items-center mt-12 md:mt-16 gap-4 md:gap-6 text-sm opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-white/80">© 2024 Ubuntu-X. All rights reserved.</p>
            
            <div className="flex flex-wrap gap-4 md:gap-6 md:ml-auto">
              <motion.p 
                className="hover:text-[#FF9900] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.p>
              <motion.p 
                className="hover:text-[#FF9900] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.p>
              <motion.p 
                className="hover:text-[#FF9900] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Security
              </motion.p>
            </div>
          </motion.div>
        </div>
      </FadeInUp>
    </footer>
  );
};

export default Footer;
