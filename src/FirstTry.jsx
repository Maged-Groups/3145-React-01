import { useState } from "react";

export default function Challange () {
    let passwordMassage = "";
    
    
    
    const [LastName, SetLastName] = useState ("")
    const [FirstName, SetFirstName] = useState ("")
    const [password, SetPassword] = useState ("")
    const [confirmPassword, SetConfirmPassword] = useState ("")
    
    if (password === "" && confirmPassword === "") {
        passwordMassage = ""
    }
    else if (password === confirmPassword) {
        passwordMassage = "✅Password Matches"
    }
else {
    passwordMassage = "❌ Password Does not Match"
}
    return (
        <div>
            <span   className="flex justify-center text-2xl text-red-800"><p>Welcome:  {FirstName} {LastName}</p></span>
            <form   className=" max-w-lg bg-white p-6 rounded-lg shadow-md mx-auto">
          <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            onChange={(anything) => SetFirstName(anything.target.value)}
             className="w-full p-3 mb-4 border border-gray-300 rounded-lg "
          />
          </div>
          <div>
                      <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            onChange={(LastName) => SetLastName(LastName.target.value)}
             className="w-full p-3 mb-4 border border-gray-300 rounded-lg "
          />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg "
          />
          </div>
          <div>
                     <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            onChange={(e) => SetPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg "
          />
        </div>
        <div>
                      <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            onChange={(x) => SetConfirmPassword(x.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg "
          />
        </div>
        
        <div>
            {passwordMassage}
        </div>

        <div>
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>

<button
type="submit"
className="w-full bg-blue-500 hover:bg-blue-600 py-2 text-white rounded-md font-semibold"
>
    Sign In
</button>
      </form>
      
          </div>
        
    
        
    )
}