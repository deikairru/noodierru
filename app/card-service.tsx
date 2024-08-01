'use client'
import Image, { StaticImageData } from "next/image"

type CardService = {
  src: string | StaticImageData,
  title: string,
  desc: string,
}

export function CardService(props: CardService) {
  return (
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
  )
}