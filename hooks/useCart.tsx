"use client"

import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface CartContextProps {
  productCartQuantity: number,
  cartProducts: CardProductProps[] | null,
  addToBasket: (product: CardProductProps) => void
  removeFromCart: (product: CardProductProps) => void
  removeCart: () => void
}

const CartContext = createContext<CartContextProps | null>(null)

interface Props {
  [propName: string]: any
}

export const CartContextProvider = (props: Props) => {
  
  const [productCartQuantity, setProductCartQuantity] = useState(0)
  const [cartProducts, setCartProducts] = useState<CardProductProps[] | null>(null)

  useEffect(() => {
    let getItem: any = localStorage.getItem('cart');
    let getItemParse: CardProductProps[] | null = JSON.parse(getItem)
    setCartProducts(getItemParse)
  },[])

  const addToBasket = useCallback((product: CardProductProps) => {
    setCartProducts(prev => {
      let updatedCart;
      if(prev){
        updatedCart = [...prev, product]
      } else {
        updatedCart = [product]
      }
      toast.success('Product Added to Cart!')
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return updatedCart
    })
  }, [cartProducts])

  const removeFromCart = useCallback((product: CardProductProps) =>{
    if(cartProducts){
      const filteredProducts = cartProducts.filter(cart => cart.id !== product.id)
      setCartProducts(filteredProducts)
      toast.success('Product Removed from Cart!')
      localStorage.setItem('cart', JSON.stringify(filteredProducts))
    }
  },[cartProducts])

  const removeCart = useCallback(() => {
    setCartProducts([])
    toast.success('Cart Cleared!')
    localStorage.removeItem('cart')
  },[])

  let value = {
    productCartQuantity,
    addToBasket,
    cartProducts,
    removeFromCart,
    removeCart
  }
  
  return (
    <CartContext.Provider value={value} {...props}/>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if(context == null){
    throw new Error("ERROR!!!")
  }
  return context;
}

export default useCart;
