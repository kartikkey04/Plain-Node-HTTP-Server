// http module can help you to create http servers
const http = require('http');

// 1. we would like to setup  a basic http server

const PORT = 3000;  // we defined a variable to store the value of the port.

const server = http.createServer( async(req, res) => {
    // whenever any request hit my server, this function will be called

    console.log('Request received');

    if(req.method == 'GET'){
        res.end('GET request received');
    }else if(req.method == 'POST'){
        // In post request, let's send the response code as 201
        res.writeHead(201);
        res.end('POST request received');
    }else{
        res.end('Hello World!!')
    }

});  // creating a new server instance, but it is not running

server.listen(PORT, ()=>{
    // this function will be called when server is started
    console.log(`Server is running on port ${PORT}`);
});