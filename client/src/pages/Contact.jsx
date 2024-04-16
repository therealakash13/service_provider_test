import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    username: "",
    email: "",
    message: ""
}

export const Contact = () => {
const [contact,setContact] = useState(defaultContactFormData);

   const [userData , setUserData] = useState(true);
   const { user } = useAuth();  
   if(userData && user) {
    // console.log( userData );
    setContact({
        username: user.username,
        email: user.email,
        message: "",
    });
    setUserData(false);
   }

   const handleInput = (e) => {
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;
    
        setContact({
          ...contact,
          [name]: value,
        });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(contact);
    // console.log(contact);

    try {
        const response = await fetch("http://localhost:5000/api/form/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });

        if (response.ok){
            setContact(defaultContactFormData);
            console.log("Messege sent Successfully");
        }
    } catch (error) {
        console.log("Messege NOT sent");
    }

  };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>                            
                </div>

                <div className="container grid grid-two-cols">
                   <div className="contact-image">
                        <img src="/images/support.png" alt="Support" />
                   </div>
                   <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="username" 
                                    name="username"
                                    placeholder="Enter Your Username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                />
                            </div>
                        
                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter Your email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required 
                                    cols="30" 
                                    rows="6">    
                                </textarea>
                            </div>

                            <div>
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                   </section>
                </div>

                <section>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.986601369754!2d77.30874565934172!3d28.691249773227852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb37b438607d%3A0x65e358ad8c9fb10b!2ssai%20industries!5e0!3m2!1sen!2sin!4v1710948123978!5m2!1sen!2sin" 
                        width="1900vw" 
                        height="500vh"
                         
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </section>
        </>
    );
};