import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Preloader } from '@/components/layout/Preloader';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { PageTransition } from '@/components/layout/PageTransition';
import { useLenis } from '@/hooks/useLenis';
export const RootLayout = () => {
    const [preloaderDone, setPreloaderDone] = useState(() => {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem('1111_preloader_seen') === 'true';
        }
        return false;
    });
    // Initialize Lenis smooth scroll synced with GSAP
    useLenis();
    return (<div className="relative min-h-screen bg-ink text-text-dark font-body antialiased selection:bg-crimson selection:text-white">
      {/* Preloader Counter 00:00 -> 11:11 */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)}/>}

      {/* Global Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true"/>

      {/* Floating Full-Width Navbar */}
      <Navbar />

      {/* Page Content with Transition Curtains */}
      <main id="main-content" className="relative z-10">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      {/* Global Floating WhatsApp Contact Pill */}
      <WhatsAppButton />

      {/* Editorial Ink Footer */}
      <Footer />
    </div>);
};
