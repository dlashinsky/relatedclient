// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { useState } from 'react'
import Navbar from './components/mainpage/Navbar.jsx'
import SignUp from './components/mainpage/Signup.jsx'
import Login from './components/mainpage/Login.jsx'

function Home() {

    return (
        <body>
            <Router >
                <Navbar />
                <Route exact path='/' render={(props) => <SignUp {...props} />}/>
                <Route exact path='/login' render={(props) => <Login {...props} />}/>
                {/* <Route exact path='/login' */}
                
            </Router>
        </body>   
  );
}

export default Home;
