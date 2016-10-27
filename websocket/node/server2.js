/**
 * Created by Administrator on 2016/10/24 0024.
 */
var http=require('http');
var fs=require('fs');
var io=require('socket.io');
var httpObj=http.createServer(function(req,res){
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
httpObj.listen(8087);
var ws=io.listen(httpObj);
ws.on('connection',function(socket){
    console.log('有人来了');
    setInterval(function(){
        //var str=JSON.stringify([{"a":12,"b":5},{"c":8,"d":2}]);
		var str='[{"a":12,"b":5},{"c":8,"d":2}]';
        socket.emit('time',str);
    },1000);
    socket.on('yxp',function(json){
        //var json=JSON.parse(json);
        console.log(json);
    });
});