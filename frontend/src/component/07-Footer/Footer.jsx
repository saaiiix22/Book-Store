import React from "react";

const Footer=()=>{
    return(
        <footer className="h-[300px] w-[100%] bg-[#222222] flex">
            <div className="left h-[100%] w-[33%] flex flex-col justify-center items-center text-center">
                <p className="text-[22px] font-[600] text-white ps-4">About Us</p>
                <br />
                <p className="text-[13px] text-center text-[#606260]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium perspiciatis totam consectetur officia commodi quod maxime saepe tempora illo quisquam, inventore autem illum ex hic nemo sed quibusdam eligendi!</p>
                <br />
                <br />
                <p className="text-[13px] text-center text-[#606260]">Copyright ©2024 All rights reserved, made by<span className="text-slate-200"> @sainaivedya</span></p>
            </div>
            <div className="mid h-[100%] w-[33%] flex flex-col justify-start items-center text-center pt-12 ">
                <p className="text-[22px] font-[600] text-white ps-4">Newsletter</p>
                <br />
                <p  className="text-[13px] text-center text-[#606260]">Stay update with our latest</p>
                <br />
                <div className="h-[17%] w-[70%] flex justify-center items-center gap-5">
                    <input type="text" className="h-[100%] w-[70%] bg-[#191919] ps-5 text-white"  placeholder="Enter Email" />
                    <button className="h-[100%] w-[25%] bg-gradient-to-r from-[#f54f2e] to-[#f6424d] font-[600] text-white border-none outline-none">Order</button>
                </div>
                
            </div>
            <div className="right h-[100%] w-[33%]"></div>
        </footer>
    )
}
export default Footer