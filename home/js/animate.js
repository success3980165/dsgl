//轮播
$(document).ready(function() {
  var index = 0;
  var max = $('.ey_w');
  var b = $('.ey_ul');
  var c = max.width();
  var d = b.width();
  var e = Math.floor(d / c);

  //下翻
  $('.next').click(function() {
    index--;
    index = (index == -e) ? 0 : index;
    var left = c * index;
    b.stop().animate({
      'left': left + 'px'
    }, 300);
  });

  //上翻
  $('.prev').click(function() {
    index = (index == 0) ? -e : index;
    index++;
    var left = c * index;
    b.stop().animate({
      'left': left + 'px'
    }, 300);
  });
  max.mouseover(function() {
    clearInterval(timer);
  });

  max.mouseout(function() {
    timer = setInterval(move, 3000);
  });

  timer = setInterval(move, 3000);

  function move() {
    index--;
    index = (index == -e) ? 0 : index;
    var left = c * index;
    b.stop().animate({
      'left': left + 'px'
    }, 300);
  };


  //百叶窗
  $(".dtp1-1").click(function() {
    $(this).animate({
      "width": "580px"
    }, 700);
    $(".img1").delay(200).fadeOut();
    $(".img2").delay(200).fadeIn();
    $(".img3").delay(200).fadeIn();
    $(".img4").delay(200).fadeIn();
    $(".img5").delay(200).fadeIn();
    // $(".img2").css({"display":"block"})
    // $(".img3").css({"display":"block"})
    // $(".img4").css({"display":"block"})
    // $(".img5").css({"display":"block"})

    // var left2 = $(".img2").css("left");
    // if (left2 == '-100px') {
    //   $(".img2").animate({
    //     left: "+=100px"
    //   },500)
    // }

    // var left3 = $(".img3").css("left");
    // if (left3 == '-100px') {
    //   $(".img3").animate({
    //     left: "+=100px"
    //   },500)
    // }

    // var left4 = $(".img4").css("left");
    // if (left4 == '-100px') {
    //   $(".img4").animate({
    //     left: "+=100px"
    //   },500)
    // }

    // var left5 = $(".img5").css("left");
    // if (left5 == '-100px') {
    //   $(".img5").animate({
    //     left: "+=100px"
    //   },500)
    // }

    $(".dtp1-2").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-3").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-4").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-5").animate({
      "width": "95px"
    }, 700);
  })
  $(".dtp1-2").click(function() {
    $(this).animate({
      "width": "580px"
    }, 700);
    $(".img1").delay(200).fadeIn();
    $(".img2").delay(200).fadeOut();
    $(".img3").delay(200).fadeIn();
    $(".img4").delay(200).fadeIn();
    $(".img5").delay(200).fadeIn();

    // $(".img2").animate({
    //     left: "-=100px"
    // },400)

    // var left1 = $(".img1").css("left");
    // if (left1 == '-100px') {
    //   $(".img1").animate({
    //     left: "+=100px"
    //   },500)
    // }

    // var left2 = $(".img2").css("left");
    // if (left2 == "0px") {
    //   $(".img2").animate({
    //     left: "-=100px"
    // },400)
    // } else if (left2 == '-100px') {
    //   $(".img2").animate({
    //     left: "+=100px"
    //   },500)
    // }

    // var left3 = $(".img2").css("left");
    // if (left3 == "0px") {
    //   $(".img2").animate({
    //     left: "-=100px"
    // },400)
    // } else if (left3 == '-100px') {
    //   $(".img2").animate({
    //     left: "+=100px"
    //   },500)
    // }

    // var left4 = $(".img4").css("left");
    // if (left4 == 0) {
    //   $(".img4").animate({
    //     left: "+=100px"
    //   },500)
    // }

    // var left5 = $(".img5").css("left");
    // if (left5 == 0) {
    //   $(".img5").animate({
    //     left: "+=100px"
    //   },500)
    // }
    $(".dtp1-1").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-3").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-4").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-5").animate({
      "width": "95px"
    }, 700);
  })
  $(".dtp1-3").click(function() {
    $(this).animate({
      "width": "580px"
    }, 700);
    $(".img1").delay(200).fadeIn();
    $(".img2").delay(200).fadeIn();
    $(".img3").delay(200).fadeOut();
    $(".img4").delay(200).fadeIn();
    $(".img5").delay(200).fadeIn();

    // $(".img3").animate({
    //     left: "-=100px"
    // },400)

    $(".dtp1-1").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-2").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-4").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-5").animate({
      "width": "95px"
    }, 700);
  })
  $(".dtp1-4").click(function() {
    $(this).animate({
      "width": "580px"
    }, 700);
    $(".img1").delay(200).fadeIn();
    $(".img2").delay(200).fadeIn();
    $(".img3").delay(200).fadeIn();
    $(".img4").delay(200).fadeOut();
    $(".img5").delay(200).fadeIn();
    // $(".img4").animate({
    //     left: "-=100px"
    // },400)
    $(".dtp1-1").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-2").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-3").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-5").animate({
      "width": "95px"
    }, 700);
  })
  $(".dtp1-5").click(function() {
    $(this).animate({
      "width": "580px"
    }, 700);
    $(".img1").delay(200).fadeIn();
    $(".img2").delay(200).fadeIn();
    $(".img3").delay(200).fadeIn();
    $(".img4").delay(200).fadeIn();
    $(".img5").delay(200).fadeOut();
    // $(".img5").animate({
    //     left: "-=100px"
    // },400)
    $(".dtp1-1").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-2").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-3").animate({
      "width": "95px"
    }, 700);
    $(".dtp1-4").animate({
      "width": "95px"
    }, 700);
  })
  // 弹窗
  // function clickCv() {
  //   $(".basement").css({"display":"block"})
  // }
  // function clickFuli() {
  //   $(".basement_two").css({"display":"block"})
  // }
  // function crossAll() {
  //   $(".basement").css({"display":"none"})
  //   $(".basement_two").css({"display":"none"})
  // }

  //移入移出
  // $(".contact_us").mouseenter(function() {
  //   $(".head_bottom").slideDown(800)
  // })
  // $(".contact_us").mouseleave(function() {
  //   $(".head_bottom").slideUp(800)
  // })
  // $(".gonglv").mouseenter(function() {
  //   $(".zixun").css({
  //     "display": "block"
  //   })
  // })
  // $(".zixun,.gonglv").mouseleave(function() {
  //   $(".zixun").css({
  //     "display": "none"
  //   })
  // })
  //领取礼包复制功能
  function copytxt() {
    var d = $(".libao_two");
    d.select();
    document.execCommand("Copy");
    alert("已复制到剪贴板");
  }


});


// 弹窗
function clickCv() {
  $(".basement").css({
    "display": "block"
  })
}

function clickFuli() {
  $(".basement_two").css({
    "display": "block"
  })
}

function crossAll() {
  $(".basement").css({
    "display": "none"
  })
  $(".basement_two").css({
    "display": "none"
  })
}
//领取礼包复制功能
function copytxt() {
  var d = $(".txt1");
  d.select();
  document.execCommand("Copy");
  alert("已复制到剪贴板");
}

function qidai() {
  alert("敬请期待！")
}