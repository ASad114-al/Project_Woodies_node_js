const http = require('http')

http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    if (req.url === '/') {

   
        res.end(data)
    }
}).listen(4000, () => console.log("Server running..."))