import { useState, useEffect, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickInfo from './components/QuickInfo'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Pricing from './components/Pricing'
import WorkProcess from './components/WorkProcess'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading && <Loader key="loader" />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Hero />
        <QuickInfo />
        <About />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <WorkProcess />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </motion.div>
    </AnimatePresence>
  )
}

export default App