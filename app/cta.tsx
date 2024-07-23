import Image from "next/image"

export function CTA() {
  return (
    <div className="container w-full bg-slate-50">
      <div className="cta w-4/5 h-[300px] relative bg-slate-600 mt-24 mx-auto rounded-3xl">
        <Image
          className={'object-top mix-blend-overlay'}
          src={'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7'}
          layout="fill"
          objectFit="cover"
          alt="cta image"
        />
        <div className="flex flex-col h-full items-center justify-center gap-2">
          <h1 className="font-bold text-white text-4xl max-w-[500px] leading-snug text-center">Join our member and get discount up to 50%</h1>
          <div className="bg-orange-300 font-semibold py-2 px-4 w-fit rounded-full text-center mt-8">More Menu</div>
        </div>
      </div>
    </div>
  )
}