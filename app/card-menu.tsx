import { FaHeart } from "react-icons/fa"
import Image, { StaticImageData } from "next/image"
import Divider from '../public/divider.svg'

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
    <div className="card-menu">
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
          <FaHeart className="hover:text-red-900" size={25} />
        </div>
      </div>
    </div>
  )
}