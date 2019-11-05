var http = require('http');
var file_sys = require('fs');

http.createServer(function (req, res) {

    //* Doc file *
    // file_sys.readFile('./demo.txt', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     res.end;
    // });

    // * Ghi noi dung vao file. Neu file ko ton tai thi tao 1 file rong moi va ghi noi dung vao *
    file_sys.appendFile('E:\\Web_Server\\demo.txt', "Hello world!\r\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    //* Mo 1 file co san o che do viet, neu file ko ton tai thi tao 1 file rong moi *
    // file_sys.open('E:\\Web_Server\\new_demo.txt', 'w', function (err, file) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });

    //* Ghi noi dung vao 1 file, neu file chua co thi tao 1 file moi va ghi noi dung vao do *
    // file_sys.writeFile('E:\\Web_Server\\demo.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });

    //* Xoa 1 file
    // file_sys.unlink('E:\\Web_Server\\demo.txt', function(err) {
    //     if (err) throw err;
    //     console.log('File deleted!');
    // });

}).listen(8080);