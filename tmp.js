let db = require('level')("/opt/dev/shortendb");

db.createReadStream()
    .on('data', function(data){
        console.log(data);
    });