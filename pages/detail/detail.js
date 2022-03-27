// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    bookid: 0,
    imgList: [
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3139953554,3011511497&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1022109268,3759531978&fm=26&gp=0.jpg"
    ],
    bookoption: {
      number: 3320180993202,
      name: "阿Q正传",
      author: "鲁迅",
      publish: "中国华侨出版社",
      desc:"这是图书描述信息"
    }
  },
  onshow() {
    this.setData({
      show: true
    })
  },
  onclose() {
    this.setData({ show: false });
  },
  // 添加到购物车
  addcart() {
    wx.showToast({
      title: '添加到购物车',
      icon: 'none',
      duration: 2000//持续的时间
    })
  },
  // 立即购买
  buynow(){
    wx.navigateTo({
      url: '/pages/confirm-order/confirm-order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let bookid = options.bookid;
    this.setData({
      bookid: bookid
    })
  },
  //预览图片，放大预览
  preview(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
    })
  },
  // 跳转到评论列表
  handleToComments(){
    wx.navigateTo({
      url: '/pages/comments/comments?bookid='+this.data.bookid,
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
    return {
      title: this.data.bookoption.name,
      desc:this.data.bookoption.desc,
      path: '/pages/detail/detail?bookid='+this.data.bookid
    }
  }
})