const express=require('express');
const dotenv=require('dotenv');
const mongo=require('./shared');

const mentor_student_Router=require('./router/mentor_student');
const res = require('express/lib/response');
dotenv.config();
const app=express();

app.use(express.json()); //inbuilt middleware //convert req body into json format

mongo.connectMongoose();


app.use('/mentor',mentor_student_Router);
app.use('/student',mentor_student_Router);

app.use('/', (req,res,next) => {
    console.log("Dashboard");
    res.send("hi heroku");
    next();
})

const port=process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Server started successfully!!");
});