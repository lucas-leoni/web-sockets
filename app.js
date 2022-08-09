const app = require('./config/server');

const server = app.listen(5001, () => {
  console.log('Servidor rodando na url => http://localhost:5001');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User entrou na sala.');

  socket.on('disconnect', () => {
    console.log('User saiu da sala.');
  });
});