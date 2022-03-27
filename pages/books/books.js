// pages/booklist/booklist.js
import request from '../../utils/request'
import { debounce } from "../../utils/util"
let leftHeight = 0, rightHeight = 0; //分别定义左右两边的高度
let query;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isload: -1,//是否显示加载
    index:0,
    leftList: [],//左侧列表数组
    rightList: [],//右侧列表数组
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
    isBottomPopup: false,//是否显示下拉弹框
  },
  // 切换顶部导航栏
  onChange(event) {
    console.log(event.currentTarget.dataset.id)
    let id=event.currentTarget.dataset.id;
    if (id == 2) {
      this.showPopup();
    }
    if(this.data.index!=id){
      wx.showToast({
        title: `切换到标签 ${id}`,
        icon: 'none',
      });
      this.setData({
        index:id
      })
    }
  },
  showPopup() {
    this.setData({ isBottomPopup: true });
  },

  onClose() {
    this.setData({ isBottomPopup: false });
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let typeid=options.typeid;
    console.log(typeid);
    this.isLeft(this.data);
  },
//判断两边高度，来觉得添加到那边
async isLeft(data) {
  const {
    booklist,
    leftList,
    rightList
  } = data;
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
        leftHeight = res[0].height; //获取左边列表的高度
        rightHeight = res[1].height; //获取右边列表的高度
        resolve();
      });
    });
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
    console.log('bottom');
      this.setData({
        isload: 1
      })
      //setTimeout(() => {
        console.log(request)
      //}, 3000)
    
  }, 2000, true),

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})