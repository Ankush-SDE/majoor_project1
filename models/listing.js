const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingschema = new Schema({
  title:{
    type:String,
    required:true,
  },
  description:String,
  // image:{
  //   type:String,
  //   default:"default.jpg",
  //   set:(v)=> (v === ""?"default.jpg":v),
  // },


   image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: "https://via.placeholder.com/300",
    },
  },
  
  price:Number,
  location:String,
  country:String,
});
const Listing = mongoose.model("Listing",listingschema);
module.exports = Listing;