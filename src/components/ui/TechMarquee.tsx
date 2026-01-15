import { Cpu } from 'lucide-react';

export default function TechMarquee() {
  const techs = [
    'React',
    'Python',
    'FastAPI',
    'Flutter',
    'Node.js',
    'AWS',
    'Docker',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Tailwind',
  ];

  return (
    <div className="relative flex overflow-x-hidden bg-slate-950/50 border-y border-slate-800 py-4 mb-20">
      <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className="text-slate-500 font-mono text-lg font-semibold uppercase tracking-widest flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-yellow-700" /> {tech}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />
    </div>
  );
}
