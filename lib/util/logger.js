'use strict';

var bunyan = require('bunyan');

var logDir = process.env.NODE_LOG_DIR !== undefined
    ? process.env.NODE_LOG_DIR
    : ".";

var options = {
    name: 'astronomer-kinesis-webhooks',
    streams: [{
        level: 'trace',
        path: logDir + '/app.log'                
    }]
};

module.exports = bunyan.createLogger(options);
