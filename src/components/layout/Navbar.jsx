import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Filosofía', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-2xl tracking-tighter flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-300 via-yellow-600 to-yellow-800 group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_15px_rgba(202,138,4,0.3)]">
              <span className="text-slate-950 font-black font-mono relative z-10">L</span>
              <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-extrabold tracking-tight">
              LEVELIA
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Hablemos
            </motion.a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2" aria-label="Abrir menú">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-medium text-slate-300 hover:text-yellow-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
