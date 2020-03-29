import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <span><a className={s.active__page} href="#">Profile</a></span>
            <span><a href="#">Messages</a></span>
            <span><a href="#">News</a></span>
            <span><a href="#">Music</a></span>
            <span className={s.settings}><a href="#">Settings</a></span>
        </nav>
    );
}

export default Navbar;