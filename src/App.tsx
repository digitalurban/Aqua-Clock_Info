import React from 'react';
import { motion } from 'motion/react';
import { Download, Clock, Fish, Volume2, Hand, ChevronRight, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#005c99] via-[#003366] to-[#011126] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Light rays from top */}
        <div className="absolute top-0 inset-x-0 h-[40%] bg-gradient-to-b from-cyan-300/15 to-transparent blur-3xl" />
        
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-teal-400/10 blur-[100px]" />
        
        {/* Animated bubbles */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => {
            const size = Math.random() * 10 + 4; // 4px to 14px
            return (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white/40 bg-white/20 backdrop-blur-sm"
                style={{ width: size, height: size }}
                initial={{ 
                  y: '110vh', 
                  x: `${Math.random() * 100}vw`,
                  opacity: Math.random() * 0.6 + 0.2
                }}
                animate={{ 
                  y: '-10vh',
                  x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`
                }}
                transition={{ 
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 20
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl shadow-lg shadow-orange-500/20 overflow-hidden shrink-0">
           <img src="/Aqua-Clock-/icon.png`} alt="AquaClock Icon" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-medium tracking-tight">AquaClock</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-100/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
        </div>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
          Get App
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-12 pb-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium tracking-wide uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Now available on iOS & iPadOS
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6 leading-[1.1]">
              Where the Fish <br className="hidden md:block" />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Tell the Time.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/60 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your device into a serene virtual aquarium. Watch as a living ecosystem of clownfish and tetras gracefully swim to tell you the time.
            </p>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full flex flex-col items-center mt-16 lg:mt-0 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[600px]"
          >
            {/* iPhone Mockup (Landscape) */}
            <div className="relative w-full aspect-[19.5/9] bg-black rounded-[35px] md:rounded-[45px] shadow-2xl shadow-cyan-900/40 border-[6px] md:border-[8px] border-[#1a1a24] overflow-hidden z-10">
              {/* Notch (Left side) */}
              <div className="absolute left-0 inset-y-0 w-5 md:w-6 bg-[#1a1a24] rounded-r-2xl md:rounded-r-3xl h-24 md:h-32 my-auto z-20" />
              
              {/* Screen Content */}
              <div className="w-full h-full bg-[#005c99] relative overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}iphonelandscape.png`} alt="AquaClock on iPhone Landscape" className="w-full h-full object-cover" />
              </div>
              
              {/* Inner Shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none z-30" />
            </div>
            
            {/* Floating Elements behind phone */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl"
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-600/20 to-teal-400/20 rounded-full blur-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 lg:mt-20 z-20"
          >
            <button className="flex items-center gap-3 bg-white text-[#020813] px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <Download className="w-5 h-5" />
              Download on App Store
            </button>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 bg-[#001a33]/60 border-y border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">A living ecosystem on your desk</h2>
            <p className="text-blue-100/50 max-w-2xl mx-auto">More than just a clock. AquaClock brings the calming presence of an aquarium to your daily routine.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Ambient Clock", desc: "Fish naturally school together to form the current time in a mesmerizing display." },
              { icon: Fish, title: "Living Ecosystem", desc: "Clownfish and tetras with realistic behaviors, swimming patterns, and interactions." },
              { icon: Volume2, title: "Soothing Sounds", desc: "High-fidelity underwater ambiance and gentle bubbling sounds for deep focus." },
              { icon: Hand, title: "Interactive Feeding", desc: "Tap the screen to drop food and watch your virtual pets react in real-time." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-blue-100/50 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* iPad / Landscape Showcase */}
      <section id="experience" className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1 w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-2xl mx-auto"
              >
                {/* iPad Mockup */}
                <div className="relative aspect-[4/3] bg-black rounded-[32px] shadow-2xl shadow-blue-900/20 border-[6px] border-[#1a1a24] overflow-hidden">
                  {/* Screen Content */}
                  <div className="w-full h-full bg-[#005c99] relative overflow-hidden">
                   <img src="/Aqua-Clock-/ipad-screenshot.png`} alt="AquaClock on iPad" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] -z-10" />
              </motion.div>
            </div>
            
            <div className="flex-1 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                  Perfect for your <br/>
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Nightstand or Desk</span>
                </h2>
                <p className="text-lg text-blue-100/60 font-light mb-8 leading-relaxed">
                  AquaClock shines on larger screens. Use it as a beautiful ambient display while working, or as a calming nightlight that helps you drift off to sleep with gentle aquatic sounds.
                </p>
                <ul className="space-y-5 mb-10">
                  {[
                    'Landscape & Portrait orientation support', 
                    'Dark mode integration for nighttime viewing', 
                    'Optimized for minimal battery consumption'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-blue-100/80">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  See all features <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#000a14] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg shadow-lg shadow-orange-500/20 overflow-hidden shrink-0">
                 <img src="/Aqua-Clock-/icon.png`} alt="AquaClock Icon" className="w-full h-full object-cover" />
                </div>
                <span className="text-lg font-medium tracking-tight">AquaClock</span>
              </div>
              <div className="flex flex-col gap-2 text-sm text-blue-100/60">
                <a href="mailto:andyhudsonsmith@googlemail.com" className="hover:text-white transition-colors inline-flex items-center gap-2">
                  Support: andyhudsonsmith@googlemail.com
                </a>
              </div>
            </div>
            
            <div id="privacy" className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <h4 className="text-white font-medium mb-3">Privacy First</h4>
              <p className="text-blue-100/60 text-sm leading-relaxed">
                AquaClock does not collect, store, or share any personal data. All settings (like your fish count and bubble preferences) are saved locally on your device. We do not track you.
              </p>
            </div>
          </div>
          
          <div className="text-center text-sm text-blue-100/30 flex flex-col items-center gap-2 pt-8 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} AquaClock App. All rights reserved.</p>
            <p className="text-xs opacity-50 max-w-2xl">Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
