import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="floating-whatsapp"
    >
      <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
        <FaWhatsapp className="w-7 h-7 text-white" />
      </div>
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-green-600 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap opacity-0"
      >
        Chat with us
      </motion.span>
    </motion.a>
  )
}

export default WhatsAppButton