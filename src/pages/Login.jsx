import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import ErrorComponent from "../components/messages/Error";
import { loginUser } from "../lib/redux/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [error, SetError] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // Create instance function from the useNavigate hook to be used inside the code
  const navigate = useNavigate();

  const dispatch = useDispatch();

  console.log("navigate", navigate);

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log("username", username);
    console.log("password", password);

    const credintials = {
      username,
      password,
    };

    console.log("credintials", credintials);
    const body = JSON.stringify(credintials);

    // Fetch Data
    const api = `https://dummyjson.com/auth/login`;
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };

    fetch(api, init)
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.id) {
          // Success
          console.log("responseData after success", responseData.firstName);

          //  Send user responseData to redux
          dispatch(loginUser(responseData));

          // Save data to local storage

          localStorage.loggedinUser = JSON.stringify(responseData);

          navigate("/");
        } else {
          SetError(responseData.message);
          toast.error(<ErrorComponent message={responseData.message} />, {
            icon: false,
            closeButton: false,
          });
          // toast(responseData.message);
          // toast.error(responseData.message);
          // toast.success(responseData.message, {
          //   theme: 'light'
          // });
          // toast.warning(responseData.message);
          // toast.info(responseData.message);
        }
      });
  };

  return (
    <div className="registration-form mx-auto mt-7 bg-white shadow rounded-xl p-6 space-y-4">
      <h2 className="text-center py-3 font-black text-2xl text-gray-800">
        Login to Your Account
      </h2>

      <div>
        <div className="form-group flex flex-col space-y-1">
          <label htmlFor="username" className="text-gray-700 font-medium">
            Username
          </label>
          <input
            ref={usernameRef}
            type="text"
            name="username"
            placeholder="Enter Your Username"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="form-group flex flex-col space-y-1">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="text-red-500 text-sm">
          {error && <p className="text-red-600">{error}</p>}
        </div>

        <div className="form-group checkbox-group flex items-center space-x-2 mt-2 mb-2">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms" className="text-gray-700 ">
            Remember Me
          </label>
        </div>

        <button
          onClick={handleLogin}
          className="submit-btn mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <div>
          {/* Do not have account */}
          <p className="text-gray-700 text-sm">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-blue-600 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
