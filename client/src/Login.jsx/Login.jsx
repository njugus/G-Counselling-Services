import './Login.css'
function Login() {
    return(
        <>
        <div className="wrapper">
        <div class="login-container">
        <h2>Login</h2>
        <form action="" method="">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-actions">
                <button type="submit">Login</button>
            </div>
        </form>
        <div class="links">
            <a href="/forgot-password">Forgot Password?</a>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    </div>
    </div>
        </>
    )
}

export default Login;