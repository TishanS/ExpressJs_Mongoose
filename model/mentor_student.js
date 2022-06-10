const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const mentorSchema = new Schema({
    mentorId:{
        type:Number,
        required:true
    },
    mentorName:{
        type:String,
        maxLength:25,
        required:true
    },
    courseTaken:{
        type:String,
        required:true
    },
});

const studentSchema=new Schema({
    studentId:{
        type:Number,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    mentorName:{
        type:String,
        required:false
    }
});


const Mentor=mongoose.model('Mentor',mentorSchema);
const Student=mongoose.model('Student',studentSchema);

module.exports={
    Mentor,
    Student
}