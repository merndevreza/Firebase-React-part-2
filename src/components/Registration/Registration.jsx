import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [regSuccess, setRegSuccess] = useState(""); 

  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted=e.target.termsCheckbox.checked; 
    const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    //  reset error and success
    setRegisterError("");
    setRegSuccess("");

      if (password.length<6) {
         setRegisterError("Password should be at least 6 characters or longer ")
         return;
      }else if(!regex.test(password)){
         setRegisterError(" make strong password containing Uppercase,lowercase, numbers and  special characters")
         return;
      }else if(!accepted){
         setRegisterError("Please read and accept our terms and conditions")
         return;
      }
    //  create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
         console.log(user);
        setRegSuccess("User created successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegistration}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full"
                      required
                    />
                    <button
                      onClick={handleShowPassword}
                      className="absolute right-2 bottom-4"
                    >
                      {showPassword ? (
                        <BsFillEyeFill></BsFillEyeFill>
                      ) : (
                        <BsFillEyeSlashFill></BsFillEyeSlashFill>
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <input type="checkbox" name="termsCheckbox" id="termsCheckbox" />
                  <label htmlFor="termsCheckbox"> Accept <Link className="text-blue-600 underline underline-offset-2" to="#">terms and conditions</Link> </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              {registerError && (
                <p className="text-red-600 font-medium">{registerError}</p>
              )}
              {regSuccess && (
                <p className="text-green-600 font-medium">{regSuccess}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
