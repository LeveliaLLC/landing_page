import { motion as Motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

import SpotlightCard from './ui/SpotlightCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } },
} as const;

export default function AboutUsSection() {
  return (
    <section id="nosotros" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          <Motion.div
            variants={fadeInUp}
            className="md:col-span-4 bg-slate-900/50 border border-slate-800 rounded-3xl p-10 relative overflow-hidden group hover:border-yellow-600/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/10 rounded-full blur-[80px] group-hover:bg-yellow-600/20 transition-all" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Más allá del código.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              En LEVELIA, no solo escribimos software; diseñamos activos digitales. Creemos que la tecnología debe ser una extensión elegante y poderosa de tu modelo de negocio.
            </p>
          </Motion.div>

          <SpotlightCard className="md:col-span-2 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-black text-white mb-2">100%</div>
            <div className="text-slate-400 font-medium">Calidad Técnica</div>
          </SpotlightCard>

          <SpotlightCard className="md:col-span-3 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-900/50">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/10 to-yellow-900/10 border border-yellow-500/10 rounded-lg flex items-center justify-center mb-4 text-yellow-500">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Nuestra Misión</h3>
              <p className="text-slate-400 leading-relaxed">
                Transformar ideas complejas en soluciones digitales intuitivas y escalables, empoderando a las empresas para liderar sus mercados.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="md:col-span-3 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between bg-gradient-to-br from-blue-900/10 to-slate-900/50">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Nuestra Visión</h3>
              <p className="text-slate-400 leading-relaxed">
                Ser el referente latinoamericano en desarrollo de software de alto rendimiento, estableciendo el{' '}
                <span className="text-yellow-500 font-semibold">Estándar de Oro</span> en calidad.
              </p>
            </div>
          </SpotlightCard>
        </Motion.div>
      </div>
    </section>
  );
}
