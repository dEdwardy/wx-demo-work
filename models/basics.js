import { HTTP } from '../utils/http-p.js'
class BasicsModel extends HTTP {
  getBanner() {
    return this.request({
      url: '/banner/type=2',
    })
  }
}

export { BasicsModel }