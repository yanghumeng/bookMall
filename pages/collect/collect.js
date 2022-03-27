// pages/collect/collect.js
import { debounce } from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
          loadtext: 1
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