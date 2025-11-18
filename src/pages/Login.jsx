import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const userData = { username, password };
    const userDataJson = JSON.stringify(userData);

    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: userDataJson,
    });

    if (res.status === 200) {
      alert("Logged in successfully");
    } else {
      alert("Login failed. Please try again.");
    }
  };

  const ValidateUsername = () => {
    if (username.length === 0)
      return <small className="text-sky-500">Enter a username</small>;
    else if (!/^[a-zA-Z0-9_]{3,15}$/.test(username))
      return (
        <small className="text-red-500">
          3-15 characters, letters/numbers/underscore only
        </small>
      );
    else return <small className="text-green-500">Accepted</small>;
  };

  const ValidatePassword = () => {
    if (password.length === 0)
      return <small className="text-sky-500">Enter a password</small>;
    else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password))
      return (
        <small className="text-red-500">
          At least 6 chars, include letters & numbers
        </small>
      );
    else return <small className="text-green-500">Accepted</small>;
  };

  return (
    <div className="registration-form">
      <div className="mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <div className="flex justify-between">
            <ValidateUsername />
            <small>{username.length}/15</small>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="flex justify-between">
            <ValidatePassword />
            <small>{password.length}/20</small>
          </div>
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">Remember Me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 "
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}
