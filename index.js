const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.use(express.static('public'));


const port = 3000;

const roomRoutes = require('./routes/home');
app.get('/',roomRoutes);







io.on('connection', socket =>{
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)
        socket.to(roomId).broadcast.emit('user-connected', userId)
    
        socket.on('disconnect', () => {
          socket.to(roomId).broadcast.emit('user-disconnected', userId)
        })
      })
})
app.listen(port, () =>{
    console.log(`Server is Running at port ${port}`);
});