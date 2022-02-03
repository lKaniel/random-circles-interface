import React, {useCallback} from 'react';
import * as classes from "./Navbar.module.scss"
import GoogleLogin from "react-google-login";
import {useDispatch} from "react-redux";
import {loginStart} from "../../store/actions/loginActions";

const Navbar = () => {
    const dispatch = useDispatch();

    const responseGoogle = useCallback((response) => {
        dispatch(loginStart(response.tokenId))
    },[dispatch])

    return (
        <nav className={classes.Navbar}>
            <div className={classes.Layout}>
                <GoogleLogin
                    clientId={"1073502971608-aqm4nlqrsd1khj4fvl491le32ghc2bpc.apps.googleusercontent.com"}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={(err) => console.log(err)}
                />
            </div>
        </nav>
    );
};

export default Navbar;
