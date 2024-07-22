import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

export function Header() {
  return (
    <div className="header absolute top flex flex-row justify-between py-5 w-4/5">
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
          <span className="text-center rounded-full p-1.5 absolute -top-4 -right-4 text-[10px] bg-orange-300 leading-none">10</span>
        </div>
        <div className="cart"><FaShoppingCart size={25} /></div>
        <div className="sign-up flex justify-center items-center px-4 p space-x-2 rounded-full bg-orange-400">
          <FiLogIn size={20} />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}