import React from 'react';
import * as classes from "./Navbar.module.scss"
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
    console.log(response);
}

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <div className={classes.Layout}>
                <GoogleLogin
                    clientId={"573625630766-qrp5bf8ke74oh9tk70ee81vak94tn8go.apps.googleusercontent.com"}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={(err) => {
                        responseGoogle(err);
                        return true
                    }}
                />
            </div>
        </nav>
    );
};

export default Navbar;
