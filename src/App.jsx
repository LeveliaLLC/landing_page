import { useState, useEffect } from 'react';
import { useScroll, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code2, Rocket, Layout, ArrowRight, Menu, X, Github, Linkedin, Mail, Cpu, Globe, Terminal, ChevronDown, Target, Eye } from 'lucide-react';

// --- UTILIDADES UI ---

// 1. Efecto de Ruido (Mantiene la textura premium)
const NoiseOverlay = () => (
  <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04]" 
    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
  />
);

// 2. Tarjeta con efecto Spotlight (Ajustado a un dorado pálido, menos amarillo intenso)
function SpotlightCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative border border-slate-800 bg-slate-900/50 overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(250, 204, 21, 0.1), 
              transparent 80%
            )
          `,
          // Usamos yellow-400 muy transparente para el brillo, es más "luz" que "color".
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

// 3. Cinta Infinita de Tecnologías
const TechMarquee = () => {
  const techs = ["React", "Python", "FastAPI", "Flutter", "Node.js", "AWS", "Docker", "Next.js", "TypeScript", "PostgreSQL", "Tailwind"];
  return (
    <div className="relative flex overflow-x-hidden bg-slate-950/50 border-y border-slate-800 py-4 mb-20">
      <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span key={i} className="text-slate-500 font-mono text-lg font-semibold uppercase tracking-widest flex items-center gap-2">
            {/* Icono bronce desaturado */}
            <Cpu className="w-4 h-4 text-yellow-700" /> {tech}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />
    </div>
  );
};

// --- ANIMACIONES ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-yellow-500/30 selection:text-yellow-200 font-sans overflow-x-hidden">
      <NoiseOverlay />
      
      {/* Barra de progreso: Dorado a Azul */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-blue-600 origin-left z-[60]" style={{ scaleX }} />

      {/* --- FONDO AMBIENTAL --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]" />
        {/* Usamos yellow-900 muy diluido para el fondo, da una atmósfera "oro viejo" sin ser naranja */}
        <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* --- BARRA DE NAVEGACIÓN --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="font-bold text-2xl tracking-tighter flex items-center gap-2 cursor-pointer group"
            >
              {/* LOGO: Degradado de Luz (yellow-300) a Bronce Oscuro (yellow-800) */}
              <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-300 via-yellow-600 to-yellow-800 group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_15px_rgba(202,138,4,0.3)]">
                 <span className="text-slate-950 font-black font-mono relative z-10">L</span>
                 <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-extrabold tracking-tight">LEVELIA</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
                  {item.name}
                  {/* Subrayado en oro medio */}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Hablemos
              </motion.button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-xl font-medium text-slate-300 hover:text-yellow-400">
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* --- SECCIÓN HERO --- */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto z-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 hover:bg-blue-500/20 transition-colors cursor-default">
              Agencia de Desarrollo de Software
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
          >
            Nosotros Construimos <br />
            <span className="relative inline-block">
              {/* --- EL GRAN CAMBIO DE COLOR --- */}
              {/* Luz: yellow-100 (Casi blanco) | Cuerpo: yellow-500 (Oro) | Sombra: yellow-800 (Bronce Tierra) */}
              {/* Al usar yellow-800 en lugar de amber-700, eliminamos el tono naranja/rojizo */}
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-500 to-yellow-800 drop-shadow-sm">
                Imperios Digitales
              </span>
              {/* Brillo trasero desaturado */}
              <span className="absolute -inset-1 blur-2xl bg-yellow-600/20 z-0" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Ingeniería de precisión fusionada con diseño de vanguardia. <br className="hidden md:block"/>
            Creamos el software que tu competencia desearía tener.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2"
            >
              Iniciar Proyecto <Rocket className="w-5 h-5 text-blue-600" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }} whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-xl font-bold text-lg hover:border-white/50 transition-all"
            >
              Explorar Portafolio
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <ChevronDown className="w-6 h-6 opacity-50" />
        </motion.div>
      </section>

      <TechMarquee />

      {/* --- NOSOTROS --- */}
      <section id="nosotros" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-6 gap-4"
          >
            {/* Encabezado Principal */}
            <motion.div variants={fadeInUp} className="md:col-span-4 bg-slate-900/50 border border-slate-800 rounded-3xl p-10 relative overflow-hidden group hover:border-yellow-600/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/10 rounded-full blur-[80px] group-hover:bg-yellow-600/20 transition-all" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Más allá del código.</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                En LEVELIA, no solo escribimos software; diseñamos activos digitales. Creemos que la tecnología debe ser una extensión elegante y poderosa de tu modelo de negocio.
              </p>
            </motion.div>

            {/* Estadística */}
            <SpotlightCard className="md:col-span-2 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
               <div className="text-5xl font-black text-white mb-2">100%</div>
               <div className="text-slate-400 font-medium">Calidad Técnica</div>
            </SpotlightCard>

            {/* --- MISIÓN --- */}
            <SpotlightCard className="md:col-span-3 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-900/50">
              {/* Icono: Usamos yellow-600 para que sea un oro más "viejo" */}
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

            {/* --- VISIÓN --- */}
            <SpotlightCard className="md:col-span-3 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between bg-gradient-to-br from-blue-900/10 to-slate-900/50">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Nuestra Visión</h3>
                <p className="text-slate-400 leading-relaxed">
                  Ser el referente latinoamericano en desarrollo de software de alto rendimiento, estableciendo el <span className="text-yellow-500 font-semibold">Estándar de Oro</span> en calidad.
                </p>
              </div>
            </SpotlightCard>

          </motion.div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Arsenal</h2>
            <p className="text-slate-400">Herramientas de élite para desafíos complejos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Layout />, title: "Ingeniería de Interfaces", desc: "Experiencias web reactivas, animaciones fluidas y UX obsesivo. React, Next.js y Motion." },
              { icon: <Terminal />, title: "Arquitectura Backend", desc: "APIs robustas de alta concurrencia, seguras y escalables. Python, FastAPI y Node.js." },
              { icon: <Globe />, title: "Infraestructura Cloud", desc: "Despliegue escalable en la nube (AWS/Azure) e integración con tecnologías modernas." }
            ].map((service, idx) => (
              <SpotlightCard key={idx} className="rounded-2xl p-8 h-full hover:border-yellow-600/30 transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 border border-slate-700 shadow-inner">
                  {/* Icono Oro sutil */}
                  <div className="text-yellow-500 drop-shadow-[0_0_5px_rgba(202,138,4,0.3)]">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-100">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTAFOLIO --- */}
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
            {/* Proyecto 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="w-full md:w-3/5 aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden relative group border border-slate-800 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xl group-hover:scale-105 transition-transform duration-700">
                   [Imagen_Plataforma_SaaS]
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Ver Caso de Estudio</button>
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
                  {["React", "Python", "Dashboard", "Big Data"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Proyecto 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row-reverse gap-12 items-center"
            >
              <div className="w-full md:w-3/5 aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden relative group border border-slate-800 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xl group-hover:scale-105 transition-transform duration-700">
                   [Imagen_App_Comercio]
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Ver Caso de Estudio</button>
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
                  {["Next.js", "Node.js", "AWS", "Stripe"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PIE DE PÁGINA --- */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-slate-900 font-bold">L</div>
             <span className="font-bold text-xl text-white tracking-tighter">LEVELIA</span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Levelia Software. Excellence in Code.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;