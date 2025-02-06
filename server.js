const { PeerServer } = require('peer');
const peerServer = PeerServer({
    port: process.env.PORT || 443,
    path: '/peerjs',
    allow_discovery: true, // Optional, enables peer discovery
});
console.log('PeerJS server running...');
