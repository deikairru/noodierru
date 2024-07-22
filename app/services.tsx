import { CardService } from "./card-service";
import DeliveryImg from '../public/delivery 1.png';
import CourierImg from '../public/courier 1.png';
import OrderImg from '../public/order 1.png';


export function Services() {
  return (
    <div className="flex flex-col text-center space-between-x-2 mt-24">
      <h2 className="text-xl font-medium text-orange-400">How it Works</h2>
      <h1 className="font-semibold text-4xl">What we Serve</h1>
      <p className="font-medium">Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands.</p>
      <div className="flex flex-row justify-evenly mt-10">
        <CardService src={OrderImg} title={"Easy to Order"} desc={"Order throught the App"} />
        <CardService src={DeliveryImg} title={"Fastest Deliver"} desc={"Delivery will be on Time"} />
        <CardService src={CourierImg} title={"Best Quality"} desc={"The best food quality for you"} />
      </div>
    </div>
  );
}