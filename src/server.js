const express = require('express');
const path = require('path');

const server = express();

//configuração do servcer//
server.use('/Public',express.static(path.resolve(__dirname,'..','Public')));

//rotas da aplicação//
server.get('/',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'view','home','index.html'));
});

server.listen(3000);