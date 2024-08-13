'use client'

import { FaHeart } from "react-icons/fa"
import Image, { StaticImageData } from "next/image"
import Divider from '../public/divider.svg'
import { motion, Variants } from "framer-motion"

type CardMenu = {
  src: string | StaticImageData,
  title: string,
  desc: string,
  price: number,
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

export function CardMenu(props: CardMenu) {
  const priceFormat = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      whileHover={{ scale: 1.1, rotate: -3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="card-menu">
      <div className="items-center flex flex-col gap-3 p-4">
        <Image
          src={props.src}
          width={180}
          height={180}
          alt="menu image"
        />
        <div className="flex flex-col gap-2 py-2">
          <p className="font-semibold">{props.title}</p>
          <p className="font-medium text-sm">{props.desc}</p>
        </div>
      </div>
      <div className="bg-orange-400 h-full w-full">
        <Image
          className="w-full"
          src={Divider}
          width={10}
          height={10}
          alt="divider"
        />
        <div className="z-10 px-8 flex flex-row justify-between items-center my-4 w-full text-slate-50">
          <p className="font-medium">{priceFormat(props.price)}</p>
          <motion.div
            whileHover={{ scale: 1.3 }}
          >
            <FaHeart className="hover:text-red-600" size={25} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}