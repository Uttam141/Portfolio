
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
          Uttam Varma Penumetsa
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          Mechatronics Engineer
        </p>
        <p className="text-lg text-gray-500 mb-12">
          Specializing in Robotics, Embedded Systems, and AI/ML
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/Uttam141" target="_blank" rel="noopener noreferrer"
             className="p-3 border border-white/20 rounded-lg hover:border-cyan-400">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/uttam-penumetsa/" target="_blank" rel="noopener noreferrer"
             className="p-3 border border-white/20 rounded-lg hover:border-blue-400">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:uvp0227@gmail.com"
             className="p-3 border border-white/20 rounded-lg hover:border-green-400">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}