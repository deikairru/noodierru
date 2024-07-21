import Image from "next/image";
import FoodPlate from "../public/foodplate1.png";
import FoodPlate2 from "../public/foodplate2.png";
import FoodPlate3 from "../public/foodplate3.png";

export function Hero() {
  return (
    <div className="hero grid grid-cols-2 bg-orange-50">
      <div className="hero-desc flex flex-col h-screen justify-center space-y-3">
        <h1>Be The Fastest in Delivery Your Food</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sint tempore explicabo fuga aliquid modi.</p>
        <button>Get Started</button>
      </div>
      <div className="hero-images flex flex-col justify-center content-center space-y-10">
        <Image
          src={FoodPlate}
          width={50}
          height={50}
          alt="Picture of food"
        />
        <Image
          src={FoodPlate3}
          width={50}
          height={50}
          alt="Picture of food"
        />
        <Image
          src={FoodPlate3}
          width={50}
          height={50}
          alt="Picture of food"
        />
      </div>
    </div>
  );
}