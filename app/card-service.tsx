'use client'
import Image from "next/image"

export function CardService({ src, title, desc }) {
  return (
    <div className="flex flex-col p-10 justify-center gap-2 items-center">
      <Image
        src={src}
        alt="test"
        width={180}
        height={180}
      />
      <h1 className="font-semibold mt-4">{title}</h1>
      <p className="font-medium">{desc}</p>
    </div >
  )
}