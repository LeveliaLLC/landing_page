import { motion as Motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">Proyectos Destacados</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-yellow-500 font-bold hover:text-white transition-colors group">
            Ver galería completa <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="space-y-24">
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="w-full md:w-3/5 aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden relative group border border-slate-800 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xl group-hover:scale-105 transition-transform duration-700">
                [Imagen_Plataforma_SaaS]
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ver Caso de Estudio
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-yellow-600 font-mono text-sm tracking-wider">01 — FINTECH</span>
              </div>
              <h3 className="text-4xl font-bold text-white">Plataforma Financiera ERP</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Sistema integral de gestión empresarial con facturación en tiempo real, control de inventarios multi-bodega y analítica predictiva de ventas.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Python', 'Dashboard', 'Big Data'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse gap-12 items-center"
          >
            <div className="w-full md:w-3/5 aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden relative group border border-slate-800 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xl group-hover:scale-105 transition-transform duration-700">
                [Imagen_App_Comercio]
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ver Caso de Estudio
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-blue-500 font-mono text-sm tracking-wider">02 — E-COMMERCE</span>
              </div>
              <h3 className="text-4xl font-bold text-white">Ecosistema de Mercado Global</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Marketplace escalable diseñado para alto tráfico. Integración de pasarelas de pago internacionales y experiencia de usuario fluida en móviles.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Node.js', 'AWS', 'Stripe'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
