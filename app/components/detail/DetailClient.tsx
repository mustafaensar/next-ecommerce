"use client"

import Image from "next/image"
import PageContainer from "../container/PageContainer"
import Counter from "../general/Counter"
import { useEffect, useState } from "react"
import { Rating } from "@mui/material"
import Button from "../general/Button"
import Comment from "./Comment"
import useCart from "@/hooks/useCart"

export type CardProductProps = {
  id: string
  name: string
  image: string
  description: string
  inStock: boolean
  price: number
  quantity: number
}

const DetailClient = ({product}: {product: any}) => {

  const {productCartQuantity, addToBasket, cartProducts} = useCart();
  const [displayButton, setDisplayButton] = useState(false);

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    image: product.image,
    inStock: product.inStock,
    price: product.price,
    quantity: 1,
  })

  useEffect(() =>{
    setDisplayButton(false)
    let controlDisplay: any = cartProducts?.findIndex((item:any) => item.id == product.id)

    if(controlDisplay > -1) {
      setDisplayButton(true)
    }
  },[cartProducts])

  const increaseFunc = () => {
    if(cardProduct.quantity == 10) return
    setCardProduct(prev => ({...prev, quantity:prev.quantity + 1}))
  }

  const decreaseFunc = () => {
    if(cardProduct.quantity == 1) return
    setCardProduct(prev => ({...prev, quantity:prev.quantity - 1}))
  }

  let productRating = product?.reviews?.reduce((acc:number, item:any) => acc + item.rating, 0) / product?.reviews?.length

  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[200px] w-[200px] md:h-[400px] md:w-[400px] mb-3 md:mb-0">
            <Image src={product?.image} fill alt=""/>
          </div>
          <div className=" w-full md:w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-slate-500">{product?.description}</div>
          <div className="flex items-center gap-2">
            <div>STOCK : </div>
            {
              product?.inStock ? <div className="text-green-500">In Stock</div> : <div className="text-red-500">Out of Stock</div>
            }
          <div className="text-lg md:text-2xl text-orange-600">{product.price} $</div>
          </div>
          {
            displayButton ? <>
            <Button small outline text="Product Already in Cart" onClick={() => {}}/>
            </> : <>
            <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct}/>
            <Button small text="Add to Basket" onClick={() => addToBasket(cardProduct)}/>
            
            </>
          }
          </div>
        </div>
        <div>
          {
            product?.reviews?.map((reviews : any) =>(
              <Comment key={reviews.id} reviews={reviews}/>
            ))
          }
        </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient