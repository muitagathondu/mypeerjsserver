const { PeerServer } = require('peer');
const peerServer = PeerServer({
    port: process.env.PORT || 443,
    path: '/peerjs',
    //allow_discovery: true, // Optional, enables peer discovery
    proxied: true, // Important if behind a reverse proxy like Render
});
console.log('PeerJS server running...');
