/**
 * Created by Ran Cohen on 17/06/2015.
 */

var http = require('http'),
    fs = require('fs');


fs.readFile('./build/html/testView.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});