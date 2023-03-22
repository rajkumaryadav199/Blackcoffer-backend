const asyncHandler = require('express-async-handler') 

const Data = require("../models/dataModel")

const getData = asyncHandler( async (req,res) =>{
   const data = await Data.find()
   
    res.status(200).json(data)
})

const setData = asyncHandler( async(req,res) =>{
  // console.log(req.body)
  if(!req.body) {
    res.status(400) 
    throw new Error( "plz add text")
   }

   const data = await Data.create(req.body)
   res.status(200).json({ status: 'ok', data: data})
}
)
module.exports ={
    getData,
    setData
}