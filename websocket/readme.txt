ajax     ����     �ͻ���->������
websocket     ˫�� ���ܸ���
                   �ͻ���->���������
                   ������->�ͻ��� ����������
5M ��ajax�ٶ���ȿ�17��
websocket��ʹ�ã�
     1��node��װ����ѹ
     2��npm install socket.io
     �Լ����صĻ��������°汾��Ҫע��汾�ţ���Ϊ���µ���������
ʹ�ã�
     ��node�ļ�����дһ��server.js
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
    //��������
    setInterval(function(){
        socket.emit('time',Date.now());
    },1000);
});
��node�ļ����½���һ���µ��ļ�'www'��������ļ�����дһ��clientҳ��
<script src="/socket.io/socket.io.js"></script>
<script>   
   var ws=io.connect('ws://localhost:8082');
   ws.on('time',function(result){
      console.log(result);
   });
</script>
��node�ļ����У��Ҽ�GIT Bash here���������
     node server.js
��������˷�����
��������д�ҳ�棬�ѵ�ַ��Ϊlocalhost��8082/�ļ���.html
�鿴�������Ƿ���ͻ��˷���Ϣ���ͻ����Ƿ������������Ϣ

������Ϣ�Ƕ��jsonʱ����json�������������ַ�������ʽ���䣻
�������˽���Ҫ���������ת�����ַ������ɴ��䣻
�ͻ��˽�������ʱ��������eval֮����������������
�������ˣ�
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
    console.log('��������');
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
�ͻ��ˣ� 
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
