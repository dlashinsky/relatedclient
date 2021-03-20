// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import '../main.css'


const Navbar = () => {

    const handleSubmit = () => {
        console.log("submit working");
    }
    
    return (
        <div className="nav-container">
            <Link to='/' id="mainLink"><h1 id="NavText">RelateD Logo here</h1></Link>

            <Link to='/login' >
                <form onSubmit={handleSubmit}>
                    <input 
                        id="NavLoginBtn" 
                        type="submit" 
                        value="Log in" />
                </form>
            </Link>            
        </div>
    )
}

export default Navbar