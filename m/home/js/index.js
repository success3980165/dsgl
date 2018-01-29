new Vue({
  el: '#app',
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(24, false),
    listData: [],
    listName: '',
    more_href: '',
    zuixin: true,
    xinwen: false,
    gonglue: false,
    gonggao: false,
    jieshaoListData: [],
    xitong: true,
    zhiye: false,
    tese: false,
    wanfa: false,
    js_more_href: '',
    showCover: false,
    showVideo: false,
    showqq: false,
    showVx: false,
    lunboData: [],
    myswiper: ''
  },
  mounted(){
    this.initData();
  },
  created: function() {
    // this.initData();
  },
  methods: {
    initData: function() {
      this.goGetLunbo();
      this.goGetList('最新');
      this.goGetJieshao('系统介绍');
    },
    goGetLunbo: function(){
      var that = this;
      var params = {};
      params.categoryName = '轮播';
      that.hoolaiCmsAPI.getList(params, function(result) {
        console.log(result);
        that.myswiper = new Swiper('.top_swiper',{
          paginationClickable :true,
           observer: true,
           loop: false,
           pagination : '.swiper-pagination',
           autoplay: 2500
        })
        that.lunboData = result.rows;
      })
    },
    goGetList: function(str) {
      var that = this;
      if (str == '最新') {
        that.more_href = 'list.html?type=zuixin';
        that.listName = '最新';
        that.zuixin = true;
        that.xinwen = false;
        that.gonglue = false;
        that.gonggao = false;
      } else if (str == '新闻') {
        that.more_href = 'list.html?type=xinwen';
        that.listName = '新闻';
        that.zuixin = false;
        that.xinwen = true;
        that.gonglue = false;
        that.gonggao = false;
      } else if (str == '攻略') {
        that.more_href = 'list.html?type=gonglue';
        that.listName = '攻略';
        that.zuixin = false;
        that.xinwen = false;
        that.gonggao = false;
        that.gonglue = true;
      } else if (str == '公告') {
        that.more_href = 'list.html?type=gonggao';
        that.listName = '公告';
        that.zuixin = false;
        that.xinwen = false;
        that.gonggao = true;
        that.gonglue = false;
      }
      var params = {};
      // 1: 获取推荐的文章
      // params.isRecommend = 1;
      // 2: 获取某个类型的所有文章
      params.categoryName = str;
      params.rows = 6;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var listData = result.rows;
        listData.forEach(function(item) {
          item.date = item.created.substr(0, 10);
          item.hrefVal = 'detail.html?id=' + item.id;
        })
        that.listData = listData;
        console.log(that.listData);
      })
    },
    goGetJieshao: function(str) {
      var that = this;
      if (str == '系统介绍') {
        that.js_more_href = 'gonglue.html?type=xitong';
        that.xitong = true;
        that.zhiye = false;
        that.tese = false;
        that.wanfa = false;
      } else if (str == '职业介绍') {
        that.js_more_href = 'gonglue.html?type=zhiye';
        that.xitong = false;
        that.zhiye = true;
        that.tese = false;
        that.wanfa = false;
      } else if (str == '特色系统') {
        that.js_more_href = 'gonglue.html?type=tese';
        that.xitong = false;
        that.zhiye = false;
        that.tese = true;
        that.wanfa = false;
      } else if (str == '玩法介绍') {
        that.js_more_href = 'gonglue.html?type=wanfa';
        that.xitong = false;
        that.zhiye = false;
        that.tese = false;
        that.wanfa = true;
      }
      var params = {};
      params.categoryName = str;
      params.rows = 12;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var listData = result.rows;
        listData.forEach(function(item) {
          // item.date = item.created.substr(0, 10);
          item.hrefVal = 'detail.html?id=' + item.id;
        })
        that.jieshaoListData = listData;
        console.log(that.jieshaoListData)
      })
    },
    playVideo: function(){
      this.showCover = true;
      this.showVideo = true;
      var myVideo = document.getElementById("video");
      myVideo.play();
    },
    closeVideo: function(){
      this.showCover = false;
      this.showVideo = false;
      var myVideo = document.getElementById("video");
      myVideo.pause();
    },
    showWechat: function(){
      this.showCover = true;
      this.showVx = true;
    },
    showQQ: function(){
      this.showCover = true;
      this.showqq = true;
    },
    closeDialog: function(){
      if(!this.showVideo){
        this.showCover = false;
        this.showVx = false;
        this.showqq = false;
      }
    }
  }
})
