import React from "react";
import {Link, useNavigate} from "react-router-dom"

const Navbar=({props})=>{
    
    // console.log(props);

    const {refresh,setRefresh} = props
    

    function logout(){
        localStorage.clear()
        setRefresh(!refresh)
    }

    return(
        <nav className="h-[50px] w-[100%] bg-[#222222] flex justify-center items-center">
            {/* <div className="h-[100%] w-[20%] text-white flex items-center justify-center text-[22px]">ReadIt.</div> */}
            <div className="h-[100%] w-[50%] flex items-center justify-around text-[22px]">
                <Link to="/" className="text-white hover:text-[#f54f2e] text-[16px] font-sans duration-100 font-[5]">Home</Link>
                <Link to="/items" className="text-white hover:text-[#f54f2e] text-[16px] font-sans duration-100 font-[5]">Books</Link>
                
                {localStorage.getItem("jwt-token")?<Link to="/" className="text-white hover:text-[#f54f2e] text-[16px] font-sans duration-100 font-[5]" onClick={logout}>Logout</Link>:<Link to="/login" className="text-white hover:text-[#f54f2e] text-[16px] font-sans duration-100 font-[5]">Login</Link>}
            </div>
        </nav>
    )
}
export default Navbar