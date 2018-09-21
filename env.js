
// Configuration file
let log = require('loglevel');

module.exports = {
    // Log Level Configuration
    port : 8000,
    loglevel: log.levels.DEBUG,
    address: 'mqtt://mycube.dscloud.me',
    topic_ven: 'ventilation'
}