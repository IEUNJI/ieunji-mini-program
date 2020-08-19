Page({
  data: {
    list: [],
    timer: null
  },
  queryMovieList() {
    wx.request({
      url: 'https://piaofang.maoyan.com/dashboard-ajax/movie',
      data: {
        orderType: 0,
        riskLevel: 71,
        optimusCode: 10
      },
      success: ({ data }) => {
        const { list } = data.movieList;
        this.setData({
          list
        });
      },
      complete: () => {
        const timer = setTimeout(() => {
          clearTimeout(this.data.timer);
          this.queryMovieList();
        }, 2000);
        this.setData({
          timer
        });
      }
    });
  },
  onShow() {
    this.queryMovieList();
  },
  onHide() {
    clearTimeout(this.data.timer);
  }
});