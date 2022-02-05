import React, {useEffect, } from 'react';
import {useReceivePeerState} from "react-peer";
import {useDispatch} from "react-redux";
import {updatePeerProviderData,} from "../store/actions/peerActions";

const PeerConsumer = ({brokerId}) => {
    const [state, isConnected, error] = useReceivePeerState(brokerId);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updatePeerProviderData(state))
    }, [state, dispatch])

    return null;
};

export default PeerConsumer;