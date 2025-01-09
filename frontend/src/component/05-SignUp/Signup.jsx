import React, { useState } from "react";
import axios from "axios";

const SignUp=()=>{

    const [inp,setInp] = useState({
        username:"",
        email:"",
        password:""
    })
    const {username,email,password} = inp

    const handleInp=(e)=>{
        const {name,value} = e.target
        setInp({...inp,[name]:value})
    }
    
    const handleForm=async(e)=>{
        e.preventDefault()
        console.log(inp);

        const {data} = await axios.post("http://localhost:1234/create-acc",inp)
        console.log(data);
        
    }



    return(
        <div className="h-[100%] w-[100%] flex justify-center items-center bg-gradient-to-r from-[#f54f2e] to-[#f6424d]">
            <div className="h-[70%] w-[25%] rounded-[7px] shadow-2xl flex flex-col justify-around items-center bg-[#222222]">
            <div className="top h-[20%] w-[100%] flex justify-center items-end text-[40px] font-[600] text-[#f54f2e]">Please Sign Up !!</div>
            
                <form action="" className="h-[60%] w-[100%] flex justify-start items-center flex-col rounded-[7px] " onSubmit={handleForm}>
                    <input type="text" className="h-[40px] w-[70%] ps-4 rounded-[3px]  bg-[#191919] text-white" placeholder="Enter Username" name="username" value={username}  onChange={handleInp}/>
                    <br />
                    <input type="text" className="h-[40px] w-[70%] ps-4 rounded-[3px]  bg-[#191919] text-white" placeholder="Enter Email" name="email" value={email}  onChange={handleInp}/>
                    <br />
                    <input type="password" className="h-[40px] w-[70%] ps-4 rounded-[3px]  bg-[#191919] text-white" placeholder="Enter Password" name="password" value={password} onChange={handleInp}/>
                    <br />  
                    {/* <NavLink to="/forget">Forget Password?</NavLink> */}
                    <br />
                    <button className="h-[40px] w-[70%] bg-[#f54f2e] rounded-[3px] text-white">Sign Up</button>
                    <br />               
                </form>
            </div>
        </div>
    )
}
export default SignUp