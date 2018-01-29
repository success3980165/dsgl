Vue.component('hulai-footer', function(resolve, reject) {
  $.get("components/footer.html").then(function(res) {
    resolve({
      template: res
    })
  })
})