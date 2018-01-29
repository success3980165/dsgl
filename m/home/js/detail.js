new Vue({
  el: '#app',
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(24, false),
    article_title: '',
    article_time: '',
    article_content: ''
  },
  created: function() {
    this.initData();
  },
  methods: {
    initData: function() {
      var id = getUrlParam('id');
      this.goGetByID(id);
    },
    goGetByID: function(articleTag) {
      var that = this;
      console.log(articleTag);
      that.hoolaiCmsAPI.getById(articleTag, function(result) {
        console.log(result);
        that.article_title = result.data.title;
        that.article_time = result.data.updated.substr(0,10);
        that.article_content = result.data.content;
      }, 'json')
    },
    goBack: function(){
      window.history.back();
    }
  }
})
