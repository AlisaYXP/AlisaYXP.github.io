����������
��Ӧ�û����󣬷���������һ̨���úܸߵĵ���
���������ࣺweb��������ftp������
1��Ӳ�䣺��˾�ã��۸�ܸ�
2�����ɻ���(���ģ��)
     wamp window apache mysql php appserv
     xampp win mac linux myaql apache php
��װ��
     ȫ��Ĭ�ϣ�һ��һ����װ
ע���ڷ������²�Ҫ������·��
��ο��Ƿ���ȷ��װ
     1��ͼ����ʾΪ��ɫ
     2���ڵ�ַ������
     ���ص�ַlocalhost=127.0.0.1
     C:\wamp\wampmanager.exe˫�� ���´�
     C:\wamp\www ��վ�Ĵ���
     ���ʣ�http://localhost
           http://localhost:8080 8088
��cookie ��
document.cookie='name=Alisa';
1����ô�鿴cookie��
     chrome F12 ->resource/application(�°�)->���cookies
2��cookie�ǰ�������ȥ�洢�ģ�һ������һ��cookie
ע��cookie�����ڷ���������
3��cookie�ص�
     1��cookie�ɶԳ���
          name value
     2)cookie ����ȫ ��������cookie�����ݶ��ǲ����ŵģ���Ҫ��������Ϣ
     �û��� �鿴cookie
     ��վ ������cookie���ж�
     3��cookie�Ƚ�С
          4k
     4��cookie���ܿ������
     5��cookie��һ����Ч��
          file://C;/wamp/www/cookie.html ����·��
          http://����
          Ĭ����Session ������ر� �Ự����
          toGMTString ��UTC->GMT
          ���ù���ʱ��
          EXPIRES='+oDate.toGMTString()'; 
��cookiejs��
     //iDay�೤ʱ��ʧЧ
function addCookie(name,value,iDay){
   if(iDay){
      var oDate=new Date();
      oDate.setDate(oDate.getDate()+iDay);
      oDate.setHours(0,0,0,0);
      document.cookie=name+'='+value+'; PATH=/; EXPIRES='+oDate.toGMTString();
   }else{
      document.cookie=name+'='+value+'; PATH=/;';   
   }
}
function getCookie(name){
   var arr=document.cookie.split('; ');
   for(var i=0;i<arr.length;i++){
      if(arr[i].split('=')[0]==name){
         return arr[i].split('=')[1];
      }
   }
   return '';
}
function removeCookie(name){
   addCookie(name,1,-1); 
}
��cookie��Ӧ�á�
     1����ס�û���
     2����ק��סλ��
     3����סѡ���ѡ�






















