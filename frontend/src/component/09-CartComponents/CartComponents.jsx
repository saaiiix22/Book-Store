import axios from "axios";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CartComponents=({props})=>{

    // console.log(props);
    let {i,refresh,setRefresh} = props
    let {name,author,price,rating,imgUrl,_id} = i
    
    const delFunction = async()=>{
        const token = localStorage.getItem("jwt-token")
        const {data} = await axios.delete(`http://localhost:1234/removeitem/${_id}`,{
            headers:{
                "jwt-token":token,
                "Content-Type":"application/json"
            }
        })
        // console.log(data);
        setRefresh(!refresh)
        
    }
    console.log(refresh);
    
    
    return(
        <div className="h-[20%] w-[70%] shadow-md mt-3 flex items-center justify-around bg-gradient-to-r from-[#f54f2e] to-[#f6424d] rounded-md">
            <img src= {imgUrl} alt="" className="h-[90%] w-[9%]" />
            <div className="h-[100%] w-[20%] flex justify-center items-start flex-col text-[20px] font-[500] text-start">
                <h1 className="text-[30px] text-[#222222]">{name}</h1>
                <p className="text-[white]">-{author}</p>
            </div>
            <div className="h-[100%] w-[10%] flex justify-start items-center">
                <p className="text-[20px] text-[white] font-[500] h-[35px] w-[80%] border-2 border-white flex justify-center items-center rounded-md">Rs.{price}</p>
            </div>
            <div className="h-[100%] w-[20%] grid place-items-center">
                <button className="h-[20%] w-[20%] text-[25px] flex justify-center items-center text-[#222222]" onClick={delFunction}>
                     <AiFillDelete />
                </button>
            </div>
        </div>
    )
}
export default CartComponents