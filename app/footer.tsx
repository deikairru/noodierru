import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

export function Footer() {
  return (
    <div id="Contact" className="w-4/5 h-2/3 mt-24 divide-y-2 divide-orange-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-2">
        <div className="home flex flex-col gap-2">
          <h1 className="font-bold">Foodie Noodie</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className="flex flex-row py-2 gap-4 items-center [&>*:hover]:bg-orange-400">
            <a href="" className="flex justify-center items-center shadow-lg w-12 h-12 rounded-full bg-white"><FaFacebook size={25} /></a>
            <a href="" className="flex justify-center items-center shadow-lg w-12 h-12 rounded-full bg-white"><FaTwitter size={25} /></a>
            <a href="" className="flex justify-center items-center shadow-lg w-12 h-12 rounded-full bg-white"><FaInstagram size={25} /></a>
          </div>
        </div>
        <div className="company relative flex flex-col [&>a:hover]:text-orange-400">
          <h1 className="font-semibold z-[1] ">Company</h1>
          <a href="" className="mt-2">About Us</a>
          <a href="" className="mt-2">Career</a>
          <a href="" className="mt-2">How it Works</a>
          <div className="size-16 absolute blur-3xl -top-4 -left-4 bg-orange-300 rounded-full"></div>
        </div>
        <div className="policy relative flex flex-col [&>a:hover]:text-orange-400">
          <h1 className="font-semibold">Policy</h1>
          <a href="" className="mt-2">FAQ</a>
          <a href="" className="mt-2">Privacy</a>
          <a href="" className="mt-2 z-[1]">Shipping</a>
          <div className="h-16 w-16 absolute blur-3xl -bottom-6 -left-8 bg-orange-300 rounded-full"></div>
        </div>

        <div className="contact relative flex flex-col [&>a:hover]:text-orange-400">
          <h1 className="font-semibold z-[1]">Get in Touch</h1>
          <a href="" className="mt-2">+2 888 000 1</a>
          <a href="" className="mt-2">food@example.com</a>
          <div className="h-28 w-28 absolute blur-3xl -top-20 left-12 bg-orange-300 rounded-full"></div>
        </div>
      </div>
      <div className="col-span-4 text-center mt-20">
        <p className="font-bold text-lg my-8">© Foodie Noodie. 2024</p>
      </div>
    </div>
  )
}