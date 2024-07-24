'use client'

import Image from "next/image"
import { CardReview } from "./card-review"
import { useState, useEffect } from "react"

export function Review() {
  const [lastPost, setLastPost] = useState(0);
  const [post, setPost] = useState(0);

  useEffect(() => {
    let element = document.getElementById('card-review');
    element?.classList.remove('-translate-x-[0px]');
    element?.classList.remove('-translate-x-[400px]');
    element?.classList.remove('-translate-x-[800px]');
    element?.classList.remove('-translate-x-[1200px]');
  }, []);

  useEffect(() => {
    let element = document.getElementById('card-review');
    let nav = document.getElementById('nav-review');
    nav?.children[lastPost].classList.remove('bg-orange-400');
    nav?.children[lastPost].classList.add('bg-orange-200');
    nav?.children[post].classList.add('bg-orange-400');
    element?.classList.remove('-translate-x-[' + (400 * lastPost) + 'px]');
    element?.classList.add('-translate-x-[' + (400 * post) + 'px]');
    setLastPost(post);
    console.log(element?.classList)
  }, [post]);

  return (
    <div className="container bg-slate-50">
      <div className="w-full grid grid-cols-2 gap-0 mt-24 mx-auto">
        <div className="relative grid grid-cols-2 gap-3 ml-auto">
          <Image className="w-full h-[200px] object-cover col-span-2 rounded-t-xl" src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2'} width={600} height={250} alt="Review Image"
          />
          <Image
            className="w-fill h-[200px] object-cover rounded-bl-xl" src={'https://images.unsplash.com/photo-1447078806655-40579c2520d6'} width={300} height={300} alt="Review Image"
          />
          <Image
            className="w-fill h-[200px] object-cover rounded-br-xl" src={'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7'} width={300} height={300} alt="Review Image"
          />
        </div>
        <div className="flex flex-col justify-center ml-20">
          <h2 className="font-medium text-orange-400 text-xl">What they Say</h2>
          <h1 className="font-bold text-4xl">What Our Customer Say <br />About Us</h1>
          <div className="overflow-hidden">
            <div id="card-review" className="flex flex-row duration-1000">
              <CardReview src={'https://images.unsplash.com/photo-1667053508464-eb11b394df83'} count={4.5} name={'Naura Silvana'} desc={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.”'} />
              <CardReview src={'https://images.unsplash.com/photo-1701351381765-695680b7d739'} count={4} name={'Zendaya'} desc={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.”'} />
              <CardReview src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330'} count={3.5} name={'Elizabeth'} desc={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.”'} />
              <CardReview src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'} count={5} name={'Victoria'} desc={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.”'} />
            </div>
          </div>
          <div id="nav-review" className="flex flex-row justify-center w-full gap-4 mt-4">
            <a className="block h-4 w-4 rounded-full bg-orange-400" onClick={() => setPost(0)}></a>
            <a className="block h-4 w-4 rounded-full bg-orange-200" onClick={() => setPost(1)}></a>
            <a className="block h-4 w-4 rounded-full bg-orange-200" onClick={() => setPost(2)} ></a>
            <a className="block h-4 w-4 rounded-full bg-orange-200" onClick={() => setPost(3)}></a>

          </div>
        </div>
      </div >

    </div >
  )
}