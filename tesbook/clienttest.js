import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
  console.log('connected');
});

ws.on('message', function incoming(message) {
  const data = JSON.parse(message);
  console.log('received: %s', data.message);
});

// 메시지 전송 함수
function sendMessage(message) {
  const data = {
    message: message
  };

  ws.send(JSON.stringify(data));
}

// 키보드 입력 대기
process.stdin.on('data', function (data) {
  sendMessage(data.toString().trim());
});
