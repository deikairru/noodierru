'use client'
import Image, { StaticImageData } from "next/image"
import { motion, Variants } from "framer-motion"

type CardService = {
  src: string | StaticImageData,
  title: string,
  desc: string,
}

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 50
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }
  }
};

export function CardService(props: CardService) {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col py-4 justify-center items-center min-w-[240px]">
        <Image
          className="ascpect-ratio-1"
          src={props.src}
          alt="test"
          width={120}
          height={120}
        />
        <h1 className="text-lg font-semibold mt-4">{props.title}</h1>
        <p className="font-medium">{props.desc}</p>
      </div >
    </motion.div>
  )
}