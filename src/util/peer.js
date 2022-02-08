let peer;
let myPeerId;
let myUsername;
let connections = {}

export const innitPeer = (peerId, username, callback = ()=>{}) => {
    if (typeof navigator === "undefined") return
    const Peer = require("peerjs").default
    peer = new Peer(peerId);

    peer.on('open', function (id) {
        myPeerId = id
        myUsername = username
        console.log('My peer ID is: ' + id);
    });
    peer.on('connection', (conn) => {
        conn.on('data', (data) => {
            console.log(data);
        });
        conn.on('open', () => {
            callback()
            conn.send({
                peerId: myPeerId,
                username: myUsername
            });
        });
    });
}

export const connectToPeer = (peerId) => {
    if (peerId === myPeerId) return null
    if (connections[peerId] !== undefined) return connections[peerId]
    const conn = peer.connect(peerId);
    connections[peerId] = conn

    conn.on('open', () => {
        conn.send({
            peerId: myPeerId,
            username: myUsername
        });
    });
    conn.on('data', (data) => {
        console.log(data)
    });
    conn.on('close', () => {
        console.log("CLOSED")
    })
    return conn
}

export const clearConnections = () => {
    Object.keys(connections).forEach(peerId => {
        connections[peerId]?.close()
        connections[peerId] = undefined
    })
}
