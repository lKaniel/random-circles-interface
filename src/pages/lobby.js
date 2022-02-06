import React, {useCallback, useEffect} from 'react';
import {connectToLobby, leaveLobby} from "../store/actions/lobbyActions";
import {useDispatch, useSelector} from "react-redux";
import SideBar from "../components/SideBar";
import Seo from "../components/Seo";
import styled from "styled-components";
import {navigate} from "gatsby";


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

const LeaveBtn = styled.button`
  grid-column: 2;
  grid-row: 2;
  cursor: pointer;
  border-radius: 4rem 4rem 1rem;
  animation: initRight .5s ease-in-out .5s forwards;
  transform: translate(-100vw, 0vh);
  box-shadow: 0 0 0 .125rem var(--accent-color);
  overflow: hidden;
  border: none;
  background: var(--dark-color-20);
  color: var(--accent-color);
  font-weight: 900;
  font-size: 4rem;
  
  &:hover{
    background: var(--accent-color);
    color: var(--dark-color-20);
  }
`

const Lobby = () => {
    const users = useSelector(state => state.peer.provider.data.users)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(connectToLobby())
    },[])

    const leaveLobbyEvent = useCallback(()=>{
        dispatch(leaveLobby())
        navigate('/');
    },[])

    return (
        <>
            <Seo title={"home"}/>
            <MainWrapper>
                <SideBar title={"Lobby"} users={users}/>
                <LeaveBtn onClick={leaveLobbyEvent}>
                    Leave lobby
                </LeaveBtn>
            </MainWrapper>
        </>
    );
};

export default Lobby;
