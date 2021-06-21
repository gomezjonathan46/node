var http = require('http');
    fs = require('fs');
    url = require('url');

http.createServer(function (req, res) {
  //use the url to parse the requested url and get the image name
  var query = url.parse(req.url,true).query;
      pic = query.image;

  fs.readFile('public/address.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  fs.readFile('/public/images' + pic, function (err, content) {
      if (err) {
          res.writeHead(400, {'Content-type':'text/html'})
          console.log(err);
          res.end("No such image");
      } else {
          //specify the content type in the response will be an image
          res.writeHead(200,{'Content-type':'image/png'});
          res.end(content);
      }
  });
}).listen(8080);
