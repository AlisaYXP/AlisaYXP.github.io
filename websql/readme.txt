websql->localstorage
前端数据，一点都不安全，5MB，如果超过5MB，就忽略
如何查看：浏览器中->F12->Application
openDatabase 如果没有数据库，就创建数据库，如果有就打开此数据库
开启一个事物：要么成功，要么失败，具有原子性
使用：
//创建一个数据库 200指的是200M 
var db = openDatabase('db2','1.0.1','play and test',200);
db.transaction(function(tx){
    //建表
    tx.executeSql('CREATE table happy(title TEXT,href TEXT)');
    //插入数据
    tx.executeSql('INSERT INTO happy VALUES("aaa","bbb")');
    //查找数据
    tx.executeSql('SELECT * from happy',[],function(tx,res){
        console.log(res.rows.length);
    });
});
注意：
     当有不会的不清楚的数据库语句时，可以将语句拿到真正的数据库里检测语句书写是否正确，也可以通过在数据库中插入或者查找看数据库中的语句是如何书写的。
