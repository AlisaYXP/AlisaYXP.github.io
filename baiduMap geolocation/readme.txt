��geolocation��(^_^)
����λ
     ��;��
          1���罻��İİ���������ˡ�΢��
          2�����ڵ��������š���Ӧ��
          3����ͼ���ٶ�
     ԭ��
          PC������ IP��λ
          �ֻ��� GPS ��վ
���Ӧ��
���ԣ�chrome google��ͼ api/�ֻ�
     navigator.geolocation:
          getCurrentPosition     ��ȡ��ǰ����λ��
          watchPosition     ʵʱ��ȡ����λ��
          watch ����
               1���ֻ������ֵ
               2���ֻ���ҳ�� ����
getCurrentPosition(success,error)
getCurrentPosition(function(ev){
     ev.coords
     latitude=ev.coords.latitude;
     longitude=ev.coords.longitude;
},function(ev){
     ev.code
})
coords:
     latitude-γ��
     longitude-����
     accuracy-��ȷ�ȣ���λ��
     altitude-�߶ȣ���λ�ף�����
     altitudeAccuracy-�߶Ⱦ�ȷ����λ��
     heading-�˶��ķ����������������ĽǶ�
     speed-�˶����ٶ�(�������ڵ�ƽ�����˶�)
     accuracy>70 ����
code��
     1���û��ܾ�
     2����ȡ��ʱ(�����쳣)
     3����ȡʧ��
���ٶȵ�ͼ��(^_^)
http://www.map.baidu.com ->
��ͼ����ƽ̨ ->
Web���� ->
Javascript API ->
ע������ٶ��˺� ->
���䣺Alisa09241213
�ֻ��ţ�136xxxxxxxx
��������
��ȡ��Կ��
�������  *
����Ӧ��(AK)��jZ9ph8FgRhN3g2tzpp1Co9ZH5okRLLIU
ʾ��DEMO
��ͼʾ����
��ͼչʾ��
1�������ļ�
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=jZ9ph8FgRhN3g2tzpp1Co9ZH5okRLLIU"></script>
2��var map = new BMap.Map("div1");    // ����Mapʵ��
3��var point = new BMap.Point(116.404, 39.915);     //�������ĵ�����
   map.centerAndZoom(point,15);  // ��ʼ����ͼ,���� ��ͼ����
   map.enableScrollWheelZoom(true);     //��������������
������ʾ����
��ȡ��������Ϣ��
4����һ�����(��ע)
var marker = new BMap.Marker(point);  // ������ע
map.addOverlay(marker); // ����ע��ӵ���ͼ��
5�����õ�ĵ�������
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //�����Ķ���
6�����õ����ͼ��
//����С����
var pt = new BMap.Point(116.417, 39.909);
var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300,157));
var marker2 = new BMap.Marker(pt,{icon:myIcon});  // ������ע
map.addOverlay(marker2);              // ����ע��ӵ���ͼ��
7������
����ʾ����
�ؼ���������
var local = new BMap.LocalSearch(map, {
    renderOptions:{map: map}
});
local.searchNearby(oT.value,point,1000);
local.searchNearby('�����ؼ���',point,������Χ��λ��);
