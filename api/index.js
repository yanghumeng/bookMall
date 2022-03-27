import request from "../utils/request"
export default {
  // 请求活动轮播图
  getBannars(){
    return request.get('/banner', {type: 2});
  },
  // 按类别获取图书列表
  getBookListByClass(classid){
    return request.post('/getBookListByClass',{classid:classid});
  }
}