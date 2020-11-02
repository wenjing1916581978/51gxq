import wepy from 'wepy';
import tip from './tip'
import utils from './utils'

const wxRequest = (params = {}, url) => {
    return new Promise(function (resolve, reject) {
        let data = params.query || {};
        wepy.request({
            url: url,
            method: params.method || 'POST',
            data: data,
            header: { 'Content-Type': 'application/json' },
            success: function(res) {
              if(res.data.returnCode == "AAAAAAA"){
                resolve(res)
              }else if(res.data.returnCode=='1000009'){
                console.log('登录超时')
                if(wx.getStorageSync('type')==1){
                  wx.removeStorage('loginDataC')
                }else{
                  wx.removeStorage('loginDataP')
                }


                utils.toLogin();
              }else{

                wx.showToast({
                  title: res.data.returnMsg,
                  icon: "none",
                  duration: 1000, //提示的延迟时间，单位毫秒，默认：1500
                  mask: true  //是否显示透明蒙层，防止触摸穿透，默认：false
                })
                reject(res)
              }
            },
            fail: function(err){
                // console.log('请求出错',err)
            },
            complete:function(res) {
              // console.log(res)
              if(res.statusCode==404){
                tip.error('请求报错');
              }
            }
        });
    });
}

module.exports = {
    wxRequest
}
