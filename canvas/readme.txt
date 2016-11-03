【canvas】
     矢量，放大不失真，兼容性：IE9+
     注：background不是canvas的内容，想要验证一个效果需要画布有颜色时，将画布的fillStyle填充颜色，fillRect画布的宽高。
     canvas的宽高是两个属性，写在行间,若写在样式中，画布上的图被拉伸。
//获取元素
var oC=document.getElementById('c1');
//准备一支笔，有2d也有3d
var gd=oC.getContext('2d');
//清除画布
gd.clearRect();
//保存当前状态
gd.save();
//开始画图
gd.beginPath();
//把笔移到画布上某个点
gd.moveTo(100,100);
//连线
gd.lineTo(100,300);
//连线的宽度
gd.lineWidth=10;
//连线的颜色
gd.strokeStyle='red';
//路径闭合
gd.closePath()(可选);
//描线
gd.stroke();
//填充的颜色
gd.fillStyle='green';
//填充上颜色
gd.fill();
//填充位置，坐标，宽，高
gd.fillRect(100,100,100,100);
//画矩形
gd.strokeRect(100,100,100,100);
//将画好的图存储起来
gd.restore();
画图流程
    gd.clearRect();
    gd.save();
    gd.beginPath();
    xxxxx
    gd.closePath()(可选)
    gd.restore();
    gd.save();
    gd.beginPath();
    xxxxx
    gd.closePath()(可选)
    gd.restore();
【柱状图】^_^
 var arr = [300,200,50,800,150,900];
 1、计算数组中的最大值
     Math.max.apply(null,arr);
 2、确定柱状图左上角的位置
     y轴坐标是画布的高度减去柱状图的高度
注：画柱状图需要留白时，自己设置高度，描线的宽度是给具体位置左右一半的值，不能通过canvas设置padding值，否则描边左右上都会缺少一部分。
【canvas的运动】
清除画布：先清除后画，解决毛边问题TVB
     clearRect();
性能：canvas性能及其的高

定时器的时间设置16,30的原因：
电脑一般是fps(帧频)：60次/s
高频版：1000ms/60=16ms
低频版：IE6只能支持到30ms
【屏保】
1、五个随机点(x,y,iSpeedX,iSpeedY)
2、小正方形
3、定时器，实时生成五个小正方形
4、将五个小正方形随机连线
5、画尾巴
arr:当前的五个小正方形的坐标
[[{x,y},{x,y},{x,y},{x,y},{x,y},]]
oldArr：存下最近五次五个小正方形的坐标
LEN:画尾巴画几遍
注意：
beginPath(); 这句话的位置应该在第一个for循环中
【弧】
gd.arc(cx,cy,r,start,end,false);
arc->路径
gd.stroke();
圆心坐标，半径，起始弧度，结束弧度，是否逆时针
false->顺时针；true->逆时针
弧是一个路径
例子：弧版钟表
【canvas的文字】
默认值：left,bottom
gd.textAlign='';center/right/left(默认值)
gd.textBaseLine='';top/middle/bottom(默认值)
gd.font='60px 楷体';必须写两个值，第二个值可以随便写，随便写时默认为宋体
gd.strokeText('要写的文字'，x,y);
gd.fillText('要写的文字',x,y);
gd.measureText(str).width; 没有height
【canvas的事件】
canvas中的图没有事件，通过if判断图的所在区域来写事件
例子：canvas拖拽
原理：不是真实的拖拽，是move时不停的重画，重画前清除画布
矩形区域判断：
if(ev.clientX>x&&ev.clientX<x+w&&ev.clientY>y&&ev.clientY<y+h){}
圆形区域判断：
var a=ev.clientX-cx;
var b=ev.clientY-cy;
var c=Math.sqrt(a*a+b*b);
if(c<r){}

isPointInPath 检测点是否在路径之内
gd.rect(x,y,w,h);
rect->路径；
【变形】^_^
先做变换再描边stroke或者填充fill
1、gd.rotate(d2a(45));
     1）必须是弧度，不带单位deg
     2）不是沿着物体中心，是沿着画布的左上角旋转的
沿物体中心旋转一定角度：
     gd.strokeRect(x,y,w,h);
     先translate后rotate，
     //图形在画布中时，图形中心的坐标即是translate的参数值
     translate(x+w/2,y+h/2);//将图平移回原始的位置，但此时画布也跟着平移了
     rotate(d2a(10));
     //假设图形中心与画布左上角重合时，图形左上角的坐标即是strokeRect的前两个参数值                                                             
     gd.strokeRect(-w/2,-h/2,w,h);//将图的中心移动到画布的左上角
