import React, {useEffect} from 'react';
import { usePeerState} from "react-peer";
import {useDispatch, useSelector} from "react-redux";
import {updatePeerProviderStatus} from "../store/actions/peerActions";

const PeerProvider = () => {
    const data = useSelector(state => state.peer.provider.data)
    const [state, setState, brokerId, connections, error] = usePeerState(data);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updatePeerProviderStatus(brokerId, connections, error))
    }, [brokerId, connections, error])


    // const peers = data.users.map((user, index)=>(
    //         <PeerConsumer brokerId={user.broker_id}/>
    // ));
    //
    // return peers;

    return null
};

export default PeerProvider;
