const express=require('express');
const router=express.Router();

const addData=require('./student')

router.use('/add_student',addData)

module.exports=router;


