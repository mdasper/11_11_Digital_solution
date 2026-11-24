import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/home/HeroSection';
import { ManifestoSection } from '@/components/motion/ManifestoSection';
import { ServicesBento } from '@/components/motion/ServicesBento';
import { StatsBand } from '@/components/motion/StatsBand';
import { WhyUsSection } from '@/components/motion/WhyUsSection';
import { ProcessSection } from '@/components/motion/ProcessSection';
import { TestimonialsCarousel } from '@/components/motion/TestimonialsCarousel';
const Home = () => {
    return (<>
      <Helmet>
        <title>11 11 Digital Solutions | Websites, Marketing and Reels</title>
        <meta name="description" content="11 11 Digital Solutions is a premier digital agency building high-performance websites, ROI-driven marketing, and viral reels for brands that want to grow online."/>
        <meta property="og:title" content="11 11 Digital Solutions | Websites, Marketing and Reels"/>
        <meta property="og:description" content="Precision meets passion. Custom high-performance websites, digital marketing, and cinematic video editing."/>
        <meta property="og:type" content="website"/>
      </Helmet>

      {/* Flagship Agency Flow */}
      <div className="relative">
        {/* 02 Hero Section */}
        <section id="section-hero">
          <HeroSection />
        </section>

        {/* 03 Manifesto Section */}
        <section id="section-manifesto">
          <ManifestoSection />
        </section>

        {/* 04 Services Bento */}
        <section id="section-services">
          <ServicesBento />
        </section>

        {/* 05 Stats Band */}
        <section id="section-stats">
          <StatsBand />
        </section>

        {/* 06 Why 11 11 */}
        <section id="section-why">
          <WhyUsSection />
        </section>

        {/* 07 Process */}
        <section id="section-process">
          <ProcessSection />
        </section>

        {/* 08 Testimonials Carousel */}
        <section id="section-testimonials">
          <TestimonialsCarousel />
        </section>
      </div>
    </>);
};
export default Home;
