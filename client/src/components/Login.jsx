// import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUpLogin = () => {

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
        <div className="signUpAreaContainer">
                    <form className="signUpArea" onSubmit={handleSubmit}>
                    
                        <label htmlFor='usernameInput'>Username</label>
                        <input id="usernameInput" type="text" placeholder="username" onChange={ e => setUsername(e.target.value)}></input>
                        
                        <label htmlFor='emailInput'>Email</label>
                        <input id="emailInput" type="email" placeholder="email" onChange={ e => setEmail(e.target.value)}></input>

                        <label htmlFor='passwordInput'>Password</label>
                        <input id="passwordInput" type="password" placeholder="password" onChange={ e => setPassword(e.target.value)}></input>

                        <input type="submit" value="Sign up"></input>
                    </form>
                </div>
    )
}

export default SignUpLogin