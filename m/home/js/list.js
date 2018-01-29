new Vue({
  el: '#app',
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(24, false),
    listData: [],
    listName: '',
    zuixin: true,
    xinwen: false,
    gonglue: false,
    gonggao: false,
    zuixinArr: [],
    xinwenArr: [],
    gonglueArr: [],
    gonggaoArr: [],
    clickNum: 1,
    total_page: 1,
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
      if (type == 'zuixin') {
        this.goGetList('最新');
      } else if (type == 'xinwen'){
        this.goGetList('新闻');
      } else if (type == 'gonglue'){
        this.goGetList('攻略');
      } else if (type == 'gonggao'){
        this.goGetList('公告');
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
    goGetList: function(str,num) {
      var that = this;
      if(num){
        that.clickNum += 1;
      }else {
        that.clickNum = 1;
        that.zuixinArr = [];
        that.xinwenArr = [];
        that.gonglueArr = [];
        that.gonggaoArr = [];
      }
      if (str == '最新') {
        that.listName = '最新';
        that.zuixin = true;
        that.xinwen = false;
        that.gonglue = false;
        that.gonggao = false;
      } else if (str == '新闻') {
        that.listName = '新闻';
        that.zuixin = false;
        that.xinwen = true;
        that.gonglue = false;
        that.gonggao = false;
      } else if (str == '攻略') {
        that.listName = '攻略';
        that.zuixin = false;
        that.xinwen = false;
        that.gonggao = false;
        that.gonglue = true;
      } else if (str == '公告') {
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
      if(num){
        params.page = that.clickNum;
      }else{
        params.page = 1;
      }
      that.hoolaiCmsAPI.getList(params, function(result) {
        var listData = result.rows;
        listData.forEach(function(item) {
          item.date = item.created.substr(0, 10);
          item.hrefVal = 'detail.html?id=' + item.id;
        })
        if (str == '最新') {
          that.zuixinArr = that.zuixinArr.concat(listData);
          that.listData = that.zuixinArr;
        } else if (str == '新闻') {
          that.xinwenArr = that.xinwenArr.concat(listData);
          that.listData = that.xinwenArr;
        } else if (str == '攻略') {
          that.gonglueArr = that.gonglueArr.concat(listData);
          that.listData = that.gonglueArr;
        } else if (str == '公告') {
          that.gonggaoArr = that.gonggaoArr.concat(listData);
          that.listData = that.gonggaoArr;
        }
        that.total_page = Math.ceil(result.total/6);
        console.log(that.listData);
      })
    },
    showMore: function(){
      var that = this;
      if (that.clickNum < that.total_page){
        that.goGetList(that.listName, that.clickNum);
      }
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
