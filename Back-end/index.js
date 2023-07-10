import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import nodemailer from "nodemailer"

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prathamgupta1455@gmail.com',
      pass: 'ibmxzxvxqduuacdi'
    }
});




const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log("DB connected")
})

const userSchema =new mongoose.Schema({
    name: String,
    email: String,
    password:String,
})

const driverSchema= new mongoose.Schema({
    name: String,
    rate: Number,
    city: String,
})

const bookSchema =new mongoose.Schema({
    name: String,
    city: String,
    rate:String,
    date: String,
    time: String,
    address: String
})

const User = new mongoose.model("User",userSchema)
const Driver = new mongoose.model("drivers_info",driverSchema)
const Booking = new mongoose.model("Booking",bookSchema)


//Routes
app.post("/login",(req,res)=> {
    const {email,password} = req.body
    User.findOne({email:email},(err,user)=> {
        if(user){
            if(password === user.password) {
                res.send({message: "Login Successfull",user:user})
            } else {
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message: "user not registered"})
        }
    })
})

app.post("/register",(req,res)=> {
    const {name,email,password} = req.body
    User.findOne({email:email},(err,user)=> {
        if(user){
            res.send({message:"User already registed"})
        }else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err=> {
                if(err) {
                    res.send(err)
                } else {
                    res.send({message:"success registered"})
                }
            })
        }
    })
})

app.post("/homepage",(req,res)=> {
    const {cityname,destination,cartype,date,time} = req.body
    Driver.find({city:cityname},(err,driverdata)=> {
        if(driverdata)
        {
            console.log(driverdata,time)
            res.send(driverdata)
            // res.send({drivercity:driverdata.city,drivername:driverdata.name,driverrate:driverdata.rate})
        }
        else{
            res.send({message:"No driver found"})
        }
    })
})

app.post("/book",(req,res)=> {
    const {name,city,rate,date,email,time,address} = req.body
    Booking.findOne({name:name,date:date,city:city,email:email},(err,book)=> {
        if(book){
            console.log(book)
            res.send({message:"Driver already booked"})
        }else{
            const book = new Booking({
                name,city,rate,date,email,time,address
            })
            console.log("This is books")
            console.log(book)
            book.save(err=> {
                if(err) {
                    res.send(err)
                } else {
                    res.send({message:"success booked"})
                    var mailOptions = {
                        from: name,
                        to: email,
                        subject: "New booking for your cab",
                        text: "Dear "+name+"\nYour service as a driver is required in your city: "+city
                        +"\nOn Date: "+date+"  Time: "+time+"\nPickup Address:"+address+"\nThank You for using our service\n\nRegards\nCabBooking"
                    };
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    }); 
                }
            })
        }
    })
})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})