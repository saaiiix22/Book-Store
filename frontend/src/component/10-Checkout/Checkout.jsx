import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const CheckOut=()=>{

    const [price,setPrice] = useState([])


    const checkOutPrice=async()=>{
        const {data} = await axios.get("http://localhost:1234/cartbuynow",{
            headers:{
                "jwt-token":localStorage.getItem("jwt-token"),
                "Content-Type":"application/json"
            }
        })
        // console.log(data.items);
        setPrice(data.items)
    }
    console.log(price);
    
    let total = "0"

    for(let i=0; i<price?.length; i++){
        total += ` + ${price[i].price}`
        // console.log(price[i].price);
        
    }

    console.log(total);
    console.log(eval(total));
    
    

    
    useEffect(()=>{
        checkOutPrice()
    },[])

    return(
        <div className="h-[100%] w-[100%] flex justify-start items-center gap-4 relative pt-2">
            <button className="bottom-1 right-1 text-[30px] font-[600] ">Your Total Amount: Rs.{eval(total)}</button>
        </div>
    )
}
export default CheckOut