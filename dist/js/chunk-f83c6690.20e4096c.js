(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f83c6690"],{1799:function(t,e,c){"use strict";var r=c("7a23"),a={class:"pagination pagination-lg justify-content-center"},i=Object(r["h"])("i",{class:"bi bi-chevron-left"},null,-1),n=[i],o=["onClick"],s=Object(r["h"])("i",{class:"bi bi-chevron-right"},null,-1),l=[s];function u(t,e,c,i,s,u){return Object(r["A"])(),Object(r["g"])("nav",null,[Object(r["h"])("ul",a,[Object(r["h"])("li",{class:Object(r["r"])(["page-item",{disabled:1===c.pages.current_page}])},[Object(r["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(r["U"])((function(t){return u.updatePage(c.pages.current_page-1)}),["prevent"]))},n)],2),(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(c.pages.total_pages,(function(t){return Object(r["A"])(),Object(r["g"])("li",{class:Object(r["r"])(["page-item",{active:t===c.pages.current_page}]),key:t},[Object(r["h"])("a",{class:"page-link",href:"#",onClick:Object(r["U"])((function(e){return u.updatePage(t)}),["prevent"])},Object(r["K"])(t),9,o)],2)})),128)),Object(r["h"])("li",{class:Object(r["r"])(["page-item",{disabled:c.pages.current_page===c.pages.total_pages}])},[Object(r["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(r["U"])((function(t){return u.updatePage(c.pages.current_page+1)}),["prevent"]))},l)],2)])])}var d={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-pages",t)}}};d.render=u;e["a"]=d},"18a9":function(t,e,c){"use strict";c("caad"),c("2532");var r=c("7a23"),a={class:"prodCard"},i={key:0,class:"bi bi-star-fill"},n={key:1,class:"bi bi-star"},o=Object(r["h"])("hr",{class:"m-0"},null,-1),s={class:"prodCard-price"},l={class:"origin"},u={class:"mb-0 sale"},d={class:"prodCard-footer"},p={key:0,class:"spinner-border spinner-border-sm text-primary me-2",role:"status"},g=Object(r["h"])("span",{class:"visually-hidden"},"Loading...",-1),b=[g],h={key:1,class:"bi bi-cart-plus-fill"},f=Object(r["j"])("加入購物車");function j(t,e,c,g,j,O){return Object(r["A"])(),Object(r["g"])("div",a,[c.tag?(Object(r["A"])(),Object(r["g"])("div",{key:0,class:"prodCard-like",onClick:e[0]||(e[0]=function(t){return O.likeProd(c.prod)})},[c.likes.includes(c.prod.id)?(Object(r["A"])(),Object(r["g"])("i",i)):(Object(r["A"])(),Object(r["g"])("i",n))])):Object(r["f"])("",!0),Object(r["h"])("a",{class:"hover",href:"#",onClick:e[1]||(e[1]=Object(r["U"])((function(t){return O.getProduct(c.prod.id)}),["prevent"]))},[Object(r["h"])("div",{class:"prodCardImg",style:Object(r["s"])({"background-image":"url("+c.prod.imageUrl+")"})},null,4)]),Object(r["h"])("a",{href:"#",class:"h3 prodCard-title text-decoration-none",onClick:e[2]||(e[2]=Object(r["U"])((function(t){return O.getProduct(c.prod.id)}),["prevent"]))},Object(r["K"])(c.prod.title),1),o,Object(r["h"])("div",s,[Object(r["h"])("del",l,"NT$ "+Object(r["K"])(c.prod.origin_price),1),Object(r["h"])("p",u,"NT$ "+Object(r["K"])(c.prod.price),1)]),Object(r["h"])("div",d,[Object(r["h"])("a",{href:"#",class:Object(r["r"])(["btn btn-outline-primary border-0 py-3 w-100",{disabled:j.status.loadingItem===c.prod.id}]),onClick:e[3]||(e[3]=Object(r["U"])((function(t){return O.addCart(c.prod.id)}),["prevent"]))},[j.status.loadingItem===c.prod.id?(Object(r["A"])(),Object(r["g"])("div",p,b)):Object(r["f"])("",!0),j.status.loadingItem!==c.prod.id?(Object(r["A"])(),Object(r["g"])("i",h)):Object(r["f"])("",!0),f],2)])])}c("99af");var O={name:"ProdCard",props:["prod","likes","tag"],data:function(){return{status:{loadingItem:""}}},inject:["emitter"],methods:{getProduct:function(t){this.$router.push("/product/".concat(t))},addCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/cart");this.status.loadingItem=t;var r={product_id:t,qty:1};this.$http.post(c,{data:r}).then((function(t){e.$httpMessageState(t,"加入購物車"),e.status.loadingItem="",e.emitter.emit("updatecart")}))},likeProd:function(t){var e={id:t.id,title:t.title,imageUrl:t.imageUrl};this.$emit("like",e)}},created:function(){}};O.render=j;e["a"]=O},"1dde":function(t,e,c){var r=c("d039"),a=c("b622"),i=c("2d00"),n=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],c=e.constructor={};return c[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,c){"use strict";var r=c("23e7"),a=c("5a34"),i=c("1d80"),n=c("577e"),o=c("ab13");r({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~n(i(this)).indexOf(n(a(t)),arguments.length>1?arguments[1]:void 0)}})},"3e2b":function(t,e,c){"use strict";c.r(e);var r=c("7a23"),a=Object(r["h"])("div",{class:"loader-wrapper"},[Object(r["h"])("span",{class:"loader"})],-1),i=Object(r["h"])("section",null,[Object(r["h"])("div",{class:"container-fluid p-0"},[Object(r["h"])("div",{class:"landing bg-cover bg-center",style:{"background-image":"url(https://images.unsplash.com/photo-1603533496487-2248b49f337d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80)"}})])],-1),n={class:"container py-4"},o=Object(r["h"])("div",{class:"row justify-content-center"},[Object(r["h"])("div",{class:"col-md-10"},[Object(r["h"])("h2",{class:"text-center mb-0",style:{"letter-spacing":"1.5rem"}},"商品列表"),Object(r["h"])("hr")])],-1),s={class:"row g-0"},l={class:"nav justify-content-center mt-3 mb-5"},u={class:"nav-item order-last order-md-0"},d={class:"nav-item"},p={class:"nav-item"},g={class:"nav-item"},b={class:"nav-item"},h={class:"col-md-12 px-2"},f={class:"row g-4"};function j(t,e,c,j,O,v){var m=Object(r["H"])("Loading"),y=Object(r["H"])("ProdCard"),k=Object(r["H"])("Pagination");return Object(r["A"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(m,{active:O.isLoading},{default:Object(r["S"])((function(){return[a]})),_:1},8,["active"]),i,Object(r["h"])("div",n,[o,Object(r["h"])("div",s,[Object(r["h"])("ul",l,[Object(r["h"])("li",u,[Object(r["h"])("a",{class:Object(r["r"])(["nav-link categoryItem",{active:"all"===O.category}]),href:"#",onClick:e[0]||(e[0]=Object(r["U"])((function(t){return v.goToCategory("all")}),["prevent"]))},"全部",2)]),Object(r["h"])("li",d,[Object(r["h"])("a",{class:Object(r["r"])(["nav-link categoryItem",{active:"魚隻"===O.category}]),href:"#",onClick:e[1]||(e[1]=Object(r["U"])((function(t){return v.goToCategory("魚隻")}),["prevent"]))},"魚隻",2)]),Object(r["h"])("li",p,[Object(r["h"])("a",{class:Object(r["r"])(["nav-link categoryItem",{active:"造景"===O.category}]),href:"#",onClick:e[2]||(e[2]=Object(r["U"])((function(t){return v.goToCategory("造景")}),["prevent"]))},"造景",2)]),Object(r["h"])("li",g,[Object(r["h"])("a",{class:Object(r["r"])(["nav-link categoryItem",{active:"設備"===O.category}]),href:"#",onClick:e[3]||(e[3]=Object(r["U"])((function(t){return v.goToCategory("設備")}),["prevent"]))},"設備",2)]),Object(r["h"])("li",b,[Object(r["h"])("a",{class:Object(r["r"])(["nav-link categoryItem",{active:"套裝"===O.category}]),href:"#",onClick:e[4]||(e[4]=Object(r["U"])((function(t){return v.goToCategory("套裝")}),["prevent"]))},"套裝",2)])]),Object(r["h"])("div",h,[Object(r["h"])("div",f,[(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(O.products,(function(t){return Object(r["A"])(),Object(r["g"])("div",{class:"col-lg-3 col-md-6 mb-3",key:t.id},[Object(r["k"])(y,{prod:t,likes:O.likesId,tag:!0,onLike:v.updateLikes},null,8,["prod","likes","onLike"])])})),128))]),Object(r["k"])(k,{class:"mt-4",pages:O.pagination,onEmitPages:v.getProducts},null,8,["pages","onEmitPages"])])])])],64)}c("99af"),c("4de4"),c("fb6a"),c("caad"),c("2532"),c("d81d"),c("b0c0");var O=c("18a9"),v=c("1799"),m={components:{ProdCard:O["a"],Pagination:v["a"]},data:function(){return{category:"",pagination:{},products:[],isLoading:!1,likes:[],likesId:[]}},inject:["emitter"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/products/?page=").concat(e);"all"!==this.category&&(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/products/all")),this.$http.get(c).then((function(c){if("all"!==t.category){t.products=c.data.products.filter((function(e){return e.category===t.category}));var r=5,a=Math.ceil(t.products.length/r),i=(e-1)*r,n=e*r;t.products=t.products.slice(i,n),t.pagination={category:null,current_page:e,has_next:e<a,has_pre:1!==e,total_pages:a}}else t.products=c.data.products,t.pagination=c.data.pagination;t.isLoading=!1}))},getLikes:function(){var t=localStorage.getItem("likelist");this.likes=JSON.parse(t)},updateLikes:function(t){this.likesId.includes(t.id)?this.likes=this.likes.filter((function(e){return e.id!==t.id})):this.likes.push(t)},saveLocalStorage:function(t){var e=JSON.stringify(t);try{localStorage.setItem("likelist",e)}catch(c){return!1}},goToCategory:function(t){this.$router.push("/products/".concat(t))},messagePush:function(t,e){if(e.length>0){var c={data:{data:{},message:"最愛列表",success:!0}};t.length!==e.length?this.$httpMessageState(c,"從最愛列表移除"):this.$httpMessageState(c,"加入最愛列表")}}},watch:{likes:{handler:function(t,e){this.messagePush(t,e),this.saveLocalStorage(this.likes),this.likesId=this.likes.map((function(t){return t.id}))},deep:!0},category:function(t){this.getProducts()},$route:function(t,e){"products"===this.$route.name&&(this.category=this.$route.params.category,this.getProducts())}},created:function(){this.emitter.on("updatelike",this.getLikes),this.category=this.$route.params.category,this.getLikes()}};m.render=j;e["default"]=m},"44e7":function(t,e,c){var r=c("861d"),a=c("c6b6"),i=c("b622"),n=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==a(t))}},"4de4":function(t,e,c){"use strict";var r=c("23e7"),a=c("b727").filter,i=c("1dde"),n=i("filter");r({target:"Array",proto:!0,forced:!n},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,c){var r=c("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},8418:function(t,e,c){"use strict";var r=c("a04b"),a=c("9bf2"),i=c("5c6c");t.exports=function(t,e,c){var n=r(e);n in t?a.f(t,n,i(0,c)):t[n]=c}},"99af":function(t,e,c){"use strict";var r=c("23e7"),a=c("d039"),i=c("e8b5"),n=c("861d"),o=c("7b0b"),s=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),p=c("b622"),g=c("2d00"),b=p("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",j=g>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),O=d("concat"),v=function(t){if(!n(t))return!1;var e=t[b];return void 0!==e?!!e:i(t)},m=!j||!O;r({target:"Array",proto:!0,forced:m},{concat:function(t){var e,c,r,a,i,n=o(this),d=u(n,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?n:arguments[e],v(i)){if(a=s(i.length),p+a>h)throw TypeError(f);for(c=0;c<a;c++,p++)c in i&&l(d,p,i[c])}else{if(p>=h)throw TypeError(f);l(d,p++,i)}return d.length=p,d}})},ab13:function(t,e,c){var r=c("b622"),a=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(c){try{return e[a]=!1,"/./"[t](e)}catch(r){}}return!1}},b0c0:function(t,e,c){var r=c("83ab"),a=c("9bf2").f,i=Function.prototype,n=i.toString,o=/^\s*function ([^ (]*)/,s="name";r&&!(s in i)&&a(i,s,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})},caad:function(t,e,c){"use strict";var r=c("23e7"),a=c("4d64").includes,i=c("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d81d:function(t,e,c){"use strict";var r=c("23e7"),a=c("b727").map,i=c("1dde"),n=i("map");r({target:"Array",proto:!0,forced:!n},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,e,c){"use strict";var r=c("23e7"),a=c("861d"),i=c("e8b5"),n=c("23cb"),o=c("50c4"),s=c("fc6a"),l=c("8418"),u=c("b622"),d=c("1dde"),p=d("slice"),g=u("species"),b=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var c,r,u,d=s(this),p=o(d.length),f=n(t,p),j=n(void 0===e?p:e,p);if(i(d)&&(c=d.constructor,"function"!=typeof c||c!==Array&&!i(c.prototype)?a(c)&&(c=c[g],null===c&&(c=void 0)):c=void 0,c===Array||void 0===c))return b.call(d,f,j);for(r=new(void 0===c?Array:c)(h(j-f,0)),u=0;f<j;f++,u++)f in d&&l(r,u,d[f]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-f83c6690.20e4096c.js.map