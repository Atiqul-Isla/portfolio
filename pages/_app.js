import { AnimatePresence, motion } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
