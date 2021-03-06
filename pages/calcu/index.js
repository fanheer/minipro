// pages/calcu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    callist: [{ initNum: '', result: '' }],
    extraLabel: [{ label: '额外支出', value: '' }, { label: '优惠金额', value: '' }],
    totalPay: 0
  },

  changeCalList: function (e) {
    let { callist } = this.data
    callist[e.target.dataset.key]['initNum'] = (e.detail.value)
    this.setData({ callist })
  },
  changeExtra: function (e) {
    let { extraLabel } = this.data
    extraLabel[e.target.dataset.key]['value'] = (e.detail.value)
    this.setData({ extraLabel })
  },
  addCalList: function () {
    let { callist } = this.data
    callist.push({ initNum: '', })
    this.setData({ callist })
  },
  calResult: function () {
    let { callist, extraLabel } = this.data
    let totalPay = 0, sum = 0
    let difference = parseFloat(extraLabel[0]['value']) - parseFloat(extraLabel[1]['value'])
    callist.map(citem => {
      sum += parseFloat(citem['initNum']) || 0
    })
    callist.map(citem => {
      citem['result'] = (parseFloat(citem['initNum'] || 0) * (1 + difference / sum)).toFixed(2)
      totalPay += parseFloat(citem['result']) || 0
    })
    debugger
    this.setData({ callist, totalPay })
  },
  clearAll: function () {
    this.setData({
      callist: [{ initNum: '', result: '' }],
      extraLabel: [{ label: '额外支出', value: '' }, { label: '优惠金额', value: '' }],
      totalPay: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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