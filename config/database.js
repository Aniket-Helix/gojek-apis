const pg = require('pg');
const ssh2 = require('ssh2');


const pgURI = 'postgres://postgres:ecometersuperlord@ecometer-dev.cplm2pqxxfjf.ap-south-1.rds.amazonaws.com:5432/ecometer';
client = new pg.Client(pgURI);
    client.connect(function(err) {
      console.log('Database Connected !');
    });
    
    client.on('connect', () => {
    });


module.exports = {
    query: (text, params) => client.query(text, params),
};