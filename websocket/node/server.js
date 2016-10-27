/**
 * Created by leolau on 2016/10/21.
 */
var http = require('http');
var fs = require('fs');
var io = require('socket.io');
var httpObj = http.createServer(function(req,res){
    fs.readFile('www'+req.url,function(err,data){
        if(err){
            res.write('404');
            res.end();
        }else{
            res.write(data);
            res.end();

        }
    });
});
httpObj.listen(8082);
var ws = io.listen(httpObj);
ws.on('connection',function(socket){
    //发送数据
    setInterval(function(){
        socket.emit('time',Date.now());
    },1000);
    socket.on('yxp',function(a,b){
        //var json=JSON.parse(json);
        console.log(a+':'+b);
    });
});