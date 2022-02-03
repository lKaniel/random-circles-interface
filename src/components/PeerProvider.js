import React from 'react';
import {usePeerState} from "react-peer";

const PeerProvider = () => {
    const [state, setState, brokerId, connections, error] = usePeerState({message: ""});

    return null;
};

export default PeerProvider;
