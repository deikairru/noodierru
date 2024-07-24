import { CardMenu } from "./card-menu"
import MenuImg1 from '../public/menu (1).png'
import MenuImg2 from '../public/menu (2).png'
import MenuImg4 from '../public/menu (3).png'
import MenuImg3 from '../public/menu (4).png'

export function Menu() {
  return (
    <div className="container w-full bg-slate-50">
      <div className="services flex flex-col justify-center mt-24 items-center text-center">
        <h2 className="font-medium text-xl text-orange-400">Our Menu</h2>
        <h1 className="font-bold text-4xl">Our Popular Menu</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum fugit cumque, ipsam sint soluta.</p>
        <div className="flex flex-row justify-center gap-x-8 mt-10">
          <CardMenu src={MenuImg1} title={"Ramen"} desc={"Ramen noodle"} price={20} />
          <CardMenu src={MenuImg2} title={"Sushi"} desc={"Sushi"} price={20} />
          <CardMenu src={MenuImg3} title={"Spaghetti"} desc={"Spaghetti bolognese"} price={20} />
          <CardMenu src={MenuImg4} title={"Salad"} desc={"Salad"} price={20} />
        </div>
        <div className="bg-orange-400 font-semibold py-2 px-4 w-fit rounded-full text-center mt-14 hover:text-white hover:cursor-pointer">More Menu</div>
      </div>
    </div>
  )
}