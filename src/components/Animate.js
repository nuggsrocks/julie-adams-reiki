import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Animate = ({ className = '', children }) => {
  const ref = useRef()

  return (
    <motion.section
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: className.includes('splash') ? 0 : -200 }}
    >
      {children}
    </motion.section>
  )
}

export default Animate
