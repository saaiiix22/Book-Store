import React, { useState } from "react";
import Navbar from "../01-Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../07-Footer/Footer";

const DefaultPage=()=>{

    const [refresh,setRefresh] = useState(false)

    return(
        <div className="h-[100%] w-[100%]">
            <div className="h-[50px] w-[100%] flex items-center justify-center bg-gradient-to-r from-[#f54f2e] to-[#f6424d]">
                {/* ReadIt. */}
                <img src="https://themewagon.github.io/book/img/logo.png" alt="" />

            </div>
            <Navbar props={{refresh,setRefresh}}/>
            <main className="h-[95vh] w-[100%] flex justify-center items-start">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default DefaultPage