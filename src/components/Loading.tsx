import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="block w-4 h-4 rounded-full bg-white/80"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}