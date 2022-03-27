// components/index/header/header.js
const app = getApp()
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    islogo:{
      type:Boolean,
      value:true
    },
    title:{
      type:String,
      value:"BM图书商城"
    },
    isSearch:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuBotton: app.globalData.menuBotton,
    menuHeight: app.globalData.menuHeight,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转至搜索界面
    toSearch() {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    },
  }
})