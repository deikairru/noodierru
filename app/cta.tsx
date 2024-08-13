'use client'
import { motion } from "framer-motion"

export function CTA() {
  return (
    <div className="w-screen bg-slate-50 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true, amount: 0.2 }}
        exit={{ opacity: 0 }}
        className="cta w-4/5 h-[200px] md:h-[300px] relative bg-slate-600 bg-[url('https://images.unsplash.com/photo-1569058242567-93de6f36f8e6')] bg-cover mt-12 mx-auto rounded-2xl overflow-hidden select-none">
        <div className="relative flex flex-col h-full items-center justify-center gap-2">
          <div className="absolute w-full h-full bg-gray-900 opacity-80" />

          <h1 className="font-bold text-white px-10 text-xl md:text-3xl lg:text-4xl max-w-[500px] text-center z-10">Join our member and get discount up to 50%</h1>
          <div className="bg-orange-400 font-semibold py-1 px-4 md:py-2 md:px-8 w-fit rounded-full text-center mt-2 sm:mt-4 lg:mt-8 z-10 hover:text-white hover:cursor-pointer text-sm md:text-md lg:text-xl">Subcribe Now</div>
        </div>
      </motion.div>
    </div >
  )
}