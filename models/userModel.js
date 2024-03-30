import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: String,

    email: String,

    password: String,

    phone: String,

    address: String,

    role: Number,
  },
  { timestamps: true }
);
const Userdata =mongoose.model("Userdata",userSchema);
export default Userdata ;
// export default mongoose.model("Userdata", userSchema);
