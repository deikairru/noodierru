'use client'
import Image from "next/image"

type CardService = {
  src: string,
  title: string,
  desc: string,
}

export function CardService(props: CardService) {
  return (
    <div className="flex flex-col p-10 justify-center gap-2 items-center">
      <Image
        className="aspect-ratio-1"
        src={props.src}
        alt="test"
        width={100}
        height={100}
      />
      <h1 className="font-semibold mt-4">{props.title}</h1>
      <p className="font-medium">{props.desc}</p>
    </div >
  )
}