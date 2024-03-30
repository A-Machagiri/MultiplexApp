import express from "express";
import colors from "colors";
import morgan from "morgan";
import Userdata from "./models/userModel.js";
import connectDB from "./config/db.js";
import cors from "cors";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, address, role } = req.body;
    const newUser = new Userdata({
      name,
      email,
      password,
      phone,
      address,
      role,
    });
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error registering user" });
  }
});
app.post("/login",(req,res)=>{
  const{email,password}=req.body;
  Userdata.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success");
      }else{
        res.json("The password is inCorrect")
      }
    }else{
      res.json("No Record existed");
    }
  })
  .catch(error=>{
    console.error(error);
    res.status(500).json("An error occurred during login");
  })
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(
    `Serving in mode on running on port http://localhost:${PORT}`.bgCyan.white
  );
});
