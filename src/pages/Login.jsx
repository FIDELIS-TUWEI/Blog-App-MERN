const Login = () => {
    return ( 
        <>
            <form>
                <h3>Login to your Account</h3>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    placeholder="Enter your Email"
                    required
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    placeholder="Enter Password"
                    required
                />

                <button type="submit">Login</button>
            </form>
        </>
     );
}
 
export default Login;