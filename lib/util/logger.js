'use strict';

var bunyan = require('bunyan');

var logDir = process.env.NODE_LOG_DIR !== undefined
    ? process.env.NODE_LOG_DIR
    : ".";

var options = {
    name: 'integration-s3',
    streams: [{
        level: 'trace',
        path: logDir + '/app.log'                
    }]
};

module.exports = bunyan.createLogger(options);
