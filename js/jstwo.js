/**
 * Created by Administrator on 2016/12/2 0002.
 */
document.addEventListener('DOMContentLoaded',function(){
    var oV = document.querySelector('video');
    var oPlay = document.getElementById('p1');
    var oStop = document.getElementById('p2');
    if (oV==true){
        oV.onmouseover = function () {
            oStop.style.display = 'block';
            oStop.onclick = function () {
                oV.pause();
            }
        };
        oV.onmouseout = function () {
            oStop.style.display = 'none';
        }
    }else{
        oStop.style.display = 'none';
        oPlay.style.display = 'block';
        oPlay.onclick = function () {
            oPlay.style.display = 'none';
            oV.play();
        }
    }
    oPlay.addEventListener('touchstart',function(ev){
        var oTouch = ev.targetTouches[0];
    },false);
},false);