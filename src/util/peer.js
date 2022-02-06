let peer;
let connections = {}

export const innitPeer = (peerId) => {
    if (typeof navigator === "undefined") return
    const Peer = require("peerjs").default
    peer = new Peer(peerId);

    peer.on('open', function (id) {
        console.log('My peer ID is: ' + id);
    });
    peer.on('connection', (conn) => {
        conn.on('data', (data) => {
            console.log(data);
            console.log("CONNECTIONS", peer.connections)
        });
        conn.on('open', () => {
            conn.send('hello!');
        });
    });
}

export const connectToPeer = (peerId) => {
    // if (connections[peerId] !== undefined) return connections[peerId]
    const conn = peer.connect(peerId);
    connections[peerId] = conn

    conn.on('open', () => {
        conn.send("Hi!");
    });
    conn.on('data', (data) => {
        console.log("CONNECTIONS", peer.connections)
    });
    return conn
}

export const clearConnections = (connectionsList) => {
    const filteredConnections = Object.keys(connections).filter(connection => connectionsList[connection] === undefined)
    console.log(filteredConnections)
    filteredConnections.forEach(peerId => {
        const connection = connections[peerId]
        connection.disconnect()
        connections[peerId] = undefined
    })
    console.log(connections)
}