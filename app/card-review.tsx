'use client'

import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';

type CardReview = {
  src: string | StaticImageData,
  name: string,
  count: number,
  desc: string,
  className?: string,
}

type CardService = {
  src: string | StaticImageData,
  title: string,
  desc: string,
}

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 20
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

export function CardReview(props: CardReview) {
  let reviewStar = (count: number): React.JSX.Element[] => {
    let stars = Array.from({ length: 5 }, (v, k) => <FaRegStar key={k} size={20} className='text-orange-400' />)
    let i: number;

    if (count % 1 != 0) {
      stars[Math.floor(count)] = <FaStarHalfAlt key={Math.ceil(count)} size={20} className='text-orange-400' />;
    }

    for (i = 0; i < Math.floor(count); i++) {
      stars[i] = <FaStar key={i} size={20} className='text-orange-400' />
    }


    return stars;
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.1 }} className={cn("flex flex-col justify-center bg-slate-100 rounded-xl pl-8 pr-4 py-4 max-w-[320px] lg:min-w-[368px] mt-4 shadow-lg m-4 snap-center text-left", props.className)} >
      <div className="flex flex-col justify-between gap-4 ">
        <div className="flex flex-row justify-center gap-2">
          <div className="flex justify-center items-center">
            <Image
              className='aspect-square w-[55px] h-[50px] mr-4 object-cover rounded-full'
              src={props.src}
              width={100}
              height={100}
              alt='profile pic'
            />

          </div>
          <div className='container justify-center'>
            <h1 className="font-semibold text-md md:text-lg xl:font-bold">{props.name}</h1>
            <div className="flex flex-row">
              {reviewStar(props.count)}
            </div>
          </div>
        </div>
        <p className='text-sm xl:text-lg'>{props.desc}</p>
      </div>
    </motion.div >
  );
}