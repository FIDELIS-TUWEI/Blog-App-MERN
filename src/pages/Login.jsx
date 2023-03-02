import { useState } from "react";

const Login = () => {
    // useState
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // login
    const login = (e) => {
        e.preventDefault();
    }
    return ( 
        <>
            <form onSubmit={login}>
                <h3>Login to your Account</h3>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    placeholder="Enter your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    placeholder="Enter Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </>
     );
}
 
export default Login;