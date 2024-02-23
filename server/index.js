const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/employee");

app.get('/', function(req, res){
    res.send("Hello World!");
 });

 app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body).then((employees)=>{res.json(employees)}).catch((err)=>{res.json(err)})
 })

 app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then((user)=>{
        if(user){
            if(user.password == password){
                res.json("Success");
            }else{
                res.json("Wrong Password");
            }
        }else{
            res.json("No user Found")
        }
    })
 })

app.listen(3000,()=>{
    console.log("Server started at 3000")
})