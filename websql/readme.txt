websql->localstorage
ǰ�����ݣ�һ�㶼����ȫ��5MB���������5MB���ͺ���
��β鿴���������->F12->Application
openDatabase ���û�����ݿ⣬�ʹ������ݿ⣬����оʹ򿪴����ݿ�
����һ�����Ҫô�ɹ���Ҫôʧ�ܣ�����ԭ����
ʹ�ã�
//����һ�����ݿ� 200ָ����200M 
var db = openDatabase('db2','1.0.1','play and test',200);
db.transaction(function(tx){
    //����
    tx.executeSql('CREATE table happy(title TEXT,href TEXT)');
    //��������
    tx.executeSql('INSERT INTO happy VALUES("aaa","bbb")');
    //��������
    tx.executeSql('SELECT * from happy',[],function(tx,res){
        console.log(res.rows.length);
    });
});
ע�⣺
     ���в���Ĳ���������ݿ����ʱ�����Խ�����õ����������ݿ����������д�Ƿ���ȷ��Ҳ����ͨ�������ݿ��в�����߲��ҿ����ݿ��е�����������д�ġ�
