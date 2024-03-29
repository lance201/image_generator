import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
    return (
        <div class="pill-nav">
            <Link to="/" class="active">Home</Link>
            <Link to="/favorite">Favorites</Link>
        </div>
    );
}

export default Navbar;