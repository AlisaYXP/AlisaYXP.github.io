【服务器】
响应用户请求，服务器就是一台配置很高的电脑
服务器分类：web服务器，ftp服务器
1）硬配：公司用，价格很高
2）集成环境(软件模拟)
     wamp window apache mysql php appserv
     xampp win mac linux myaql apache php
安装：
     全部默认，一步一步安装
注：在服务器下不要用中文路径
如何看是否正确安装
     1、图标显示为白色
     2、在地址栏输入
     本地地址localhost=127.0.0.1
     C:\wamp\wampmanager.exe双击 重新打开
     C:\wamp\www 网站的代码
     访问：http://localhost
           http://localhost:8080 8088
【cookie 】
document.cookie='name=Alisa';
1、怎么查看cookie：
     chrome F12 ->resource/application(新版)->左侧cookies
2、cookie是按照域名去存储的，一个域名一套cookie
注：cookie运行在服务器下面
3、cookie特点
     1）cookie成对出现
          name value
     2)cookie 不安全 所有来自cookie的数据都是不可信的，不要存敏感信息
     用户名 查看cookie
     网站 不能用cookie做判断
     3）cookie比较小
          4k
     4）cookie不能跨浏览器
     5）cookie有一个有效期
          file://C;/wamp/www/cookie.html 本地路径
          http://网络
          默认是Session 浏览器关闭 会话结束
          toGMTString 将UTC->GMT
          设置过期时间
          EXPIRES='+oDate.toGMTString()'; 
【cookiejs】
     //iDay多长时间失效
function addCookie(name,value,iDay){
   if(iDay){
      var oDate=new Date();
      oDate.setDate(oDate.getDate()+iDay);
      oDate.setHours(0,0,0,0);
      document.cookie=name+'='+value+'; PATH=/; EXPIRES='+oDate.toGMTString();
   }else{
      document.cookie=name+'='+value+'; PATH=/;';   
   }
}
function getCookie(name){
   var arr=document.cookie.split('; ');
   for(var i=0;i<arr.length;i++){
      if(arr[i].split('=')[0]==name){
         return arr[i].split('=')[1];
      }
   }
   return '';
}
function removeCookie(name){
   addCookie(name,1,-1); 
}
【cookie的应用】
     1、记住用户名
     2、拖拽记住位置
     3、记住选项的选项卡






















