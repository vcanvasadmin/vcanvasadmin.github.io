(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d32fca0c"],{"0a09":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"admin"}},[n("Menu"),n("div",{staticClass:"admin-main"},[n("router-view",{staticStyle:{width:"100%",height:"94%","background-color":"#fff"}})],1)],1)},s=[],r=(n("96cf"),n("1da1")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu",staticStyle:{width:"300px",height:"99vh"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){return t.$router.push("/admin/view")}}},[n("i",{staticClass:"el-icon-view"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("访客信息")])]),n("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.$router.push("/admin/user")}}},[n("i",{staticClass:"el-icon-s-custom"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("用户信息")])]),n("el-menu-item",{attrs:{index:"3"},on:{click:function(e){return t.$router.push("/admin/record")}}},[n("i",{staticClass:"el-icon-time"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("保存记录")])]),n("el-menu-item",{attrs:{index:"4"},on:{click:function(e){return t.$router.push("/admin/notice")}}},[n("i",{staticClass:"el-icon-setting"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("公告管理")])])],1)],1)},c=[],o={methods:{},mounted:function(){}},l=o,u=n("2877"),m=Object(u["a"])(l,a,c,!1,null,null,null),d=m.exports,h={components:{Menu:d},methods:{checkPermission:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,CheckPermissionAPI({email:localStorage.getItem("usermail")});case 2:e=t.sent,"管理员"!=e.data.permission&&(this.$message.error("当前用户无权限"),this.$router.push("/index"));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){}},f=h,p=(n("51e4"),Object(u["a"])(f,i,s,!1,null,null,null));e["default"]=p.exports},"362e":function(t,e,n){},"51e4":function(t,e,n){"use strict";n("362e")}}]);
//# sourceMappingURL=chunk-d32fca0c.628483ec.js.map