const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
  console.log("connect to DB");
})
.catch((err)=>{
  console.log(err);
});

async function main(){
  await mongoose.connect(MONGO_URL);
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



app.get("/",(req,res)=>{
  res.send("Hi, I am root");
});
app.get("/listings",async(req,res)=>{
 const allListings = await listings.find({});
 res.render("\listings/index.ejs",{allListings});

 
  
   });

//sample url
// app.get("/testListing",async(req,res)=>{
//   let sampleListing = new Listing({
//     title:"my new villa",
//     description:"By the beach",
//     price:1200,
//     location:"calangute,Goa",
//     country:"India",
//   });
//   await sampleListing .save();
//   console.log("sample was saved");
//   res.send("succesful testing");
// });
app.listen(8080,()=>{
console.log("server is listening to port 8080");
});
// this is my first comment