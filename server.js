
const express = require('express');
const http = require('http')
const bodyParser = require('body-parser');
const Db = require('./database/db');
const cors = require('cors');
const app = express();

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const server = http.createServer(app);
const port = 8000;
const RegisterSchema = require('./model/register')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const nodemailer = require('nodemailer');
const router = express.Router();
const bcrypt = require('bcryptjs')
var generator = require('generate-password');
const dotenv = require("dotenv");
app.use(cors());
dotenv.config();


server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

mongoose.set('strictQuery', false)
mongoose.Promise = global.Promise;
mongoose.connect(process.env.BD_CONNECTION, () => console.log("database connected"))
app.use('/', router);

var password = generator.generate({
  length: 10,
  numbers: true
});
router.post('/register/new', (req, res) => {

 
          let data=req.body;
          data.Password=bcrypt.hashSync(password, 8),

          RegisterSchema.create(req.body, (error, data) => {
              if (error) {
                  return next(error);
              } else {
                  
                  res.status(200).json(data);
              }
          });

      
  })
  router.post("/sendloginid", async (req, res) => {
    
    var transport = nodemailer.createTransport({
      service: 'gmail',

      auth: {
          user: "skdemos41@gmail.com",
          pass: "wubtkeehsbyrbemt"
      },
      tls : { rejectUnauthorized: false }
    });

    var mailOptions = {
      from: 'skdemos41@gmail.com',
      to: req.body.Email,
      subject: 'Welcome to the life care trust',
      text: ` Welcome ,you have successfully registered for the membership. We will get back to you`
    };

     transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
           res.status(200)
        }
    });
})
router.get('/members', (req, res) => {

  RegisterSchema.find( (error, data) => {

      if (error) {
        console.log(error)
          return ;
      } else {
          
          res.json(data);
      }
  });


})
router.post("/superadmminlogin",async(req,res)=>{
  const {Email,Password}=req.body
 // const user=await RegisterSchema.findOne({Email:req.body.Email});
 let token = jwt.sign( {"id":user._id},'mynameissalahuddinsksk',  { noTimestamp:true, expiresIn: '5m' });
  if(Email=='superadmin123@gmail.com'&& Password=='12345678'){
    res.status(200).json({
      token:"mynameissalahuddinsksk"
      })
}else{
  res.json({
    success:false,message:"Wrong Admin or Password"
  })
}
// let isMatch=bcrypt.compare(Password,user.Password)
  









})


