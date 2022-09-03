import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'
                         className={({isActive}) => isActive ? classes.current : classes.item}
                >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'
                         className={link => link.isActive ? classes.current : classes.item}
                >Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'
                         className={link => link.isActive ? classes.current : classes.item}
                >News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'
                         className={link => link.isActive ? classes.current : classes.item}
                >Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'
                         className={link => link.isActive ? classes.current : classes.item}
                >Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;