var crypto = require('crypto');
import Req from './request'
var Utlis = {};

//数字自增到某一值动画参数（目标元素,自定义配置） 
Utlis.NumAutoPlusAnimation = function (targetEle, options) {

    /*可以自己改造下传入的参数，按照自己的需求和喜好封装该函数*/
    //不传配置就把它绑定在相应html元素的data-xxxx属性上吧 
    options = options || {};

    var $this = document.getElementById(targetEle),
        time = options.time || $this.data('time'), //总时间--毫秒为单位 
        finalNum = options.num || $this.data('value'), //要显示的真实数值 
        regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度 

        step = finalNum / (time / regulator),/*每30ms增加的数值--*/
        count = 0, //计数器 
        initial = 0;

    var timer = setInterval(function () {

        count = count + step;

        if (count >= finalNum) {
            clearInterval(timer);
            count = finalNum;
        }
        //t未发生改变的话就直接返回 
        //避免调用text函数，提高DOM性能 
        var t = Math.floor(count);
        if (t == initial) return;

        initial = t;

        $this.innerHTML = initial;
    }, 30);
}

/**
 * MD5加密
 * @param {*} data 需要md5加密的值
 */
Utlis.md5 = function (data) {
    var md5 = crypto.createHash("md5");
    md5.update(data);
    var a = md5.digest('hex');
    return a;
}

/**
 * 请求封装
 * @param {*} 
 */
Utlis.request = function(type,_url,_data){
    return new Promise((resolve, reject) => {
    
        Req({
          method: type,
          url: _url,
          data: _data
        }).then(
          response => {
            console.log("获取信息成功");
            console.log(response);
            resolve(response.data);
          },
          response => {
            console.log("获取信息失败");
            console.log(response);
            reject(response.data);
          }
        );
    });
}

export default Utlis;