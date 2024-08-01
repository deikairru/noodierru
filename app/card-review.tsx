'use client'

import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils';

type CardReview = {
  src: string | StaticImageData,
  name: string,
  count: number,
  desc: string,
  className?: string,
}

export function CardReview(props: CardReview) {
  let reviewStar = (count: number): React.JSX.Element[] => {
    let stars = Array.from({ length: 5 }, (v, k) => <FaRegStar key={k} size={30} className='text-orange-400' />)
    let i: number;

    if (count % 1 != 0) {
      stars[Math.floor(count)] = <FaStarHalfAlt key={Math.ceil(count)} size={30} className='text-orange-400' />;
    }

    for (i = 0; i < Math.floor(count); i++) {
      stars[i] = <FaStar key={i} size={30} className='text-orange-400' />
    }


    return stars;
  }

  return (
    <div className={cn("bg-slate-100 rounded-xl px-8 py-4 max-w-[320px] lg:min-w-[368px] mt-4 mr-4 shadow-lg m-4 snap-center", props.className)} >
      <div className="flex flex-col justify-between gap-4 ">
        <div className="flex flex-row justify-center gap-2">
          <div className="flex justify-center items-center">
            <Image
              className='aspect-square w-[60px] h-[60px] mr-4 object-cover rounded-full'
              src={props.src}
              width={100}
              height={100}
              alt='profile pic'
            />

          </div>
          <div className='container justify-center'>
            <h1 className="font-semibold text-lg xl:font-bold">{props.name}</h1>
            <div className="flex flex-row mt-2">
              {reviewStar(props.count)}
            </div>
          </div>
        </div>
        <p className='text-sm xl:text-lg'>{props.desc}</p>
      </div>
    </div >
  );
}