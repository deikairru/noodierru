'use client'

import Image from "next/image";
import FoodPlate from "../public/foodplate1.png";
import FoodPlate2 from "../public/foodplate2.png";
import FoodPlate3 from "../public/foodplate3.png";
import { motion } from "framer-motion";

export function Hero() {
  const text = "Be the fastest in recieve your".split(" ")
  return (
    <div id='Home' className="hero w-full py-48 sm:py-60 h-screen grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
      <div className="size-60 lg:hidden blur-2xl bg-orange-300 absolute -top-32 -right-20 rounded-full overflow-hidden" />

      <div className="hero-desc relative max-w-[480px] flex flex-col justify-center gap-y-4">
        {/* Background Shapes */}
        <motion.div
          animate={{ x: [0, 50, -220, -50, 0], y: [0, -150, -220, 50, 0], scale: [1, 1.2, 1.8, 1.3, 1], transition: { ease: "linear", duration: 10, repeat: Infinity } }}
          className="size-60 lg:hidden blur-2xl bg-orange-300 absolute -bottom-40 -right-80 rounded-full" />
        <motion.div
          animate={{ y: [0, 50, 0, -50, 0], scale: [1, 1.2, 1, 1.2, 1], transition: { ease: "linear", duration: 10, repeat: Infinity } }}
          className="size-32 sm:hidden blur-2xl bg-orange-300 absolute -bottom-24 right-10 rounded-full" />
        <motion.div
          animate={{ x: [0, 150, 0], y: [0, 100, 0], scale: [1, 1.4, 1], transition: { ease: "linear", duration: 10, repeat: Infinity } }}
          className="size-20 blur-xl bg-orange-300 absolute -top-10 -left-16 rounded-full" />

        {/* Hero */}
        <h1 className="z-10 text-4xl mr-8 block text-pretty font-bold">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 6 / 10
            }}
            className="z-10 text-orange-400">Food</motion.span></h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 7 / 10
          }}
          className="z-10 max-w-[2/3] mr-auto text-pretty">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, omnis soluta? Fugiat a quam sed!</motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 8 / 10
          }}
          className="z-10 bg-orange-400 font-semibold py-2 px-4 text-sm sm:text-base lg:text-xl lg:px-6 self-start rounded-full text-center hover:scale-105 hover:text-white hover:cursor-pointer mt-2 shadow-xl drop-shadow-xl">Get Started</motion.div>
      </div>

      <div className="hero-images relative hidden lg:flex flex-col justify-center items-center space-y-10">
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1], transition: { ease: "linear", duration: 10, repeat: Infinity } }}
          className="size-[300px] bg-orange-300 absolute blur-3xl -top-80 -right-40 rounded-full" />
        <motion.div
          animate={{ x: [0, 150, 0, -150, 0], transition: { ease: "easeInOut", duration: 10, repeat: Infinity } }}
          className="size-32 blur-xl bg-orange-300 absolute -top-80 -left-20 rounded-full" />
        <motion.div
          animate={{
            scale: [1, 1.8, 1.4, 0.8, 1],
            x: [0, -250, -200, 100, 0],
            y: [0, -100, -200, 50, 0],
            transition: { ease: "linear", duration: 10, repeat: Infinity }
          }}
          className="size-60 blur-2xl bg-orange-300 absolute -bottom-20 -left-40 rounded-full" />

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