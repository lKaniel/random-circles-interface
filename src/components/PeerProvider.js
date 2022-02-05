import React, {useEffect} from 'react';
import {usePeerState} from "react-peer";
import {useDispatch, useSelector} from "react-redux";
import {updatePeerProviderStatus} from "../store/actions/peerActions";
import {connectToLobby} from "../store/actions/lobbyActions";

const PeerProvider = () => {
    const data = useSelector(state => state.peer.provider.data)
    const [state, setState, brokerId, connections, error] = usePeerState(data);

    const dispatch = useDispatch()

    useEffect(() => {
        setState({
            ...data,
            brokerId,
        })
    }, [data, brokerId])

    useEffect(() => {
        if (brokerId !== "") {
            dispatch(connectToLobby(brokerId))
            console.log(brokerId)
        }
        dispatch(updatePeerProviderStatus(brokerId, connections, error))
    }, [brokerId, connections, error])

    return null;
};

export default PeerProvider;
