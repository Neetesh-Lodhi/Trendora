import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
          return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};



//Route for user login
const loginUser = async (req, res) => {

          try {
                    const { email, password } = req.body;

                    const user = await userModel.findOne({ email });
                    if (!user) {
                              return res.json({ success: false, message: "User not found" });
                    }

                    const isMatch = await bcrypt.compare(password, user.password);

                    if (isMatch) {
                              const token = createToken(user._id);
                              res.json({ success: true, token });
                    }
                    else {
                               res.json({ success: false, message: "Password is incorrect" });
                    }
                   
                    
          } catch (error) {
                    console.log(error);
                    return res.json({ success: false, message: "Something went wrong" });
          }
};

//Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validation email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email is not valid" });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
            //hashing user password
      
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            //create user
            const newUser = new userModel({ name, email, password: hashedPassword });


            const user = await newUser.save();

            //create token
            const token = createToken(user._id);

            return res.json({ success: true, token });
            
  } catch (error) {
            console.log(error);
     res.json({ success: false, message: error.message });
  }
};

//Route for admin login
const adminLogin = async (req, res) => {

          try {
                    const { email, password } = req.body;
                    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
                              const token = jwt.sign(email+password, process.env.JWT_SECRET);
                              res.json({success: true, token});
                    } else {
                              res.json({success: false, message: "Invalid credentials"});
                    }
          } catch (error) {
                    console.log(error);
                   res.json({ success: false, message: error.message });
      }    
};

export { loginUser, registerUser, adminLogin };
