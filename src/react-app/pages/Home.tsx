import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import Features from '@/react-app/components/Features';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
