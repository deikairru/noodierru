import { FaHeart } from "react-icons/fa"
import Image, { StaticImageData } from "next/image"

type CardMenu = {
  src: string | StaticImageData,
  title: string,
  desc: string,
  price: number,
}

export function CardMenu(props: CardMenu) {
  const priceFormat = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);

  return (
    <div className="relative flex flex-col p-5 justify-between items-center bg-slate-100 rounded-2xl shadow-lg">
      <Image
        className="mb-4"
        src={props.src}
        width={220}
        height={220}
        alt="menu image"
      />
      <span className="p-0 w-[220px] h-[220px] rounded-full bg-transparent absolute center shadow-[rgba(0,0,15,0.15)_10px_10px_10px_2px]" />
      <p className="font-semibold">{props.title}</p>
      <p className="font-medium">{props.desc}</p>
      <div className="z-10 flex flex-row justify-between items-center mt-4 w-full">
        <p className="font-medium">{priceFormat(props.price)}</p>
        <FaHeart className="hover:text-orange-400" size={25} />
      </div>
    </div>
  )
}