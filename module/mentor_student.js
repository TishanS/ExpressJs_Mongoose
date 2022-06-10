const mentor_Student_Model=require('../model/mentor_student');

//Create Mentor
exports.createMentor = async(req,res,next)=>{
    const mentorData = new mentor_Student_Model.Mentor({...req.body.mentor})
        try{
            var response = await mentorData.save();
            res.send(response);
        }
        catch(error)
        {console.log(error)}
   
}

//Create Student
exports.createStudent = async(req,res,next)=>{
    const studentData = new mentor_Student_Model.Student({...req.body.student})
        try{
            var response = await studentData.save();
            res.send(response);
        }
        catch(error)
        {console.log(error)}
   
}

//Update mentor
exports.updateMentor = async(req,res,next)=>{
     try{
            var response= await mentor_Student_Model.Mentor.findByIdAndUpdate(req.params.mentorId,{...req.body.mentor},{new:true})
            res.send(response);
        }
        catch(error)
        {console.log(error)}
   
}

//Update student
exports.updateStudent = async(req,res,next)=>{
    try{
           var response = await mentor_Student_Model.Student.findOneAndUpdate({_id:req.params.studentId},{...req.body.student},{runValidators:true,new:true})
           res.send(response);
       }
       catch(error)
       {console.log(error)}
  
}


exports.deleteStudent = async(req,res,next)=>{
    try{
           var response = await mentor_Student_Model.Student.findByIdAndRemove(req.params.studentId)
           res.send(response);
       }
       catch(error){console.log(error)}
  
}

//Get student data
exports.getStudent = async(req,res,next)=>{
    try{
           var students = await mentor_Student_Model.Student.find();
           res.send(students);
       }
       catch(error)
       {console.log(error)}
  
}

//Get mentor data
exports.getMentor = async(req,res,next)=>{
    try{
           var mentor = await mentor_Student_Model.Mentor.find();
           res.send(mentor);
       }
       catch(error)
       {console.log(error)}
  
}


//No. of Students who have not assign mentor
exports.getstudentnotassignmentor = async(req,res,next)=>{
    try{
           var resp = await mentor_Student_Model.Student.aggregate([
               {$group:{
                _id:"$mentorName",
                noOfMentees:{$sum:1},
               }},
               {$match:{'_id':null}},
               {$project:{'_id':0}}
           ])
           res.send(resp);
       }
       catch(e){console.log(e)}
  
}

//No.of mentees for a particular mentor
exports.getmentees=async(req,res,next)=>{
    try{
           var response=await mentor_Student_Model.Mentor.aggregate([
               {$lookup:{
                    from:'students',
                    localField:'mentorName',
                    foreignField:'mentorName',
                    as:'MenteesList'
               }},
               {$addFields:{
                   No_of_mentees:'$MenteesList.studentName'
               }},
               {
                $project:{
                    _id:0,
                    mentorName:'$mentorName',
                    courseTaken:'$courseTaken',
                    No_of_mentees:'$No_of_mentees'
                    }  }
           ])
           res.send(response);
       }
       catch(e){console.log(e)}
  
}