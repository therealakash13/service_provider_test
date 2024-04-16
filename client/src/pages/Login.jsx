import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

export const Login = () => {

    const [user,setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate(); 

    const { storeToken } = useAuth();

    const handleInput = (e) => {
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            });
            console.log("response data :<<<<<<<<<<<<<<<<< ", response);

            const res_data = await response.json();
      
            if (response.ok) {
                toast.success("Login Successful");                
                storeToken(res_data.token);
                setUser({ email: "", password: "" });
                console.log("Response from Server:", res_data);
                navigate("/");
            } else {
              toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);  
              console.log("Error Inside Response");
            }
          } catch (error) {
            console.error("Error", error);
          }

      };

    return<>
        <section>
            <main>
                <div className="section-login">
                    <div className="container grid grid-two-cols">
                        <div className="login-image">
                            <img 
                                src="/images/login.png" 
                                alt="Trying to Login"
                                width="500"
                                height="500"
                            />    
                        </div>

                        <div className="login-form">
                        <h1 className="main-heading mb-3">Login Form</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Username</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter Your Username"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input  
                                    type="password" 
                                    name="password"
                                    placeholder="Enter a Password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>
                            <br />

                            <button 
                                type="submit" 
                                className="btn btn-submit">
                                Login Now
                            </button>
                            
                        </form>
                        </div> 
                    </div>
                </div>
            </main>
        </section>


    </>  
};