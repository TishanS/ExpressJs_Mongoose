const express = require('express');

const router=express.Router();

const getModule=require('../module/mentor_student.js');

router.get('/findmentor',getModule.getMentor);

router.get('/getstudent',getModule.getStudent);

router.post('/create',getModule.createMentor);

router.post('/post',getModule.createStudent);

//router.put('/update/:mentorId',getModule.updateMentor);

router.put('/update/:studentId',getModule.updateStudent);

router.delete('/remove/:studentId',getModule.deleteStudent);

//router.get('/get',getModule.getStudent);

router.get('/get',getModule.getmentees);


module.exports=router;