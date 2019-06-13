// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:[],
    nickName:[]
  },
  
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
  onLoad: function (options) {
      let that = this;
        // 获取用户信息
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                console.log(res.userInfo.avatarUrl);
                console.log(res.userInfo.nickName);
                that.setData({
                  img:res.userInfo.avatarUrl,
                  nickName:res.userInfo.nickName
                })
              }
            });
          }
        });
  },
})