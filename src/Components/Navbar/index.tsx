import React from 'react'
import { Container } from './index.css';
import { Link, useLocation } from 'react-router-dom'
interface Props {
    data?: any
}

const NavBar: React.FC<Props> = () => {
    const location = useLocation();
    const logOut = () => {
        localStorage.removeItem('auth');
    }
    console.log(location,"data in location")
    return (
        <Container>
            <ul>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/add"><li>Add</li></Link>
                {localStorage.getItem("auth") ? <Link to="/login" onClick={()=> logOut()}><li>Logout</li></Link> : <Link to="/login" onClick={()=> logOut()}><li>Log In</li></Link> }
                
            </ul>
        </Container>
    );
}

export default NavBar
