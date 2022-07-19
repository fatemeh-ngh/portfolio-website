import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Navbar;