【svg与canvas 】
Raphael.js 拉斐尔 画图的库
canvas 
     兼容性 IE9+
     没有事件 画布上是一堆像素点
     性能极高
应用：小游戏，对性能要求高
svg
     也是用来画图的，与canvas是好基友
     兼容性 IE9+
     本质：一堆标签和属性
     有事件和属性
     性能一般
应用：对交互要求高，性能一般的地方，例如图表，地图(坐标会给出) firwork(网页作图软件)
【线line】
1、常识：属性没有单位，标签都是透明的，svg内的标签都要闭合，可以把这些标签当做div标签，但行间的属性值不能直接获取和设置，得用getAtrribute/setAtrribute。
2、表现：
     1）属性  
<line x1="100" y1="100" x2="300" y2="300" stroke="red" stroke-width="10"></line>
 2）样式
在style中设置stroke：red; stroke-width:10px;
小例子：鼠标移动到线上，线变成黄色
line:hover{
    stroke:yellow;
}
window.onload=function(){
    var aLine=document.querySelectorAll('line');
    for(var i=0;i<aLine.length;i++){
        aLine[i].onmouseover=function(){
            this.style.stroke='yellow';
        };
    }
};
window.onload=function(){
    var aLine=document.querySelectorAll('line');
    for(var i=0;i<aLine.length;i++){
        aLine[i].onclick=function(){
            this.setAttribute('stroke','yellow');
        };
    }
};
获取非行间样式：
function getStyle(obj,sName){
    return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
3、变形
     旋转：以画布左上角为中心旋转
     以线中心旋转：          
line{
    transition:1s all ease;
    transform-origin:center center;
}
line:active{
    transform:rotate(30deg);
}
  行间：     
  transform="rotate(30,200,0)"
【矩形rect】    
<rect x="200" y="200" width="200" height="100" stroke="red" stroke-width="20" fill="yellow" stroke-opacity=".4" fill-opacity=".5" rx="10" ry="20"></rect>
rx，ry：圆角
线宽：是从中心线向内外平均扩
【圆circle】
<circle cx="200" cy="200" r="150" stroke="rgba(255,0,0,.3)" stroke-width="20" fill="yellow" fill-opacity=".4"></circle>
【椭圆ellipse】
<ellipse rx="150" ry="30" stroke-width="60" cx="300" cy="300" stroke="rgba(255,0,0,.3)"></ellipse>
注：当stroke-width的值等于rx或者ry的二倍时，fill不能显示出来了
【端点，连接点，虚线】
     端点：stroke-linecap="butt/round/square";
     连接点：stroke-linejoin="bevel/round";
     虚线：stroke-dasharray="数值1 数值2，……";
【运动】
1、样式：transition:1s all ease;
2、属性：定时器，moveSvg(获取和更改属性值时用getAttribute/setAttribute)
【创建删除标签】 
var oRect=document.createElementNS('http://www.w3.org/2000/svg','rect');
oSvg.appendChild(oRect);
oRect.setAttribute('x',200);
oRect.setAttribute('y',200);
oRect.setAttribute('width',200);
oRect.setAttribute('height',100);
oSvg.removeChild(oRect);
【path】
     用的多
<path d="M100 100 L200 200 L200 100 Z" stroke="red" stroke-width="10" fill="yellow"></path>
M,L,Z:绝对定位
<path d="m100 100 l200 200 l200 100 z" stroke="red" stroke-width="10" fill="yellow"></path>
m,l,z:相对定位
【text】
<text x="200" y="200" stroke="red" stroke-width="2">aaa</text>
【vml】
     VML中文手册
     兼容：IE5-7
     要想兼容IE-8：< meta http-equiv = "X-UA-Compatible" content = "IE=EmulateIE7" />
     判断IE6浏览器：
     if(navigator.userAgent.indexOf('MSIE 6.0')！=-1){

     }
【vml使用】
1、添加命名空间
     <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
2、添加重置样式
     v\:*{behavior:url(#default#VML);}
3、line  
<v:line from="100,100" to="300,300"></v:line>
4、rect
     注：vml的图形，要设置成块元素   
v\:* {behavior: url(#default#VML); display: block;}
<v:rect style="width:200px; height:100px"></v:rect>
5、箭头
<v:line from="100,100" to="300,300">
    <v:stroke StartArrow="Oval" EndArrow="Diamond"/>
</v:line>
折线
<v:PolyLine filled="false" Points="0,0 0,100 20,150 200,100" style="position:relative"/>
<v:stroke StartArrow="Oval" EndArrow="Classic" dashstyle="Dot" />
</v:PolyLine>
圆
<v:arc filled=false style="position:relative;width:100;height:100" StartAngle="0" EndAngle="270"/>











