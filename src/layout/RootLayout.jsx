import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <>
            <header>
                <h3>Home Page</h3>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="login">Login</NavLink>
                    <NavLink to="register">Register</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
     );
}
 
export default RootLayout;