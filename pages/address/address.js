// pages/address/address.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    backurl: null,
    addressList: [
      {
        id: '1',
        name: '杨鹄梦',
        phone: '15181126612',
        addressDetail: '四川省宜宾市翠屏区沙坪街道临港大学城宜宾校区',
        isDefault: false
      },
      {
        id: '2',
        name: '杨鹄梦2',
        phone: '15181126612',
        addressDetail: '四川省宜宾市翠屏区沙坪街道临港大学城宜宾校区',
        isDefault: true
      },
      {
        id: '3',
        name: '杨鹄梦3',
        phone: '15181126612',
        addressDetail: '四川省宜宾市翠屏区沙坪街道临港大学城宜宾校区',
        isDefault: false
      }
    ]
  },
  // 改变默认地址
  onChange(event) {
    this.setData({
      radio: event.detail
    });
    if(this.data.backurl=='changeaddress'){
      getApp().globalData.orderaddress=this.data.radio;
      wx.navigateBack()
    }
  },
  // 跳转到新增地址
  handleToAdd() {
    wx.navigateTo({
      url: '/pages/add-address/add-address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let urlname = options.urlname;
    if (urlname == 'changeaddress') {
      this.setData({
        backurl: urlname
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