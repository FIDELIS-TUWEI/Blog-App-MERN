import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // useNavigate
    const navigate = useNavigate()

    // handleLogout function
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token')
        navigate('/login')
    }

    // useEffect for private routes
    useEffect(() => {
        //check if token is valid go to home
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/home')
        }

        // if token not valid return to login
        if (!authToken) {
            navigate('/login')
        }
    }, []);

    return ( 
        <>
            <h3>Home page</h3>
            <button onClick={handleLogout}>Logout</button>
        </>
     );
}
 
export default Home;