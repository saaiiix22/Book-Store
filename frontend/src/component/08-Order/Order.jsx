import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import CartComponents from "../09-CartComponents/CartComponents";
import { useNavigate } from "react-router-dom";

const Order=()=>{

    const [card,setCard] = useState([])
    const [refresh,setRefresh] = useState(false)


    const cartItems=async()=>{
        const token = localStorage.getItem("jwt-token")
        // console.log(token);
        
        const {data} = await axios.get("http://localhost:1234/cartbuynow",{
            headers:{
                "jwt-token": token,
                "Content-Type": "application/json"
            }
        })
        // console.log(data.items);
        setCard(data.items)
    }
    useEffect(()=>{
        cartItems()
    },[refresh])
    
    console.log(card);
    
    const navigate = useNavigate()


    return(
        <div className="h-[100%] w-[100%] flex flex-col pl-5 relative">
            {card?.map((i,index)=>{
                return(
                    <Fragment key={index}>
                        <CartComponents props={{i,refresh,setRefresh}}/>
                    </Fragment>
                )
            })}  
            <div className="absolute h-[%] w-[7%] bg-[#222222] right-0 bottom-1 flex justify-center items-center rounded-md bg-gradient-to-r from-[#f54f2e] to-[#f6424d] text-white font-[500] cursor-pointer" onClick={()=>{navigate("/checkout")}}>Check-Out</div> 
        </div>
    )
}
export default Order