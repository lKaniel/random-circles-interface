import React, {useEffect, useState} from 'react';
import {usePeerState, useReceivePeerState} from "react-peer";

const PeerProvider = () => {
    const [state, setState, brokerId, connections, error] = usePeerState({message: ""});
    console.log(connections)

    return (
        <div>
            <div>
                Provider: {brokerId}
            </div>
            Message:
            <input type={"text"} value={state.message} onChange={e => setState({message: e.target.value})}/>
        </div>
    );
};

export default PeerProvider;
