const mongoose = require("mongoose");
const schema = mongoose.schema;
const listingschema = new schema({
  title:{
    type:String,
    required:true,
  },
  description:String,
  image:{
    type:String,
    set:(v)=> v == ""?"":v,
  },
  price:Number,
  location:String,
  country:String,
});
const Listing = mongoose.model("Listing",listingschema);
modules.export = Listing;