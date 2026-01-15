import { motion as Motion } from 'framer-motion';
import { ChevronDown, Rocket } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 text-center relative">
        <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 hover:bg-blue-500/20 transition-colors cursor-default">
            Agencia de Desarrollo de Software
          </span>
        </Motion.div>

        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
        >
          Nosotros Construimos <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-500 to-yellow-800 drop-shadow-sm">
              Imperios Digitales
            </span>
            <span className="absolute -inset-1 blur-2xl bg-yellow-600/20 z-0" />
          </span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Ingeniería de precisión fusionada con diseño de vanguardia. <br className="hidden md:block" />
          Creamos el software que tu competencia desearía tener.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Motion.a
            href="#contacto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2"
          >
            Iniciar Proyecto <Rocket className="w-5 h-5 text-blue-600" />
          </Motion.a>
          <Motion.a
            href="#portafolio"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-xl font-bold text-lg hover:border-white/50 transition-all"
          >
            Explorar Portafolio
          </Motion.a>
        </Motion.div>
      </div>

      <Motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown className="w-6 h-6 opacity-50" />
      </Motion.div>
    </section>
  );
}
