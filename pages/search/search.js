// pages/search/search.js
import { debounce } from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isload: -1,//是否显示加载
    index: 0,
    keyvalue:'',
    booklist: [],
    isBottomPopup: false,//是否显示下拉弹框
  },
  // 切换顶部导航栏
  onChange(event) {
    let id = event.currentTarget.dataset.id;
    if (id == 2) {
      this.showPopup();
    }
    if (this.data.index != id) {
      wx.showToast({
        title: `切换到标签 ${id}`,
        icon: 'none',
      });
      this.setData({
        index: id
      })
    }
  },
  // 显示弹出框
  showPopup() {
    this.setData({ isBottomPopup: true });
  },
  // 关闭弹出框
  closePopup() {
    this.setData({ isBottomPopup: false });
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  changeKeyValue(e) {
    this.setData({
      keyvalue: e.detail,
    });
  },
  onSearchByKey() {
    let arr=[
      {
        id: 4,
        picUrl: "../../../static/image/tabbaricon/cart_active.png"
      },
      {
        id: 5,
        picUrl: "../../../static/image/1.jpg"
      }, {
        id: 6,
        picUrl: "../../../static/image/tabbaricon/cart_active.png"
      },
      {
        id: 7,
        picUrl: "../../../static/image/1.jpg"
      }
    ]
    this.setData({
      booklist:arr
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
  onReachBottom: debounce(function () {
    let newbooklist = this.data.booklist;
    if (newbooklist.length >= 13) {
      this.setData({
        isload: 2
      })
    } else {
      this.setData({
        isload: 1
      })
      setTimeout(() => {
        let newarr = [{
          id: 4,
          picUrl: "../../../static/image/tabbaricon/cart_active.png"
        },
        {
          id: 5,
          picUrl: "../../../static/image/1.jpg"
        }, {
          id: 6,
          picUrl: "../../../static/image/tabbaricon/cart_active.png"
        },
        {
          id: 7,
          picUrl: "../../../static/image/1.jpg"
        }
        ]
        newbooklist.push(...newarr);
        this.setData({
          booklist: newbooklist
        })
        this.setData({
          isload: 1
        })
      }, 3000)
    }
  }, 2000, true),

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})