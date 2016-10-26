【geolocation】(^_^)
地理定位
     用途：
          1、社交、陌陌、附近的人、微信
          2、大众点评、美团、本应用
          3、地图、百度
     原理：
          PC不靠谱 IP定位
          手机端 GPS 基站
如何应用
调试：chrome google地图 api/手机
     navigator.geolocation:
          getCurrentPosition     获取当前地理位置
          watchPosition     实时获取地理位置
          watch 监视
               1、手机里面的值
               2、手机端页面 布局
getCurrentPosition(success,error)
getCurrentPosition(function(ev){
     ev.coords
     latitude=ev.coords.latitude;
     longitude=ev.coords.longitude;
},function(ev){
     ev.code
})
coords:
     latitude-纬度
     longitude-经度
     accuracy-精确度，单位米
     altitude-高度，单位米，海拔
     altitudeAccuracy-高度精确，单位米
     heading-运动的方向，相对于正北方向的角度
     speed-运动的速度(假设你在地平线上运动)
     accuracy>70 可用
code：
     1、用户拒绝
     2、获取超时(网络异常)
     3、获取失败
【百度地图】(^_^)
http://www.map.baidu.com ->
地图开放平台 ->
Web开发 ->
Javascript API ->
注册申请百度账号 ->
邮箱：Alisa09241213
手机号：136xxxxxxxx
激活邮箱
获取秘钥：
浏览器端  *
访问应用(AK)：jZ9ph8FgRhN3g2tzpp1Co9ZH5okRLLIU
示例DEMO
地图示例：
地图展示：
1、引入文件
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=jZ9ph8FgRhN3g2tzpp1Co9ZH5okRLLIU"></script>
2、var map = new BMap.Map("div1");    // 创建Map实例
3、var point = new BMap.Point(116.404, 39.915);     //设置中心点坐标
   map.centerAndZoom(point,15);  // 初始化地图,设置 地图级别
   map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
覆盖物示例：
获取覆盖物信息：
4、加一个红点(标注)
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker); // 将标注添加到地图中
5、设置点的弹跳动画
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
6、设置点的新图标
//创建小狐狸
var pt = new BMap.Point(116.417, 39.909);
var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300,157));
var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
map.addOverlay(marker2);              // 将标注添加到地图中
7、搜索
检索示例：
关键字搜索：
var local = new BMap.LocalSearch(map, {
    renderOptions:{map: map}
});
local.searchNearby(oT.value,point,1000);
local.searchNearby('检索关键字',point,搜索范围单位米);
