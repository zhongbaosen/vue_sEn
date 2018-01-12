import axios from 'axios'
import qs from 'qs'
import { Loading, Message } from 'element-ui'

  var loadinginstace;
  const Req = axios;

  Req.defaults.timeout = 5000;                        //响应时间
  Req.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

  //POST传参序列化(添加请求拦截器)
  Req.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    loadinginstace = Loading.service({ fullscreen: true ,text:"拼命加載中..."})
    console.log(config);
    return config;
  }, (error) => {
    console.log(error);
    console.log("错误的传参", 'fail');
    loadinginstace.close()
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(error);
  });
  //返回状态判断(添加响应拦截器)
  Req.interceptors.response.use((res) => {
    //对响应数据做些事
    if (!res.data.状态) {
      // _.toast(res.data.msg);
      return Promise.reject(res);
    }
    loadinginstace.close()
    return res;
  }, (error) => {
    console.log("网络异常", 'fail');
    loadinginstace.close()
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(error);
  });

  export default Req;
