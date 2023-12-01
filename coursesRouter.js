const express = require('express');
const router = express.Router();
const courses = require('../Data/courses.json');

//קריאה לקבלת כל הקורסים.
router.get('/courses',(req,res)=>{
    res.send(courses);
});

//קריאה לקבלת קורס מסוים.
router.get('/courses/:courseId',(req,res)=>{
    const coursId=Number(req.params.courseId);
    const acourse=courses.find(course=>course.courseId===coursId);
    if(acourse){
        res.send(acourse.courseName);
    } 
    else
        res.status(404).send("error, not found");   
   
    
});

module.exports = router;
