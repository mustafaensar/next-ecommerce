"use client"

import useCart from "@/hooks/useCart"
import PageContainer from "../container/PageContainer"
import Image from "next/image";
import Button from "../general/Button";

const CartClient = () => {
  
  const {cartProducts, removeFromCart, removeCart} = useCart();
  if(!cartProducts || cartProducts.length == 0){
    return <div>No Products in Cart...</div>
  }
  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 text-center border-b py3">
          <div className="w-1/5">Product Image</div>
          <div className="w-1/5">Product Name</div>
          <div className="w-1/5">Product Quantity</div>
          <div className="w-1/5">Product Price</div>
          <div className="w-1/5"></div>
        </div>
        <div>
          {
            cartProducts.map(cart => (
              <div className="flex items-center text-center my-5" key={cart.id}>
                <div className="w-1/5 flex items-center justify-center">
                  <Image src={cart.image} alt="" width={50} height={50}/>
                </div>
                <div className="w-1/5">{cart.name}</div>
                <div className="w-1/5">2</div>
                <div className="w-1/5 text-orange-600 text-lg">{cart.price}</div>
                <div className="w-1/5">
                  <Button text="Delete Product" small onClick={() => removeFromCart(cart)}/>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex my-5 py-5 border-t">
          <button onClick={() => removeCart()} className="w-2/5 underline text-sm text-center">Delete Basket</button>
          <div className="text-lg md:text-2xl text-orange-600 font-bold text-center w-3/5">1000 $</div>
        </div>
      </PageContainer>
    </div>
  )
}

export default CartClient