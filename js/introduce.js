document.addEventListener('DOMContentLoaded',function(){
	//rem应用
    (function (win,doc){
    	var oHtml=document.getElementsByTagName('html')[0];
        function change(){
            oHtml.style.fontSize = 20*doc.documentElement.clientWidth/320+'px';
        }
        change();
        win.addEventListener('resize',change,false);
    })(window,document);
    //用于合并时
	(function(){
		var oA=document.querySelector('.idxNavBtn');
		var oM=document.querySelector('.mask');
		oA.onclick=function(){
			if(this.innerHTML!='X'){
				this.innerHTML='X';
				this.style.backgroundImage='none';
				oM.style.display='block';
			}else{
				this.innerHTML='';
				this.style.backgroundImage='url(img/img1.png)';
				oM.style.display='none';
			}
		}
	})();

    //最底下的轮播图
    (function(){
    	var oT=document.getElementById('tab');
    	var aA=oT.children;
    	var oC=document.getElementById('content');
    	var oUl=oC.children[0];
        var aLi = oUl.children; 
        var x=0; 
        var iNow=0;
        //点击更换
    	for(var i=0; i<aA.length; i++){
    		aA[i].index=i;
    		aA[i].addEventListener('touchstart',function(ev){
    			for(var i=0; i<aA.length; i++){
    				aA[i].className='';
    			}
    			this.className='active';
                iNow=this.index;
    			oUl.style.transform='translate('+-iNow*16+'rem)';
    			oUl.style.transition='1s all ease';
                ev.preventDefault();
    		},false);
    	}
        //拖动
        oUl.addEventListener('touchstart',function(ev){
            var downX = ev.targetTouches[0].pageX;
            var disX = downX - x;
            function fnMove(ev){
                x = ev.targetTouches[0].pageX - disX;
                oUl.style.transform = 'translateX('+x+'px)';
            }
            function fnEnd(ev){
                document.removeEventListener('touchmove',fnMove,false);
                document.removeEventListener('touchend',fnEnd,false);
                var upX = ev.changedTouches[0].pageX;
                oUl.style.transition = '1 all ease';
                //移动距离大于50px
                if(Math.abs(upX - downX)>50){
                    //切换
                    //往左走
                    if(downX>upX){
                        iNow++;
                        if(iNow==aLi.length) iNow=aLi.length-1;
                        x = -aLi[0].offsetWidth*iNow;
                        oUl.style.transform = 'translateX('+x+'px)';
                    }else{
                        //往右走
                        iNow--;
                        if(iNow==-1) iNow = 0;
                        x = -aLi[0].offsetWidth*iNow;
                        oUl.style.transform = 'translateX('+x+'px)';
                    }
                }else{
                    //原地不动
                    x = -aLi[0].offsetWidth*iNow;
                    oUl.style.transform = 'translateX('+x+'px)';
                }
                for(var i=0; i<aA.length; i++){
                    aA[i].className='';
                }
                aA[iNow].className='active';
            }
            document.addEventListener('touchmove',fnMove,false);
            document.addEventListener('touchend',fnEnd,false);
            ev.preventDefault();
        },false);
    })();
},false)