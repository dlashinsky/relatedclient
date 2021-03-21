import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault()
            
            const userInfo = {
                username: username,
                email: email,
                password: password
            }
        }

        

    return (
        <div className="loginAreaContainer">
                    <form onSubmit={handleSubmit}>
                        <div class="loginContainer">
                        <h1 id="loginText">Log in to your account</h1>
                        <label id="usernameInputLabel" htmlFor='usernameInput'>Username</label>
                        <input id="usernameInput" type="text" placeholder="username" onChange={ e => setUsername(e.target.value)}></input>
                        
                        <label id="emailInputLabel" htmlFor='emailInput'>Email</label>
                        <input id="emailInput" type="email" placeholder="email" onChange={ e => setEmail(e.target.value)}></input>

                        <label id="passwordInputLabel" htmlFor='passwordInput'>Password</label>
                        <input id="passwordInput" type="password" placeholder="password" onChange={ e => setPassword(e.target.value)}></input>

                        <input id="signUpSubmitBtn" type="submit" value="Log in"></input>
                        </div>
                    </form>
                </div>
    )
}

export default Login