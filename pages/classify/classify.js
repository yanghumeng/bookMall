// pages/classify/classify.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogo:false,
    navBarHeight: app.globalData.navBarHeight,
    classList:[
      {name:'神秘类',typeId:'10'},
      {name:'文学类',typeId:'11'},
      {name:'技术类',typeId:'12'},
      {name:'亲子类',typeId:'13'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChange(event) {
    wx.showToast({
      title: `${event.detail}`,
      icon:"none"
    })
    
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