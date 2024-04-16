import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

export const AdminLayout = () => {

    const { user, isLoading } = useAuth();

    if(isLoading) {
        return <h1>Loading . . .</h1>;
    }

    if(user.isAdmin===false) {
        toast.warn("Not an Authorized User");
        return <Navigate to="/" />;
    }

    return (<>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUserAlt /> Users</NavLink></li>
                        <li><NavLink to="/admin/contacts"><FaMessage /> Contacts</NavLink></li>
                        <li><NavLink to="/service"><FaRegListAlt /> Services</NavLink></li>
                        <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
    </>
    );
}