/**
 * Created by Administrator on 2016/12/2 0002.
 */
;(function () {
    document.addEventListener('DOMContentLoaded',function(){
        var oBanner = document.querySelector('.banner');
        var oUl = oBanner.children[0];
        var aLi = oUl.children;
        var oNav = document.querySelector('.oNav');
        var oClose = document.getElementById('close');
        var oB = document.getElementById('oBox');
        var ob = document.getElementById('box');
        var oA = document.getElementById('oA');
        oUl.style.width = aLi[0].offsetWidth*aLi.length/rem+'rem';
        var bOk = false;
        var iNow = 1;
        var x = -iNow*aLi[0].offsetWidth/rem;
        oNav.addEventListener('touchstart', function (ev) {
            oClose.style.display = 'block';
            oB.style.display = 'block';
            ob.style.display = 'block';
        });
        oA.addEventListener('touchstart', function (ev) {
            oClose.style.display = 'none';
            oB.style.display = 'none';
            ob.style.display = 'none';
        });
        oClose.addEventListener('touchstart', function (ev) {
            oClose.style.display = 'none';
            oB.style.display = 'none';
            ob.style.display = 'none';
        });

        oUl.addEventListener('touchstart',function(ev){
            if(bOk)return;
            bOk = true;
            oUl.style.WebkitTransition = 'none';
            var oTouch = ev.targetTouches[0];
            var downX = oTouch.pageX/rem;
            var disX = downX-x;
            function fnMove(ev){
                var oTouch = ev.targetTouches[0];
                x = oTouch.pageX/rem-disX;
                oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
            }
            function fnEnd(ev){
                document.removeEventListener('touchmove',fnMove,false);
                document.removeEventListener('touchend',fnEnd,false);
                var oTouch = ev.changedTouches[0];
                var upX = oTouch.pageX/rem;

                if(Math.abs(upX-downX)>100/rem){
                    if(downX>upX){
                        iNow++;
                    }else if(downX<upX){
                        iNow--;
                    }
                }
                x = -iNow*aLi[0].offsetWidth/rem;

                oUl.style.WebkitTransition = '.5s all ease';

                oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                function tranEnd(){
                    oUl.removeEventListener('transitionend',tranEnd,false);
                    if(iNow==0){
                        iNow = aLi.length-2;
                        oUl.style.WebkitTransition = 'none';
                        x = -iNow*aLi[0].offsetWidth/rem;
                        oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                    }else if(iNow==aLi.length-1){
                        iNow = 1;
                        oUl.style.WebkitTransition = 'none';
                        x = -iNow*aLi[0].offsetWidth/rem;
                        oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                    }
                    bOk = false;
                }
                oUl.addEventListener('transitionend',tranEnd,false);
            }
            document.addEventListener('touchmove',fnMove,false);
            document.addEventListener('touchend',fnEnd,false);
            ev.preventDefault();
        },false);
    },false);
})();