var WYY_HOST_URL = "https://wxapi.weiyunyi.com/Wap.php/";
var c = "Shop"
module.exports = {
  wyy_host_api_url: WYY_HOST_URL,
  wyy_user_wxappid: "13",
  wyy_share_info: '',
 //命名规范 模块名_方法名
  
  //获取商家首页幻灯片 getslide
  Shop_getslide: WYY_HOST_URL + c + "/getslide",

  // 购物车数据展示接口
  Index_getfanscartlist: WYY_HOST_URL + c + "/getfanscartlist",

  // 添加商品进购物车接口  和 +①
  Index_addgoodstocart: WYY_HOST_URL + c + "/addgoodstocart",

  //购物车减去（-①）商品
  Index_subgoodsfromcart: WYY_HOST_URL + c + "/subgoodsfromcart",

  //购物车删除指定商品（数量清〇）

  Index_delgoodsfromcart: WYY_HOST_URL + c + "/delgoodsfromcart",

  //用户登录slogin
  index_slogin: WYY_HOST_URL + "/Index/slogin",

  //获取购物车已选择商品信息列表(POST)
  index_getcartgoodsbySelected: WYY_HOST_URL + c +  "/getcartgoodsbySelected",

  // 添加粉丝收货地址（POST）
  Index_addRecipients: WYY_HOST_URL + c + "/addRecipients",
  //查询粉丝收货地址
  Index_getFansRecipients: WYY_HOST_URL + c + "/getFansRecipients",

// 设置粉丝默认收货地址（POST）
  Index_SetDefaultRecipients: WYY_HOST_URL + c + "/SetDefaultRecipients",

  // 删除粉丝收货地址（POST）
  Index_delRecipients: WYY_HOST_URL + c + "/delRecipients",

  //获取所有省份列表
  Index_getprovince: WYY_HOST_URL + c + "/getprovince",

  //获取指定省份下的城市列表
  Index_getCitybyProvinceCode: WYY_HOST_URL + c + "/getCitybyProvinceCode",


  //获取指定城市的区域列表
  Index_getAreabyCityCode: WYY_HOST_URL + c + "/getAreabyCityCode",

  //添加订单并调用微信统一下单接口
  Index_addorder: WYY_HOST_URL + c + "/addorderttt",


  //结算后 清楚购物车
  // https://wxapi.weiyunyi.com/Wap.php?c=Shop&a=clearcartgoods


  Index_clearcartgoods: WYY_HOST_URL + c + "/clearcartgoods",

// 取消订单
  // https://wxapi.weiyunyi.com/Wap.php?c=Shop&a=cancelOrder 
  Index_cancelOrder: WYY_HOST_URL + c + "/cancelOrder",

  // 确认收货
  Index_shouhuo: WYY_HOST_URL + c + "/shouhuo",

  // 退款
  Index_tuikuan: WYY_HOST_URL + c + "/tuikuan",

  // 微信支付
  Index_getpaycanshu: WYY_HOST_URL + c + "/getpaycanshu",

  // 支付后订单状态
  Index_uporder_yifukuan: WYY_HOST_URL + c + "/uporder_yifukuan",

  // 物流信息 getkuaidibyordersn

  Index_getkuaidibyordersn: WYY_HOST_URL + c + "/getkuaidibyordersn",


  // 物流满减信息 getyunfeibyid
  Index_getyunfeibyid: WYY_HOST_URL + c + "/getyunfeibyid",


  // 添加评价 pingjia_add
  Index_pingjia_add: WYY_HOST_URL + c + "/pingjia_add",

  // 评价列表getpingjialist
  Index_getpingjialist: WYY_HOST_URL + c + "/getpingjialist",

  // 版权
  get_copyright: WYY_HOST_URL  + c + "/get_copyright",


  // 优惠劵  discountlist
  Index_discountlist: WYY_HOST_URL + c + "/discountlist",

  // 领取优惠劵 lingqu_youhui

  Index_lingqu_youhui: WYY_HOST_URL + c + "/lingqu_youhui",

  // 查看已领取的优惠劵 my_youhui

  Index_my_youhui: WYY_HOST_URL + c + "/my_youhui",

  // 可用的优惠劵获取 my_ok_youhuilist

  Index_my_ok_youhuilist: WYY_HOST_URL + c + "/my_ok_youhuilist",

  // 使用优惠劵
  











  
  // ①获取广告信息
  Index_getad: WYY_HOST_URL + c + "/getad",

  //②获取商品分类配置信息
  Index_getcategory: WYY_HOST_URL + c + "/getcategory",

  //③商城基础配送设置表
  Index_getconfig: WYY_HOST_URL + c + "/getconfig",

  // ④获取所有代金券配置信息
  Index_getdiscountlist: WYY_HOST_URL + c + "/getdiscountlist",

  // ⑤根据代金券id获取此代金券信息
  Index_getdiscountbyid: WYY_HOST_URL + c + "/getdiscountbyid",

  // ⑥获取商城所有粉丝的评价信息
  Index_getevaluationlist: WYY_HOST_URL + c + "/getevaluationlist",

  // ⑦根据粉丝编号获取评价信息
  Index_getfansevaluation: WYY_HOST_URL + c + "/getfansevaluation",

  // ⑧获取商品图片
  Index_getgoodsphotos: WYY_HOST_URL + c + "/getgoodsphotos",

  // ⑨获取商品属性分类配置信息
  Index_getgoodsattrbyid: WYY_HOST_URL + c + "/getgoodsattrbyid",
  
  // ①〇获取店铺商品属性分类表
  Index_getgoodsattr: WYY_HOST_URL + c + "/getgoodsattr",

  // ①根据商品属性分类id获取该分类下的所有属性
  Index_getgoodsattrmdm: WYY_HOST_URL + "/getgoodsattrmdm",

  // ①②获取指定属性分类下的商品
  Index_getgoodsbycatid: WYY_HOST_URL + c + "/getgoodsbycatid",

  // ①③根据商品id获取商品信息
  Index_getgoodsinfo: WYY_HOST_URL + c + "/getgoodsinfo",

  // ①④根据商品分类id获取该分类下的所有商品
  Index_getgoodsbycateid: WYY_HOST_URL + c + "/getgoodsbycateid",

  //①⑤根据品牌id获取该品牌下的所有商品
  Index_getgoodsbypid: WYY_HOST_URL + c + "/getgoodsbypid",

  //①⑥获取已下架的所有商品信息集合
  Index_getoffgoods: WYY_HOST_URL + c + "/getoffgoods",

  // ①⑦获取已上架的所有商品信息集合
  Index_getongoods: WYY_HOST_URL + c + "/getongoods",

  // ①⑧取全部商品信息集合
  Index_getgoods: WYY_HOST_URL + c + "/getgoods",

  // ①⑨获取指定商品的属性集合
  Index_getgoodsmdm: WYY_HOST_URL + c + "/getgoodsmdm",

  // ②〇获取商城消息模板配置表
  Index_getmsgconfig: WYY_HOST_URL + c + "/getmsgconfig",

  // ②①获取商城所有订单集合
  Index_getorder: WYY_HOST_URL + c + "/getorder",

  // ②②获取指定粉丝的所有订单集合
  Index_getfansorder: WYY_HOST_URL + c + "/getfansorder",

  // ②③根据粉丝id和发货状态获取该粉丝的指定状态的所有订单集合
  Index_getfansorderbyfhs: WYY_HOST_URL + c + "/getfansorderbyfhs",

  // ②④根据粉丝id和订单状态获取该粉丝的指定状态的所有订单集合
  Index_getfansorderbyos: WYY_HOST_URL + c + "/getfansorderbyos",

  // ②⑤根据订单编号获取订单详情
  Index_getorderbysn: WYY_HOST_URL + c + "/getorderbysn",

  // ②⑥根据订单编号获取订单商品信息
  Index_getordergoodsbysn: WYY_HOST_URL + c + "/getordergoodsbysn",

  // ②⑦获取打印管理信息列表
  Index_getprintlist: WYY_HOST_URL + c + "/getprintlist",

  // ②⑧根据id获取打印机信息
  Index_getprintinfo: WYY_HOST_URL + c + "/getprintinfo",

  // ②⑨获取商城所有订单的收货人信息集合
  Index_getrecipients: WYY_HOST_URL + c + "/getrecipients",

  // ③〇根据订单号获取该订单收货人信息
  Index_getrecipientsbysn: WYY_HOST_URL + c + "/getrecipientsbysn",

  // ③①获取商城所有品牌列表
  Index_getpinpailist: WYY_HOST_URL + c + "/getpinpailist",

  // ③②根据品牌id获取品牌信息
  Index_getpinpaibyid: WYY_HOST_URL + c + "/getpinpaibyid",

  // ③③获取商城短信配置信息
  Index_getsmsconfig: WYY_HOST_URL + c + "/getsmsconfig",

  // ③④根据用户id获取用户信息
  Index_getuserinfo: WYY_HOST_URL + c + "/getuserinfo",

  // ③⑤获取商城所有用户信息列表
  Index_getuserlist: WYY_HOST_URL + c + "/getuserlist",

  // ③⑥获取分享设置列表
  Index_getshareconfig: WYY_HOST_URL + c + "/getshareconfig"

}