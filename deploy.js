var Promise = require('bluebird');
var Client = require('promise-ftp');
var fs = Promise.promisifyAll(require('fs'));

var connectionProperties = {
  host: 'waws-prod-bay-075.ftp.azurewebsites.windows.net',
  user: 'MusicApp20170705\\jrbailey969Dev',
  password: 'Carlsjr@123',
  port: 21
};
var sourceDirectory = './dist/';
var targetDirectory = '/site/wwwroot/';

console.log('Deploying files...');

var c = new Client();

var connect = function() {
    return c.connect(connectionProperties);
};

var getList = function () {
    return fs.readdirAsync(sourceDirectory);
};

var uploadFiles = function(file) {
    return c.put(sourceDirectory + file, targetDirectory + file)
        .then(function () {
            console.log('\t' + file);
        });
};

var disconnect = function() {
    c.end(); 
    console.log('Deployment comlete.');
};

connect()
    .then(getList)
    .map(uploadFiles)
    .then(disconnect);
