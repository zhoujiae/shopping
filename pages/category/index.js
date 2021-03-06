// import ApiList from  '../../config/api';
// import request from '../../utils/request.js';
//获取应用实例
var app = getApp();
var con = require('../../data.js')
Page({
    data: {
        // types: null,
      typeTree: {}, // 数据缓存
      currType: 0,
      // 当前类型
      "types": [
      ],
      typeTree: [],
      myHidden: false
    },
        
    onLoad: function (option){
        var that = this;
        wx.request({
            url: con.Index_getcategory,
            method:'GET',
            data: { wxappid:con.wyy_user_wxappid },
            header: {
                'Content-Type':  'application/json'
            },
            success: function (res) {
                //--init data 
                var status = res.data.status;
                if(status==1) { 
                    var list = res.data.info;
                    var catList = res.data.first;
                    // console.log(res, catList);
                    that.setData({
                        types:list,
                        typeTree:catList,
                        currType: list[0].id,
                        myHidden: true
                    });
                } else {
                    wx.showToast({
                        title:res.data.err,
                        duration:2000,
                    });
                }
                    // console.log(list. currType)

            },
            error:function(e){
                wx.showToast({
                    title:'网络异常!',
                    duration:2000,
                });
            },

        });
    },    
 
    tapType: function (e){
        var that = this;
        const currType = e.currentTarget.dataset.typeId;

        that.setData({
            currType: currType
        });
        // console.log(currType);
        wx.request({
            url: con.Index_getgoodsbycateid,
            method:'GET',
            data: { wxappid: con.wyy_user_wxappid,cateid:currType},
            header: {
                'Content-Type':  'application/json'
            },
            success: function (res) {
                var status = res.data.status;
                if(status==1) { 
                    var catList = res.data.info;
                    // console.log(catList);
                    that.setData({
                        typeTree:catList,
                    });
                } else {
                    wx.showToast({
                        title:res.data.err,
                        duration:2000,
                    });
                }
            },
            error:function(e){
                wx.showToast({
                    title:'网络异常！',
                    duration:2000,
                });
            }
        });
    },
    // 加载品牌、二级类目数据
//     getTypeTree (currType) {
//       console.log(66666)
//         const me = this, _data = me.data;
//         if(!_data.typeTree[currType]){
//             request({
//                 url: ApiList.goodsTypeTree,
//                 data: {typeId: +currType},
//                 success: function (res) {
//                     _data.typeTree[currType] = res.data.data;
//                     me.setData({
//                         typeTree: _data.typeTree
//                     });
//                 }
//             });
//         }
//     }
})