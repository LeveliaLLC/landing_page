import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-slate-900 font-bold">
            L
          </div>
          <span className="font-bold text-xl text-white tracking-tighter">LEVELIA</span>
        </div>

        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Levelia Software. Excellence in Code.</p>

        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Github">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
