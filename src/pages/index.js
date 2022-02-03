import React from "react"
import Seo from "../components/Seo";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  gap: 3rem;
  padding-top: 13rem;
`

export default function Home() {

    return (
        <>
            <Seo title={"home"}/>
            <Layout>
            </Layout>
        </>
    )
}
