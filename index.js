// http module can help you to create http servers
const http = require('http');

// 1. we would like to setup  a basic http server

const PORT = 3000;  // we defined a variable to store the value of the port.

const server = http.createServer();  // creating a new server instance, but it is not running

server.listen(PORT, ()=>{
    // this function will be called when server is started
    console.log(`Server is running on port ${PORT}`);
});