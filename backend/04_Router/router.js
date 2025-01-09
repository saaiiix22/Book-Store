const express = require("express")
const { accModel, bookModel, orderModel } = require("../03_model/model")
const routerMan = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = "asygasf8a7sf4asf43a8s7fasffas76a8syfk31v412"


// ! SEE-ALL ACCOUNTS
// routerMan.get("/see-accounts",async(req,res)=>{
//     try {
//         const getItem = await accModel.findOne()
//         if(getItem){
//             res.json({message:"data got"})
//         }
//         else{
//             res.json({message:"data not found"})
//         }
//     } catch (error) {
//         res.json({message:"Error"})
//     }
// })
// ! CREATE AN ACCOUNT
routerMan.post("/create-acc", async(req,res)=>{
    let {username,email,password} = req.body
    try {
        const genSalt = await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(password,genSalt)
        const createAcc = await accModel.insertMany([{username,email,password:hashpass}])
        if(createAcc){
            res.json({message:"Account Created"})
        }
        else{
            res.json({message:"Account not created"})
        }
    } catch (error) {
        res.json({message:"Error while creation"})
    }
})

// ! LOGIN
routerMan.post("/login", async(req,res)=>{
    let {email,password} = req.body
    try {
        const checkLogin = await accModel.findOne({email})
        if(checkLogin){
            const checkPass = await bcrypt.compare(password,checkLogin.password)
            if(checkPass){
                const loginToken = await jwt.sign({user:checkLogin},secretKey,{expiresIn:"1hr"})
                res.json({message:"Logged In",token:loginToken,checkLogin})
                console.log("Login pass");                
            }
            else{
                res.json({message:"Wrong Password"})                
                console.log("Login failed");
            }
        }
        else{
            res.json({message:"Wrong Inputs"})                
        }
    } catch (error) {
        res.json({message:"Logged Failed"})
        console.log(error);
    }
})

// ! READ ALL BOOKS

routerMan.get("/read-book", async(req,res)=>{
    try {
        const readBook = await bookModel.find()
        if(readBook){
            res.json({message:"All Books Read..", books:readBook})
        }
        else{
            res.json({message:"Can't read book"})
        }
    } catch (error) {
        res.json({message:"Error"})
    }
})

// ! GET-PARTICULAR BOOK

routerMan.get("/eachbook/:id", async(req,res)=>{

    let {id} = req.params

    try {
        const partBook = await bookModel.findOne({_id:id})
        res.json({book:partBook,id})
    } catch (error) {
        res.json({message:"Internal Server Error"})
    }
})

// ! MIDDLEWARE
const verifyToken = async(req,res,next)=>{
    const token = req.headers["jwt-token"]
    if(token){
        jwt.verify(token,secretKey,(err,result)=>{
            if(err){
                res.json({message:"Unable to verify token"})
            }
            else{
                // console.log(result.user);
                req.user = result.user
                console.log("Middle-Ware Working");
            }
        })
    }
    next()
}

// ! INSERT BOOK TO CART
routerMan.post("/order/:id",verifyToken,async(req,res)=>{
    let currentUser = req.user
    let {id} = req.params
    try {
        if(currentUser){
            const findBook = await bookModel.findOne({_id:id})
            const addToCart = await orderModel.insertMany([{name:findBook.name,author:findBook.author,price:findBook.price,rating:findBook.rating,summary:findBook.summary,imgUrl:findBook.imgUrl,buyerId:currentUser._id}])
            res.json({message:"Added to cart"})
            // console.log(addToCart);
        }
    } catch (error) {
        res.json({message:"ERROR"})
    }
})
// ! READ CART ITEMS
routerMan.get("/cartbuynow",verifyToken,async(req,res)=>{
    let currentUser = req.user
    console.log(currentUser);
    
    try {
        if(currentUser){
            const readCart = await orderModel.find({buyerId:currentUser._id})
            res.json({message:"here are the items",items:readCart})
        }
    } catch (error) {
        res.json({message:"ERROR"})        
    }
})

// ! REMOVE AN ITEM FROM CART
routerMan.delete("/removeitem/:id",verifyToken,async(req,res)=>{
    let {id} = req.params
    let currentUser = req.user
    try {
        const delUser = await orderModel.deleteOne({_id:id,buyerId:currentUser._id})
        res.json({message:"removed"})
    } catch (error) {
        res.json({message:"Couldn't delete"})
    }
})
module.exports = routerMan