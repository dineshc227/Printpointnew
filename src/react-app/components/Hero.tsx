import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const backgroundImages = [
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/photocopying.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/printing-services.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/scanning.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/binding-lamination.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/large-format.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/custom-stationery.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/business-cards.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/flyers-brochures.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/posters.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/banners.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/stickers-labels.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/packaging.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/id-cards.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/tshirt-printing.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/id-tags.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/water-bottle.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/corporate-gifts.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/crystal.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/foam-boards.png',
  'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/standees.png'
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Image Slider with Parallax */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Service ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-800/40 to-pink-900/50"></div>
          </div>
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Navigation Buttons - Redesigned */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white p-3 md:p-4 rounded-2xl transition-all hover:scale-110 shadow-2xl backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white p-3 md:p-4 rounded-2xl transition-all hover:scale-110 shadow-2xl backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
      </button>

      {/* Slide Indicators - Redesigned */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-black/30 backdrop-blur px-4 py-2 rounded-full">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400 w-8' 
                : 'bg-white/40 hover:bg-white/70 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
        {/* Badge with unique design */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg border border-cyan-300/30 rounded-full px-5 py-2.5 shadow-2xl">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Premium Quality Printing
            </span>
          </div>
        </div>

        {/* Main Heading with Gradient Text */}
        <div className="text-center md:text-left mb-8 md:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
              Transform Ideas
            </span>
            <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-2xl">
              Into Print
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-100/90 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            Professional printing solutions that bring your vision to life with{' '}
            <span className="text-pink-300 font-bold">exceptional quality</span> and{' '}
            <span className="text-purple-300 font-bold">lightning-fast delivery</span>
          </p>
        </div>

        {/* CTA Buttons - Unique Design */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12 md:mb-20">
          <button 
            onClick={() => scrollToSection('services')}
            className="group relative w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center justify-center space-x-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative">Explore Services</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg border-2 border-white/30 hover:border-white/50 shadow-2xl hover:shadow-purple-500/30 transition-all hover:scale-105"
          >
            Get Quote
          </button>
        </div>

        
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
