import TopNav from "./layout/TopNav";
import { Routes, Route } from "react-router";
import Counter from "./pages/Counter";
import Counter2 from "./pages/Counter2";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import P404 from "./pages/P404";
import Products from "./pages/Products";
import Users from "./pages/Users";
import User from "./pages/User";
export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <TopNav />

      <div className="h-full">
        <Routes>
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
    </div>
  );
}
