// pages/index/index.js
const app = getApp()
import request from '../../utils/request'
import { debounce } from "../../utils/util"
let leftHeight = 0, rightHeight = 0; //分别定义左右两边的高度
let query;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    bannerList: [], //轮播图
    isTriggered: false, //是否开启下拉刷新样式
    leftList: [],//左侧列表数组
    rightList: [],//右侧列表数组
    isload: 0,//是否显示加载
    booklist: [{
      id: 0,
      picUrl: "../../../static/image/tabbaricon/cart_active.png"
    },
    {
      id: 1,
      picUrl: "../../../static/image/1.jpg"
    }, {
      id: 2,
      picUrl: "../../../static/image/tabbaricon/cart_active.png"
    },
    {
      id: 3,
      picUrl: "../../../static/image/1.jpg"
    }
    ],
    // isBottomPopup: false,//是否显示下拉弹框
    index: 0,//tab下标
    isrenderror: false//是否渲染失败
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '数据加载',
    //   mask:true
    // })
    this.isLeft(this.data.booklist, this.data);
  },
  //判断两边高度，来觉得添加到那边
  async isLeft(newdata, olddata) {
    const {
      leftList,
      rightList
    } = olddata;
    const booklist = newdata;
    query = wx.createSelectorQuery();
    for (const item of booklist) {
      leftHeight <= rightHeight ? leftList.push(item) : rightList.push(item);
      await this.getBoxHeight(leftList, rightList);
    }
  },
  //获取左右两边高度
  getBoxHeight(leftList, rightList) {
    return new Promise((resolve, reject) => {
      this.setData({
        leftList,
        rightList
      }, () => {
        query.select('.left-list').boundingClientRect();
        query.select('.right-list').boundingClientRect();
        query.exec((res) => {
          try {
            leftHeight = res[0].height; //获取左边列表的高度
            rightHeight = res[1].height; //获取右边列表的高度
            resolve();
          }
          catch {
            this.setData({
              isrenderror:true
            })
          }
        });
      });
    })
  },
  // 切换顶部导航栏
  onChange(event) {
    if (event.detail.index == 3) {
      this.showPopup();
    }
    if (this.data.index != event.detail.index) {
      wx.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none',
      });
      this.setData({
        index: event.detail.index
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      bannerList: [
        { targetId: "1", pic: "../../static/image/banner/banner1.jpg" },
        { targetId: "2", pic: "../../static/image/banner/banner2.jpg" },
        { targetId: "3", pic: "../../static/image/banner/banner3.jpg" },
        { targetId: "4", pic: "../../static/image/banner/banner4.jpg" },
        { targetId: "5", pic: "../../static/image/banner/banner5.jpg" }
      ]
    })
  },
  onShow() {
    if (this.data.isrenderror==true) {
      this.setData({
        leftList: [],
        rightList: []
      })
      try{
        this.isLeft(this.data.booklist, this.data);
        this.setData({
          isrenderror:false
        })
      }
     catch{
      this.setData({
        isrenderror:true
      })
     }
    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  // scroll-view的下拉刷新
  handleRefresh() {

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
    setTimeout(() => {
      this.setData({
        isTriggered: false
      })
    }, 3000)
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
        this.isLeft(newarr, this.data);
        this.setData({
          loadtext: 1
        })
      }, 3000)
    }
  }, 2000, true)
})