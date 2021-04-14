const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 4000;

app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', (socket) => {

    socket.on('chat', (message) => {
        io.emit('chat', message)
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
