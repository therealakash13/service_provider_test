import { NavLink } from "react-router-dom";

export const Error = () => {
    return(
        <>        
        <section>
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page Not Found.</h4>
                <p>Oops! It seems like the page you are trying to access does not exist. If you believe there is an issue, feel free to report it, and we will look into it.</p>
                <div className="btns">
                    <NavLink to="/">Return to Home</NavLink>
                    <NavLink to="/contact">Report Problem</NavLink>
                </div>
            </div>
        </section>        
        </>
    );
};