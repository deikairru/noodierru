import Image from "next/image";
import FoodPlate from "../public/foodplate1.png";
import FoodPlate2 from "../public/foodplate2.png";
import FoodPlate3 from "../public/foodplate3.png";

export function Hero() {
  return (
    <div id='Home' className="hero w-full py-48 sm:py-60 sm:h-[75%] md:h-[80%] lg:h-screen grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
      <div className="size-60 lg:hidden blur-2xl bg-orange-200 absolute -top-32 -right-20 rounded-full overflow-hidden" />

      <div className="hero-desc relative max-w-[480px] flex flex-col justify-center gap-y-4">
        {/* Background Shapes */}
        <div className="size-60 lg:hidden blur-2xl bg-orange-200 absolute -bottom-40 -right-80 rounded-full" />
        <div className="size-32 sm:hidden blur-2xl bg-orange-200 absolute -bottom-24 right-10 rounded-full" />
        <div className="size-20 bg-orange-200 blur-2xl absolute -top-10 -left-16 rounded-full" />

        {/* Hero */}
        <h1 className="z-10 text-4xl mr-8 block text-pretty font-bold">Be the fastest in receive your <span className="text-orange-400">Food</span></h1>
        <p className="z-10 max-w-[2/3] mr-auto text-pretty">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, omnis soluta? Fugiat a quam sed!</p>
        <div className="bg-orange-400 font-semibold py-2 px-4 text-sm sm:text-base lg:text-xl lg:px-6 self-start rounded-full text-center hover:text-white hover:cursor-pointer mt-2 shadow-xl drop-shadow-xl">Get Started</div>
      </div>

      <div className="hero-images relative hidden lg:flex flex-col justify-center items-center space-y-10">
        <div className="size-[300px] blur-3xl bg-orange-200 absolute -top-80 -right-40 rounded-full"></div>
        <div className="size-32 blur-3xl bg-orange-200 absolute -top-80 -left-20 rounded-full"></div>
        <div className="size-60 blur-2xl bg-orange-200 absolute -bottom-20 -left-40 rounded-full"></div>

        <div className="absolute center">
          <div className="p-0 w-[300px] h-[300px] rounded-full bg-transparent absolute translate-y-5 translate-x-4 shadow-2xl drop-shadow-2xl" />
          <Image
            src={FoodPlate2}
            width={344}
            height={344}
            alt="Picture of food"
          />
        </div>

        <div className="hidden xl:block absolute -top-20 -left-20">
          <div className="hidden xl:block p-0 w-[170px] h-[170px] rounded-full bg-transparent absolute top-4 left-4 shadow-2xl drop-shadow-2xl" />
          <Image
            src={FoodPlate3}
            width={200}
            height={200}
            alt="Picture of food"
          />
        </div>

        <div className="hidden xl:block absolute -bottom-40 -right-20">
          <div className="p-0 w-[230px] h-[230px] rounded-full bg-transparent absolute translate-x-4 translate-y-4 shadow-2xl drop-shadow-2xl" />
          <Image
            src={FoodPlate}
            width={275}
            height={275}
            alt="Picture of food"
          />
        </div>
      </div>
    </div >
  );
}