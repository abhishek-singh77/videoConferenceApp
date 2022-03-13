//creating the server first
//then we'll create a route for the server
//afterwards we will send the socket details to the client
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

//establishing the connection
io.on("connection", (socket) => {
	socket.emit("me", socket.id);
	//listening to the event
	
	socket.on("disconnect", () => {//when the client disconnects it'll send callEnded
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => { 
		//when the client calls another client
		//we'll send the signal data to the user
		//we'll also send the name of the user who called
		//and the id of the user who called
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		//when the client answers the call
		//we'll send the signal data to the user
		//we'll also send the name of the user who called
		io.to(data.to).emit("callAnswered", data.signal)
	});
});

server.listen(PORT, () => console.log(`Server started at ${PORT}`));
