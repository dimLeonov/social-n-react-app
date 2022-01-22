import React from "react";
import classes from "./Styles/Navbar.module.css"

function Navbar() {
    return (
        <div className={classes.mainNavbar}>
            <div className={classes.item}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </div>
    );
}

export default Navbar;