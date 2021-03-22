import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        try {
          e.preventDefault()
          // post to backend with form data
          const userInfo = {
            username,
            email: email,
            password: password
          }
    
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, userInfo)
    
          const { token } = response.data
    
          // save the response jwt in local storage
          localStorage.setItem('jwtToken', token)
    
          // decode jwt and set the app state to the jwt payload
          const decoded = jwt_decode(token)
          console.log(decoded)
    
          props.setCurrentUser(decoded)
    
        } catch(error) {
          // if the login failed -- display a message
          if(error.response.status === 400) {
            setMessage('bad user name or password')
          } else {
            console.error(error)
          }
        }
      }
    
      // if check to see if the user is logged in, redirect to the profile
      if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser }/>

        

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