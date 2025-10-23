
import { GraduationCap, Award, Trophy, Target } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: "Bachelor of Technology - Mechatronics",
      institution: "Manipal Institute of Technology (MIT)",
      location: "Udupi, India",
      period: "2021 - 2025",
      courses: [
        "Embedded Systems", "Automated Manufacturing", "Data Structures & Algorithms",
        "Robotics & Control", "AI/ML", "Computer Vision", "Soft Robotics"
      ]
    }
  ];

  const certifications = [
    {
      title: "DeepLearning.AI TensorFlow Developer",
      issuer: "Coursera - DeepLearning.AI",
      icon: "🎓"
    },
    {
      title: "Ethics in Engineering",
      issuer: "Coursera - University of Michigan",
      icon: "⚖️"
    },
    {
      title: "Collaborative Robot Safety: Design & Deployment",
      issuer: "Coursera - University at Buffalo",
      icon: "🤖"
    }
  ];

  const interests = [
    { name: "Robotics", icon: "🤖", description: "Autonomous systems and robot control" },
    { name: "Embedded Systems", icon: "💻", description: "IoT and microcontroller programming" },
    { name: "AI/ML", icon: "🧠", description: "Machine learning and computer vision" },
    { name: "3D Printing", icon: "🖨️", description: "Rapid prototyping and manufacturing" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about building intelligent systems that bridge the gap between hardware and software
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-full aspect-square bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-9xl">
                🚀
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a dedicated mechatronics engineer with a passion for integrating mechanical systems, electronics, and programming to solve real-world problems. Currently working at <span className="text-cyan-400">Nosh Robotics</span> in Bengaluru, I focus on developing embedded systems for advanced robotic applications.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My academic journey at MIT has been enriched with hands-on projects involving robotics, automation, and control systems. I've had the privilege of working on <span className="text-cyan-400">Autonomous Underwater Vehicles</span>, where our team secured 4th place at UWR 2024 in Abu Dhabi.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I thrive in collaborative environments and am always eager to apply innovative technologies like <span className="text-cyan-400">ROS2</span>, <span className="text-purple-400">TensorFlow</span>, and <span className="text-green-400">IoT</span> to create efficient and reliable solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
              <p className="text-xl text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-400 mb-4">{edu.location} • {edu.period}</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-gray-400 mb-3">Key Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-400" />
            Notable Achievement
          </h2>
          <div className="p-8 border-2 border-yellow-400/30 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🏆</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">4th Place - UWR 2024</h3>
                <p className="text-lg text-gray-300 mb-3">Underwater Robotics Competition, Abu Dhabi</p>
                <p className="text-gray-400 leading-relaxed">
                  Secured 4th place in the prestigious Underwater Robotics Competition, showcasing expertise in autonomous navigation, manufacturing, control systems, and teamwork. Led the development of advanced algorithms for underwater vehicle control and sensor integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-cyan-400" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 border border-white/10 rounded-xl hover:border-cyan-400/50 transition-all">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-cyan-400" />
            Areas of Interest
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, idx) => (
              <div key={idx} className="p-6 border border-white/10 rounded-xl text-center hover:border-cyan-400/50 transition-all">
                <div className="text-5xl mb-3">{interest.icon}</div>
                <h3 className="font-bold mb-2">{interest.name}</h3>
                <p className="text-sm text-gray-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}