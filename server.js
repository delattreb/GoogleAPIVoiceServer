var http = require('http');
let log = require('loglevel');
let dateFormat = require('dateformat');
let env = require('./env');

log.setDefaultLevel(env.loglevel);

http.createServer(function (req, res) {
    //log.debug(req);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.end();
}).listen(env.port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    log.info(dateFormat(new Date(), "dd/mm/yyyy H:MM:ss"), 'Server is up on port', env.port);
}
);
