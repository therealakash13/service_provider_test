import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const AdminContacts = () => {
   
    const [ contactData, setContactData ] =  useState([]);
    const { authorizationToken } = useAuth();

    const getContactData = async() => {
        try {
          const response =  await fetch('http://localhost:5000/api/admin/contacts', {
            method: "GET",
            headers: {
                Authorization: authorizationToken,
            },
          });
          const data = await response.json();
          console.log("Contact Data >>>>>>>", data.contacts);

          if (response.ok) {
            setContactData(data.contacts);
          }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteContactById = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if(response.ok){
                getContactData();
                toast.success("Message Deleted Successfully...");
            }else{
                toast.error("Message Not Deleted !");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContactData();
    }, []);

    return (
        <>
            <section className="admin-contact-section">
                <h1>Admin Contact Data</h1>

                <div className="container admin-contact">
                    {
                        contactData && contactData.map((curContactData, index) => {
                            const { username, email, message, _id } = curContactData
                            return (
                                <div key={index}>
                                    <p>Username : {username}</p>
                                    <p>Email : {email}</p>
                                    <p>Message : {message}</p>
                                    <button className="btn" onClick={() => deleteContactById(_id)}>Delete</button>
                                </div>
                            );
                        })  
                    }
                </div>
            </section>
            
        </>
    );
};