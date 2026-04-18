import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMessageCircle, FiTool, FiSettings, FiChevronDown } from 'react-icons/fi'

function AnimatedSphere({ position, color, speed }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.5
    meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.7) * 0.3
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[0.3, 32, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  )
}

function ThreeDBackground() {
  const spheres = useMemo(() => [
    { position: [-4, 2, -5], color: '#0073e6', speed: 0.5 },
    { position: [4, -1, -6], color: '#03a9f4', speed: 0.7 },
    { position: [-2, -2, -4], color: '#29b6f6', speed: 0.3 },
    { position: [3, 2, -5], color: '#0073e6', speed: 0.6 },
    { position: [-5, 0, -6], color: '#03a9f4', speed: 0.4 },
    { position: [0, 3, -7], color: '#29b6f6', speed: 0.8 },
  ], [])

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#03a9f4" />
        {spheres.map((sphere, i) => (
          <AnimatedSphere key={i} position={sphere.position} color={sphere.color} speed={sphere.speed} />
        ))}
      </Canvas>
    </div>
  )
}

const floatingIcons = [
  { icon: FiTool, position: '10% 20%', delay: 0 },
  { icon: FiSettings, position: '85% 30%', delay: 0.5 },
  { icon: FiTool, position: '15% 70%', delay: 1 },
  { icon: FiSettings, position: '80% 80%', delay: 1.5 },
]

function Hero() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeDBackground />
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-1 absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -top-20 -left-20" />
        <div className="blob blob-2 absolute w-80 h-80 bg-accent-500/20 rounded-full blur-3xl bottom-20 right-10" />
        <div className="blob blob-3 absolute w-64 h-64 bg-primary-400/10 rounded-full blur-3xl top-1/2 left-1/3" />
      </div>

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: item.delay
          }}
          className="absolute text-primary-400/30"
          style={{ left: item.position.split(' ')[0], top: item.position.split(' ')[1] }}
        >
          <item.icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-accent-400 text-sm font-medium mb-6"
            >
              5+ Years Experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Expert </span>
              <span className="gradient-text">Washing Machine </span>
              <span className="text-white">Repair Services</span>
              <br />
              <span className="text-white">in Your City</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Trusted by hundreds of customers with 5+ years of professional service experience. 
              Fast, reliable, and affordable repairs at your doorstep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              >
                <span>Book Service</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 glass glass-card px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <FiMessageCircle className="w-5 h-5 text-green-400" />
                <span>WhatsApp Support</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-3xl blur-2xl" />
                <div className="relative glass-card rounded-3xl p-8 h-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                    alt="Washing Machine Repair"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full"
              >
                <span className="text-accent-400 font-semibold text-sm">5+ Years</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full"
              >
                <span className="text-green-400 font-semibold text-sm">100% Trusted</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="text-gray-500 hover:text-white transition-colors duration-300"
        >
          <FiChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero