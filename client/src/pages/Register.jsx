import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

export const Register = () => {

   const [user,setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
        const response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        console.log("Response Data : ", response);
  
        const res_data = await response.json();
        console.log("Response From Server:", res_data.extraDetails);

        if (response.ok) {
          toast.success("Registration Successful");
          console.log("Response from Server:", res_data);
          storeToken(res_data.token);  
          setUser({ username: "", email: "", phone: "", password: "" });
          navigate("/");
        } else {
          toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        }
      } catch (error) {
        console.log("Error", error);
      }  
    };

    return <>
        <section>
            <main>
              <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img 
                            src="/images/registration.png" 
                            alt="Trying to Register"
                            width="500"
                            height="500"
                        />    
                    </div>

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration Form</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input 
                                    type="text" 
                                    name="username"
                                    placeholder="Username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter Your Email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">phone</label>
                                <input 
                                    type="number" 
                                    name="phone"
                                    placeholder="Enter your Phone Number"
                                    id="phone"
                                    required
                                    autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">password</label>
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
                                Register Now
                            </button>
                            
                        </form>
                    </div> 
                </div>        
              </div>  
            </main>
        </section>
    </>
};