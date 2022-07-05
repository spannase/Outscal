
  const express=require('express');
const  Product= require('../model/data.model');

  
 
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        return res.send("Product data added")
    }
    catch(err)
    {
        return res.send(`${err}- failed to add`)
    }
})

router.get("",async(req,res)=>{

    const page = req.query.page || 1;
    const size = 15;
    let filter = req.query.filter 
    let sort = req.query.sort
    let greater = filter - 200;
    
    try{
        let product;
        let message;

        if(filter == undefined && sort == undefined)
        {
            message = "Filter undefined and sort undefined"
            product = await Product.find().skip((page-1)*size).limit(size)
            .lean().exec();
        }
        else if(filter == "undefined" && sort != undefined)
        {
            message = "Filter undefined and sort defined"
            product = await Product.find().skip((page-1)*size).limit(size)
            .sort({"price":sort}).lean().exec();
        }
        else if(sort == undefined && filter != "undefined")
        {
            message = "Filter defined and sort undefined"
            product = await Product.find({$and:[{price:{$lte:filter}},{price:{$gte:greater}}]})
            .skip((page-1)*size).limit(size).lean().exec();
        }
        else
        {
            message = "Both defined"
            product = await Product.find({$and:[{price:{$lte:filter}},{price:{$gte:greater}}]})
            .skip((page-1)*size).limit(size)
            .sort({"price":sort}).lean().exec();
            
        }
        return res.send({product,message})
    }
    catch(err)
    {
        message = [filter == "undefined",filter,sort != undefined,sort]
        return res.send({err,message})
    }
})

module.exports = router
  
  // router.post("/", async(req,res)=>{
  //     try {
  //         const products=await Data.create(req.body);
  //         return res.status(200).send({products});
  //     } catch (error) {
  //         console.log(error);

  //           return res.status(400).send({message:error.message});
  //     }
  // })



  // // router.get("",async(req,res)=>{
  // //   try {
  // //     const page = req.query.page || 1;
  // //     const size = req.query.size || 6;
  
  // //       const women=await Data.find()
  // //       .skip((page - 1) * size)
  // //       .limit(size)
  // //       .lean().exec();
  
  // //       const total_pages = Math.ceil(  (await Data.find().countDocuments()) / size   );
  
  // //       return res.status(200).send({women,  total_pages });
  // //   } catch (error) {
  // //       console.log(error);
  
  // //         return res.status(400).send({message:error.message});
  // //   }
  // // })
  
 
  // router.get("",async(req,res)=>{
  //     try {
  //         const products=await Data.find().lean().exec();
  //         return res.status(200).send({products});
  //     } catch (error) {
  //         console.log(error);

  //           return res.status(400).send({message:error.message});
  //     }
  // })

 

  module.exports=router;
  