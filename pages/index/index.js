//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '中数美创',
  },
  faA(){
    wx.navigateTo({
      url:'../../pages/logs/logs'
    })
  },
  //事件处理函数
  
  onLoad: function () {

  },
  getUserInfo: function(e) {
   
  }
})
