import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { getAllData, insertAllData } from "./controllers/dashboard.controller.js";

dotenv.config();



const port = process.env.PORT || 8000;
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit:'1mb'}));

console.log(process.env.MONGODB_URL)

try{

mongoose
  .connect("mongodb+srv://vikashverma:vikash..123@cluster0.4ozgtam.mongodb.net/dashboard", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  app.listen(port , ()=>console.log('surver running on port ' + port))

  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
}
catch(err){
  console.log('Error '  ,err.message)
  alert(err.message)
}


  app.get('/' , (req,res)=>{
    res.send('hello from blackcoffer dashboard backend')
  } );
  
  app.get('/get-data' , getAllData );
  app.post('/insert-many' , insertAllData );