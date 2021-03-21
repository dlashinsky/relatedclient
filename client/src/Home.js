// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login.jsx'

function Home() {

    return (
        <body>
            <Router >
                <Navbar />
                <Route exact path='/' render={(props) => <Login {...props} />}/>

                {/* <Route exact path='/login' */}
                
            
            </Router>
        </body>   
  );
}

export default Home;
