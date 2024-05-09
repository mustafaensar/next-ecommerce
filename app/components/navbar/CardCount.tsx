"use client"

import useCart from "@/hooks/useCart";
import { MdShoppingBasket } from "react-icons/md"

const CardCount = () => {

  const {cartProducts} = useCart();

  return (
    <div className='hidden md:flex relative'>
      <MdShoppingBasket size={25}/>
      <div className="absolute -top-1 -right-2 text-xs bg-orange-900 w-5 h-5 flex items-center justify-center rounded-full">{cartProducts?.length}</div>
    </div>
  )
}

export default CardCount