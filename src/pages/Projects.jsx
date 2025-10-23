
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Training Kit for Psychomotor Skill Development",
      category: "iot",
      period: "Jan 2025 – Aug 2025",
      description: "Developed a pedal-based resistive training system to help children with ASD improve motor coordination. Integrated ESP32 and Raspberry Pi 4 for IoT-enabled remote monitoring and therapist control.",
      tech: ["ESP32", "Raspberry Pi 4", "IoT", "Embedded Systems", "CVT Gearbox"],
      gradient: "from-blue-500 to-cyan-500",
      highlights: ["Remote monitoring", "Therapist control", "Variable resistance"]
    },
    {
      id: 2,
      title: "ROS2-Based 3-Wheeled Robot with LiDAR Mapping",
      category: "robotics",
      period: "2024",
      description: "Designed and built a 3-wheeled robot equipped with LiDAR sensors for precise mapping, leveraging ROS2 for robust robot control and environment mapping.",
      tech: ["ROS2", "LiDAR", "Python", "Robotics", "SLAM"],
      gradient: "from-purple-500 to-pink-500",
      highlights: ["Autonomous navigation", "Real-time mapping", "ROS2 framework"]
    },
    {
      id: 3,
      title: "NLP-Based Chatbot Development",
      category: "ai-ml",
      period: "2024",
      description: "Created a sophisticated chatbot leveraging natural language processing techniques to interact with users, providing automated and intelligent responses.",
      tech: ["Python", "NLP", "TensorFlow", "Machine Learning"],
      gradient: "from-green-500 to-emerald-500",
      highlights: ["Natural language processing", "Automated responses", "Context-aware"]
    },
    {
      id: 4,
      title: "Climate Pattern Analysis Using Machine Learning",
      category: "ai-ml",
      period: "2024",
      description: "Utilized K-Means algorithm to cluster climate data based on temperature, precipitation, and wind speed, effectively identifying patterns.",
      tech: ["Python", "K-Means", "Data Analysis", "Scikit-learn"],
      gradient: "from-orange-500 to-red-500",
      highlights: ["K-Means clustering", "Pattern recognition", "Data visualization"]
    },
    {
      id: 5,
      title: "3D-Printed Omni-Purpose Soft Finger Gripper",
      category: "robotics",
      period: "2023",
      description: "Designed soft gripper with enhanced friction for smooth surfaces using FDM 3D printing with low-cost materials.",
      tech: ["CAD", "3D Printing", "Soft Robotics", "FDM", "Fusion 360"],
      gradient: "from-pink-500 to-rose-500",
      highlights: ["Low-cost fabrication", "Soft robotics", "Enhanced grip"]
    },
    {
      id: 6,
      title: "OpenCV and Path Prediction Development",
      category: "ai-ml",
      period: "2023",
      description: "Developed computer vision techniques and path prediction algorithms with OpenCV to analyze visual data and forecast movement trajectories.",
      tech: ["Python", "OpenCV", "Computer Vision", "Path Prediction"],
      gradient: "from-cyan-500 to-blue-500",
      highlights: ["Computer vision", "Trajectory prediction", "Real-time analysis"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'iot', label: 'IoT' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my work in robotics, embedded systems, and AI/ML
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-lg transition-all ${
                filter === cat.id
                  ? 'bg-cyan-500 text-white'
                  : 'border border-white/20 text-gray-300 hover:border-cyan-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group p-6 border border-white/10 rounded-xl hover:border-white/30 transition-all bg-black/50"
            >
              <div className={`w-full h-40 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <span className="text-6xl">💡</span>
              </div>

              <p className="text-xs text-gray-500 mb-2">{project.period}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 mb-2">Key Features:</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>• {highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs px-2 py-1 text-gray-500">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
