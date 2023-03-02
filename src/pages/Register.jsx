import { useState } from "react";

const Register = () => {
    //useState
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // handleRegister
    const register = (e) => {
        e.preventDefault();
    }
    return ( 
        <>
            <form onSubmit={register}>
                <h3>Create New Account</h3>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    placeholder="Enter Your Email"
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

                <button>Register</button>
            </form>
        </>
     );
}
 
export default Register;