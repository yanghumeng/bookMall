// components/me/addressItem/address.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    addressitem:{
      type:Object,
      value:{}
    },
    isedit:{
      type:Boolean,
      value:true
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
    editAddress(event){
      let addressId=event.target.dataset.id;
    },
    changeAddress(){
      wx.navigateTo({
        url: '/pages/address/address?urlname=changeaddress',
      })
    }
  }
})
