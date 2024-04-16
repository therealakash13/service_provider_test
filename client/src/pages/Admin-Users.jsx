import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {

    const [ users, setUsers ] = useState([]);
    const { authorizationToken } = useAuth();
    
    const getAllUsersData = async() => {
       try {
          const response = await fetch("http://localhost:5000/api/admin/users", {
            method: "GET",
            headers: {
                Authorization: authorizationToken,
            },
        });
        
        const data = await response.json();
        console.log(data.users);
        setUsers(data.users);

       } catch (error) {
         console.log(`User Admin Error >>>>>>>>>>> ${error}`);
       } 
    };

    const deleteUser = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`Users After Deletion>>>>>>>>>>${data.users}`);
            
            if(response.ok){
                getAllUsersData(); 
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
    <>
        <section className="admin-users-section">
            <div className="container">
                <h1>Admin Users Data</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>ID</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((curUser, index) => {
                                return (
                                <tr key={index}>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.isAdmin}</td>
                                    <td>{curUser._id}</td>
                                    <td><Link to={`/admin/users/update/${curUser._id}`}> Edit </Link></td>
                                    <td><button onClick={() => deleteUser(curUser._id)}> Delete </button></td>  
                                </tr>
                                );
                            })
                        };
                    </tbody>
                </table>
            </div>
        </section>        
    </>
    );  
};