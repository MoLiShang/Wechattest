// component/date/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      Year:Number,
      Month:Number,
      Day:Number,
      
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ChangeMonth: function (nMonth) {
      var sMonth;
      switch (nMonth) {
        case 1: sMonth = "一月";break;
        case 2: sMonth = "二月"; break;
        case 3: sMonth = "三月"; break;
        case 4: sMonth = "四月"; break;
        case 5: sMonth = "五月"; break;
        case 6: sMonth = "六月"; break;
        case 7: sMonth = "七月"; break;
        case 8: sMonth = "八月"; break;
        case 9: sMonth = "九月"; break;
        case 10: sMonth = "十月"; break;
        case 11: sMonth = "十一月"; break;
        case 12: sMonth = "十二月"; break;
      }
      return sMonth;
    }
  },
  attached:function(){
    var date = new Date();
    this.properties.Year = date.getFullYear();
    this.properties.Month =this.ChangeMonth(date.getMonth()+1);
    console.log(this.properties.Month);
    if (date.getDate().toString().length == 1) {
      this.properties.Day = "0" + (date.getDate());
    }else{
      this.properties.Day = date.getDate();
    };
    this.setData({
      year:this.properties.Year,
      month : this.properties.Month,
      day : this.properties.Day
    });
  },

 
})
