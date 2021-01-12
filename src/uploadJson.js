var aws = require('aws-sdk')

var s3 = new aws.S3({ accessKeyId: process.env.ACCESSKEYID, secretAccessKey: process.env.SECRETACCESSKEY })

function uploadJson(json) {
    s3.putObject({
        Bucket: 'newsletter-deschamps',
        Key: 'feed.json',
        Body: JSON.stringify(json),
        ContentType: "application/json"
    },
        function (err, data) {
            console.log(JSON.stringify(err) + " " + JSON.stringify(data));
        }
    );
}

module.exports = uploadJson;
