import { CardMenu } from "./card-menu"
import MenuImg1 from '../public/menu (1).png'
import MenuImg2 from '../public/menu (2).png'
import MenuImg4 from '../public/menu (3).png'
import MenuImg3 from '../public/menu (4).png'

export function Menu() {
  return (
    <div id="Menu" className="container-slate">
      <div className="flex flex-col text-center justify-center items-center gap-4">
        <h2 className="header-1">Our Menu</h2>
        <h1 className="header-2">Our Popular Menu</h1>
        <p className="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum fugit cumque, ipsam sint soluta.</p>
        <div className="flex flex-col lg:flex-row gap-12 mt-20 lg:gap-20">
          <CardMenu src={MenuImg1} title={"Indomie Rendang"} desc={"rendang flavour noodle with tomato and eggs"} price={20} />
          <CardMenu src={MenuImg2} title={"Toast Bread"} desc={"a crisp, hot, and brown toast bread with cheese"} price={20} />
          <CardMenu src={MenuImg4} title={"Salad"} desc={"a cold dish of various mixtures of raw or cooked vegetables"} price={20} />
        </div>
        <div className="bg-orange-400 font-semibold py-2 px-4 w-fit rounded-full text-center mt-14 hover:text-white hover:cursor-pointer shadow-xl drop-shadow-xl">More Menu</div>
      </div>
    </div>
  )
}