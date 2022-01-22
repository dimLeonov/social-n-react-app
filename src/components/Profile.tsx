import React from "react";
import classes from "./Styles/Profile.module.css"

function Profile() {
    return (
        <div className={classes.profile}>
            <div>
                <p>Tyt budet image</p>
            </div>
            <div>
                <p>Ava + description</p>
            </div>
            <div>
                <h1>My Posts</h1>
                <div>
                    <h2>New post</h2>
                </div>
                <div className='posts'>
                    <div className='item'>post 1</div>
                    <div className='item'>post 2</div>
                </div>

            </div>
        </div>
    );
}

export default Profile;