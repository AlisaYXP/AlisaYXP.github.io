ajax     单向     客户端->服务器
websocket     双向 性能更高
                   客户端->请求服务器
                   服务器->客户端 主动发数据
5M 与ajax速度相比快17倍
websocket的使用：
     1、node安装包解压
     2、npm install socket.io
     自己下载的话，是最新版本，要注意版本号，因为最新的有所更改
使用：
     在node文件夹中写一个server.js
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
});
在node文件夹下建立一个新的文件'www'，在这个文件夹下写一个client页面
<script src="/socket.io/socket.io.js"></script>
<script>   
   var ws=io.connect('ws://localhost:8082');
   ws.on('time',function(result){
      console.log(result);
   });
</script>
在node文件夹中，右键GIT Bash here，输入命令：
     node server.js
这就启动了服务器
在浏览器中打开页面，把地址改为localhost：8082/文件名.html
查看服务器是否给客户端发信息，客户端是否给服务器发信息

发的信息是多个json时，将json放在数组中以字符串的形式传输；
服务器端将需要传输的数据转换成字符串即可传输；
客户端接收数据时，将数据eval之后再做其他操作。
服务器端：
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
客户端： 
<script src="/socket.io/socket.io.js"></script>
 <script>
     var ws=io.connect('ws://localhost:8087');
     ws.on('time',function(res){
         //console.log(typeof res);
/*var arr=eval(res);
for(var i=0;i<arr.length;i++){
   document.write(1);
}*/
     console.log(res[0]);
     });
     var str='[{"a":12,"b":5},{"c":8,"d":2}]';
     ws.emit('yxp',str);
 </script>
