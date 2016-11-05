/**
 * Created by Administrator on 2016/11/2 0002.
 */
//产生随机整数
function rnd(m,n){
    return Math.floor(m+Math.random()*(n-m));
}
//度数转弧度
function d2a(n){
   return n*Math.PI/180;
}
//弧度转度数
function a2d(n){
    return n*180/Math.PI;
}
//将图片资源存到JSON中
var JSON={};
//加载资源
function loadImage(arr,fnSuccess){
    var count=0;
    for(var i=0;i<arr.length;i++){
        var oImg=new Image();
        oImg.src='img/'+arr[i]+'.png';
        (function(index){
            oImg.onload=function(){
                JSON[arr[index]]=this;
                count++;
                if(count==arr.length){
                    fnSuccess&&fnSuccess();
                }
            };
        })(i);
    }
}