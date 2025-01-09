import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidStar } from "react-icons/bi";




const EachBook=()=>{
    const {id} = useParams()
    // console.log(id);

    const [card,setCard] = useState({})

    const getBookData = async()=>{
        const {data} = await axios.get(`http://localhost:1234/eachbook/${id}`)
        // console.log(data);
        setCard(data.book)
    }
    console.log(card);
    
    useEffect(()=>{
        getBookData()
    },[])
    
    const navigate = useNavigate()


    const addToCart =async()=>{
        const token = localStorage.getItem("jwt-token")
        
        const {data} = await axios.post(`http://localhost:1234/order/${id}`,card,{
            headers:{
                "jwt-token": token,
                "Content-Type": "application/json"
            }
        })
        console.log(data);
        navigate("/order")  

    }


    return(
        <div className="h-[100%] w-[100%] flex justify-center items-center">
            <div className="left h-[100%] w-[50%] flex justify-center items-center">
                <img src={card?.imgUrl} className="h-[80%] w-[50%]" alt="" />
            </div>
            <div className="right h-[100%] w-[50%] flex flex-col justify-center items-start ">
                <p className="text-[50px]  font-[500]">{card?.name}</p>
                <p className="text-[25px] font-[500]">By: {card?.author}</p>
                <br />
                <p className="text-[18px] text-start w-[70%]">{card?.summary}</p>
                <br />
                <p className="h-[22px] flex w-[10%] justify-start items-center text-yellow-500">{card?.rating} <BiSolidStar /></p>
                <br />
                <p className="text-[30px] font-[500]">Rs. {card?.price}</p>
                <br />
                <button className="h-[5%] w-[20%] bg-gradient-to-r from-[#f54f2e] to-[#f6424d] rounded-md text-white font-[500]" onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}
export default EachBook