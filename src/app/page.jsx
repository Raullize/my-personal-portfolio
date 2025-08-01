import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SmoothScroll from '@/components/ui/SmoothScroll';

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