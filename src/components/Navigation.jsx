import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Home, Activity, Info } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/predict', label: 'Predict', icon: Activity },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full px-2 py-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,211,238,0.1)',
      }}
    >
      <div className="flex items-center gap-1">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 px-3 py-2">
          <Heart size={18} className="text-cyan-400" fill="rgba(34,211,238,0.3)" />
          <span className="font-syne font-bold text-cyan-400 text-sm hidden sm:block">
            Cardio
          </span>
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-cyan-500/20" />

        {/* Nav Items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                className={`relative px-4 py-2 rounded-full font-dm-sans text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Icon size={16} strokeWidth={2} />
                  <span className="hidden sm:block">{item.label}</span>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(34,211,238,0.1)',
                      border: '1px solid rgba(34,211,238,0.2)',
                    }}
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}