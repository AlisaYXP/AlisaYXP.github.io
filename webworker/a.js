/**
 * Created by Administrator on 2016/10/23 0023.
 */
this.onmessage=function(ev){
    ev.data[0]=101;
    this.postMessage(ev.data);
};


