// shdd/index/index.js
var wxch = require('../../utils/wxcharts');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '数据',
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   new wxch({
    animation: true, //是否有动画
    canvasId: 'canvas1',
    type: 'ring',
    series: [{ name: '一班', data: 100 ,color:'#5FAFEC',offsetX:400}],
    extra: {
      ringWidth: 25,
  },
  xAxis:{
    gridColor :'#ccc'
  },
    width: 345,
    height: 351,
    legend: false,// 是否显示图表下方各类别的标识
    dataLabel: false,// 是否在图表中显示数据内容值
   });
   new wxch({
    animation: true, //是否有动画
    canvasId: 'canvas2',
    type: 'ring',
    series: [{ name: '一班', data: 100,color:'#5FAFEC' },{ name: '二班', data: 50 ,color:'red' }],
    extra: {
      pie: {
        offsetAngle: -300
    },
      ringWidth: 25,
  },
    width: 290,
    height: 290,
    legend: false,
    dataLabel: false,
   });
   new wxch({
    animation: true, //是否有动画
    canvasId: 'canvas3',
    type: 'ring',
    series: [{ name: '一班', data: 100,color:'#5FAFEC' }],
    extra: {
      pie: {
        offsetAngle: -90
    },
      ringWidth: 25,
  },
    width: 242,
    height: 242,
    legend: false,
    dataLabel: false,
   });
   new wxch({
    animation: true, //是否有动画
    canvasId: 'canvas4',
    type: 'ring',
    series: [{ name: '一班', data: 100,color:'#5FAFEC' }],
    extra: {
      pie: {
        offsetAngle: -90
    },
      ringWidth: 25,
  },
    width: 190,
    height: 190,
    legend: false,
    dataLabel: false,
   });
   new wxch({
    // animation: true, //是否有动画
    canvasId: 'canvas5',
    type: 'ring',
    series: [{ name: '一班', data: 100,color:'#5FAFEC' }],
    extra: {
      pie: {
        offsetAngle: -90
    },
      ringWidth: 25,
  },
    width: 135,
    height: 135,
    legend: false,
    dataLabel: false,
   });
   new wxch({
    animation: true, //是否有动画
    canvasId: 'canvas6',
    type: 'pie',
    series: [{ name: '一班', data: 100,color:'#5FAFEC' },{name: '2班', data: 100},{name: '2班', data: 100}],
    extra: {
      pie: {
        offsetAngle: -90
    },
      ringWidth: 25,
  },
    width: 400,
    height: 250,
    legend: false,
    dataLabel: true,
   });
   new wxch({
    // animation: true, //是否有动画
    canvasId: 'canvas7',
    type: 'radar',
    categories: ['周一', '周二', '周三', '周四', '周五', '周六'],
series: [{
name: '成交量1',
data: [90, 110, 125, 95, 87, 122]
}],
  //   extra: {
  //     pie: {
  //       offsetAngle: -90
  //   },
  //     ringWidth: 25,
  // },
    width: 400,
    height: 250,
    legend: false,
    dataLabel: true,
   });

   new wxch({
    canvasId: 'canvas8',
    type: 'column',
    animation: true,
    categories: ['2012', '2013', '2014', '2015'],
    series: [{
    name: '成交量',
    data: [15, 20, 45, 37],
    format: function (val, name) {
    return val.toFixed(2) + '万';
    }
    }],
    yAxis: {
    format: function (val) {
    return val + '万';
    },
    title: 'Column',
    min: 0
    },
    xAxis: {
    disableGrid: false,
    type: 'calibration'
    },
    extra: {
    column: {
    width: 15
    }
    },
    width: 350,
    height: 300,
    });
    

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