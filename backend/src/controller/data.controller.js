
  const express=require('express');
const Data = require('../model/data.model');

  const router=express.Router();

  
  router.post("/", async(req,res)=>{
      try {
          const products=await Data.create(req.body);
          return res.status(200).send({products});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })



  router.get("",async(req,res)=>{
    try {
      const page = req.query.page || 1;
      const size = req.query.size || 6;
  
        const women=await Data.find()
        .skip((page - 1) * size)
        .limit(size)
        .lean().exec();
  
        const total_pages = Math.ceil(  (await Data.find().countDocuments()) / size   );
  
        return res.status(200).send({women,  total_pages });
    } catch (error) {
        console.log(error);
  
          return res.status(400).send({message:error.message});
    }
  })
  
 
  // router.get("",async(req,res)=>{
  //     try {
  //         const products=await Data.find().lean().exec();
  //         return res.status(200).send({products});
  //     } catch (error) {
  //         console.log(error);

  //           return res.status(400).send({message:error.message});
  //     }
  // })

//   router.get("/:id",async(req,res)=>{
//     try {
//         const products=await Data.findById(req.params.id).lean().exec();
//         return res.status(200).send({products});
//     } catch (error) {
//         console.log(error);

//           return res.status(400).send({message:error.message});
//     }
// })


//pagination--

  module.exports=router;
  