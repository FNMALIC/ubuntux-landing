'use client'

import Banner from "@/components/Banner";
import Demo from "@/components/Demo";
import Evaluate from "@/components/Evaluate";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import { FadeInUp } from "@/components/animations/ScrollAnimations";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      {/* Header with its own animations */}
      <Header />
      
      {/* Animated sections with staggered delays */}
      <FadeInUp delay={100}>
        <Evaluate />
      </FadeInUp>
      
      <FadeInUp delay={200}>
        <section id="features">
          <Features />
        </section>
      </FadeInUp>
      
      <FadeInUp delay={100}>
        <section id="how-it-works">
          <Demo />
        </section>
      </FadeInUp>
      
      <FadeInUp delay={150}>
        <section id="faqs">
          <Faq />
        </section>
      </FadeInUp>
      
      <FadeInUp delay={100}>
        <section id="reviews">
          <Testimonial />
        </section>
      </FadeInUp>
      
      <FadeInUp delay={150}>
        <Banner />
      </FadeInUp>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
