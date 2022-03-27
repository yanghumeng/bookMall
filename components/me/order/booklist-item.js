// components/order/orderItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    bookdetail:{
      bookname:'',
      price:'',
      num:'',
      booklogo:'',
      status:2
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handelToComment(){
      wx.navigateTo({
        url: '/pages/goods-comment/goods-comment',
      })
    }
  }
})
