/**
 * Created by Administrator on 2016/12/2.
 */
(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/375+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);
var oNav = document.getElementById('onav');
var oClose = document.getElementById('close');
var oB = document.getElementById('oBox');
var ob = document.getElementById('box');
var oA = document.getElementById('oA');

   oNav.addEventListener('touchstart', function (ev) {
        oClose.style.display = 'block';
        oB.style.display = 'block';
        ob.style.display = 'block';
   });
    oClose.addEventListener('touchstart', function (ev) {
        oClose.style.display = 'none';
        oB.style.display = 'none';
        ob.style.display = 'none';
    });
oA.addEventListener('touchstart', function (ev) {
    oClose.style.display = 'none';
    oB.style.display = 'none';
    ob.style.display = 'none';
});

