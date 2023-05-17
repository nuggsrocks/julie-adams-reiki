import React from 'react'
import { motion } from 'framer-motion'

const Animate = ({ className = '', children }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}

export default Animate
