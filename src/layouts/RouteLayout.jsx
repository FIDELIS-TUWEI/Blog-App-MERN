import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="login">Login</NavLink>
                <NavLink to="register">Register</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
     );
}
 
export default RootLayout;