import React from "react"
import Seo from "../components/Seo";
import Profile from "../components/Profile";
import LoginForm from "../pageFragments/LoginForm";

export default function Home() {

    return (
        <>
            <Seo title={"home"}/>
            <LoginForm/>
            <Profile/>
        </>
    )
}
