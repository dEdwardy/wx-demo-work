import {
  config
} from '../config.js'

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效',
  301: '需要登录'
}

class HTTP {
  request({
    url,
    data = {},
    method = 'GET'
  }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data = {}, method = 'GET') {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        // 'appkey': config.appkey
      },
      success: (res) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          reject()
          if (res.data.msg) {
            this._show_error(1, res.data.msg)
          } else {
            let error_code = res.data.code
            this._show_error(2, error_code)
          }
        }
      },
      fail: (err) => {
        reject()
        this._show_error(2, error_code)
      }
    })
  }

  _show_error(type, error_code) {
    if (type === 1) {
      wx.showToast({
        title: error_code,
        icon: 'none',
        duration: 200
      })
    } else {
      if (!error_code) {
        error_code = 1
      }
      const tip = tips[error_code]
      wx.showToast({
        title: tip ? tip : tips[1],
        icon: 'none',
        duration: 200
      })
    }

  }
}

export {
  HTTP
}