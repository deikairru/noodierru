import Image from "next/image"

export function CTA() {
  return (
    <div className="w-screen bg-slate-50 pb-24">
      <div className="cta w-4/5 h-[200px] md:h-[300px] relative bg-slate-600 bg-[url('https://images.unsplash.com/photo-1533777857889-4be7c70b33f7')] bg-cover mt-12 mx-auto rounded-3xl overflow-hidden">
        <div className="flex flex-col h-full items-center justify-center gap-2">
          <h1 className="font-bold text-white px-10 text-xl md:text-3xl lg:text-4xl max-w-[600px] leading-snug text-center">Join our member and get discount up to 50%</h1>
          <div className="bg-orange-400 font-semibold py-2 px-4 w-fit rounded-full text-center mt-2 sm:mt-4 lg:mt-8 hover:text-white hover:cursor-pointer text-sm">More Menu</div>
        </div>
      </div>
    </div>
  )
}