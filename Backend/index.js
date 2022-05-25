const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
});

io.on("connection", (socket) => {
    socket.on("joinRoom", (data)=>{
        socket.join(data.room);

        const userInfo = {
            id: socket.id,
            author: data.username,
            selectedCard: "",
        }
        
        socket.to(data.room).emit("newUser", userInfo);
    })

    socket.on("registerSelectCard", (data) => {
        socket.to(data.room).emit("ShowCards", data);
    })

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    })
})


server.listen(3001, ()=>{
    console.log('Server listening on port 3001');
})

