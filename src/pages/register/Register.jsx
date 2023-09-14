import React, { useState } from "react";

//Images
import registerImg from "../../assets/img/register Img-01.png";
import { auth, signUp } from "../../services/authService";
import { useLogin } from "../../hooks/useLogin";
import { useSignup } from "../../hooks/useSignup";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const {login} = useLogin()
  const {signup} = useSignup()


  const handleTabClick = (loginClicked) => {
    setIsLogin(loginClicked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(isLogin, email, password, firstName, lastName, role);
    if (isLogin){
      console.log(email, password)
      login(email, password)
      //   
      .then(res=> window.location= "/dashboard")
      
      // if(res){
      // }
    }
    else{
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
    <div className="flex h-[42.5rem] ">
      <div className="w-3/5 flex flex-col justify-between ml-[6rem] mt-[8rem]">
        <div className="h-screen flex flex-col mt-[7rem]">
          <h1 className="text-quaternary text-5xl font-bold pl-2 font-kanit">
            Log in to your KTS Account{" "}
          </h1>

          <div className="flex mt-10 ">
            <div
              className={`px-6 py-2 cursor-pointer ${
                isLogin ? "bg-primary text-black" : "bg-tertiary text-white"
              }`}
              onClick={() => handleTabClick(true)}
            >
              Log In
            </div>
          
          </div>
          <div className="mt-8">
            <form>
              {/* Log In segment */}
              <div className="flex flex-col">
                <div className="mt-2 flex flex-col gap-4 w-[25rem]">
                  {isLogin && (
                    <input
                      className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  )}

                  {isLogin && (
                    <input
                      className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  )}
                </div>
                {/* This is the login button */}
                <div>
                  <button
                    onClick={handleSubmit}
                    className="  mt-5 w-[25rem] py-2 px-10 rounded-full border-quinary border bg-tertiary text-[#F2785C] font-poppins hover:bg-quaternary hover:text-tertiary transition-colors"
                  >
                    {isLogin ? "Log In" : "Sign Up"}
                  </button>
                </div>
              </div>

              {/* The lower saks */}
              {!isLogin && (
                <p className="text-quinary py-2 font-kanit">
                  Already Have an Account? <a href=""></a>{" "}
                  <span
                    className={`px-2 cursor-pointer ${
                      isLogin ? " text-white" : " text-other"
                    }`}
                    onClick={() => handleTabClick(true)}
                  >
                    Log In{" "}
                  </span>{" "}
                  Instead
                </p>
              )}

              {isLogin && (
                <p className="text-quinary py-2 font-kanit">
                  Don't Have an Account? <a href=""></a>{" "}
                  <span
                    className={`px-2 cursor-pointer ${
                      !isLogin ? " text-white" : " text-other"
                    }`}
                    onClick={() => handleTabClick(false)}
                  >
                    Create Account{" "}
                  </span>{" "}
                  First
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="w-2/5 flex flex-col justify-between mt-[8rem]">
        <img className="opacity-25" src={registerImg} alt="/" />
      </div>
    </div>
  );
};

export default Register;
