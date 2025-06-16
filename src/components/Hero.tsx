import { motion } from 'framer-motion';

export function Hero() {
    return (
      <motion.main 
        className="flex-1 flex flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-8">
          <motion.p 
            className="text-blue-400 text-sm font-medium italic tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Coming Soon
          </motion.p>
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-blue-500 leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            THE FUTURE FOR
            <br />
            CREATORS
          </motion.h1>
        </div>
      </motion.main>
    )
  }