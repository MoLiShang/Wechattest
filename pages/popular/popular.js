// var classicData = require("../../data/moviedata.js");
// Page({
//   data: {

//   },

//   onLoad: function(event) {
//     this.setData({
//       classicdata: classicData.classic[0],
//       btnindex: 0
//     });
//   },
//   onLastOne: function(event) {
//     if(!this.data.btnindex){
//     }else{
//       this.data.btnindex -= 1;
//       this.data.classicdata = classicData.classic[this.data.btnindex];
//     }
//   },
//   onNextOne:function(event){
//     if (this.data.btnindex==classicData.classic.length) {
//       console.log("111");
//     } else {
//       this.data.btnindex+=1;
//       this.data.classicdata = classicData.classic[this.data.btnindex];
//     }
//   }
// })