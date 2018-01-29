Vue.component('hulai-header', function(resolve, reject) {
  $.get("components/header.html").then(function(res) {
    var acJquery = {
      bindAnimate: function() {
        $(".contact_us").mouseenter(function() {
          $(".head_bottom").slideDown(800)
        })
        $(".contact_us").mouseleave(function() {
          $(".head_bottom").slideUp(800)
        })
        $(".gonglv").mouseenter(function() {
          $(".zixun").css({
            "display": "block"
          })
        })
        $(".zixun,.gonglv").mouseleave(function() {
          $(".zixun").css({
            "display": "none"
          })
        })
      }
    }
    resolve({
      template: res,
      data() {
        return {
          cover: false,
          video_play: false,
          video_close: false
        }
      },
      mounted: function() {
        acJquery.bindAnimate();
      },
      methods: {
        closeVideo() {
          this.cover = false;
          this.video_play = false;
        },
        clickVideo() {
          this.cover = true;
          this.video_play = true;
          console.log(111)
        },
      }
    })
  })
})