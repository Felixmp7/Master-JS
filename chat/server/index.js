const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 4000;

app.use(express.static('client'));

app.get('/', (req,res) => {
    res.status(200).send('Success')
});

io.on('connection', (socket) => {
    console.log(`El cliente con la ip: ${socket.handshake.address} se ha conectado`);
});

app.listen(port, () => {
    console.log(`Servidor corriendo correctamente en http://localhost:${port}`);
})
