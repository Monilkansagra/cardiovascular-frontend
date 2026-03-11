import { motion } from 'framer-motion';
import { Brain, Database, Code, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const techStack = [
  {
    category: 'Frontend',
    items: ['React 19', 'Tailwind CSS', 'Framer Motion', 'Axios', 'Vite']
  },
  {
    category: 'Backend',
    items: ['Flask', 'Python 3.x', 'Flask-CORS', 'NumPy']
  },
  {
    category: 'Machine Learning',
    items: ['Scikit-Learn', 'Logistic Regression', 'StandardScaler', 'Pandas']
  }
];

const modelDetails = [
  { label: 'Algorithm', value: 'Logistic Regression' },
  { label: 'Training Data', value: '68,681 records' },
  { label: 'Accuracy', value: '~72%' },
  { label: 'Features', value: '14 engineered' },
  { label: 'Input Parameters', value: '8 health metrics' },
  { label: 'Output', value: 'Risk + Confidence %' },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-syne text-4xl md:text-5xl font-bold mb-4">
            <span className="shimmer-text">About This Project</span>
          </h1>
          <p className="font-dm-sans text-slate-400 text-lg max-w-2xl mx-auto">
            A full-stack machine learning application for cardiovascular disease risk prediction
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div 
          className="glass-panel rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Brain size={24} className="text-cyan-400" />
            <h2 className="font-syne text-2xl font-bold text-slate-200">Project Overview</h2>
          </div>
          <p className="font-dm-sans text-slate-400 leading-relaxed mb-4">
            This application uses machine learning to predict cardiovascular disease risk based on patient health parameters. 
            The system analyzes 8 key biomarkers including age, gender, height, weight, blood pressure, smoking status, 
            and alcohol consumption to provide real-time risk assessment with confidence percentages.
          </p>
          <p className="font-dm-sans text-slate-400 leading-relaxed">
            Built as a university project for Machine Learning Lab (Semester 6), this application demonstrates 
            the practical implementation of supervised learning algorithms in healthcare technology.
          </p>
        </motion.div>

        {/* ML Model Details */}
        <motion.div 
          className="glass-panel rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Database size={24} className="text-cyan-400" />
            <h2 className="font-syne text-2xl font-bold text-slate-200">ML Model Details</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {modelDetails.map((item, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-xl"
                style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.1)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <div className="font-dm-mono text-[10px] text-cyan-400/60 uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="font-syne text-sm font-semibold text-slate-200">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          className="glass-panel rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Code size={24} className="text-cyan-400" />
            <h2 className="font-syne text-2xl font-bold text-slate-200">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <h3 className="font-syne text-lg font-semibold text-cyan-400 mb-3">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((tech, j) => (
                    <li key={j} className="font-dm-sans text-sm text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Info */}
        <motion.div 
          className="glass-panel rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-syne text-2xl font-bold text-slate-200 mb-4">Developer</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-syne text-xl font-semibold text-cyan-400 mb-1">
                Monil Kansagra
              </h3>
              <p className="font-dm-sans text-sm text-slate-400 mb-2">
                GTU • Machine Learning Lab • Semester 6 • 2025
              </p>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://github.com/Monilkansagra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
              >
                <Github size={20} className="text-slate-400 hover:text-cyan-400" />
              </a>
              <a 
                href="mailto:monil@example.com"
                className="p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
              >
                <Mail size={20} className="text-slate-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div 
          className="p-6 rounded-xl mb-8"
          style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-dm-mono text-xs text-red-300/80 leading-relaxed">
            ⚠️ <strong>Educational Project Notice:</strong> This application is developed for academic purposes only. 
            The predictions are generated by a machine learning model and should not be used as a substitute for 
            professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers 
            for medical decisions.
          </p>
        </motion.div>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/">
            <motion.button
              className="px-6 py-3 rounded-xl font-syne text-sm font-semibold"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8',
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.08)',
                color: '#e2f0ff',
              }}
            >
              ← Back to Home
            </motion.button>
          </Link>
        </div>

      </div>
    </div>
  );
}