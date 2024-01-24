const { v4: uuidv4 } = require('uuid'); 
const express = require('express');
// const { connect } = require('../routes/home');s
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
app.set('view engine','ejs');

exports.room = (req, res) => {
    res.render('room',{roomID: req.params.room});
};


exports.home = (req, res) => {
    res.redirect(`/room/${uuidv4()}`);
};

