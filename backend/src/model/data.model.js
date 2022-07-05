
 const mongoose=require('mongoose');

 const dataSchema= new mongoose.Schema({
     id:{type:Number ,require:true },
     title:{type:String,require:true}, 
     price:{type:Number , require:true}, 
     image:{type:String , require:true},
 

 },{
     versionKey:false,
     timestamps:true
 });

 
 const Data=mongoose.model("product",dataSchema);
 module.exports=Data;
