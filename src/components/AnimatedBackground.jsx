import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #071b35 0%, #020408 60%)' }} />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 scan-line opacity-30" />

      <motion.div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(8,145,178,0.18) 0%, rgba(6,182,212,0.06) 50%, transparent 70%)', top: '-150px', left: '-100px' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(30,64,175,0.15) 0%, rgba(29,78,216,0.05) 50%, transparent 70%)', bottom: '-100px', right: '-80px' }}
        animate={{ x: [0, -30, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4) 40%, rgba(34,211,238,0.4) 60%, transparent)' }} />

      {[...Array(10)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: Math.random() * 3 + 1, height: Math.random() * 3 + 1, background: `rgba(34,211,238,${Math.random() * 0.4 + 0.1})`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -(Math.random() * 60 + 20), 0], opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
          transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, delay: Math.random() * 8, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}