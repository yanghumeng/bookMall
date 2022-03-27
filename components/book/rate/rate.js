// components/book/rate/rate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ratetext:{
      type:String
    },
    pvalue:{
      type:Number,
      value:0
    },
    valuetype:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.triggerEvent('handlerate', event)
    },
  }
})
