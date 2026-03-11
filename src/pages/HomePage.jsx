import { motion } from 'framer-motion';
import { ArrowRight, Heart, Zap, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Zap,
    title: 'Real-time Prediction',
    desc: 'Get instant cardiovascular risk assessment powered by machine learning'
  },
  {
    icon: Shield,
    title: 'High Accuracy',
    desc: '72% accuracy trained on 70,000+ real patient health records'
  },
  {
    icon: Activity,
    title: 'Dynamic Confidence',
    desc: 'See probability percentage based on your unique health parameters'
  }
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Hero Section */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(8,145,178,0.2), rgba(14,116,144,0.1))',
            border: '1px solid rgba(34,211,238,0.2)',
            boxShadow: '0 0 40px rgba(34,211,238,0.15)',
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart size={48} className="text-cyan-400" fill="rgba(34,211,238,0.3)" />
        </motion.div>

        {/* Title */}
        <h1 className="font-syne text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="shimmer-text">Cardio</span>
        </h1>
        
        <p className="font-dm-sans text-lg md:text-xl text-slate-400 font-light mb-4 leading-relaxed max-w-2xl mx-auto">
          Advanced machine learning for cardiovascular disease risk prediction
        </p>

        <p className="font-dm-mono text-xs text-slate-600 uppercase tracking-widest mb-12">
          University ML Portfolio Project • Semester 6 • 2025
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/predict">
            <motion.button
              className="btn-primary px-8 py-4 rounded-2xl font-syne text-sm font-bold tracking-wide text-white flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Prediction
              <ArrowRight size={16} strokeWidth={2} />
            </motion.button>
          </Link>

          <Link to="/about">
            <motion.button
              className="px-8 py-4 rounded-2xl font-syne text-sm font-semibold tracking-wide flex items-center gap-3"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8',
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.2)',
                color: '#e2f0ff',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={i}
              className="glass-panel rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
                style={{
                  background: 'rgba(34,211,238,0.1)',
                  border: '1px solid rgba(34,211,238,0.2)',
                }}
              >
                <Icon size={24} className="text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-syne text-lg font-bold text-slate-200 mb-2">
                {feature.title}
              </h3>
              <p className="font-dm-sans text-sm text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 mt-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[
          { label: 'Training Records', value: '70K+' },
          { label: 'Model Accuracy', value: '~72%' },
          { label: 'Parameters', value: '8' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-syne text-3xl font-bold text-cyan-400 mb-1">
              {stat.value}
            </div>
            <div className="font-dm-mono text-[10px] text-slate-600 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}