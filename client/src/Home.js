// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'

function Home() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted- redirect to main page(need ROUTE) ");
    }


    return (
        <body>
            <Router >
                <Navbar />

                <div className="signUpAreaContainer">
                    <form className="signUpArea" onSubmit={handleSubmit}>
                        <input type="text" placeholder="username"></input>
                        <input type="email" placeholder="email"></input>
                        <input type="password" placeholder="password"></input>
                        <input type="submit" value="Sign up"></input>
                    </form>
                </div>

            </Router>
        </body>   
  );
}

export default Home;
