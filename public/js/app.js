(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,a,s){s("bUC5"),t.exports=s("zWCp")},"77x1":function(t,a,s){"use strict";s.d(a,"a",(function(){return e})),s.d(a,"b",(function(){return i}));var n=s("wd/R"),r=s.n(n);function e(t){var a=r()(),s=r()().subtract(1,"day"),n=r()(t);return n.isSame(a,"day")?"Today":n.isSame(s,"day")?"Yesterday":n.format("ddd, D MMMM")}function i(t){var a=r()(t).local();return a.format("D MMMM, YYYY")+" at "+a.format("h:mm A")}},"90EV":function(t,a,s){"use strict";var n=s("w48C"),r=s.n(n),e=s("cWtb"),i={data:function(){return{flatPickrConfig:{enableTime:!0,altInput:!0,altFormat:"j M, Y \\a\\t G:i K"},money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1}}},props:["action","transaction","errorBag"],components:{FlatPickr:r.a,Money:e.Money}},o=s("KHd+"),l=Object(o.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-2-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"label-"+t.action+"-"+t.transaction.id}},[t._v("Label")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.label,expression:"transaction.label"}],staticClass:"uk-input uk-form-large",class:{"uk-form-danger":t.errorBag&&t.errorBag.data.errors.label},attrs:{type:"text",id:"label-"+t.action+"-"+t.transaction.id,required:""},domProps:{value:t.transaction.label},on:{input:function(a){a.target.composing||t.$set(t.transaction,"label",a.target.value)}}})]),t._v(" "),s("div",{staticClass:"uk-width-2-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"date-"+t.action+"-"+t.transaction.id}},[t._v("Date")]),t._v(" "),s("flat-pickr",{staticClass:"uk-input uk-form-large",class:{"uk-form-danger":t.errorBag&&t.errorBag.data.errors.date},attrs:{config:t.flatPickrConfig,id:"date-"+t.action+"-"+t.transaction.id,required:""},model:{value:t.transaction.date,callback:function(a){t.$set(t.transaction,"date",a)},expression:"transaction.date"}})],1),t._v(" "),s("div",{staticClass:"uk-width-1-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"amount-"+t.action+"-"+t.transaction.id}},[t._v("Amount")]),t._v(" "),s("money",t._b({staticClass:"uk-input uk-form-large",class:{"uk-form-danger":t.errorBag&&t.errorBag.data.errors.amount},attrs:{id:"amount-"+t.action+"-"+t.transaction.id,required:""},model:{value:t.transaction.amount,callback:function(a){t.$set(t.transaction,"amount",a)},expression:"transaction.amount"}},"money",t.money,!1))],1)])}),[],!1,null,null,null);a.a=l.exports},"9Wh1":function(t,a,s){"use strict";(function(t,a){var n=s("Jjxz"),r=s.n(n),e=s("vDqi"),i=s.n(e),o=s("XuX8"),l=s.n(o),u=s("L2JU"),c=s("p/7L"),d=s.n(c),m=s("vCZw"),v=s("77x1");try{window.$=window.jQuery=t}catch(t){}var p="".concat(location.protocol,"//").concat(location.hostname);location.port&&(p=p+":"+location.port),i.a.defaults.baseURL="".concat(p,"/api"),l.a.use(u.a),l.a.use(d.a,i.a),l.a.use(m.a,{status:"success",pos:"top-center",timeout:5e3}),a.use(r.a),l.a.filter("groupDate",v.a),l.a.filter("transactionDate",v.b)}).call(this,s("EVdn"),s("gyNX"))},RnhZ:function(t,a,s){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function r(t){var a=e(t);return s(a)}function e(t){if(!s.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=e,t.exports=r,r.id="RnhZ"},SsXn:function(t,a,s){"use strict";a.a={methods:{prettyFormat:function(t){var a=Math.sign(t),s=0===a||1===a,n=parseFloat(t.toString().replace("-","")).toFixed(2).split("."),r=n[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),e="<span>".concat(n[1],"</span>");return{value:"$".concat(r,".").concat(e),sign:s?"positive":"negative"}}}}},bUC5:function(t,a,s){"use strict";s.r(a);s("9Wh1");var n=s("XuX8"),r=s.n(n),e={},i=s("KHd+"),o=Object(i.a)(e,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"uk-navbar-container",attrs:{"uk-navbar":""}},[a("div",{staticClass:"uk-navbar-left"},[a("a",{staticClass:"uk-navbar-item uk-logo",attrs:{href:"/"}},[a("img",{attrs:{src:"/img/logo.svg",alt:"YourBalance"}}),this._v(" "),a("span",[this._v("Your")]),this._v("Balance\n    ")])]),this._v(" "),a("div",{staticClass:"uk-navbar-right"},[a("div",{staticClass:"uk-navbar-item"},[a("a",{staticClass:"notifications",attrs:{href:"#"}},[a("img",{attrs:{src:"/img/alarm.svg",alt:"Notifications"}})]),this._v(" "),a("a",{staticClass:"user",attrs:{href:"#"}},[a("img",{staticClass:"uk-img-rounded",attrs:{src:"/img/avatar.png",alt:"User Name"}}),this._v(" "),a("span",[this._v("Molly Green")])])])])])}],!1,null,null,null).exports,l=s("h5KG").a,u=Object(i.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"uk-modal-container",attrs:{id:"modal-add-transaction","uk-modal":"container: .balance-menu"}},[s("div",{staticClass:"uk-modal-dialog"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.submitTransaction(a)}}},[t._m(0),t._v(" "),s("div",{staticClass:"uk-modal-body"},[s("transaction-form",{attrs:{action:"add",transaction:t.transaction,"error-bag":t.errorBag}}),t._v(" "),s("form-errors",{attrs:{"error-bag":t.errorBag}})],1),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-modal-header"},[a("h6",{staticClass:"uk-modal-title"},[this._v("Add Balance Entry")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-modal-footer"},[a("div",{staticClass:"uk-button-group uk-flex uk-flex-right"},[a("button",{staticClass:"uk-button uk-button-large uk-button-light-blue uk-modal-close",attrs:{type:"button"}},[this._v("Cancel")]),this._v(" "),a("button",{staticClass:"uk-button uk-button-large uk-button-primary uk-margin-left",attrs:{type:"submit"}},[this._v("Save Entry")])])])}],!1,null,null,null).exports,c=s("kfmF").a,d=Object(i.a)(c,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"uk-modal-container",attrs:{id:"modal-import-transactions","uk-modal":"container: .balance-menu"}},[s("div",{staticClass:"uk-modal-dialog"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.importTransactions(a)}}},[t._m(0),t._v(" "),s("div",{staticClass:"uk-modal-body"},[s("div",{staticClass:"uk-margin"},[s("div",{staticClass:"file-input-box",attrs:{"uk-form-custom":""}},[s("span",{domProps:{textContent:t._s(t.fileName)}}),t._v(" "),t.status?s("input",{attrs:{type:"file"},on:{change:t.attachFile}}):t._e(),t._v(" "),s("span",{staticClass:"uk-link"},[t._v("Select File")])])]),t._v(" "),s("form-errors",{attrs:{"error-bag":t.errorBag}})],1),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-modal-header"},[a("h6",{staticClass:"uk-modal-title"},[this._v("Import Balance Entries")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-modal-footer"},[a("div",{staticClass:"uk-button-group uk-flex uk-flex-right"},[a("button",{staticClass:"uk-button uk-button-large uk-button-light-blue uk-modal-close",attrs:{type:"button"}},[this._v("Cancel")]),this._v(" "),a("button",{staticClass:"uk-button uk-button-large uk-button-primary uk-margin-left",attrs:{type:"submit"}},[this._v("Import")])])])}],!1,null,null,null).exports,m=s("SsXn"),v={data:function(){return{disabled:!1}},watch:{importing:function(t){this.disabled=t}},props:["totalBalance","importing"],components:{AddTransaction:u,ImportTransactions:d},mixins:[m.a],methods:{disableActions:function(){this.disabled=!0}}},p=Object(i.a)(v,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"balance-menu uk-background-secondary uk-section-small"},[s("div",{staticClass:"uk-container"},[s("div",{staticClass:"uk-flex-middle",attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-expand@s uk-width-1-1 balance-actions"},[s("div",{staticClass:"uk-flex uk-flex-middle"},[s("p",[t._v("Your Balance")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-primary add-button",attrs:{disabled:t.disabled,"uk-toggle":"target: #modal-add-transaction"}},[s("img",{attrs:{src:"/img/add.svg"}}),t._v("\n            Add Entry\n          ")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-primary import-button",attrs:{disabled:t.disabled,"uk-toggle":"target: #modal-import-transactions"}},[s("img",{attrs:{src:"/img/import.svg"}}),t._v("\n            Import CSV\n          ")])])]),t._v(" "),s("div",{staticClass:"uk-width-auto@s uk-width-1-1 balance-details"},[s("small",[t._v("TOTAL BALANCE")]),t._v(" "),s("p",{staticClass:"balance",class:t.prettyFormat(t.totalBalance).sign,domProps:{innerHTML:t._s(t.prettyFormat(t.totalBalance).value)}})])])]),t._v(" "),s("add-transaction",t._g({},t.$listeners)),t._v(" "),s("import-transactions",t._g({on:{"transaction-import":t.disableActions}},t.$listeners))],1)}),[],!1,null,null,null).exports,f=s("x+qU").a,h=Object(i.a)(f,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"transaction uk-border-rounded uk-margin-bottom"},[s("section",{staticClass:"transaction--details"},[s("div",{staticClass:"uk-flex-middle uk-flex-between",attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-expand@s uk-width-1-1"},[s("p",{staticClass:"name",domProps:{textContent:t._s(t.transaction.label)}}),t._v(" "),s("span",{staticClass:"date"},[t._v(t._s(t._f("transactionDate")(t.transaction.date)))])]),t._v(" "),s("div",{staticClass:"uk-width-small@s uk-width-1-1 invisible"},[s("ul",{staticClass:"uk-subnav"},[s("li",[s("a",{on:{click:t.editTransaction}},[t._v("EDIT")])]),t._v(" "),s("li",[s("a",{on:{click:t.deleteTransaction}},[t._v("DELETE")])])])]),t._v(" "),s("div",{staticClass:"uk-width-auto@s uk-width-1-1"},[s("span",{staticClass:"amount",class:t.prettyFormat(t.transaction.amount).sign,domProps:{innerHTML:t._s(t.prettyFormat(t.transaction.amount).value)}})])])]),t._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}],staticClass:"transaction--edit"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.updateTransaction(a)}}},[s("section",{staticClass:"uk-section uk-section-small"},[t.edit?s("transaction-form",{attrs:{action:"update",transaction:t.transaction,"error-bag":t.errorBag}}):t._e(),t._v(" "),s("form-errors",{attrs:{"error-bag":t.errorBag}})],1),t._v(" "),s("footer",{staticClass:"uk-section uk-section-small"},[s("div",{staticClass:"uk-flex uk-flex-right"},[s("button",{staticClass:"uk-button uk-button-large uk-button-light-blue",attrs:{type:"button"},on:{click:t.editTransaction}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-large uk-button-primary",attrs:{type:"submit"}},[t._v("Update Entry")])])])])])])}),[],!1,null,null,null).exports,g={props:["groups"],mixins:[m.a],computed:{hasTransactions:function(){var t,a;return null===(t=this.groups)||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.total},currentPage:function(){var t,a;return(null===(t=this.groups)||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.current_page)||1},onFirstPage:function(){return 1===this.currentPage},hasMorePages:function(){var t,a;return this.currentPage<(null===(t=this.groups)||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.last_page)||1},loading:function(){return!this.groups.hasOwnProperty("data")}},components:{Transaction:h},methods:{paginate:function(t){this.$emit("paginate-list",{page:this.currentPage-1})}}},k={data:function(){return{totalBalance:0,statusCheck:{},importing:{status:!1},groups:{}}},components:{NavBar:o,BalanceMenu:p,TransactionList:Object(i.a)(g,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"transaction-list uk-section"},[s("div",{staticClass:"uk-container"},[t.hasTransactions?s("div",{staticClass:"uk-child-width-1-1 uk-animation-fade",attrs:{"uk-grid":""}},[t._l(t.groups.data,(function(a,n){return s("section",{key:n,staticClass:"transaction-group"},[s("header",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-margin-bottom"},[s("span",{staticClass:"date"},[t._v("\n            "+t._s(t._f("groupDate")(n))+"\n          ")]),t._v(" "),s("span",{staticClass:"balance",class:t.prettyFormat(a.balance).sign,domProps:{innerHTML:t._s(t.prettyFormat(a.balance).value)}})]),t._v(" "),s("section",t._l(a.transactions,(function(a){return s("transaction",t._g({key:a.id,attrs:{transaction:a}},t.$listeners))})),1)])})),t._v(" "),t.groups.meta.last_page>1?s("section",{staticClass:"uk-flex uk-flex-center uk-flex-middle pagination"},[s("button",{staticClass:"uk-button uk-button-small uk-button-default",attrs:{disabled:t.onFirstPage},on:{click:function(a){return t.paginate(t.currentPage-1)}}},[s("span",{attrs:{"uk-icon":"chevron-left"}}),t._v("Prev\n        ")]),t._v(" "),s("span",{staticClass:"page-no"},[t._v("Page "+t._s(t.groups.meta.current_page))]),t._v(" "),s("button",{staticClass:"uk-button uk-button-small uk-button-default",attrs:{disabled:!t.hasMorePages},on:{click:function(a){return t.paginate(t.currentPage+1)}}},[t._v("\n          Next"),s("span",{attrs:{"uk-icon":"chevron-right"}})])]):t._e()],2):t._e(),t._v(" "),t.hasTransactions||t.loading?t._e():s("div",{staticClass:"uk-child-width-1-1",attrs:{"uk-grid":""}},[t._m(0)]),t._v(" "),t.loading?s("div",{staticClass:"uk-child-width-1-1",attrs:{"uk-grid":""}},[t._m(1)]):t._e()])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"uk-flex-center uk-child-width-1-2",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-alert-primary uk-border-radius uk-text-center",attrs:{"uk-alert":""}},[a("p",[this._v("No Entries Found")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"uk-flex-center uk-child-width-1-2",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-alert-primary uk-border-radius uk-text-center",attrs:{"uk-alert":""}},[a("div",{staticClass:"uk-flex uk-flex-middle uk-flex-center"},[a("div",{staticClass:"uk-margin-left spinner blue"})])])])])}],!1,null,null,null).exports},watch:{"importing.status":function(t){var a=this;!0===t?this.statusCheck=setInterval((function(){a.getImportStatus()}),3e3):(this.$notify({message:"Transactions were imported!"}),clearInterval(this.statusCheck),this.groups={},this.refreshDashboard())}},methods:{getDashboardData:function(){var t=this;this.$http.get("dashboard").then((function(a){var s=a.data;t.totalBalance=parseFloat(s.total_balance),t.importing.status=s.import_status}))},getTransactions:function(){var t,a,s=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(null===(t=this.groups)||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.current_page)||1;this.groups={},this.$http.get("transactions",{params:{page:n}}).then((function(t){var a=t.data;s.groups=a}))},refreshDashboard:function(){this.getDashboardData(),this.getTransactions()},transactionsImporting:function(t){this.importing={status:!0,rows:t.rows}},getImportStatus:function(){var t=this;this.$http.get("/import-status").then((function(a){var s=a.data;t.importing.status=s.import_status}))},paginateList:function(t){this.getTransactions(t.page)}},created:function(){this.refreshDashboard()}},b=Object(i.a)(k,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav-bar"),t._v(" "),s("balance-menu",{attrs:{"total-balance":t.totalBalance,importing:t.importing.status},on:{"transaction-added":t.getDashboardData,"transaction-import":t.transactionsImporting}}),t._v(" "),t.importing.status?s("section",{staticClass:"uk-section uk-section-small uk-padding-remove-bottom"},[s("div",{staticClass:"uk-container"},[s("div",{attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-1-1"},[s("div",{staticClass:"uk-alert-warning",attrs:{"uk-alert":""}},[s("div",{staticClass:"uk-flex uk-flex-center uk-flex-middle"},[s("span",{staticClass:"uk-margin-small-right spinner"}),t._v("\n              We're importing "+t._s(t.importing.rows)+" balance entries. Sit tight.\n            ")])])])])])]):t._e(),t._v(" "),s("transaction-list",{attrs:{groups:t.groups},on:{"transaction-deleted":t.getDashboardData,"transaction-edited":t.getDashboardData,"paginate-list":t.paginateList}})],1)}),[],!1,null,null,null).exports;new r.a({render:function(t){return t(b)}}).$mount("#app")},h5KG:function(t,a,s){"use strict";(function(t){var n=s("uU4Q"),r=s("90EV");a.a={data:function(){return{errorBag:null,transaction:{label:null,date:null,amount:0}}},components:{FormErrors:n.a,TransactionForm:r.a},methods:{submitTransaction:function(){var t=this;this.$http.post("transactions",this.transaction).then((function(a){var s=a.data;t.errorBag=null,t.$emit("transaction-added",{data:s.transaction}),t.$notify({message:"Transaction was added!"})})).catch((function(a){var s=a.response;t.errorBag=s}))}},mounted:function(){var a=this;t.util.on(this.$el,"hidden",(function(){a.errorBag=null,a.transaction={label:null,date:null,amount:0}}))}}}).call(this,s("gyNX"))},kfmF:function(t,a,s){"use strict";(function(t){var n=s("uU4Q");a.a={data:function(){return{status:!1,errorBag:null,fileName:"No File Selected",file:0}},components:{FormErrors:n.a},methods:{importTransactions:function(){var a=this,s=new FormData;s.append("import",this.file),this.$http.post("import",s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(s){var n=s.data;t.modal("#modal-import-transactions").hide(),a.$emit("transaction-import",{rows:n.rows})})).catch((function(t){var s=t.response;a.errorBag=s}))},attachFile:function(t){var a=t.target.files[0];this.fileName=a.name,this.file=a}},mounted:function(){var a=this;t.util.on(this.$el,"hidden",(function(){a.errorBag=null,a.fileName="No File Selected",a.file=0,a.status=!1})),t.util.on(this.$el,"beforeshow",(function(){a.status=!0}))}}}).call(this,s("gyNX"))},uU4Q:function(t,a,s){"use strict";var n={props:["errorBag"],updated:function(){this.errorBag&&this.errorBag.status>=500&&(this.errorBag.data.message="Something happened on the server: Error ".concat(this.errorBag.status))}},r=s("KHd+"),e=Object(r.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.errorBag?s("div",{attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-1-1"},[s("div",{staticClass:"uk-alert uk-alert-danger"},[t.errorBag.data.errors?s("ul",{staticClass:"uk-list"},t._l(t.errorBag.data.errors,(function(a,n){return s("li",{key:n,domProps:{textContent:t._s(a[0])}})})),0):s("span",{domProps:{textContent:t._s(t.errorBag.data.message)}})])])]):t._e()}),[],!1,null,null,null);a.a=e.exports},vCZw:function(t,a,s){"use strict";(function(t){function s(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,n)}return s}function n(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function r(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}a.a={install:function(a,s){a.prototype.$notify=function(a){var r=n(n({},s),a);t.notification(r)}}}}).call(this,s("gyNX"))},"x+qU":function(t,a,s){"use strict";(function(t){var n=s("uU4Q"),r=s("90EV"),e=s("SsXn");a.a={data:function(){return{edit:!1,errorBag:null}},mixins:[e.a],props:{transaction:{type:Object}},components:{FormErrors:n.a,TransactionForm:r.a},methods:{editTransaction:function(){this.edit=!this.edit},updateTransaction:function(){var t=this;this.$http.put("transactions/".concat(this.transaction.id),this.transaction).then((function(a){var s=a.data;t.$emit("transaction-edited",{transaction:s.transaction}),t.$notify({message:"Transaction was updated!"}),t.edit=!1})).catch((function(a){var s=a.response;t.errorBag=s}))},deleteTransaction:function(){var a=this;t.modal.confirm("Are you sure you want to delete this transaction?").then((function(){a.$http.delete("transactions/".concat(a.transaction.id)).then((function(t){var s=t.data;a.$emit("transaction-deleted",{transaction:s.transaction}),a.$notify({message:"Transaction was deleted!"})}))}),(function(){}))}}}}).call(this,s("gyNX"))},zWCp:function(t,a){}},[[0,1,2]]]);
//# sourceMappingURL=app.js.map