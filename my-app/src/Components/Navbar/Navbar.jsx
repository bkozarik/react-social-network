import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <span><NavLink to="/profile" activeClassName={s.active__page}>Profile</NavLink></span>
            <span><NavLink to="/dialogs" activeClassName={s.active__page}>Dialogs</NavLink></span>
            <span><NavLink to="/news" activeClassName={s.active__page}>News</NavLink></span>
            <span><NavLink to="/music" activeClassName={s.active__page}>Music</NavLink></span>
            <span><NavLink to="/settings" activeClassName={s.active__page}>Settings</NavLink></span>
        </nav>
    );
}

export default Navbar;