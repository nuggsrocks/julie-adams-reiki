import React, { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Animate = ({ duration = 0.5, children }) => {
  const ref = useRef()
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            transition: { duration, ease: 'easeInOut' },
          })
        } else {
          controls.start({
            opacity: 0,
            transition: { duration, ease: 'easeInOut' },
          })
        }
      },
      {
        threshold: 0.5,
      }
    )

    observer.observe(ref.current)

    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref])

  return (
    <motion.div
      className="animate"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export default Animate
