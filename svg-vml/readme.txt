��svg��canvas ��
Raphael.js ��쳶� ��ͼ�Ŀ�
canvas 
     ������ IE9+
     û���¼� ��������һ�����ص�
     ���ܼ���
Ӧ�ã�С��Ϸ��������Ҫ���
svg
     Ҳ��������ͼ�ģ���canvas�Ǻû���
     ������ IE9+
     ���ʣ�һ�ѱ�ǩ������
     ���¼�������
     ����һ��
Ӧ�ã��Խ���Ҫ��ߣ�����һ��ĵط�������ͼ����ͼ(��������) firwork(��ҳ��ͼ���)
����line��
1����ʶ������û�е�λ����ǩ����͸���ģ�svg�ڵı�ǩ��Ҫ�պϣ����԰���Щ��ǩ����div��ǩ�����м������ֵ����ֱ�ӻ�ȡ�����ã�����getAtrribute/setAtrribute��
2�����֣�
     1������  
<line x1="100" y1="100" x2="300" y2="300" stroke="red" stroke-width="10"></line>
 2����ʽ
��style������stroke��red; stroke-width:10px;
С���ӣ�����ƶ������ϣ��߱�ɻ�ɫ
line:hover{
    stroke:yellow;
}
window.onload=function(){
    var aLine=document.querySelectorAll('line');
    for(var i=0;i<aLine.length;i++){
        aLine[i].onmouseover=function(){
            this.style.stroke='yellow';
        };
    }
};
window.onload=function(){
    var aLine=document.querySelectorAll('line');
    for(var i=0;i<aLine.length;i++){
        aLine[i].onclick=function(){
            this.setAttribute('stroke','yellow');
        };
    }
};
��ȡ���м���ʽ��
function getStyle(obj,sName){
    return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
3������
     ��ת���Ի������Ͻ�Ϊ������ת
     ����������ת��          
line{
    transition:1s all ease;
    transform-origin:center center;
}
line:active{
    transform:rotate(30deg);
}
  �м䣺     
  transform="rotate(30,200,0)"
������rect��    
<rect x="200" y="200" width="200" height="100" stroke="red" stroke-width="20" fill="yellow" stroke-opacity=".4" fill-opacity=".5" rx="10" ry="20"></rect>
rx��ry��Բ��
�߿��Ǵ�������������ƽ����
��Բcircle��
<circle cx="200" cy="200" r="150" stroke="rgba(255,0,0,.3)" stroke-width="20" fill="yellow" fill-opacity=".4"></circle>
����Բellipse��
<ellipse rx="150" ry="30" stroke-width="60" cx="300" cy="300" stroke="rgba(255,0,0,.3)"></ellipse>
ע����stroke-width��ֵ����rx����ry�Ķ���ʱ��fill������ʾ������
���˵㣬���ӵ㣬���ߡ�
     �˵㣺stroke-linecap="butt/round/square";
     ���ӵ㣺stroke-linejoin="bevel/round";
     ���ߣ�stroke-dasharray="��ֵ1 ��ֵ2������";
���˶���
1����ʽ��transition:1s all ease;
2�����ԣ���ʱ����moveSvg(��ȡ�͸�������ֵʱ��getAttribute/setAttribute)
������ɾ����ǩ�� 
var oRect=document.createElementNS('http://www.w3.org/2000/svg','rect');
oSvg.appendChild(oRect);
oRect.setAttribute('x',200);
oRect.setAttribute('y',200);
oRect.setAttribute('width',200);
oRect.setAttribute('height',100);
oSvg.removeChild(oRect);
��path��
     �õĶ�
<path d="M100 100 L200 200 L200 100 Z" stroke="red" stroke-width="10" fill="yellow"></path>
M,L,Z:���Զ�λ
<path d="m100 100 l200 200 l200 100 z" stroke="red" stroke-width="10" fill="yellow"></path>
m,l,z:��Զ�λ
��text��
<text x="200" y="200" stroke="red" stroke-width="2">aaa</text>
��vml��
     VML�����ֲ�
     ���ݣ�IE5-7
     Ҫ�����IE-8��< meta http-equiv = "X-UA-Compatible" content = "IE=EmulateIE7" />
     �ж�IE6�������
     if(navigator.userAgent.indexOf('MSIE 6.0')��=-1){

     }
��vmlʹ�á�
1����������ռ�
     <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
2�����������ʽ
     v\:*{behavior:url(#default#VML);}
3��line  
<v:line from="100,100" to="300,300"></v:line>
4��rect
     ע��vml��ͼ�Σ�Ҫ���óɿ�Ԫ��   
v\:* {behavior: url(#default#VML); display: block;}
<v:rect style="width:200px; height:100px"></v:rect>
5����ͷ
<v:line from="100,100" to="300,300">
    <v:stroke StartArrow="Oval" EndArrow="Diamond"/>
</v:line>
����
<v:PolyLine filled="false" Points="0,0 0,100 20,150 200,100" style="position:relative"/>
<v:stroke StartArrow="Oval" EndArrow="Classic" dashstyle="Dot" />
</v:PolyLine>
Բ
<v:arc filled=false style="position:relative;width:100;height:100" StartAngle="0" EndAngle="270"/>