例子：根据物体自身中心旋转
2、gd.scale(2,2);
     1）必须是两个参数
     2）第一个值指的是x轴方向的所有变量，包括宽，x轴坐标，还有线宽，第二个值指的是y轴方向。
3、gd.translate(100,100);
     1)必须写两个参数

canvas变形是累加的，在变形前后加
gd.save();//相当于拍了一个快照，将当时的场景保存下来，画布就不会跟着旋转了
gd.restore();
【端点样子 】
gd.lineCap='';butt(默认)/round/square
【连接点 】
gd.lineJoin='';bevel/round
【阴影】
gd.shadowBlur=10;
gd.shadowOffsetX=10;
gd.shadowOffsetY=10;
gd.shadowColor='#000';
gd.font='100px 楷体';
gd.strokeText('闫晓佩',200,200);
【渐变】
     线性渐变：
     是以两个坐标为基准，在连线方向上渐变，可以是fill也可以是stroke，还可以是strokeText，fillText。
var linear=gd.createLinearGradient(400,100,400,300);
linear.addColorStop(0,'red');
linear.addColorStop(1,'aqua');
gd.fillStyle=linear;
gd.fillRect(0,0,oC.width,oC.height);
     径向渐变：
      是以两个圆心半径为基准，由圆心往外扩的渐变 ，可以是fill也可以是stroke，还可以是strokeText，fillText。
     var ra=gd.createRadialGradient(100,100,100,100,100,400);
注：画布移动，渐变坐标，对应着反向移动，与画图时的坐标一致(用的并不多)。
【导出图片】
     只支持png，jepg，不支持gif      
//将图片信息base64获取到 image/jpeg 图片格式 默认是png
//var res=oC.toDataURL('image/jpeg');
var res=oC.toDataURL();
var oImg=new Image();
oImg.src=res;
//在当前页面body中打开图片
document.body.appendChild(oImg);
//在新窗口打开图片
//window.open(res);
【背景平铺】
var oC=document.getElementById('c1');
var gd=oC.getContext('2d');
var oImg=new Image();
oImg.src='素材/1.jpg';
oImg.onload=function(){
    var pa=gd.createPattern(oImg,'repeat-y');
    gd.fillStyle=pa;
    gd.fillRect(0,0,oC.width,oC.height);
};
把图片画到canvas上
gd.drawImage(oImg,0,0);
完整用法：  
gd.drawImage(oImg,
    sx,sy,sw,sh,//图片的左上角的位置，图片的大小
    dx,dy,dw,dh//图片要放在画布的位置，图片放在画布的大小
);
【像素级操作】
     一定要在服务器下操作
     rgba：是指每个像素都是由四个点表示出来的
oImg.onload=function(){
    gd.drawImage(oImg,0,0);
    var result=gd.getImageData(0,0,oC.width,oC.height);
    var d=result.data;
    for(var i=0;i< d.length;i+=4){
          //变无色         
          d[i] = d[i+1] = d[i+2];
          //曝光
        d[i]+=200;
        d[i+1]+=200;
        d[i+2]+=200;
          //复古 
var r=d[i];
var g=d[i+1];
var b=d[i+2];

d[i]=(r*0.393)+(g*0.769)+(b*0.189); // red
d[i+1]=(r*0.349)+(g*0.686)+(b*0.168); // green
d[i+2]=(r*0.272)+(g*0.534)+(b*0.131); // blue
//翻转
d[i]=255-d[i];
d[i+1]=255-d[i+1];
d[i+2]=255-d[i+2];
    }
    gd.putImageData(result,0,0);
};
 
【jcscript库】^_^
官网：jcscript.com
api：http://jcscript.com/documentation/
注意：颜色使用16进制
用法：
//开始语句
jc.start('c1',true);
//文字
jc.text('按钮',135,125);
//画圆并加id名
jc.circle(300,300,100,'#f54',true).id('cir');
//画矩形并加事件
jc.rect(100,100,100,40).click(function(){
    //给圆加属性加动画 
    jc('#cir').attr('color','#0f0').animate({
        x:400,
        y:200,
        radius:50
        //设置动画运动时间
    },2000);
});
//结束语句
jc.start();
