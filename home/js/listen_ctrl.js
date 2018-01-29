new Vue({
  el:'#app',
  data: {
    weixin:'img/wexin.png',
    weibo:'img/weibo.png',
    qq:'img/qq.png',
    kongjian:'img/kongjian.png',
    share:false,
    erweima:false,
    clickMa:true,
  },
  methods: {
    clickWx() {
      this.clickMa = !this.clickMa;
      if(this.clickMa) {
        this.weixin = 'img/wexin.png'
      }else {
        this.weixin = 'img/weixinhover.png'
      }
      
    },
    goClickWx() {
      this.share = true;
    },
    clickWb() {
      this.weibo = 'img/weibohover.png'
    },
    clickQq() {
      this.qq = 'img/qqhover.png'
    },
    clickKj() {
      this.kongjian = 'img/kongjianhover.png'
    },
    leaveWx() {
      this.weixin = 'img/wexin.png'
    },
    leaveWb() {
      this.weibo = 'img/weibo.png'
    },
    leaveQq() {
      this.qq = 'img/qq.png'
    },
    leaveKj() {
      this.kongjian = 'img/kongjian.png'
    }, 
  }
}) 