��canvas��
     ʸ�����Ŵ�ʧ�棬�����ԣ�IE9+
     ע��background����canvas�����ݣ���Ҫ��֤һ��Ч����Ҫ��������ɫʱ����������fillStyle�����ɫ��fillRect�����Ŀ�ߡ�
     canvas�Ŀ�����������ԣ�д���м�,��д����ʽ�У������ϵ�ͼ�����졣
//��ȡԪ��
var oC=document.getElementById('c1');
//׼��һ֧�ʣ���2dҲ��3d
var gd=oC.getContext('2d');
//�������
gd.clearRect();
//���浱ǰ״̬
gd.save();
//��ʼ��ͼ
gd.beginPath();
//�ѱ��Ƶ�������ĳ����
gd.moveTo(100,100);
//����
gd.lineTo(100,300);
//���ߵĿ��
gd.lineWidth=10;
//���ߵ���ɫ
gd.strokeStyle='red';
//·���պ�
gd.closePath()(��ѡ);
//����
gd.stroke();
//������ɫ
gd.fillStyle='green';
//�������ɫ
gd.fill();
//���λ�ã����꣬����
gd.fillRect(100,100,100,100);
//������
gd.strokeRect(100,100,100,100);
//�����õ�ͼ�洢����
gd.restore();
��ͼ����
    gd.clearRect();
    gd.save();
    gd.beginPath();
    xxxxx
    gd.closePath()(��ѡ)
    gd.restore();
    gd.save();
    gd.beginPath();
    xxxxx
    gd.closePath()(��ѡ)
    gd.restore();
����״ͼ��^_^
 var arr = [300,200,50,800,150,900];
 1�����������е����ֵ
     Math.max.apply(null,arr);
 2��ȷ����״ͼ���Ͻǵ�λ��
     y�������ǻ����ĸ߶ȼ�ȥ��״ͼ�ĸ߶�
ע������״ͼ��Ҫ����ʱ���Լ����ø߶ȣ����ߵĿ���Ǹ�����λ������һ���ֵ������ͨ��canvas����paddingֵ��������������϶���ȱ��һ���֡�
��canvas���˶���
���������������󻭣����ë������TVB
     clearRect();
���ܣ�canvas���ܼ���ĸ�

��ʱ����ʱ������16,30��ԭ��
����һ����fps(֡Ƶ)��60��/s
��Ƶ�棺1000ms/60=16ms
��Ƶ�棺IE6ֻ��֧�ֵ�30ms
��������
1����������(x,y,iSpeedX,iSpeedY)
2��С������
3����ʱ����ʵʱ�������С������
4�������С�������������
5����β��
arr:��ǰ�����С�����ε�����
[[{x,y},{x,y},{x,y},{x,y},{x,y},]]
oldArr���������������С�����ε�����
LEN:��β�ͻ�����
ע�⣺
beginPath(); ��仰��λ��Ӧ���ڵ�һ��forѭ����
������
gd.arc(cx,cy,r,start,end,false);
arc->·��
gd.stroke();
Բ�����꣬�뾶����ʼ���ȣ��������ȣ��Ƿ���ʱ��
false->˳ʱ�룻true->��ʱ��
����һ��·��
���ӣ������ӱ�
��canvas�����֡�
Ĭ��ֵ��left,bottom
gd.textAlign='';center/right/left(Ĭ��ֵ)
gd.textBaseLine='';top/middle/bottom(Ĭ��ֵ)
gd.font='60px ����';����д����ֵ���ڶ���ֵ�������д�����дʱĬ��Ϊ����
gd.strokeText('Ҫд������'��x,y);
gd.fillText('Ҫд������',x,y);
gd.measureText(str).width; û��height
��canvas���¼���
canvas�е�ͼû���¼���ͨ��if�ж�ͼ������������д�¼�
���ӣ�canvas��ק
ԭ��������ʵ����ק����moveʱ��ͣ���ػ����ػ�ǰ�������
���������жϣ�
if(ev.clientX>x&&ev.clientX<x+w&&ev.clientY>y&&ev.clientY<y+h){}
Բ�������жϣ�
var a=ev.clientX-cx;
var b=ev.clientY-cy;
var c=Math.sqrt(a*a+b*b);
if(c<r){}

isPointInPath �����Ƿ���·��֮��
gd.rect(x,y,w,h);
rect->·����
�����Ρ�^_^
�����任�����stroke�������fill
1��gd.rotate(d2a(45));
     1�������ǻ��ȣ�������λdeg
     2�����������������ģ������Ż��������Ͻ���ת��
