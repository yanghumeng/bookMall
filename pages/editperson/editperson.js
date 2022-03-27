// pages/editperson/editperson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    sexlist: ['男', '女']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userinfo = wx.getStorageSync('userinfo')
    console.log(userinfo);
    if (userinfo != null && userinfo != "" && userinfo != undefined) {
      this.setData({
        userinfo:userinfo
      })
    }
  },
  // 修改出生日期
  bindDateChange: function (e) {
    let birth = 'userinfo.birth'
    this.setData({
      [birth]: e.detail.value
    })
  },
  // 修改性别
  bindSexChange: function (e) {
    let sex = 'userinfo.sex'
    this.setData({
      [sex]: this.data.sexlist[e.detail.value]
    })
  },
  // 修改昵称
  onChangeNickname: function (e) {
    console.log(e.detail);
    let nickname = 'userinfo.nickname'
    this.setData({
      [nickname]: e.detail
    })
  },
  onChangePhone: function (e) {
    let phone = 'userinfo.phone'
    this.setData({
      [phone]: e.detail
    })
  },
  onChangeSign: function (e) {
    let sign = 'userinfo.sign'
    this.setData({
      [sign]: e.detail
    })
  },
  // 保存个人信息
  saveData: function () {
    try {
      wx.setStorageSync('userinfo', this.data.userinfo);
      wx.navigateBack();
    } catch (e) {
      wx.showToast({
        title: '个人信息缓存失败',
        icon: 'none'
      });
    }
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

  }
})