const socket = io();
const videoGrid = document.getElementById('video-grid');
const mypeer = new Peer(undefined,{
    host: '/',
    port: '3001'
});
 // Peer is a function that takes in an id and an object
const myvideo = document.createElement('video');
myvideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video : true,
    audio : true
}).then(stream =>{
    addVideoStream(myvideo,stream);
});

mypeer.on('open',id =>{
    socket.emit('join-room',ROOM_ID,id);
});
socket.on('user-connected',userId =>{
    console.log('User Connected : '+ userId);
});

function addVideoStream(video,stream){
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', ()=>{
        video.play()
    })
    videoGrid.append(video)
};
