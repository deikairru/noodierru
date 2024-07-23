'use client'

import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image, { StaticImageData } from 'next/image'

type CardReview = {
  src: string | StaticImageData,
  name: string,
  count: number,
  desc: string,
}

export function CardReview(props: CardReview) {
  let reviewStar = (count: number): React.JSX.Element[] => {
    let stars = Array.from({ length: 5 }, (v, k) => <FaRegStar key={k} size={30} className='text-orange-400' />)
    let i: number;

    for (i = 0; i <= count; i++) {
      stars[i] = <FaStar size={30} className='text-orange-400' />
    }

    if (count % 1 != 0) {
      stars[count - 1] = <FaStarHalfAlt size={30} className='text-orange-400' />;
    }
    return stars;
  }

  return (
    <div className="container bg-slate-200 rounded-xl px-8 py-4 min-w-[70%] mt-4 mr-4">
      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-row justify-center gap-2">
          <Image
            className='w-[80px] h-[70px] m-auto object-cover rounded-full'
            src={props.src}
            width={400}
            height={400}
            alt='profile pic'
          />
          <div className='container justify-center'>
            <h1 className="font-semibold text-xl mt-2">{props.name}</h1>
            <div className="flex flex-row mt-2">
              {reviewStar(props.count)}
            </div>
          </div>
        </div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}