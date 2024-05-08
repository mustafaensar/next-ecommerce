"use client"

import { RxAvatar } from "react-icons/rx"
import Avatar from "../general/Avatar"

const Comment = ({reviews}: {reviews : any}) => {
  
  console.log(reviews)
  
  return (
    <div className="border w-full md:w-1/3">
      <div className="flex items-center gap-1">
      <Avatar image={reviews?.user?.image}/>
      <div>{reviews?.user?.name}</div>
      </div>
      <div className="text-slate-500">
        {reviews?.comment}
      </div>
    </div>
  )
}

export default Comment