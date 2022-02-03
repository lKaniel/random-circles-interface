import React, {useState} from 'react';
import {useReceivePeerState} from "react-peer";

const PeerConsumer = () => {
    const [state, isConnected, error] = useReceivePeerState("");

    return null;
};

export default PeerConsumer;