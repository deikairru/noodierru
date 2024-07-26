import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { GiNoodles } from "react-icons/gi";

export function Header() {
  return (
    <div className="header absolute z-10 top flex flex-row justify-between py-8 w-4/5">
      <div className="title font-bold flex justify-between items-center hover:text-orange-400">
        <p className="mr-2">Foodie Noodie</p>
        <GiNoodles size={30} />
      </div>

      <div className="nav font-medium flex flex-row justify-between items-center underline-offset-[12px] decoration-4 decoration-orange-400 [&>a:hover]:underline [&>a]:px-4">
        <a href="#Home">Home</a>
        <a href="#Services">Services</a>
        <a href="#Menu">Menu</a>
        <a href="#Review">Review</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="cta flex flex-row justify-center items-center space-x-6">
        <div className="search hover:text-orange-400 hover:cursor-pointer">
          <FaSearch size={25} />
        </div>
        <div className="cart relative [&>*:first-child:hover]:text-orange-400 [&>*:first-child:hover]:cursor-pointer">
          <FaShoppingCart size={25} />
          <span className="text-center rounded-full p-1.5 absolute -top-4 -right-4 text-[10px] bg-orange-400 leading-none">10</span>
        </div>
        <div className="sign-up flex justify-center items-center px-4 py-1 space-x-2 rounded-full bg-orange-400 hover:text-white hover:cursor-pointer shadow-md drop-shadow-md">
          <FiLogIn size={20} />
          <p className="font-semibold">Login</p>
        </div>
      </div>
    </div>
  );
}