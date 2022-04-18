const redis = require('redis');

const client = redis.createClient();

// export redis for caching the data.

client.connect();

client.on("error",(error)=>{
    console.log(error);
});

module.exports = client;