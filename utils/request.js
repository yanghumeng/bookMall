import config from './config'
/**
 * wx.request的封装
 * 使用方式： httpExt.get("admin/login", {}).then(res => {}).catch(err => {})
 * @param {*} url 请求地址
 * @param {*} method 请求类型
 * @param {*} data 请求参数
 */
const request = (url, method, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.baseURL + url,
      method: method || 'GET',
      data: data,
      header: {
        'content-type': method == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      dataType: 'json',
      success(res) {
        if (res.statusCode == 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail(error) {
        reject(error)
      }
    })
  })
}

const get = (url, data = {}) => {
  return request(url, 'GET', data)
}
const post = (url, data = {}) => {
  return request(url, 'POST', data)
}
export default {
  get,
  post
}