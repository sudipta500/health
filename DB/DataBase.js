const mongoose = require("mongoose");

const dataBase = ()=>{
    mongoose.connect(process.env.DATABASE)
    .then(()=>console.log("DB connected successful"))
    .catch(()=>console.log("Sorry not connect DB"))
}
module.exports=dataBase;