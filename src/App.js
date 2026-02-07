import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Facebook, Twitter, Instagram, Linkedin, 
  ArrowRight, Sparkles, Zap, Flame, Wind, Droplets, Award, 
  Star, Scroll, Trophy, Target, Calendar, Pencil, Share2, 
  UserPlus, ShoppingCart, Calculator, LayoutDashboard, Badge as BadgeIcon,
  TrendingUp, Heart, MessageCircle
} from 'lucide-react';

// Import existing components
import GuildSystem from './GuildSystem';
import DailyChallenge from './DailyChallenge';
import PlayerProfile from './PlayerProfile';
import FinancialQuiz from './FinancialQuiz';
import AIChat from './AIChat';
import LiveFileSharing from './LiveFileSharing';
import AIScribble from './AIScribble';
import LoginSignupPage from './LoginSignupPage';
import LeaderboardRow from './LeaderboardRow';
import FinancialLiteracyLearning from './FinancialLiteracyLearning.js';
import StyledButton from './StyledButton';
import AIMarketplace from './AIMarketplace';

// Import new components
import { GlassCard, AnimatedButton, SectionTitle, StatCard } from './components/ui';
import { GradientOrbs, ParticleBackground, FloatingOrbs } from './components/ui/ParticleBackground';
import { ToastProvider, useToast } from './components/features/ToastContainer';
import FinancialCalculator from './components/features/FinancialCalculator';
import BadgeSystem from './components/features/BadgeSystem';
import Dashboard from './components/features/Dashboard';
import { useTypewriter, useConfetti } from './hooks/useAnimations';

// Navigation items
const navItems = [
  { name: 'Home', icon: Sparkles },
  { name: 'About', icon: Scroll },
  { name: 'Features', icon: Zap },
  { name: 'Learning', icon: Calendar },
  { name: 'Community', icon: UserPlus },
  { name: 'Contact', icon: Pencil },
];

const featureCards = [
  { 
    name: 'AI-Powered Learning', 
    icon: Zap, 
    description: 'Personalized financial education with AI assistance',
    color: 'purple'
  },
  { 
    name: 'Government Schemes', 
    icon: Target, 
    description: 'Access to relevant financial schemes and programs',
    color: 'blue'
  },
  { 
    name: 'Community Support', 
    icon: UserPlus, 
    description: 'Connect with peers and mentors for guidance',
    color: 'green'
  },
  { 
    name: 'Financial Growth', 
    icon: Flame, 
    description: 'Track your progress and grow your wealth',
    color: 'orange'
  },
  { 
    name: 'Skill Enhancement', 
    icon: Award, 
    description: 'Develop crucial financial management skills',
    color: 'pink'
  },
  { 
    name: 'Interactive Tools', 
    icon: Sparkles, 
    description: 'Engage with simulations and real-world scenarios',
    color: 'yellow'
  },
];

