'use client'

import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image from 'next/image'

type CardReview = {
  src: string,
  name: string,
  count: number,
  desc: string,
}

export function CardReview(props: CardReview) {
  let reviewStar = (count: number): React.JSX.Element[] => {
    let stars = Array.from({ length: 5 }, () => <FaRegStar size={30} className='text-orange-400' />)
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
        <div className="flex flex-row">
          <Image
            className='w-16 h-16 p-0 object-cover rounded-full'
            src={props.src}
            width={400}
            height={400}
            alt='profile pic'
          />
          <div className='container'>
            <h1 className="font-semibold">{props.name}</h1>
            <div className="flex flex-row">
              {reviewStar(props.count)}
            </div>
          </div>
        </div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}