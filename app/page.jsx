import About from '@/app/components/About';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Projects from '@/app/components/Projects';
import Timeline from '@/app/components/Timeline';
import ScrollToTop from '@/app/components/ui/ScrollToTop';
import SmoothScroll from '@/app/components/ui/SmoothScroll';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <SmoothScroll />
      <ScrollToTop />
      <Header />
      <About />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
} 