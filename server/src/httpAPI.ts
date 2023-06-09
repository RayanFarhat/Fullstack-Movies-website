import * as http from 'http';





export function startServer() {
    //start http server in port 8080
    const server = http.createServer();
    server.listen(8080, () => console.log('http running on port 8080'));

    /* event is emitted when an error occurs while processing a client's request */
    server.on('clientError', (err, socket) => {
        socket.end('HTTP/1.1 400 Bad Request ${err.message}\r\n\r\n');
    });


    return server;

}
