import { motion } from 'framer-motion'

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="loader"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full border-4 border-primary-500/20 border-t-primary-500 mx-auto mb-4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="text-xl font-bold gradient-text">KG Washing</span>
          <p className="text-gray-500 text-sm mt-1">Loading...</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader