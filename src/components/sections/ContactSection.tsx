import SpotlightCard from '../ui/SpotlightCard';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hablemos</h2>
          <p className="text-slate-400">Cuéntanos qué quieres construir y te respondemos.</p>
        </div>

        <SpotlightCard className="rounded-3xl p-8 md:p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="space-y-2">
              <span className="text-sm text-slate-300">Nombre</span>
              <input
                className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                placeholder="Tu nombre"
                name="name"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-slate-300">Email</span>
              <input
                className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                placeholder="tu@email.com"
                name="email"
                type="email"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm text-slate-300">Mensaje</span>
              <textarea
                className="w-full min-h-[140px] rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                placeholder="Qué estás buscando (alcance, fechas, presupuesto, etc.)"
                name="message"
              />
            </label>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-yellow-400 transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
}
