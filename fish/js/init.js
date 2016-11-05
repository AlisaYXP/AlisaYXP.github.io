/**
 * Created by Administrator on 2016/11/3 0003.
 */
document.addEventListener('DOMContentLoaded',function(){
    var oC=document.getElementById('c1');
    var gd=oC.getContext('2d');
    var out=50;
    var rule=0.05;
    var direction=[-out,out];
    loadImage(resource,function(){
        var arrFish=[];
        var arrBullet=[];
        var arrDieFish=[];
        var arrCoinAni=[];
        var arrWeb=[];
        //生成炮
        var c1=new Cannon(7);
        setInterval(function(){
            gd.clearRect(0,0,oC.width,oC.height);
            //画炮台
            gd.drawImage(JSON['bottom'],
                0,0,765,70,
                0,532,765,70
            );
            //画炮
            c1.draw(gd);
            //画炮弹
            for(var i=0;i<arrBullet.length;i++){
                arrBullet[i].draw(gd);
            }
            //炮弹的性能优化
            for(var i=0;i<arrBullet.length;i++){
                if(arrBullet[i].x<-out||arrBullet[i].x>out+oC.width||arrBullet[i].y<-out||arrBullet.y>out+oC.height){
                    arrBullet.splice(i,1);
                    i--;
                }
            }
            //生成鱼
            if(Math.random()<rule){
                direction.sort(function(){
                    return Math.random()-0.5;
                });
                if(direction[0]<0){
                    //从屏幕左边生成鱼
                    var f1=new Fish(rnd(1,6));
                    f1.x=0-out;
                    f1.y=rnd(out,oC.height-out);
                    f1.rotate=rnd(-45,45);
                    arrFish.push(f1);
                }else{
                    //从屏幕右边生成鱼
                    var f1=new Fish(rnd(1,6));
                    f1.x=oC.width+out;
                    f1.y=rnd(out,oC.height-out);
                    f1.rotate=rnd(135,225);
                    arrFish.push(f1);
                }
            }
            //画鱼
            for(var i=0;i<arrFish.length;i++){
                arrFish[i].draw(gd);
            }
            //鱼的性能优化
            for(var i=0;i<arrFish.length;i++){
                if(arrFish[i].x<-out||arrFish[i].x>out+oC.width||arrFish[i].y<-out||arrFish.y>out+oC.height){
                    arrFish.splice(i,1);
                    i--;
                }
            }
            //画死鱼
            for(var i=0;i<arrDieFish.length;i++){
                arrDieFish[i].draw(gd);
            }
            //画硬币
            for(var i=0;i<arrCoinAni.length;i++){
                arrCoinAni[i].draw(gd);
            }
            //画网
            for(var i=0;i<arrWeb.length;i++){
                arrWeb[i].draw(gd);
                arrWeb[i].scale+=0.01
                if(arrWeb[i].scale>1.2){
                    arrWeb.splice(i,1);
                    i--;
                }
            }
            //判断所有的鱼和炮弹是否有碰撞
            for(var i=0;i<arrFish.length;i++){
                for(var j=0;j<arrBullet.length;j++){
                    if(arrFish[i].isIn(arrBullet[j].x,arrBullet[j].y)) {
                        var x=arrFish[i].x;
                        var y=arrFish[i].y;
                        var rotate=arrFish[i].rotate;
                        var type=arrFish[i].type;
                        //鱼死
                        arrFish.splice(i,1);
                        i--;
                        //炮弹也死
                        arrBullet.splice(j,1);
                        j--;
                        //生成死鱼
                        var dieFish=new DieFish(type);
                        dieFish.x=x;
                        dieFish.y=y;
                        dieFish.rotate=rotate;
                        arrDieFish.push(dieFish);
                        setTimeout(function(){
                            arrDieFish.shift();
                            //生成硬币
                            var coin1=new CoinAni(type);
                            coin1.x=x;
                            coin1.y=y;
                            coin1.playSong();
                            arrCoinAni.push(coin1);
                        },500);
                        //生成网
                        var w1=new Web(type);
                        w1.x=x;
                        w1.y=y;
                        arrWeb.push(w1);
                    }
                }
            }
        },16);
        oC.onclick=function(ev){
            var x=ev.clientX-oC.offsetLeft- c1.x;
            var y=c1.y-(ev.clientY-oC.offsetTop);
            var d=90-a2d(Math.atan2(y,x));
            c1.rotate=d;
            //炮发射时的状态
            c1.emitChange();
            //生成炮弹
            var b1=new Bullet(c1.type);
            b1.x=c1.x;
            b1.y=c1.y;
            b1.rotate=c1.rotate;
            b1.playSong();
            arrBullet.push(b1);
        };
    });
},false);