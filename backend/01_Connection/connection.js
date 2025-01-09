const mongoose = require("mongoose")

const connect =async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        if(conn){
            console.log("Db connected");
        }
        else{
            console.log("Db not connected");
        }
    } catch (error) {
        console.log("DB Connection Error");
    }
}
module.exports = connect
