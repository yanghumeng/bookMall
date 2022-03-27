// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    phone:'',
    password:'',
    repassword:'',
    sms:''
  },
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleRegister:function(){
    // 1. 收集表单项数据
	  let {phone, password,repassword,sms,checked} = this.data;
	  // 2. 前端验证
	  /*
		手机号验证：
			1. 内容为空
			2. 手机号格式不正确
			3. 手机号格式正确，验证通过
	  */
	 if(!phone||phone==''||phone==undefined) {
		 wx.showToast({
			 title: '手机号不能为空',
			 icon: 'none'
		 })
		 return;
	 }
	 let phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
	 if(!phoneReg.test(phone)){
		 wx.showToast({
			 title: '手机号格式错误',
			 icon: 'none'
		 }) 
		 return;
	 }
	 if(!password||password==''||password==undefined){
		 wx.showToast({
			 title: '密码不能为空',
			 icon: 'none'
		 })
		 return; 
   }
   if(repassword!=password) {
    wx.showToast({
      title: '两次密码不一致',
      icon: 'none'
    })
    return;
  }
  if(!checked) {
    wx.showToast({
      title: '请先同意协议',
      icon: 'none'
    })
    return;
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