const TypewriterEffect = ({ words }) => {
  const { text } = useTypewriter(words, 100, 2000);
  
  return (
    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white h-16">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
};

const Navbar = ({ isSidebarOpen, toggleSidebar, isLoggedIn, onLogin, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSidebar}
              className="mr-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Menu size={24} />
            </motion.button>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500"
            >
              Dhan Gyan
            </motion.h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <AnimatedButton variant="outline" onClick={onLogout} size="sm">
                Logout
              </AnimatedButton>
            ) : (
              <>
                <AnimatedButton variant="ghost" onClick={onLogin} size="sm">
                  Login
                </AnimatedButton>
                <AnimatedButton variant="primary" onClick={onLogin} size="sm">
                  Sign Up
                </AnimatedButton>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const Sidebar = ({ isOpen, onClose, onNavClick, activeSection }) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 h-full w-72 z-50"
      style={{
        background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.95), rgba(147, 51, 234, 0.95))',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Menu</h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </motion.button>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onNavClick(item.name.toLowerCase())}
              className={`flex items-center px-4 py-3 rounded-xl transition-all ${
                activeSection === item.name.toLowerCase()
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-sm text-white/70">Need help?</p>
            <button className="mt-2 flex items-center text-sm font-medium text-yellow-300 hover:text-yellow-200">
              Contact Support <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = ({ onStart }) => {
  const typewriterWords = [
    "Complete financial solution",
    "Personalized AI-powered courses",
    "Smart expense tracker",
    "Business platform",
    "Learn, develop, grow",
    "Live Teaching",
    "Be visible be Global",
    "Learn something new",
    "Get the best job",
    "Financial Literacy",
    "Financial Freedom",
    "Financial Growth",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-white/10 rounded-full border border-white/20">
            🚀 Empowering Financial Freedom
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
            Dhan Gyan
          </span>
        </motion.h1>
        
        <div className="mb-8">
          <TypewriterEffect words={typewriterWords} />
        </div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Empowering women and youth with financial literacy through gamified learning, 
          AI-powered assistance, and a supportive community.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <AnimatedButton variant="primary" size="lg" onClick={onStart}>
            Start Your Journey <ArrowRight size={20} />
          </AnimatedButton>
          <AnimatedButton variant="outline" size="lg">
            Learn More
          </AnimatedButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
          {[
            { value: '50K+', label: 'Active Learners' },
            { value: '100+', label: 'Courses' },
            { value: '95%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const AboutSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="About Dhan Gyan" 
          subtitle="Revolutionizing financial education for everyone"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <GlassCard>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Dhan Gyan is a revolutionary platform designed to empower individuals with financial 
              knowledge and skills. Our mission is to bridge the gap in financial literacy, 
              especially for women and youth, by providing accessible, engaging, and 
              personalized learning experiences.
            </p>
          </GlassCard>
          
          <GlassCard>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              Through innovative AI-powered courses, interactive challenges, and a supportive 
              community, we aim to equip our users with the tools they need to make informed 
              financial decisions and achieve financial independence.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Powerful Features" 
          subtitle="Everything you need to master your finances"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full" hoverScale={1.02}>
                <div className={`p-3 rounded-lg w-fit mb-4 bg-${feature.color}-500/20`}>
                  <feature.icon size={28} className={`text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showBadges, setShowBadges] = useState(false);
  const [showAIMarketplace, setShowAIMarketplace] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [showFinancialLearning, setShowFinancialLearning] = useState(false);
  const [showFinancialQuiz, setShowFinancialQuiz] = useState(false);
  const [showAIScribble, setShowAIScribble] = useState(false);
  const [isFileSharingOpen, setIsFileSharingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { addToast } = useToast();
  const { triggerConfetti } = useConfetti();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginSignup(false);
    addToast('Welcome back! 🎉', 'success');
    triggerConfetti();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    addToast('Logged out successfully', 'info');
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background Effects */}
      <GradientOrbs />
      <ParticleBackground particleCount={30} />
      
      {/* Navigation */}
      <Navbar 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isLoggedIn={isLoggedIn}
        onLogin={() => setShowLoginSignup(true)}
        onLogout={handleLogout}
      />

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavClick={handleNavClick}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection onStart={() => setShowLoginSignup(true)} />
        <AboutSection />
        <FeaturesSection />
        
        {/* Quick Actions */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="Quick Actions" subtitle="Access your favorite tools" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Dashboard', icon: LayoutDashboard, action: () => setShowDashboard(true), color: 'purple' },
                { name: 'Calculator', icon: Calculator, action: () => setShowCalculator(true), color: 'blue' },
                { name: 'Badges', icon: BadgeIcon, action: () => setShowBadges(true), color: 'yellow' },
                { name: 'Marketplace', icon: ShoppingCart, action: () => setShowAIMarketplace(true), color: 'green' },
                { name: 'Learning', icon: Sparkles, action: () => setShowFinancialLearning(true), color: 'pink' },
                { name: 'Quiz', icon: Target, action: () => setShowFinancialQuiz(true), color: 'orange' },
                { name: 'Scribble', icon: Pencil, action: () => setShowAIScribble(true), color: 'red' },
                { name: 'Files', icon: Share2, action: () => setIsFileSharingOpen(true), color: 'cyan' },
              ].map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={item.action}
                  className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <item.icon size={32} className={`mx-auto mb-3 text-${item.color}-400`} />
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Dhan Gyan
                </h3>
                <p className="text-gray-400 text-sm">
                  Empowering financial literacy for a brighter future.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#learning" className="hover:text-white transition-colors">Learning</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Connect</h4>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/10">
              © 2024 Dhan Gyan. All rights reserved.
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowDashboard(true)}
          className="p-3 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          title="Dashboard"
        >
          <LayoutDashboard size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowAIMarketplace(true)}
          className="p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          title="AI Marketplace"
        >
          <ShoppingCart size={24} />
        </motion.button>
      </div>

      {/* AI Chat */}
      <AIChat />

      {/* Modals */}
      <AnimatePresence>
        {showLoginSignup && (
          <LoginSignupPage 
            onLogin={handleLogin} 
            onClose={() => setShowLoginSignup(false)} 
          />
        )}
        
        {showDashboard && (
          <Dashboard 
            onClose={() => setShowDashboard(false)}
            onOpenCalculator={() => {
              setShowDashboard(false);
              setShowCalculator(true);
            }}
            onOpenBadges={() => {
              setShowDashboard(false);
              setShowBadges(true);
            }}
          />
        )}
        
        {showCalculator && (
          <FinancialCalculator onClose={() => setShowCalculator(false)} />
        )}
        
        {showBadges && (
          <BadgeSystem onClose={() => setShowBadges(false)} />
        )}
        
        {showAIMarketplace && (
          <div className="fixed inset-0 z-50 bg-black/80 overflow-y-auto">
            <button 
              onClick={() => setShowAIMarketplace(false)}
              className="fixed top-4 right-4 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20"
            >
              <X size={24} />
            </button>
            <AIMarketplace />
          </div>
        )}
        
        {showFinancialLearning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 overflow-y-auto"
          >
            <button 
              onClick={() => setShowFinancialLearning(false)}
              className="fixed top-4 right-4 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20"
            >
              <X size={24} />
            </button>
            <div className="max-w-6xl mx-auto pt-16 p-4">
              <FinancialLiteracyLearning />
            </div>
          </motion.div>
        )}
        
        {showFinancialQuiz && (
          <FinancialQuiz 
            show={showFinancialQuiz} 
            onClose={() => setShowFinancialQuiz(false)}
            onScoreUpdate={(score) => {
              addToast(`Quiz completed! Score: ${score}`, 'success');
              triggerConfetti();
            }}
          />
        )}
        
        {showAIScribble && (
          <AIScribble 
            onClose={() => setShowAIScribble(false)} 
            onScoreUpdate={(score) => {
              addToast(`Scribble score: ${score}`, 'success');
            }}
          />
        )}
        
        {isFileSharingOpen && (
          <LiveFileSharing 
            isOpen={isFileSharingOpen} 
            onClose={() => setIsFileSharingOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Main App with Toast Provider
const App = () => {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
};

export default App;
