import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useSignup } from "../../hooks/useSignup";
import Breadcrumbs from "../../components/Breadcrumbs";
import AlertMessage from "../../components/alerts/DeleteAccountAlert";

const CreateAccount = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const { login } = useLogin()
  const { signup } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(isLogin, email, password, firstName, lastName, role);
    if (isLogin) {
      console.log(email, password)
      login(email, password)
        //   
        .then(res => window.location = "/dashboard")

      // if(res){
      // }
    }
    else {
      await signup(email, password, firstName, lastName, role)
    }
  };

  var options = [
    { value: "admin", label: "Admin" },
    { value: "dispatcher", label: "Dispatcher" },
    { value: "csm", label: "CSM" },
    { value: "cardManager", label: "Card Manager" },
  ];
  return (
    <div>
      <div className="topBar fixed flex min-h-[2rem] mt-[3.7rem] w-[60rem] my-2 z-50 bg-background items-center rounded-[20px] shadow-md ml-[25rem] ">
        <div className="titleBar w-[10rem] mb-[2rem] mt-[2rem]">
          <Breadcrumbs />
        </div>
      </div>

      <div className="centerBar flex flex-col shadow-md ml-[25rem] min-h-[30rem] w-[60rem] my-2 mt-[10rem] bg-background rounded-[30px] ">
        <div className="text-3xl font-poppins mt-[2rem]">
          <h1 className="ml-[6rem]">Create KTS Employee Accounts</h1>
        </div>
        {/* <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
            <div className="flex gap-8">
              <div className="flex flex-col gap-4 w-[25rem]">
                <input
                  className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                  type="text"
                  placeholder="Email"
                />

                <input
                  className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                  type="text"
                  placeholder="First Name"
                />

                <input
                  className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div className="flex flex-col gap-4 w-[25rem]">
                <input
                  className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                  type="password"
                  placeholder="Create Password"
                />

                <input
                  className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins "
                  type="password"
                  placeholder="Confirm Password"
                />

                <select
                  className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins text-quaternary"
                  name="role"
                  id="role"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            <div>
              <button className="mt-5 w-[25rem] py-2 px-10 rounded-full border-quinary border bg-tertiary text-[#F2785C] font-poppins hover:bg-quaternary hover:text-tertiary transition-colors">
                Create Account
              </button>
            </div>
          </div>
        </div> */}
        <div className="mt-8">
          <form>

              {/* Sign Up segment */}
              <div className="flex gap-8">
                <div className="flex flex-col gap-4 w-[25rem]">
                  {!isLogin && (
                    <input
                      className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  )}

                  {!isLogin && (
                    <input
                      className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  )}

                  {!isLogin && (
                    <input
                      className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  )}
                </div>

                <div className="flex flex-col gap-4 w-[25rem]">
                  {!isLogin && (
                    <input
                      className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                      type="password"
                      placeholder="Create Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  )}

                  {!isLogin && (
                    <select
                      className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins text-quaternary"
                      name="role"
                      id="role"
                      placeholder="select role"
                      value={role} // Set the value attribute to the state variable 'role'
                      onChange={(e) => setRole(e.target.value)} // Set the state variable 'role' on change
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
              {/* This is the login button */}
              <div>
                <button
                  onClick={handleSubmit}
                  className="  mt-5 w-[25rem] py-2 px-10 rounded-full border-quinary border bg-tertiary text-[#F2785C] font-poppins hover:bg-quaternary hover:text-tertiary transition-colors"
                >
                  {"Create Account"}
                </button>
              </div>
    

            {/* The lower saks */}
           

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
