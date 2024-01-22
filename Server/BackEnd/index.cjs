const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors=require("cors");
const dotenv = require('dotenv');

console.log("Loading .env file:", process.env.AUTH);
console.log(dotenv);
dotenv.config();

app.use(cors());
app.use(express.json());

// Define mongoose schemas

  
  
  
  const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean,
    creator: String
  });
  const Course = mongoose.model('Course', courseSchema);

  mongoose.connect("mongodb+srv://sanjayduttyoyohoney:G3OQVIVmT92zRM1H@cluster0.jyox4xj.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true});


  app.delete("/admin/courses", async(req, res)=>{
    const{courseId}=req.body;
    console.log(courseId);
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    res.json({message:"course deleted successfully"});
  })

  app.post('/admin/courses', (req, res) => {
    // logic to create a course
    const{title, description, price, published,  creator, imageLink}=req.body;
    const objs={
      title: title,
      description: description,
      price: price,
      published: published,
      imageLink: imageLink,
      creator: creator
    }
    const newCourse= new Course(objs);
    newCourse.save();
    res.json({message: "Course created successfully"});
  
  
  
  });

  app.put('/admin/courses',async(req, res) => {
    // logic to edit a course
    const{title, description, price, published, imageLink, courseId}=req.body;
    const objs={
      title: title,
      description: description,
      price: price,
      published: published,
      imageLink: imageLink
    }
    const check=await Course.findByIdAndUpdate(courseId, objs, {new: true});
    if(check){
      res.json({message: "course updated successfully"});
    }else{
      res.status(404).json({message: 'couse not found'});
    }
  
  });

  app.get('/admin/courses', async(req, res) => {
    // logic to get all courses
    const courses=await Course.find({});
    res.json(courses);
  
  });
  app.post("/admin/checkcourses", async(req, res)=>{
    const {creator}=req.body;
    const courses=await Course.find({creator:creator});
    console.log(creator);
    if (!courses.length) {
      return res.status(404).json({ message: 'No courses found for the specified creator.' });
    }
    res.json(courses);
  });

  app.get("/purchasedcourses", async(req, res)=>{
    const{courseArray}=req.body;
    const ans=[];
    console.log(courseArray);
   if(courseArray){
    for(let i=0; i<courseArray.length; i++){
      const check=await Course.findById(courseArray[i]);
      ans.push(check);
      
    }
   }
    res.json(ans);
  })

  app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
