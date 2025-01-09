import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login=()=>{

    const [inp,setInp] = useState({
        email:"",
        password:""
    })

    let {email,password} = inp

    const navigate = useNavigate()

    const handleInp=(e)=>{
        const {name,value} = e.target
        setInp({...inp,[name]:value})
    }

    const handleForm=async(e)=>{
        e.preventDefault()
        // console.log(inp);
        const {data} = await axios.post("http://localhost:1234/login",inp)
        console.log(data);
        const token = localStorage.setItem("jwt-token",data.token)
        setInp({email:"",password:""})
        if(data.message == "Logged In"){
            navigate("/")
        }
    }

    

    return(
        <div className="h-[100%] w-[100%] flex justify-center items-center bg-gradient-to-r from-[#f54f2e] to-[#f6424d] ">
            <div className="h-[70%] w-[25%] rounded-[7px] shadow-2xl flex flex-col justify-around items-center bg-[#222222]">
                <div className="top h-[20%] w-[100%] flex justify-center items-end text-[40px] font-[600] text-[#f54f2e]">Please Login !!</div>
                <form action="" className="h-[60%] w-[100%] flex justify-start items-center flex-col rounded-[7px] " onSubmit={handleForm}>
                    <input type="text" className="h-[40px] w-[70%] ps-4 rounded-[3px] text-[white] bg-[#191919]" placeholder="Enter Email" name="email" value={email}  onChange={handleInp}/>
                    <br />
                    <input type="password" className="h-[40px] w-[70%] ps-4 rounded-[3px] text-[white] bg-[#191919]" placeholder="Enter Password" name="password" value={password} onChange={handleInp}/>
                    <br />  
                    <br />
                    <button className="h-[40px] w-[70%] bg-[#f54f2e] rounded-[3px] text-white">Login</button>
                    <br />               
                    <NavLink to="/signup" className="text-[#f54f2e]">Dont have an account?SignUp</NavLink>
                </form>
            </div>
        </div>
    )
}
export default Login