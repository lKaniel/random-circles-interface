import React, {useCallback} from 'react';
import GoogleLogin from "react-google-login";
import {useDispatch} from "react-redux";
import {loadImage, loginStart} from "../store/actions/loginActions";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent-color);
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem 4rem 1rem;
  box-shadow: 0 0 0 .1rem var(--accent-color);
  transition: background-color .1s ease-in-out, color .1s ease-in-out, filter .1s ease-in-out;

  :hover {
    background: var(--accent-color);
    color: var(--dark-color-20);
  }

  :active {
    filter: brightness(.8);
  }
`

const AuthButton = ({visible = true}) => {

    const dispatch = useDispatch();

    const responseGoogle = useCallback((response) => {
        dispatch(loginStart(response?.tokenId))
        dispatch(loadImage(response?.profileObj?.imageUrl))
    }, [dispatch])

    return (
        <GoogleLogin
            clientId={"1073502971608-aqm4nlqrsd1khj4fvl491le32ghc2bpc.apps.googleusercontent.com"}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={(err) => console.log(err)}
            render={renderProps => visible ? (
                <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</Button>
            ) : null}
            isSignedIn={true}
        />
    );
};

export default AuthButton;
