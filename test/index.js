var Test = require('segmentio-integration-tester');
var assert = require('assert');
var S3Integration = require('../lib');

describe('Mixpanel', function() {
    var s3Integration;
    var settings;
    var test;

    beforeEach(function(){
        settings = {
        };
        s3Integration = new S3Integration(settings);
        test = Test(s3Integration, __dirname);
    });

    it('should have correct settings', function(){
        test
        .name('S3 Integration')
        .channels(['server']);
    });

    describe('.track()', function(){
        it('should send track correctly', function(done){
            var json = test.fixture('track-basic');
            test
            .set(settings)
            .track(json.input)
            .end(function(err, res){
                if (err) return done(err);
                done();
            });
        });
    });
});
