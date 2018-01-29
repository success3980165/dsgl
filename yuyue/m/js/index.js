new Vue({
  el: '#app',
  data: {
    cover: false,
    leiShow:true,
    muShow:false,
    ygzzActivityAPI: new hoolaiActivityAPI(48, true),
    countdown: 60,
    smsCodeVal: '获取验证码',
    isDisabled: false,
    isGrayBg: false,
    telephone: '',
    character:'',
    code: '',
    isAnd: true,
    isIos: false,
    convertId: null,
    success:false,
    fail:false,
    cover2: false,
    total:0,
    one: false,
    two: false,
    three: false,
    four: false
  },
  created: function() {
    if (isMobile.apple.device) {
      this.isIos = true
      this.isAnd = false
    }
    if (isMobile.android.device) {
      this.isAnd = true
      this.isIos = false
    }
    this.getUrlParam(name);
    this.loadData();
    this.getTotal();
  },
  methods: {
    closeSuccess: function() {
      this.cover2 = false
      this.success = false
    },
    closeFail: function(){
      this.cover2 = false
      this.fail = false
    },
    clickGainian: function() {
      alert("敬请期待！")
    },
     chooseXT: function(str) {
      if (str == 'android') {
        this.isAnd = true;
        this.isIos = false;
      } else {
        this.isAnd = false;
        this.isIos = true;
      }
    },
    
    closeMc: function() {
      this.cover = false
      this.yuyue = false
    },
    setTime: function() {
      if (this.countdown == 0) {
        this.isGrayBg = false;
        this.smsCodeVal = "获取验证码";
        this.isDisabled = false;
        return;
      } else {
        this.isDisabled = true;
        this.isGrayBg = true;
        this.smsCodeVal = '重新发送' + this.countdown + 's';
        this.countdown--;
      }
      setTimeout(this.setTime, 1000)
    },
    sendSms: function() {
      var self = this;
      console.log(this.telephone);
      var mobile = this.telephone;
      var data = {};
      data.mobile = mobile;
      if (this.leiShow) {
        this.character = '雷震子';
      } else {
        this.character = '母夜叉';
      }
      this.ygzzActivityAPI.sendMobileCode(data, function(result) {
        if (result.ret != 1) {
          if (result.code == 19) {
            // 错误的手机号
            alert("请输入正确的手机号")
            return;
          }
          if (result.code == 4) {
            // 重复领取
            self.fail=true
            self.cover2=true
            return;
          }
          // alert(result.msg);
        } else {
          self.isGrayBg = true;
          self.countdown = 60;
          self.setTime();
        }
      })
    },
    // 领取礼包，获取礼包码
    saveRecord: function() {
      var mobile = this.telephone;
      var mobilecode = this.code;
      var platform = '';
      if (this.isAnd) {
        platform = 'android';
      } else {
        platform = 'ios';
      }
      console.log(this.character)
      var self = this;
      var data = {};
      data.mobile = mobile;
      data.verifyCode = mobilecode;
      data.platform = platform;
      data.channel = self.channelName;

      console.log(data);

      this.ygzzActivityAPI.saveRecord(data, function(result) {
        console.log(result)
        if (result.ret != 1) {
          if (result.code == 7) {
            alert("错误的验证码")
            return;
          }
          if (result.code == 19) {
            alert("请输入正确的手机号")
            return;
          }
          if (result.code == 5) {
            self.fail=true
            self.cover2=true
            return;
          }
          alert(result.msg);
        } else {
          self.success=true
          self.cover2=true
          self.cover = false
          if (self.convertId) {
            _taq.push({
              convert_id: self.convertId,
              event_type: "button"
            })
          }
        }
      })
    },
    getUrlParam: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    },
    loadData: function() {
      var that = this;
      that.getUrlParam(name);
      var channelId = that.getUrlParam('channel');
      var channelData = {};
      if (channelId) {
        $.getJSON('/yuyue/channel.json?n=' + new Date().getTime(), function(list) {
          list.forEach(function(item) {
            if ((item.channelId + "") === channelId) {
              channelData = item;
              that.channelName = channelData.channelName;
              console.log(that.channelName);
            }
          })
        })
      }
    },
    getTotal: function() {
      var self = this
      this.ygzzActivityAPI.getTotal(function(result) {
        if (result.ret != 1) {
          alert(result.msg);
        } else {
          self.total = result.total;
          if(self.total>10000) {
            self.one = true;
          }
          if (self.total>100000) {
            self.one = true;
            self.two = true;
          }
          if (self.total>300000) {
            self.one = true;
            self.two = true;
            self.three = true;
          }
          if (self.total>500000) {
            self.one = true;
            self.two = true;
            self.three = true;
            self.four = true;
          }
        }
      })
    }
  }
})