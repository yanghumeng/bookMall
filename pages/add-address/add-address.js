// pages/add-address/add-address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    region: ['北京市','北京市','东城区'],
    detailaddress:'',
    checked: false//是否设为默认地址
  },
  // 地区选择
  expandAreaChange: function (e) {
    console.log('地区选择', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //是否设为默认地址
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
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
  addAddress(){
    if(this.data.name==''||this.data.phone==''||this.data.region.length==0||this.data.detailaddress==''){
      wx.showToast({
        title: '请完善表单信息',
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