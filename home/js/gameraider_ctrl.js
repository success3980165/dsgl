new Vue({
  el: "#app",
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(24, false),
    listName: '',
    ziliaoData: [],
    zhiyeData: [],
    teseData: [],
    all: 8,
    cur: 1,
    more1: true,
    isChecked: 1
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      var that = this;
      var type = getUrlParam('type');
      that.goGetList('系统介绍', 1, 11, function(result) {
        that.ziliaoData = result.rows;
      });
      that.goGetList('职业介绍', 1, 11, function(result) {
        that.zhiyeData = result.rows;
      });
      that.goGetList('特色系统', 1, 11, function(result) {
        that.teseData = result.rows;
      });
    },
    goGetList(str, num, rows, callback) {
      var that = this;
      var params = {};
      params.categoryName = str;
      params.page = num;
      params.rows = rows;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var rows = result.rows;
        if (rows.length < 3 && num == 1) {
          that.more1 = false;
        } else {
          that.more1 = true;
        }
        rows.forEach(function(item) {
          item.updated = item.created.substr(0, 10);
          item.hrefVal = 'pcdetail.html?id=' + item.id;
        })

        callback(result)
      })
    }
  }
})