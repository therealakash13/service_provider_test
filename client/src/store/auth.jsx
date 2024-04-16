import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const authorizationToken = `Bearer ${token}`;
    const [user, setUser] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
    const [services, setServices] = useState("");

    const storeToken = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok){
               const data = await response.json();
            //    console.log("User Data >>>>>>>>", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.error("Error Fetching User Data !");
                setIsLoading(false);
            }
            
        } catch (error) {
            console.error("Error fetching User Data");
        }
    };

    const getServices = async() => {
      try {
        const response = await fetch("http://localhost:5000/api/data/service", {
            method: "GET",
        });

        if (response.ok) {
            const data =  await response.json();
            // console.log(data.msg);
            setServices(data.msg);
        }
      } catch (error) {
        console.log(`Services Fontent Error: ${error}`);
      }  
    };
    
    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return (
    <AuthContext.Provider value={{ isLoggedIn, storeToken, LogoutUser, user, services, authorizationToken, isLoading }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}