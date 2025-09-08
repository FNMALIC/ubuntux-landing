'use client'

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp, StaggeredFadeInUp } from "./animations/ScrollAnimations";

type Props = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const FaqComp = (props: Props) => {
    return (
      <motion.div 
        className="border-b border-gray-200 py-4 md:py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="flex justify-between items-center cursor-pointer group"
          onClick={props.onToggle}
          whileHover={{ backgroundColor: "rgba(252, 192, 98, 0.05)" }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 group-hover:text-[#FCC062] transition-colors pr-4">
            {props.question}
          </h3>
          <motion.div
            animate={{ rotate: props.isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-shrink-0 p-1"
          >
            <ChevronDown 
              size={20} 
              className="text-gray-500 group-hover:text-[#FCC062] transition-colors" 
            />
          </motion.div>
        </motion.div>
        
        <AnimatePresence>
          {props.isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.p 
                className="text-gray-600 leading-relaxed text-sm md:text-base pr-8"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {props.answer}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  const FaqData: Omit<Props, 'isOpen' | 'onToggle'>[] = [
    {
      id: 1,
      question: "How do I create an account?",
      answer: "Creating an account with Ubuntu-X is simple and secure. Visit our website or download our mobile app, click 'Sign Up', provide your email address and create a strong password. You'll need to verify your email and complete our KYC process by uploading a valid ID document. Once approved, you can start sending money worldwide.",
    },
    {
      id: 2,
      question: "What fees do you charge for transfers?",
      answer: "Ubuntu-X offers competitive and transparent pricing. We charge only 1% for transactions under 50,000 FCFA, with even lower rates for higher amounts. There are no hidden fees - you'll see exactly what you pay upfront before confirming any transaction. Our fees are significantly lower than traditional banks and money transfer services.",
    },
    {
      id: 3,
      question: "How long do transfers take?",
      answer: "Most transfers with Ubuntu-X are completed within minutes. Domestic transfers typically take 1-5 minutes, while international transfers can take anywhere from 5 minutes to 1 hour depending on the destination country and payment method. You'll receive real-time updates on your transfer status through our app and SMS notifications.",
    },
    {
      id: 4,
      question: "Is Ubuntu-X secure?",
      answer: "Absolutely. Ubuntu-X uses bank-level security measures including 256-bit SSL encryption, two-factor authentication, and advanced fraud detection systems. We're fully regulated and compliant with international financial regulations. Your personal information and funds are protected by multiple layers of security, and we never store your sensitive payment information.",
    },
    {
      id: 5,
      question: "Which cryptocurrencies can I exchange?",
      answer: "Ubuntu-X supports major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and several stablecoins like USDT and USDC. You can easily convert between cryptocurrencies and traditional fiat currencies. Our exchange rates are competitive and updated in real-time to ensure you get the best value for your transactions.",
    },
    {
      id: 6,
      question: "How do virtual cards work?",
      answer: "Ubuntu-X virtual cards work like regular debit cards but exist digitally in your app. Once you create a virtual card, you can use it for online purchases, subscriptions, and any transaction that accepts card payments. You can set spending limits, freeze/unfreeze the card instantly, and track all transactions in real-time through our app. It's perfect for secure online shopping and managing your digital expenses.",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInUp>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Frequently <span className="text-[#FCC062]">Asked</span> Questions
            </h2>
            <p className="text-base md:text-lg font-semibold text-gray-600">
              Most asked questions from our users
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div className="max-w-4xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative z-10">
            {FaqData.map((faq, index) => (
              <FaqComp 
                key={faq.id} 
                {...faq} 
                isOpen={openFaq === faq.id}
                onToggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </FadeInUp>

        {/* Call to action */}
        <FadeInUp delay={400}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <motion.button 
              className="bg-gradient-to-r from-[#FCC062] to-[#FBB03B] text-[#21237B] px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Faq;