������������תһ���Ƕȣ�
     gd.strokeRect(x,y,w,h);
     ��translate��rotate��
     //ͼ���ڻ�����ʱ��ͼ�����ĵ����꼴��translate�Ĳ���ֵ
     translate(x+w/2,y+h/2);//��ͼƽ�ƻ�ԭʼ��λ�ã�����ʱ����Ҳ����ƽ����
     rotate(d2a(10));
     //����ͼ�������뻭�����Ͻ��غ�ʱ��ͼ�����Ͻǵ����꼴��strokeRect��ǰ��������ֵ                                                             
     gd.strokeRect(-w/2,-h/2,w,h);//��ͼ�������ƶ������������Ͻ�
���ӣ�������������������ת
2��gd.scale(2,2);
     1����������������
     2����һ��ֵָ����x�᷽������б�����������x�����꣬�����߿��ڶ���ֵָ����y�᷽��
3��gd.translate(100,100);
     1)����д��������

canvas�������ۼӵģ��ڱ���ǰ���
gd.save();//�൱������һ�����գ�����ʱ�ĳ������������������Ͳ��������ת��
gd.restore();
���˵����� ��
gd.lineCap='';butt(Ĭ��)/round/square
�����ӵ� ��
gd.lineJoin='';bevel/round
����Ӱ��
gd.shadowBlur=10;
gd.shadowOffsetX=10;
gd.shadowOffsetY=10;
gd.shadowColor='#000';
gd.font='100px ����';
gd.strokeText('������',200,200);
�����䡿
     ���Խ��䣺
     ������������Ϊ��׼�������߷����Ͻ��䣬������fillҲ������stroke����������strokeText��fillText��
var linear=gd.createLinearGradient(400,100,400,300);
linear.addColorStop(0,'red');
linear.addColorStop(1,'aqua');
gd.fillStyle=linear;
gd.fillRect(0,0,oC.width,oC.height);
     ���򽥱䣺
      ��������Բ�İ뾶Ϊ��׼����Բ���������Ľ��� ��������fillҲ������stroke����������strokeText��fillText��
     var ra=gd.createRadialGradient(100,100,100,100,100,400);
ע�������ƶ����������꣬��Ӧ�ŷ����ƶ����뻭ͼʱ������һ��(�õĲ�����)��
������ͼƬ��
     ֻ֧��png��jepg����֧��gif      
//��ͼƬ��Ϣbase64��ȡ�� image/jpeg ͼƬ��ʽ Ĭ����png
//var res=oC.toDataURL('image/jpeg');
var res=oC.toDataURL();
var oImg=new Image();
oImg.src=res;
//�ڵ�ǰҳ��body�д�ͼƬ
document.body.appendChild(oImg);
//���´��ڴ�ͼƬ
//window.open(res);
������ƽ�̡�
var oC=document.getElementById('c1');
var gd=oC.getContext('2d');
var oImg=new Image();
oImg.src='�ز�/1.jpg';
oImg.onload=function(){
    var pa=gd.createPattern(oImg,'repeat-y');
    gd.fillStyle=pa;
    gd.fillRect(0,0,oC.width,oC.height);
};
��ͼƬ����canvas��
gd.drawImage(oImg,0,0);
�����÷���  
gd.drawImage(oImg,
    sx,sy,sw,sh,//ͼƬ�����Ͻǵ�λ�ã�ͼƬ�Ĵ�С
    dx,dy,dw,dh//ͼƬҪ���ڻ�����λ�ã�ͼƬ���ڻ����Ĵ�С
);
�����ؼ�������
     һ��Ҫ�ڷ������²���
     rgba����ָÿ�����ض������ĸ����ʾ������
oImg.onload=function(){
    gd.drawImage(oImg,0,0);
    var result=gd.getImageData(0,0,oC.width,oC.height);
    var d=result.data;
    for(var i=0;i< d.length;i+=4){
          //����ɫ         
          d[i] = d[i+1] = d[i+2];
          //�ع�
        d[i]+=200;
        d[i+1]+=200;
        d[i+2]+=200;
          //���� 
var r=d[i];
var g=d[i+1];
var b=d[i+2];

d[i]=(r*0.393)+(g*0.769)+(b*0.189); // red
d[i+1]=(r*0.349)+(g*0.686)+(b*0.168); // green
d[i+2]=(r*0.272)+(g*0.534)+(b*0.131); // blue
//��ת
d[i]=255-d[i];
d[i+1]=255-d[i+1];
d[i+2]=255-d[i+2];
    }
    gd.putImageData(result,0,0);
};
 
��jcscript�⡿^_^
������jcscript.com
api��http://jcscript.com/documentation/
ע�⣺��ɫʹ��16����
�÷���
//��ʼ���
jc.start('c1',true);
//����
jc.text('��ť',135,125);
//��Բ����id��
jc.circle(300,300,100,'#f54',true).id('cir');
//�����β����¼�
jc.rect(100,100,100,40).click(function(){
    //��Բ�����ԼӶ��� 
    jc('#cir').attr('color','#0f0').animate({
        x:400,
        y:200,
        radius:50
        //���ö����˶�ʱ��
    },2000);
});
//�������
jc.start();
