
 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://shr:shr@cluster0.vmhgq.mongodb.net/?retryWrites=true&w=majority");
    
 }

 
 module.exports=connectdb;
 