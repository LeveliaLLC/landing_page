import { Globe, Layout, Terminal } from 'lucide-react';

import SpotlightCard from './ui/SpotlightCard.jsx';

export default function ServicesSection() {
	const services = [
		{
			icon: <Layout />,
			title: 'Ingeniería de Interfaces',
			desc: 'Experiencias web reactivas, animaciones fluidas y UX obsesivo. React, Next.js y Motion.',
		},
		{
			icon: <Terminal />,
			title: 'Arquitectura Backend',
			desc: 'APIs robustas de alta concurrencia, seguras y escalables. Python, FastAPI y Node.js.',
		},
		{
			icon: <Globe />,
			title: 'Infraestructura Cloud',
			desc: 'Despliegue escalable en la nube (AWS/Azure) e integración con tecnologías modernas.',
		},
	];

	return (
		<section id="servicios" className="py-32 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Arsenal</h2>
					<p className="text-slate-400">Herramientas de élite para desafíos complejos.</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{services.map((service, idx) => (
						<SpotlightCard key={idx} className="rounded-2xl p-8 h-full hover:border-yellow-600/30 transition-colors">
							<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 border border-slate-700 shadow-inner">
								<div className="text-yellow-500 drop-shadow-[0_0_5px_rgba(202,138,4,0.3)]">{service.icon}</div>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-slate-100">{service.title}</h3>
							<p className="text-slate-400 leading-relaxed">{service.desc}</p>
						</SpotlightCard>
					))}
				</div>
			</div>
		</section>
	);
}
