const http = require('http');
const PORT = process.env.PORT || 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.writeHead (200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', (err, data) => {
        if(err){
            res.writeHead(404);
            res.write('File not found');
        }
        else{
            res.write(data);
            res.end();
        }
    })

    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    // res.write('</html>');
    // res.end();

});

server.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(`Server is listening on port ${PORT}`);
    }
});