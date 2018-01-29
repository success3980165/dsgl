function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

(function()  {  
  var  hm  =  document.createElement("script");  
  hm.src  =  "https://hm.baidu.com/hm.js?be321ad69985de46d112e3f1cf2a9f14";  
  var  s  =  document.getElementsByTagName("script")[0];   
  s.parentNode.insertBefore(hm,  s);
})();

document.write('<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">')

var version = "20180118";

function addScript() {
  var jsList = ['https://page.hulai.com/static/open/js/jquery.min.js', 'https://page.hulai.com/static/open/js/isMobile.min.js', 'https://page.hulai.com/static/open/js/vue-2.1.8.min.js'];
  for (var i = 0; i < jsList.length; i++) {
    var hm = document.createElement("script");
    hm.src = jsList[i];
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  }
}