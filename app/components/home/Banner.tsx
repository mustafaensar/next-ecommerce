import Image from "next/image"

const Banner = () => {
  return (
    <div className="md:h-[450px] flex items-center justify-center">
      <div className="h-[130px] md:h-[450px] w-full relative">
        <Image src={"/Banner.png"} fill alt="" className="object-cover"/>
      </div>

    </div>
  )
}

export default Banner