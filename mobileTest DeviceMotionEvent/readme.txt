���ƶ��˵���(�ֻ�) ��
     1��chrome �ֻ�ģ���� F12->�ֻ�ͼ�� 60%
     2��������� wamp(�õıȽ϶�)
          1���ֻ��͵�����ͬһ��������
          2��cmd ipconfig - all ����ip
               192.168.10.218
          3�����ֻ�����ip+ҳ���ַ/cli.im
     3��browsersync (^_^)(�õĶ�)
��װ��
     1���½�node�ļ�����node�ļ��а�װnode_modules�ļ���ͬʱ�½�www�ļ�
     2�������� node�ļ���
     npm install --save-dev browser-sync(�������ʹ�����������仰)
     npm install -g browser-sync
     3��browser-sync start --server --files "**/*.css, **/*.html"
     ����һ��ҳ��������ʾ
        Cannot GET/
        ����ȷ����
        ��һ��ҳ�����node�ļ������У�����ʾCannot GET/ҳ����������ַ
        http://localhost:3000/��������ҳ�����������ļ���ǰ�漴��
     4����������
     Local:http://localhost:3000
     External:http://172.20.10.2:3000
     ���������ַ�ٴηŵ��ļ���ǰ��
     ��������ַ���Ƶ�cli.im�����ɶ�ά��
     ���ֻ�΢��ɨ��ά�������ʾ
     [BS] Serving files from: ./
     [BS] Watching files...
��������Ӧ ��
     ΢��ҡһҡ(^_^)
     DeviceMotionEvent
     devicemotion ���豸�����˶�/�ı�
     accelerationIncludingGravity
     x
     y
     z
     animationend
     WebkitAnimationEnd
����   
if(window.DeviceMotionEvent){
   window.addEventListener('devicemotion',function(ev){
      var acc=ev.accelerationIncludingGravity;
      if(Math.abs(acc.x)>10||Math.abs(acc.y)>10||Math.abs(acc.z)>10){
          //Ҫִ�еĴ���
         oDiv.addEventListener('WebkitAnimationEnd',function(){
            alert(1);   
         },false); 
      } 
   },false);
}else{
   alert('��֧��');
}
