const express = require('express');
const {ServerConfig, Logger} = require('./config');
const apiroutes = require('./routes');
const serverConfig = require('./config/server-config');

const app = express();

app.use('/api', apiroutes);

app.listen(serverConfig.PORT, ()=> {
    console.log(`Successfully started the server on port : ${serverConfig.PORT}`);
   // Logger.info("Successfully started the server");
})