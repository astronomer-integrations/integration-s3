var Test = require('segmentio-integration-tester');
var assert = require('assert');
var S3Integration = require('../lib');

describe('Mixpanel', function() {
    var s3Integration;
    var settings;
    var test;

    beforeEach(function(){
        settings = {
            region: 'us-east-1',
            bucketName: 'astronomer-test',
            accessKeyId: 'AKIAILIYKBHR2VM5AWHQ',
            secretAccessKey: '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'
        };
        s3Integration = new S3Integration(settings);
        test = Test(s3Integration, __dirname);
    });

    it('should have correct settings', function(){
        test
        .name('S3 Integration')
        .ensure('settings.bucketName')
        .channels(['server']);
    });
});
