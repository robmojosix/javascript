const express = require('express');
const bodyParser = require('body-parser');
const s3 = require('s3');
const fs = require('fs');

console.log(process.env);

var client = s3.createClient({
  s3Options: {
    accessKeyId: process.env['s3_accesskey'],
    secretAccessKey: process.env['s3_secretkey'],
    // any other options are passed to new AWS.S3()
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  },
});

function validateJson(json,res) {
  console.log("validating json");
  try {
    return JSON.parse(json);
  }
  catch(err) {
    res.send('Failure parsing json');
  }
}

function uploadToS3(json, res) {
  console.log("uploading to s3")
  let localFile = __dirname + '/timestampedFile.json';
  try {
    fs.writeFileSync(localFile, JSON.stringify(json));
  }
  catch(e){
    console.log('error loading file', e);
    res.send('canne upload file')
  }

  var params = {
    localFile: __dirname + '/timestampedFile.json',
    s3Params: {
      Bucket: process.env["s3_bucket"],
      ACL: 'public-read',
      Key: "qa/timestampedFile.json",
    },
  };
  console.log("calling uploader");
  var uploader = client.uploadFile(params);
  uploader.on('error', function(err) {
    res.send("errored uploading to s3");
  });
  uploader.on('progress', function() {
    console.log("progress", uploader.progressMd5Amount,
              uploader.progressAmount, uploader.progressTotal);
  });
  uploader.on('end', function() {
    res.send('You have just posted: \n' + JSON.stringify(json));
  });
}

const app = express();

app.use('/', express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.send('ok');
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`); // add index.html file to same dir to serve
});

app.post('/submit-to-s3', (req, res) => {
  console.log(req.body.json);
  const json = req.body.json
  const validatedJson = validateJson(json, res);

  uploadToS3(validatedJson, res);
});

app.listen(process.env.SERVER_PORT || 8080, function(){
  console.log('listening on', process.env.SERVER_PORT || 8080);
});
