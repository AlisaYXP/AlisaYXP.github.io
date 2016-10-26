【移动端调试(手机) 】
     1、chrome 手机模拟器 F12->手机图标 60%
     2、真机测试 wamp(用的比较多)
          1）手机和电脑在同一个网络下
          2）cmd ipconfig - all 查找ip
               192.168.10.218
          3）用手机输入ip+页面地址/cli.im
     3、browsersync (^_^)(用的多)
安装：
     1、新建node文件，在node文件中安装node_modules文件，同时新建www文件
     2、命令行 node文件中
     npm install --save-dev browser-sync(这个不好使就用下面的这句话)
     npm install -g browser-sync
     3、browser-sync start --server --files "**/*.css, **/*.html"
     出来一个页面上面显示
        Cannot GET/
        即正确运行
        将一个页面放在node文件下运行，将显示Cannot GET/页面的搜索框地址
        http://localhost:3000/放在运行页面的搜索框的文件名前面即可
     4、命令行中
     Local:http://localhost:3000
     External:http://172.20.10.2:3000
     将上面的网址再次放到文件名前面
     将完整网址复制到cli.im下生成二维码
     用手机微信扫二维码进行显示
     [BS] Serving files from: ./
     [BS] Watching files...
【重力感应 】
     微信摇一摇(^_^)
     DeviceMotionEvent
     devicemotion 当设备发生运动/改变
     accelerationIncludingGravity
     x
     y
     z
     animationend
     WebkitAnimationEnd
代码   
if(window.DeviceMotionEvent){
   window.addEventListener('devicemotion',function(ev){
      var acc=ev.accelerationIncludingGravity;
      if(Math.abs(acc.x)>10||Math.abs(acc.y)>10||Math.abs(acc.z)>10){
          //要执行的代码
         oDiv.addEventListener('WebkitAnimationEnd',function(){
            alert(1);   
         },false); 
      } 
   },false);
}else{
   alert('不支持');
}
