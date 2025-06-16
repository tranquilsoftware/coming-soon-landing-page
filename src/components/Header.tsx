import { BRAND_NAME, HOME_LINK } from "../globals"
import { motion } from 'framer-motion';

export function Header() {
    return (
      <motion.header 
        className="absolute top-0 left-0 w-full p-6 z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.a 
          href={HOME_LINK} 
          className="block w-fit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="text-blue-400 font-semibold text-lg tracking-wide"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
              {BRAND_NAME}
          </motion.div>
        </motion.a>
      </motion.header>
    )
}