【手机拖拽】
     onmousedown->ontouchstart
     onmousemove->ontouchmove
     onmouseup->ontouchend
     后者事件使用时必须绑定
     var x=0;
     var y=0;
     oDiv.addEventListener('touchstart',function(ev){
    //alert(ev.targetTouches[0]);
    var disX=ev.targetTouches[0].pageX-x;
    var disY=ev.targetTouches[0].pageY-y;
},false);
     匿名函数无法解绑，因为直接使用匿名函数解绑相当于重新new了一个函数
     clientX->可视区坐标
     pageX->可视区坐标+滚动条滚动的距离
     oDiv.style.left/top 频繁修改DOM,性能不好
     拖拽的可能性：
          1、只拖了一下
          2、拖了一下，继续又拖了一下
     手机端时使用transform:translate();
     有的手机不好使就加WebkitTransform
     即：oDiv.style.WebkitTransform='translate('+x+'px,'+y+'px)';
     封装时，在手机上测试，双手同时按下，两个拖拽的事物粘合在一起，解决方法：
     手按下时会产生不同的id，不同的id控制所要拖拽的事物
     touchend->changedTouches
     即：ev.changedTouches[0].identifier==id;
     touchstart
          var id=ev.targetTouches[0].identifier;
     fnMove
         if(ev.targetTouches[0].identifier==id){

         }
     fnEnd
         if(ev.changeTouches[0].identifier==id){

         }
注：ev.preventDefault();->拖拽时阻止默认事件，防止拖拽物体时出现一顿一顿的现象；
ontouchmove和ontouchend事件用document不用oBox的原因是防止物体被拖拽一次后不能再次拖拽
【轮播图】
1、rem布局
2、基于手机拖拽
3、获取按下和抬起之间的距离
4、根据方向，做对应的iNow    
if(Math.abs(upX-downX)>50){
    if(upX>downX){
        iNow--;
        if(iNow==-1){
            iNow=0;
        }
    }else{
        iNow++;
        if(iNow==aDl.length){
            iNow=aDl.length-1;
        }
    }
}
x=-aDl[0].offsetWidth*iNow;
oBox.style.transform='translate('+x+'px,'+y+'px)';
注意：
     大的块一定要用rem，能用rem就用rem，若有小东西放大后不好看就用px
【拖拽锁定方向】
     只能上下拖拽或者左右拖拽
应用：网易
translate3d(10px,10px,0)->开启硬件加速，防止闪，但耗电
       //判断是否固定方向
if(dir){
     //左右拖拽的时候
    if(dir=='lr'){
        x=moveX-disX;
        //x，y都要写，不然第二次拖拽时，是从原始位置开始的，位置就不能够连续
        //手机测试有可能不好使，就得写Webkit
           oBox.style.transform='translate('+x+'px,'+y+'px)';
               oBox.style.WebkitTransform='translate('+x+'px,'+y+'px)';
            //上下拖拽的时候
    }else if(dir=='tb'){
        y=moveY-disY;
        oBox.style.transform='translate('+x+'px,'+y+'px)';
        oBox.style.WebkitTransform='translate('+x+'px,'+y+'px)';
    }
}else{
    //没有方向时自己判断方向
    if(Math.abs(downX-moveX)>50){
        dir='lr';
    }else if(Math.abs(downY-moveY)>50){
        dir='tb';
    }
}
【模拟新闻页面】
1、基本样式
2、基本拖拽
3、限制拖拽
4、无缝轮播
注意：
      限制拖拽和无缝轮播有冲突，在touchend中做一个if判断，当完成上下拖拽时禁止左右拖拽 。
【单点旋转】
oDiv.style.transform='rotate('+d+'deg)';
oDiv.style.WebkitTransform='rotate('+d+'deg)';
【多点旋转】
function getD(ev){
     //两点
    var x1=ev.targetTouches[0].pageX;
    var y1=ev.targetTouches[0].pageY;
    var x2=ev.targetTouches[1].pageX;
    var y2=ev.targetTouches[1].pageY;
    var x=x2-x1;
    var y=y1-y2;
    return a2d(Math.atan2(y,x));
}
//判断是否是两点旋转
if(ev.targetTouches.length==2){
    var downD=getD(ev);
}
//弧度转角度
function a2d(n){
    return n*180/Math.PI;
}
【多点缩放】    
function getS(ev){
    var x1=ev.targetTouches[0].pageX;
    var y1=ev.targetTouches[0].pageY;
    var x2=ev.targetTouches[1].pageX;
    var y2=ev.targetTouches[1].pageY;
    var a=x1-x2;
    var b=y1-y2;
    //return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    return Math.sqrt(a*a+b*b);
}
if(ev.targetTouches.length==2){
    scale=getS(ev)/s*oldS;
    oDiv.style.transform='scale('+scale+')';
    oDiv.style.WebkitTransform='scale('+scale+')';
}
【多点平移】 
if(ev.targetTouches.length==2){
    var disX=(ev.targetTouches[0].pageX+ev.targetTouches[1].pageX)/2-x;
    var disY=(ev.targetTouches[0].pageY+ev.targetTouches[1].pageY)/2-y;
}
function fnMove(ev){
    if(ev.targetTouches.length==2){
        var x=(ev.targetTouches[0].pageX+ev.targetTouches[1].pageX)/2-disX;
        var y=(ev.targetTouches[0].pageY+ev.targetTouches[1].pageY)/2-disY;
        oDiv.style.transform='translate('+x+'px,'+y+'px)';
        oDiv.style.WebkitTransform='translate('+x+'px,'+y+'px)';
    }
}
