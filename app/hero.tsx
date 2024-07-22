import Image from "next/image";
import FoodPlate from "../public/foodplate1.png";
import FoodPlate2 from "../public/foodplate2.png";
import FoodPlate3 from "../public/foodplate3.png";

export function Hero() {
  return (
    <div className="hero w-4/5 grid grid-cols-2 space-x-10">
      <div className="hero-desc relative flex flex-col h-screen justify-center space-y-2">
        <h1 className="text-5xl w-4/5 font-semibold">Be The Fastest in Delivery Your <span className="text-orange-400">Food</span></h1>
        <p className="w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, omnis soluta? Fugiat a quam sed!</p>
        <div className="bg-orange-400 font-semibold py-2 px-4 self-start rounded-full text-center">Get Started</div>
        <div className="p-0 w-10 h-10 bg-orange-400 absolute bottom-48 right-4 rounded-full"></div>
      </div>
      <div className="hero-images relative flex flex-col justify-center items-center space-y-10">
        <div className="p-10 w-50 h-50 bg-orange-400 absolute top-36 left-5 rounded-full"></div>
        <div className="p-10 w-50 h-50 bg-orange-400 absolute center right-5 rounded-full"></div>
        <div className="p-0 w-5 h-5 bg-orange-400 absolute center -translate-y-10 left-20 rounded-full"></div>
        <div className="p-0 w-[300px] h-[300px] rounded-full bg-transparent absolute top-24 center translate-y-1 -translate-x-2 shadow-[rgba(0,0,15,0.15)_10px_10px_10px_2px]"></div>
        <Image
          src={FoodPlate2}
          width={344}
          height={344}
          alt="Picture of food"
          className="absolute center top-20"
        />

        <div className="p-0 w-[170px] h-[170px] rounded-full bg-transparent absolute bottom-44 left-4 shadow-[rgba(0,0,15,0.15)_10px_10px_10px_2px]"></div>
        <Image
          src={FoodPlate3}
          width={200}
          height={200}
          alt="Picture of food"
          className="absolute bottom-40 left-0"
        />

        <Image
          src={FoodPlate}
          width={275}
          height={275}
          alt="Picture of food"
          className="absolute bottom-10 right-20"
        />
        <div className="p-0 w-[230px] h-[230px] rounded-full bg-transparent absolute bottom-14 right-28 translate-x-2 shadow-[rgba(0,0,15,0.1)_10px_10px_10px_2px]"></div>
      </div>
    </div >
  );
}