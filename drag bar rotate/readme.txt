���ֻ���ק��
     onmousedown->ontouchstart
     onmousemove->ontouchmove
     onmouseup->ontouchend
     �����¼�ʹ��ʱ�����
     var x=0;
     var y=0;
     oDiv.addEventListener('touchstart',function(ev){
    //alert(ev.targetTouches[0]);
    var disX=ev.targetTouches[0].pageX-x;
    var disY=ev.targetTouches[0].pageY-y;
},false);
     ���������޷������Ϊֱ��ʹ��������������൱������new��һ������
     clientX->����������
     pageX->����������+�����������ľ���
     oDiv.style.left/top Ƶ���޸�DOM,���ܲ���
     ��ק�Ŀ����ԣ�
          1��ֻ����һ��
          2������һ�£�����������һ��
     �ֻ���ʱʹ��transform:translate();
     �е��ֻ�����ʹ�ͼ�WebkitTransform
     ����oDiv.style.WebkitTransform='translate('+x+'px,'+y+'px)';
     ��װʱ�����ֻ��ϲ��ԣ�˫��ͬʱ���£�������ק������ճ����һ�𣬽��������
     �ְ���ʱ�������ͬ��id����ͬ��id������Ҫ��ק������
     touchend->changedTouches
     ����ev.changedTouches[0].identifier==id;
     touchstart
          var id=ev.targetTouches[0].identifier;
     fnMove
         if(ev.targetTouches[0].identifier==id){

         }
     fnEnd
         if(ev.changeTouches[0].identifier==id){

         }
ע��ev.preventDefault();->��קʱ��ֹĬ���¼�����ֹ��ק����ʱ����һ��һ�ٵ�����
ontouchmove��ontouchend�¼���document����oBox��ԭ���Ƿ�ֹ���屻��קһ�κ����ٴ���ק
���ֲ�ͼ��
1��rem����
2�������ֻ���ק
3����ȡ���º�̧��֮��ľ���
4�����ݷ�������Ӧ��iNow    
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
ע�⣺
     ��Ŀ�һ��Ҫ��rem������rem����rem������С�����Ŵ�󲻺ÿ�����px
����ק��������
     ֻ��������ק����������ק
Ӧ�ã�����
translate3d(10px,10px,0)->����Ӳ�����٣���ֹ�������ĵ�
       //�ж��Ƿ�̶�����
if(dir){
     //������ק��ʱ��
    if(dir=='lr'){
        x=moveX-disX;
        //x��y��Ҫд����Ȼ�ڶ�����קʱ���Ǵ�ԭʼλ�ÿ�ʼ�ģ�λ�þͲ��ܹ�����
        //�ֻ������п��ܲ���ʹ���͵�дWebkit
           oBox.style.transform='translate('+x+'px,'+y+'px)';
               oBox.style.WebkitTransform='translate('+x+'px,'+y+'px)';
            //������ק��ʱ��
    }else if(dir=='tb'){
        y=moveY-disY;
        oBox.style.transform='translate('+x+'px,'+y+'px)';
        oBox.style.WebkitTransform='translate('+x+'px,'+y+'px)';
    }
}else{
    //û�з���ʱ�Լ��жϷ���
    if(Math.abs(downX-moveX)>50){
        dir='lr';
    }else if(Math.abs(downY-moveY)>50){
        dir='tb';
    }
}
��ģ������ҳ�桿
1��������ʽ
2��������ק
3��������ק
4���޷��ֲ�
ע�⣺
      ������ק���޷��ֲ��г�ͻ����touchend����һ��if�жϣ������������קʱ��ֹ������ק ��
��������ת��
oDiv.style.transform='rotate('+d+'deg)';
oDiv.style.WebkitTransform='rotate('+d+'deg)';
�������ת��
function getD(ev){
     //����
    var x1=ev.targetTouches[0].pageX;
    var y1=ev.targetTouches[0].pageY;
    var x2=ev.targetTouches[1].pageX;
    var y2=ev.targetTouches[1].pageY;
    var x=x2-x1;
    var y=y1-y2;
    return a2d(Math.atan2(y,x));
}
//�ж��Ƿ���������ת
if(ev.targetTouches.length==2){
    var downD=getD(ev);
}
//����ת�Ƕ�
function a2d(n){
    return n*180/Math.PI;
}
��������š�    
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
�����ƽ�ơ� 
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
