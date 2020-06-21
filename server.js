const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// const User= require("./models/User");
const mongoose = require("mongoose"); //connect with the database

const path = require("path");
app.use(cookieParser()); //for the authentication all the request with this cookie
app.use(express.json());


//mongoose.connect("mongodb://localhost:27017/challedu",{useNewUrlParser: true , useUnifiedTopology: true },()=>{ // warnings
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://manolis:manolis@cluster0-jvd3y.mongodb.net/<dbname>?retryWrites=true&w=majority",{useNewUrlParser: true , useUnifiedTopology: true },()=>{
console.log("connected to database");

});
                                
const userRouter = require("./routes/User");
const PORT = process.env.PORT || 5000;
app.use("/user",userRouter);

if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));

app.get("*",(req, res)=>{
res.sendFile(path.join(__dirname, "client","build","index.html"));
});
}

app.listen(PORT,()=>{
console.log("express server started");

});

