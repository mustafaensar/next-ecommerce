"use client"

import { RxAvatar } from "react-icons/rx"
import Avatar from "../general/Avatar"
import { Rating } from "@mui/material"

const Comment = ({reviews}: {reviews : any}) => {
  
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg my-3">
      <div className="w-[50px] flex items-center gap-1">
      <Avatar image={reviews?.user?.image}/>
      <div>
        <div>{reviews?.user?.name}</div>
        <Rating name="read-only" value={reviews?.user?.rating} readOnly />
      </div>
      </div>
      <div className="text-slate-500">
        {reviews?.comment}
      </div>
    </div>
  )
}

export default Comment