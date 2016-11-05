/**
 * Created by Administrator on 2016/11/3 0003.
 */
function CoinAni(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.cur=0;
    this.move();
}
CoinAni.prototype.draw=function(gd){
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    if(this.type==1||this.type==2||this.type==3){
        gd.drawImage(JSON['coinAni1'],
            0,60*this.cur,60,60,
            -30,-30,60,60
        );
    }else if(this.type==4||this.type==5||this.type==6||this.type==7){
        gd.drawImage(JSON['coinAni2'],
            0,60*this.cur,60,60,
            -30,-30,60,60
        );
    }
    gd.restore();
};
CoinAni.prototype.move= function () {
    var _this=this;
    setInterval(function(){
        _this.x+=(0-_this.x)/10;
        _this.y+=(650-_this.y)/10;
        _this.cur++;
        if(_this.cur==10){
            _this.cur=0;
        }
    },30);

};
CoinAni.prototype.playSong = function () {
    var oA = new Audio();
    oA.src = 'snd/coin.wav';
    oA.volume=1;
    oA.play();
};