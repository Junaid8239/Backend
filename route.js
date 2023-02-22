const express=require('express');
const apiHandler =require('./apiHandler')

module.exports =(app)=>{
    app.use(express.json());
    app.use('/api/student',apiHandler)

};


