// pages/me/me.js
const app = getApp()
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    isSearch: false,
    showDialog: false,
    inputValue: '',
    islogin: false,
    userinfo: {}
  },
  // 发送反馈回调信息
  sendIdea(event) {
    if (this.data.inputValue == '') {
      wx.showToast({
        title: '请填写内容',
        icon: 'none'
      })
    }
    else {
      console.log(this.data.inputValue);
    }
  },
  // 关闭反馈弹窗
  onCloseDialog() {
    this.setData({ showDialog: false, inputValue: '' });
  },
  // 开启反馈弹窗
  onShowDialog() {
    this.setData({ showDialog: true });
  },
  // 反馈意见输入监听
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 跳转到登录页面
  toLogin() {
    wx.navigateTo({
      url: '../../pages/login/login',
    })
  },
  toEditPerson: function () {
    wx.navigateTo({
      url: '../editperson/editperson',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo != null && userinfo != "" && userinfo != undefined) {
      this.setData({
        userinfo
      })
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
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo != null && userinfo != "" && userinfo != undefined) {
      this.setData({
        userinfo,
        islogin: true
      })
    } else {
      this.setData({
        islogin: false
      })
    }
  },
  handleNavigateTo: function (e) {
    let url = e.currentTarget.dataset.url;
    if (this.data.islogin) {
      if (url == 'setting')
        wx.navigateTo({
          url: '/pages/setting/setting',
        })
      else if (url == 'address')
        wx.navigateTo({
          url: '/pages/address/address',
        })
      else if (url == 'discount')
        wx.navigateTo({
          url: '/pages/discount/discount',
        })
      else if (url == 'connstore')
        wx.navigateTo({
          url: '/pages/setting/setting',
        })
      else if (url == 'collect')
      wx.navigateTo({
        url: '/pages/collect/collect',
      })
    } else
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      })
  },
  handleToOrder: function (e) {
    let type = e.currentTarget.dataset.type;
    if (this.data.islogin) {
      wx.navigateTo({
        url: '/pages/order/order?type=' + type,
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      })
    }
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