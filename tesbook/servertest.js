import ws from 'ws';

console.log(ws.Server)
// const wss = new ws.createWebSocketStream({ port: 8080 });

// const messages = [];

// wss.on('connection', function connection(ws) {
//   console.log('Client connected');

//   ws.on('message', function incoming(message) {
//     console.log(`Received message: ${message}`);

//     messages.push(JSON.parse(message));
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(JSON.stringify(messages));
//       }
//     });
//   });

//   ws.on('close', function close() {
//     console.log('Client disconnected');
//   });
// });
