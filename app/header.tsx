import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

export function Header() {
  return (
    <div className="header absolute top flex flex-row justify-evenly py-5 w-full bg-orange-50">
      <div className="title font-bold flex justify-between items-center">
        Foodie Noodie
      </div>

      <div className="nav font-medium flex flex-row justify-between items-center space-x-6">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#Menu">How it Works</a>
        <a href="#About">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="cta flex flex-row justify-center items-center space-x-6">
        <div className="search relative">
          <FaSearch size={25} />
          <span className="w-4 text-center rounded-lg absolute -top-2 -right-2 bg-orange-300 text-[8px]">1</span>
        </div>
        <div className="cart"><FaShoppingCart size={25} /></div>
        <div className="sign-up flex justify-center items-center px-4 space-x-2 rounded-full bg-orange-300">
          <FiLogIn size={20} />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}