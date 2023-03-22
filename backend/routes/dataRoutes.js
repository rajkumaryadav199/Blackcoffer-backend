const express = require('express')
const router = express.Router()
const {getData,setData} = require('../controller/dataController')
 
router.get('/',getData).post('/', setData)

 
module.exports = router