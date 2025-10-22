
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Uttam Varma Penumetsa
            </h3>
            <p className="text-gray-400 text-sm">
              Mechatronics Engineer specializing in Robotics, Embedded Systems, and AI/ML.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-cyan-400 text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 text-sm">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-cyan-400 text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Uttam141" target="_blank" rel="noopener noreferrer"
                 className="p-3 border border-white/10 rounded-lg hover:border-cyan-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/uttam-penumetsa/" target="_blank" rel="noopener noreferrer"
                 className="p-3 border border-white/10 rounded-lg hover:border-cyan-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:uvp0227@gmail.com"
                 className="p-3 border border-white/10 rounded-lg hover:border-cyan-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Uttam Varma Penumetsa. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}