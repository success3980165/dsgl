new Vue({
  el: "#app",
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(24, false),
    listName: '',
    listData: [],
    lunboArr: [],
    isChecked: 1,
    isZiLiaoChecked: 1,
    ziliaoData: [],
    cover: false,
    video_play: false,
    video_close: false,
    more_href: '',
    lunboName: ''
  },
  created() {
    var that = this;
    that.$nextTick(function() {
      that.teseSwiper = new Swiper(".portal .swiper-container", {
        slidesPerView: 3,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        effect: "coverflow",
        centeredSlides: !0,
        slidesPerView: "auto",
        spaceBetween: 10,
        paginationClickable: true,
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1
        },
        loop: !0
      });
    })
  },
  mounted: function() {
    var that = this;
    that.initData();
  },
  methods: {
    initData() {
      var that = this;
      that.goGetLunbo();
      that.goGetZiLiao('系统介绍', 1, 8);
      that.goGetList('最新', 1, 8);
    },
    goGetList(str, num, rows) {
      var that = this;
      if (str == '最新') {
        that.more_href = 'pclist.html?type=zuixin';
        that.listName = '最新';
        that.isChecked = 1;
      } else if (str == '新闻') {
        that.more_href = 'pclist.html?type=xinwen';
        that.listName = '新闻';
        that.isChecked = 2;
      } else if (str == '攻略') {
        that.more_href = 'pclist.html?type=gonglue';
        that.listName = '攻略';
        that.isChecked = 3;
      } else if (str == '公告') {
        that.more_href = 'pclist.html?type=gonggao';
        that.listName = '公告';
        that.isChecked = 4;
      }
      var params = {};
      params.categoryName = str;
      params.page = num;
      params.rows = rows;
      that.listName = str;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var listData = result.rows;
        that.listData = result.rows;
        console.log(that.listData)
        listData.forEach(function(item) {
          item.updated = item.created.substr(0, 10);
          item.hrefVal = 'pcdetail.html?id=' + item.id;
        })
      })
    },
    goGetZiLiao(str, num, rows) {
      var that = this;
      if (str == '系统介绍') {
        that.isZiLiaoChecked = 1;
      } else if (str == '职业介绍') {
        that.isZiLiaoChecked = 2;
      } else if (str == '特色系统') {
        that.isZiLiaoChecked = 3;
      } else if (str == '玩法介绍') {
        that.isZiLiaoChecked = 4;
      }
      var params = {};
      params.categoryName = str;
      params.page = num;
      params.rows = rows;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var ziliaoData = result.rows;
        that.ziliaoData = result.rows;
        console.log(that.ziliaoData)
        ziliaoData.forEach(function(item) {
          item.updated = item.created.substr(0, 10);
          item.hrefVal = 'pcdetail.html?id=' + item.id;
        })
      })
    },
    goGetLunbo() {
      var that = this;
      var params = {};
      params.categoryName = '轮播';
      that.hoolaiCmsAPI.getList(params, function(result) {
        console.log(result.rows)
        that.lunboArr = result.rows;
        that.$nextTick(function() {
          that.mySwiper = new Swiper('.shouye_swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // spaceBetween: 30,
            centeredSlides: true,
            // autoplay: 2500,
            // autoplayDisableOnInteraction: false,
            // loop: true
            paginationClickable: true,
            observer: true,
            loop: true,
            // autoplay: 2500,
          })
        })
      })
    },
  }
})