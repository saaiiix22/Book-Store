import React, { useEffect } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const Items=()=>{

    const dispatch =  useDispatch()
    const bookState = useSelector((state)=>state)
    console.log(bookState?.books);
    

    const allBooks=async()=>{
        const {data} = await axios.get("http://localhost:1234/read-book")
        // console.log(data);
        // console.log(data.books);
        dispatch(setBooks(data.books));
    }
    useEffect(()=>{
        allBooks()
    },[])

    const navigate = useNavigate()
    return(
        <div className="h-[100%] w-[100%] flex items-center justify-start flex-wrap gap-2 ps-5">
            {bookState?.books.map((i,index)=>{
                return(
                    <li key={index} className="h-[250px] w-[200px] bg-white list-none flex flex-col justify-start items-center text-center gap-2 shadow-xl rounded-s" onClick={()=>(navigate(`/eachbook/${i._id}`))}>
                        <p className="text-[#222222] font-[600]">{i.name}</p>
                        <img src={i.imgUrl} alt="" className="h-[75%] w-[70%]" />
                        <p className="text-[14px] text-[#f54f2e]">{i.author}</p>
                    </li>
                )
            })}
        </div>
    )
}
export default Items