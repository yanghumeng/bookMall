// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: ''
  },
  handleLogin: function () {
    let { phone, password } = this.data;
    // 2. 前端验证
    /*
    手机号验证：
      1. 内容为空
      2. 手机号格式不正确
      3. 手机号格式正确，验证通过
    */

    if (!phone || phone == '' || phone == undefined) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
      return;
    }
    let phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if (!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
      return;
    }
    if (!password || password == '' || password == undefined) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return;
    }
    let userinfo = { phone: phone }
    wx.setStorageSync('userinfo', userinfo);
    wx.switchTab({
      url: '../me/me',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toRegister: function () {
    wx.navigateTo({
      url: '../register/register',
    })
  },
  // 微信登录
  getUserInfo: function () {
    wx.getUserProfile({
      desc: 'desc',  //desc不可删除 
      success: res => {
        // console.log(res); 成功回调
        if (res.userInfo) {
          console.log(res.userInfo);
          wx.setStorageSync('userinfo', res.userInfo);
          wx.switchTab({
            url: '../me/me',
          })
          wx.login({
            success: ret => {
              // console.log(ret);
              var code = ret.code
              console.log(ret)
            }
          })
        }
      }
    })
  }
})