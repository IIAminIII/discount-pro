import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col min-h-screen  justify-center items-center">
            <h2 className="text-7xl">Page Not Found</h2>
            <NavLink to='/'><button className="btn btn-ghost">Go back</button></NavLink>
        </div>
    );
};

export default ErrorPage;