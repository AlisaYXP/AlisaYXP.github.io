/**
 * Created by Administrator on 2016/11/2 0002.
 */
var BULLET_SIZE=[
    null,
    {x: 86, y: 0, w: 24, h: 26},
    {x: 62, y: 0, w: 25, h: 29},
    {x: 30, y: 0, w: 31, h: 35},
    {x: 32, y: 35, w: 27, h: 31},
    {x: 30, y: 82, w: 29, h: 33},
    {x: 0, y: 82, w: 30, h: 34},
    {x: 0, y: 0, w: 30, h: 44}
];
function Bullet(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.iSpeed=this.type*2;
    this.rotate=0;
    this.move();
}
Bullet.prototype.draw=function(gd){
    var w=BULLET_SIZE[this.type].w;
    var h=BULLET_SIZE[this.type].h;
    var x=BULLET_SIZE[this.type].x;
    var y=BULLET_SIZE[this.type].y;
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    gd.drawImage(JSON['bullet'],
        x,y,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
Bullet.prototype.move=function(){
    var _this=this;
    setInterval(function(){
        _this.x+=_this.iSpeed*Math.sin(d2a(_this.rotate));
        _this.y-=_this.iSpeed*Math.cos(d2a(_this.rotate));
    },16);
};
Bullet.prototype.playSong = function () {
    var oA = new Audio();
    oA.src = 'snd/cannon.mp3';
    oA.volume=0.2;
    oA.play();
};