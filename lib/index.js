/**
 * Module dependencies.
 */

var integration = require('segmentio-integration');
var AWS = require('aws-sdk');
var logger = require('./util/logger');
var kinesis = new AWS.Kinesis({ region: 'us-east-1' });

/**
 * Expose `S3Integration`
 */

var S3Integration = module.exports = integration('S3 Integration')
.channels(['server'])
.ensure('settings.streamName');

S3Integration.prototype.invoke = function(payload, fn) {
    var appId = payload.field('appId');
    if (!appId) {
        return logger.info('Payload must have an appId.');
    }

    return kinesis.putRecord({
        StreamName: this.settings.streamName,
        PartitionKey: appId,
        Data: JSON.stringify(payload.json())
    }, fn);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 * @param {Function} fn
 * @api private
 */
S3Integration.prototype.identify = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Track.
 *
 * @apram {Track} track
 * @param {Function} fn
 * @api private
 */
S3Integration.prototype.track = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Page.
 *
 * @apram {Page} page
 * @param {Function} fn
 * @api private
 */
S3Integration.prototype.page = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Screen.
 *
 * @param {Screen} screen
 * @param {Function} fn
 * @api private
 */
S3Integration.prototype.screen = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Group.
 *
 * @param {Group} group
 * @param {Function} fn
 * @api private
 */
S3Integration.prototype.group = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Alias.
 *
 * @param {Alias} alias
 * @param {Function} fn
 * @api private
 */
S3Integration.prototype.alias = function(payload, fn){
    return this.invoke(payload, fn);
};
