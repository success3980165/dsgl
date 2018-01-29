Vue.component('hulai-seheader', function(resolve, reject) {
  $.get("components/seheader.html").then(function(res) {
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
      mounted: function() {
        acJquery.bindAnimate();
      },
    })
  })
})