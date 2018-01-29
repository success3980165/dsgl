new Vue({
  el: "#app",
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(24, false),
    article_title: '',
    article_time: '',
    article_content: '',
    listName: ''
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      var that = this;
      var id = getUrlParam('id');
      // var locationHrefArr = window.location.href.split("=");
      // var tag = locationHrefArr[locationHrefArr.length - 1];
      if (id != '1') {
        that.goGetByID(id)
        // that.getUrlParam(name)
      }
    },
    goGetByID: function(articleTag) {
      var that = this;
      console.log(articleTag);
      that.hoolaiCmsAPI.getById(articleTag, function(result) {
        console.log(result);
        that.listName = result.data.categorys[0].name
        that.article_title = result.data.title;
        that.article_time = result.data.updated;
        that.article_content = result.data.content;
      }, 'json')
    },
  }
})