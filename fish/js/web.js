/**
 * Created by Administrator on 2016/11/3 0003.
 */
//渔网的尺寸
var WEB_SIZE=[
    null,
    {x: 333, y: 374, w: 88, h: 86},
    {x: 15, y: 414, w: 109, h: 108},
    {x: 178, y: 370, w: 127, h: 125},
    {x: 255, y: 196, w: 147, h: 145},
    {x: 3, y: 245, w: 161, h: 153},
    {x: 242, y: 2, w: 179, h: 180},
    {x: 22, y: 21, w: 200, h: 201}
];
function Web(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.scale=1;
}
Web.prototype.draw=function(gd){
    var x=WEB_SIZE[this.type].x;
    var y=WEB_SIZE[this.type].y;
    var w=WEB_SIZE[this.type].w;
    var h=WEB_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.scale(this.scale,this.scale);
    gd.drawImage(JSON['web'],
        x,y,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};