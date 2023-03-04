import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // useNavigate
    const navigate = useNavigate()

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
    }, [])
    return ( 
        <>
            <h3>Home page</h3>
        </>
     );
}
 
export default Home;