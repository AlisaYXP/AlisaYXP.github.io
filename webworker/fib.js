/**
 * Created by Administrator on 2016/10/23 0023.
 */
function fn(n){
    if(n==1||n==2){
        return 1;
    }else{
        return fn(n-1)+fn(n-2);
    }
}
this.onmessage=function(ev){
    this.postMessage(fn(ev.data));
};