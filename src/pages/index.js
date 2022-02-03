import React from "react"
import Seo from "../components/Seo";
import PeerProvider from "../components/PeerProvider";
import PeerConsumer from "../components/PeerConsumer";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  gap: 3rem;
  padding-top: 3rem;
`

export default function Home() {

    return (
        <>
            <h2>
                Autodeployed ficha
            </h2>
            <Seo title={"home"}/>
            <Layout>
                <PeerProvider/>
                <PeerConsumer/>
            </Layout>
        </>
    )
}
