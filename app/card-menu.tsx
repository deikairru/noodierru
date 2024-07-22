import { FaHeart } from "react-icons/fa"
import Image from "next/image"

export function CardMenu({ src, title, desc, price }) {
  return (
    <div className="relative flex flex-col p-5 justify-between gap-2 items-center bg-slate-200 rounded-2xl">
      <Image
        className="z-10"
        src={src}
        width={220}
        height={220}
        alt="menu image"
      />
      <span className="p-0 w-[220px] h-[220px] rounded-full bg-transparent absolute center shadow-[rgba(0,0,15,0.15)_10px_10px_10px_2px]" />
      <p className="font-semibold">{title}</p>
      <p className="font-medium">{desc}</p>
      <div className="z-10 flex flex-row justify-between items-center mt-4 w-full">
        <p>{price}</p>
        <FaHeart size={25} />
      </div>
    </div>
  )
}