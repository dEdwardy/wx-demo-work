import {
  BasicsModel
} from '../../models/basics.js'
let basicsModel = new BasicsModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    navList: [{
      title: 'Tabs导航栏',
      name: 'tab'
    },
    {
      title: 'form表单',
      name: 'form'
    },
    {
      title: 'List列表',
      name: 'list'
    },
    {
      title: 'Step步骤条 ',
      name: 'step'
    },
    {
      title: 'Serch',
      name: 'search'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const banners = basicsModel.getBanner()
    banners.then(res=>{
      this.setData({
        swiperList: res.banners,
      })
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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})