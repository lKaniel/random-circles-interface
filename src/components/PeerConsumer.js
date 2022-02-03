import React, {useState} from 'react';
import {useReceivePeerState} from "react-peer";

const PeerConsumer = () => {

    const [brokerId, setBrokerId] = useState("")

    const [state, isConnected, error] = useReceivePeerState(brokerId);

    return (
        <div>
            Consumer
            <input type={"text"} value={brokerId} onChange={e => setBrokerId(e.target.value)}/>
            <div>
                {isConnected ? state?.message : null}
            </div>
        </div>
    );
};

export default PeerConsumer;