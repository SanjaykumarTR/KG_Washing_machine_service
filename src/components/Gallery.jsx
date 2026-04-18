import { motion } from 'framer-motion'
import { FiZoomIn } from 'react-icons/fi'

const images = [
  'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1626806819282-2c1dc01b5d25?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1595939968004-8212d775859e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1563302118-d2a018632b19?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
]

function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Glimpse of our work and services
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="flex items-center space-x-2 text-white">
                  <FiZoomIn className="w-5 h-5" />
                  <span className="text-sm">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery