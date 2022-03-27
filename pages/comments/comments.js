// pages/comments/comments.js
import { debounce } from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isload: -1,//是否显示加载
    commentslist:[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let bookid = options.bookid;
    console.log(bookid);
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
    let newlist = this.data.commentslist;
    if (newlist.length >= 13) {
      this.setData({
        isload: 2
      })
      return;
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
        newlist.push(...newarr);
        this.setData({
          commentslist: newlist
        })
        this.setData({
          isload: 0
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