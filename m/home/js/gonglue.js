new Vue({
  el: '#app',
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(24, false),
    jieshaoListData: [],
    xitong: true,
    zhiye: false,
    tese: false,
    wanfa: false,
    showCover: false,
    showqq: false,
    showVx: false,
    lunboData: [],
    myswiper: ''
  },
  mounted(){
    this.initData();
  },
  methods: {
    initData: function() {
      this.goGetLunbo();
      var type = getUrlParam('type');
      if (type == 'xitong') {
        this.goGetJieshao('系统介绍');
      } else if (type == 'zhiye'){
        this.goGetJieshao('职业介绍');
      } else if (type == 'tese'){
        this.goGetJieshao('特色系统');
      } else if (type == 'wanfa'){
        this.goGetJieshao('玩法介绍');
      }
    },
    goGetLunbo: function(){
      var that = this;
      var params = {};
      params.categoryName = '轮播';
      that.hoolaiCmsAPI.getList(params, function(result) {
        console.log(result);
        that.myswiper = new Swiper('.swiper-container',{
          paginationClickable :true,
           observer: true,
           loop: false,
           pagination : '.swiper-pagination',
           autoplay: 2500
        })
        that.lunboData = result.rows;
      })
    },
    goGetJieshao: function(str) {
      var that = this;
      if (str == '系统介绍') {
        that.xitong = true;
        that.zhiye = false;
        that.tese = false;
        that.wanfa = false;
      } else if (str == '职业介绍') {
        that.xitong = false;
        that.zhiye = true;
        that.tese = false;
        that.wanfa = false;
      } else if (str == '特色系统') {
        that.xitong = false;
        that.zhiye = false;
        that.tese = true;
        that.wanfa = false;
      } else if (str == '玩法介绍') {
        that.xitong = false;
        that.zhiye = false;
        that.tese = false;
        that.wanfa = true;
      }
      var params = {};
      params.categoryName = str;
      params.rows = 30;
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
