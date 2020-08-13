Page({
  data: {
    list: []
  },
  queryMovieList() {
    wx.request({
      url: 'https://piaofang.maoyan.com/dashboard-ajax/movie',
      data: {
        orderType: 0,
        riskLevel: 71,
        optimusCode: 10
      },
      success: ({
        data,
        statusCode
      }) => {
        if (statusCode === 200) {
          const {
            list
          } = data.movieList;
          this.setData({
            list
          });
        }
      }
    });
  },
  onShow() {
    this.queryMovieList();
  }
});