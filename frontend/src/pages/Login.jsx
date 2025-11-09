import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { setToken, backendUrl } = useContext(ShopContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
        if (response.data.success) {
          const token = response.data.token;
          setToken(token);
          localStorage.setItem("token", token);
          toast.success("Account created successfully!");
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
        if (response.data.success) {
          const token = response.data.token;
          setToken(token);
          localStorage.setItem("token", token);
          toast.success("Login successful!");
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden">
      {/* Floating soft background circles */}
      <div className="absolute w-72 h-72 bg-pink-200 opacity-30 rounded-full top-16 left-20 blur-3xl"></div>
      <div className="absolute w-80 h-80 bg-pink-300 opacity-25 rounded-full bottom-16 right-20 blur-3xl"></div>

      <form
        onSubmit={onSubmitHandler}
        className="relative z-10 flex flex-col items-center w-[90%] sm:max-w-md m-auto p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border border-pink-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,182,193,0.3)]"
      >
        <div className="flex items-center gap-2 mb-6">
          {currentState === "Login" ? (
            <LogIn className="text-pink-500" size={28} />
          ) : (
            <UserPlus className="text-pink-500" size={28} />
          )}
          <p className="text-3xl text-gray-800 font-semibold tracking-wide">
            {currentState}
          </p>
        </div>

        {/* Name Field */}
        {currentState === "Sign Up" && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Your Name"
            required
            className="w-full mb-3 px-4 py-3 rounded-lg bg-pink-50 text-gray-800 placeholder-gray-500 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          />
        )}

        {/* Email Field */}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Your Email"
          required
          className="w-full mb-3 px-4 py-3 rounded-lg bg-pink-50 text-gray-800 placeholder-gray-500 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
        />

        {/* Password Field */}
        <div className="relative w-full mb-3">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-lg bg-pink-50 text-gray-800 placeholder-gray-500 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          />
          <div
            className="absolute right-4 top-3 text-gray-500 cursor-pointer hover:text-pink-500 transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        {/* Forgot Password / Switch State */}
        <div className="w-full flex justify-between text-sm text-gray-500 mt-[-4px] mb-2">
          <p className="cursor-pointer hover:underline hover:text-pink-600">
            Forgot Password?
          </p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer hover:underline hover:text-pink-600"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer hover:underline hover:text-pink-600"
            >
              Already have an account?
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 hover:bg-pink-600 transition-transform duration-300"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
