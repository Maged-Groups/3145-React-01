import TopNav from "./layout/TopNav";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Counter2 from "./pages/Counter2";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import P404 from "./pages/P404";
import Products from "./pages/Products";
import Users from "./pages/Users";
import User from "./pages/User";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { loginUser } from "./lib/redux/userSlice";
import { useDispatch } from "react-redux";

export default function App() {
  const loggedinUser = localStorage.loggedinUser;

  const dispatch = useDispatch();

  console.log("loggedinUser", loggedinUser);

  if (loggedinUser) {
    const loggedinUserData = JSON.parse(loggedinUser);
    console.log("loggedinUserData", loggedinUserData);

    dispatch(loginUser(loggedinUserData));
  }

  return (
    <div className="h-screen flex flex-col">
      <TopNav />

      <div className="h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter-2" element={<Counter2 />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/auth/register" element={<RegisterForm />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="*" element={<P404 />} />
        </Routes>
      </div>

      <ToastContainer position="top-left" theme="dark" />
    </div>
  );
}
