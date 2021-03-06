// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 清除缓存
  clearLocalStorage: function () {
    wx.showModal({
      title: '提示',
      content: '你确定要清除缓存数据',
      success(res) {
        if (res.confirm) {
          try {
            wx.clearStorageSync();
            wx.showToast({
              title: '清除成功',
              icon: 'success',
              success: function() {
                wx.navigateBack()
              }
            });
          } catch (error) {
            wx.showToast({
              title: '发生错误',
              icon: 'error'
            })
          }
        }
      }
    })
  },
  //修改密码
  editPassword: function () {

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

  }
})