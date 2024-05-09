"use client"

import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { MdShoppingBasket } from "react-icons/md"

const CardCount = () => {

  const {cartProducts} = useCart();
  const router = useRouter();

  return (
    <div onClick={() => router.push('/cart')} className='hidden md:flex relative cursor-pointer'>
      <MdShoppingBasket size={25}/>
      <div className="absolute -top-1 -right-2 text-xs bg-orange-900 w-5 h-5 flex items-center justify-center rounded-full">{cartProducts?.length}</div>
    </div>
  )
}

export default CardCount