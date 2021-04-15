import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../../../contexts/Global';
import './Header.css';
const Header = () => {
    const {setUser} = useContext(Global);
    const handleLogout = () => {
        localStorage.removeItem('username');
        setUser({});
    };
    return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active">
             <Link to="/home"  className="link nav-link">Home</Link>
        </li>

        <li class="nav-item active">
            <Link to="/search" className="link nav-link">Search</Link>
        </li>
       
        </ul>
    </div>
    <button className="logout btn btn-danger" href="#" onClick={handleLogout}> Logout </button>

   </nav>
    
    )};

export default Header;


