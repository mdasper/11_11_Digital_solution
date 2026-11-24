import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Briefcase, Layers, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
const NotFound = () => {
    return (<>
      <Helmet>
        <title>404 - Page Not Found | 11 11 Digital Solutions</title>
        <meta name="description" content="This page took a wrong turn. Let's get you back to the work that matters."/>
      </Helmet>

      <div className="min-h-screen bg-ink text-text-dark flex flex-col items-center justify-center px-6 text-center relative overflow-hidden pt-24 pb-20">
        {/* Ambient Center Glow */}
        <div className="absolute w-[600px] h-[400px] bg-crimson/15 rounded-full blur-[160px] pointer-events-none"/>

        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-4 bg-crimson rounded-full"/>
            <span className="text-xs uppercase font-medium tracking-[0.2em] text-crimson">
              ERROR 404
            </span>
          </div>

          <h1 className="text-7xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 font-mono tracking-tighter">
            11 <span className="text-crimson font-sans">:</span> 404
          </h1>

          <p className="text-base sm:text-xl text-text-dark-muted max-w-md mx-auto leading-relaxed">
            This page took an unexpected turn. Let’s get you back to the work and craft that matters.
          </p>

          {/* Quick Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link to="/">
              <Button variant="primary" size="md">
                <Home className="w-4 h-4 mr-2"/>
                <span>Home</span>
              </Button>
            </Link>

            <Link to="/work">
              <Button variant="secondary" size="md">
                <Briefcase className="w-4 h-4 mr-2"/>
                <span>Selected Work</span>
              </Button>
            </Link>

            <Link to="/services">
              <Button variant="secondary" size="md">
                <Layers className="w-4 h-4 mr-2"/>
                <span>Services</span>
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="secondary" size="md">
                <MessageSquare className="w-4 h-4 mr-2"/>
                <span>Contact</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>);
};
export default NotFound;
