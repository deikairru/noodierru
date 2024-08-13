'use client'

import { CardService } from "./card-service";
import DeliveryImg from '../public/delivery 1.png';
import CourierImg from '../public/courier 1.png';
import OrderImg from '../public/order 1.png';
import { motion } from "framer-motion";

export function Services() {
  return (
    <div id="Services" className="container-slate text-[1rem]">
      <div className="flex flex-col text-center justify-center items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: 0.5 }}
          exit={{ opacity: 0 }}
          className="flex flex-col gap-4"
        >
          <h2 className="header-1">How it Works</h2>
          <h1 className="header-2">What We Serve</h1>
          <p className="subtext">Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands.</p>
        </motion.div>

        <div className="card-container">
          <CardService src={OrderImg} title={"Easy to Order"} desc={"Order throught the App"} />
          <CardService src={DeliveryImg} title={"Fastest Deliver"} desc={"Delivery will be on Time"} />
          <CardService src={CourierImg} title={"Best Quality"} desc={"The best food quality for you"} />
        </div>
      </div>
    </div>
  );
}