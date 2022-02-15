import React from 'react';
import './App.css';

const Navbar = () => {
    return (
        <div class="pill-nav">
            <a class = "active" href="/">Home</a>
            <a href="favorites">Favorites</a>
        </div>
    );
}

export default Navbar;