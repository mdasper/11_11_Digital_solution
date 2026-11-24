import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RootLayout } from '@/components/layout/RootLayout';
// Lazy-loaded routes for code splitting
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Websites = lazy(() => import('@/pages/services/Websites'));
const Marketing = lazy(() => import('@/pages/services/Marketing'));
const Reels = lazy(() => import('@/pages/services/Reels'));
const Editing = lazy(() => import('@/pages/services/Editing'));
const Work = lazy(() => import('@/pages/Work'));
const CaseStudy = lazy(() => import('@/pages/CaseStudy'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));
// Clean Loading fallback for code splitting
const PageLoader = () => (<div className="min-h-screen bg-ink flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-2 border-crimson/20 border-t-crimson rounded-full animate-spin"/>
      <span className="font-mono text-xs text-crimson tracking-widest">11:11 LOADING</span>
    </div>
  </div>);
export const App = () => {
    return (<HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />}/>
              <Route path="about" element={<About />}/>
              <Route path="services" element={<Services />}/>
              <Route path="services/websites" element={<Websites />}/>
              <Route path="services/marketing" element={<Marketing />}/>
              <Route path="services/reels" element={<Reels />}/>
              <Route path="services/editing" element={<Editing />}/>
              <Route path="work" element={<Work />}/>
              <Route path="work/:slug" element={<CaseStudy />}/>
              <Route path="pricing" element={<Pricing />}/>
              <Route path="contact" element={<Contact />}/>
              <Route path="*" element={<NotFound />}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>);
};
export default App;
