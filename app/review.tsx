import Image from "next/image"
import { CardReview } from "./card-review"

export function Review() {
  return (
    <div className="container bg-slate-50">
      <div className="w-full grid grid-cols-2 gap-0 mt-24 mx-auto">
        <div className="relative grid grid-cols-2 gap-3 ml-auto">
          <Image
            className="w-full h-[200px] object-cover col-span-2 rounded-t-xl"
            src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2'}
            width={600}
            height={250}
            alt="Review Image"
          />
          <Image
            className="w-fill h-[200px] object-cover rounded-bl-xl"
            src={'https://images.unsplash.com/photo-1447078806655-40579c2520d6'}
            width={300}
            height={300}
            alt="Review Image"
          />
          <Image
            className="w-fill h-[200px] object-cover rounded-br-xl"
            src={'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7'}
            width={300}
            height={300}
            alt="Review Image"
          />
        </div>
        <div className="flex flex-col justify-center ml-20">
          <h2 className="font-medium text-orange-400 text-xl">What they Say</h2>
          <h1 className="font-bold text-4xl">What Our Customer Say <br />About Us</h1>
          <div className="flex flex-row overflow-hidden">
            <CardReview src={'https://images.unsplash.com/photo-1667053508464-eb11b394df83'} count={4.5} name={'Naura Silvana'} desc={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.”'} />
            <CardReview src={'https://images.unsplash.com/photo-1701351381765-695680b7d739'} count={5} name={'Akesh Sing'} desc={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.”'} />
          </div>
        </div>
      </div>

    </div>
  )
}