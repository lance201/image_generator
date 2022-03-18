import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavbarFav = () => {
    return (
        <div class="pill-nav">
            <Link to="/">Home</Link>
            <Link to="/favorite" class="active">Favorites</Link>
        </div>
    );
}

export default NavbarFav;