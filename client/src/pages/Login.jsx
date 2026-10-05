import { useState } from "react"
import "../styles/Login.css"

function Login({ setPage }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username || !password) {
            alert("Please input all fields!")
            return;
        }

    }

    return (
        <div className="loginOverlay">
            <form onSubmit={handleSubmit} className="loginModal">
                <h1>Login</h1>

                <label>Username or Email</label>
                <input
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />

                <button type="submit">Log In</button>
                <button type="button" onClick={() => setPage("register")}>
                    Create an account
                </button>
            </form>
        </div >
    )
}

export default Login;