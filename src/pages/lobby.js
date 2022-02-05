import React, {useEffect} from 'react';
import {connectToLobby} from "../store/actions/lobbyActions";
import {useDispatch, useSelector} from "react-redux";
import SideBar from "../components/SideBar";
import Seo from "../components/Seo";
import styled from "styled-components";


const MainWrapper = styled.section`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  display: grid;
  margin: 1rem;
  column-gap: 1rem;
  row-gap: 1.5rem;
  grid-template-columns: 22rem 1fr;
  grid-template-rows: 8rem 1fr;
`;

const Lobby = () => {
    const brokerId = useSelector(state => state.peer.provider.brokerId)
    const users = useSelector(state => state.peer.provider.data.users)


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(connectToLobby(brokerId))
    },[])

    return (
        <>
            <Seo title={"home"}/>
            <MainWrapper>
                <SideBar title={"Lobby"} users={users}/>
            </MainWrapper>
        </>
    );
};

export default Lobby;
