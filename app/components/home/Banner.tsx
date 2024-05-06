import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[237px]">
      <div className="h-[150px] md:h-[350px] w-full relative">
        <Image src={"/Banner.png"} fill alt=""/>
      </div>

    </div>
  )
}

export default Banner