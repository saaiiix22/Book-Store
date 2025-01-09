import React from "react";
import { useNavigate } from "react-router-dom";

const MainBody=()=>{

    const navigate = useNavigate()

    return(
        <>
            <div className="h-[70%] w-[100%] bg-gradient-to-r from-[#f54f2e] to-[#f6424d] flex justify-center items-center">
                <div className="left h-[70%] w-[50%] flex flex-col justify-center items-end pe-10">
                    <p className="text-[50px] font-[600] text-white">New Adventure</p>
                    <p className="text-[15px] text-end w-[60%] text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias aliquid consequatur maxime culpa fuga necessitatibus temporibus libero tenetur sed. Delectus, voluptate molestias!</p>
                    <br />
                    <button className="h-[30px] w-[15%] bg-white text-[#f54f2e] rounded-sm hover:bg-[#222222] hover:text-[white] duration-100" onClick={()=>{navigate("/items")}}>Explore More</button>
                </div>
                <div className="right h-[100%] w-[50%]">
                    <img src="https://themewagon.github.io/book/img/header-img.png" className="h-[100%] w-[55%]" alt="" />
                </div>
            </div>
        </>
    )
}
export default MainBody