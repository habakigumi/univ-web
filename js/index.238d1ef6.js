(function(t){function e(e){for(var n,r,c=e[0],l=e[1],o=e[2],f=0,v=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,o||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var l=i[c];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={index:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1031:function(t,e,i){},1158:function(t,e,i){},"30c4":function(t,e,i){},"4dc5":function(t,e,i){"use strict";var n=i("1158"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("main",{staticClass:"container"},[i("Top"),i("About"),i("Characters"),i("Members"),i("Activities"),i("Links")],1),i("Footer")],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[t._m(0),i("nav",[i("div",{ref:"menu",staticClass:"menu"},[i("ul",[i("li",[i("a",{staticClass:"text_sub",attrs:{href:"#about"},on:{click:t.toggleMenu}},[t._v("About")])]),i("li",[i("a",{staticClass:"text_sub",attrs:{href:"#characters"},on:{click:t.toggleMenu}},[t._v("Character")])]),i("li",[i("a",{staticClass:"text_sub",attrs:{href:"#members"},on:{click:t.toggleMenu}},[t._v("Member")])]),i("li",[i("a",{staticClass:"text_sub",attrs:{href:"#activities"},on:{click:t.toggleMenu}},[t._v("Activities")])]),i("li",[i("a",{staticClass:"text_sub",attrs:{href:"#links"},on:{click:t.toggleMenu}},[t._v("Link")])])])]),i("div",{ref:"hamburgerIcon",staticClass:"hamburger-icon",on:{click:t.toggleMenu}},[i("span"),i("span"),i("span")])])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project_name"},[i("h1",{staticClass:"text_sub"},[t._v("藤原プロジェクト2020")])])}],l={methods:{toggleMenu:function(){window.innerWidth>979||(this.$refs.menu.classList.toggle("hamburger-open"),this.$refs.hamburgerIcon.classList.toggle("close"))}}},o=l,u=(i("a885"),i("2877")),f=Object(u["a"])(o,r,c,!1,null,"5f3a3912",null),v=f.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top"})},m=[],p={name:"Top"},d=p,h=Object(u["a"])(d,_,m,!1,null,"d45c0814",null),b=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about",attrs:{id:"about"}},[n("h2",{staticClass:"heading_main"},[n("span",{staticClass:"heading__main-text"},[t._v("About")])]),n("div",{staticClass:"about-container"},[n("img",{attrs:{src:i("cf05"),alt:"logo"}}),n("div",{staticClass:"sentence-outer"},[n("div",{staticClass:"sentence"},[n("h3",{staticClass:"text_sub"},[t._v("プロジェクトについて")]),n("p",{staticClass:"text_black"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),t._v("Fermentum in at curabitur dolor, metus, purus nulla "),n("br"),t._v(" faucibus. Eu sit ultrices vulputate velit, habitant "),n("br"),t._v(" faucibus tortor cras. Eu sed iaculis et potenti aliquam "),n("br"),t._v(" dictum. Sed risus imperdiet eu leo sed. ")])])])])])}],y=(i("e958"),{}),x=Object(u["a"])(y,g,C,!1,null,"50c68718",null),j=x.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"characters",attrs:{id:"characters"}},[i("h2",{staticClass:"heading_main"},[i("span",{staticClass:"heading__main-text"},[t._v("Character")])])])}],$={},k=$,M=Object(u["a"])(k,E,O,!1,null,"45429138",null),w=M.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"members",attrs:{id:"members"}},[i("h2",{staticClass:"heading_main"},[i("span",{staticClass:"heading__main-text"},[t._v("Members")])])])}],P={},T=P,S=Object(u["a"])(T,A,L,!1,null,"da485176",null),F=S.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activities",attrs:{id:"activities"}},[t._m(0),i("div",{staticClass:"activities__timeline"},t._l(t.convertedActivities,(function(e,n){return i("div",{key:"time-"+n,staticClass:"activities__activity",class:t.activityClass(e.type,n)},[i("div",{staticClass:"activities__time",class:"activities__time_"+e.type},[t._v(t._s(e.time))]),i("div",{staticClass:"activities__activity-content",class:t.activityContentClass(e.type),domProps:{innerHTML:t._s(e.content)}})])})),0)])},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"heading_main"},[i("span",{staticClass:"heading__main-text"},[t._v("Activities")])])}],J=(i("4160"),i("a15b"),i("159b"),[{year:"2020",activities:[{month:"01",content:"プロジェクトとしての活動を開始。"},{month:"04",content:"授業として正式にプロジェクトを開始。"}]}]),R={data:function(){return{activities:J}},computed:{convertedActivities:function(){var t=[];return this.activities.forEach((function(e){t.push({time:e.year,content:"",type:"year"}),e.activities.forEach((function(e){t.push({time:e.month,content:e.content,type:"month"})}))})),t}},methods:{activityClass:function(t,e){var i=[];return"year"===t&&i.push("activities__activity_year"),0===e&&i.push("activities__activity_first"),i.join(" ")},activityContentClass:function(t){if("year"===t)return"activities__activity-content_none"}}},q=R,W=(i("4dc5"),Object(u["a"])(q,H,I,!1,null,"a7b9ccfe",null)),z=W.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"links",attrs:{id:"links"}},[i("h2",{staticClass:"heading_main"},[i("span",{staticClass:"heading__main-text"},[t._v("Link")])])])}],G={},K=G,N=Object(u["a"])(K,B,D,!1,null,"7d270f40",null),Q=N.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("hr"),i("p",[t._v("©2020 藤原プロジェクト All Rights Reserved")])])}],X=(i("f2b7"),{}),Y=Object(u["a"])(X,U,V,!1,null,"1624f366",null),Z=Y.exports,tt={components:{Header:v,Top:b,About:j,Characters:w,Members:F,Activities:z,Links:Q,Footer:Z}},et=tt,it=(i("5c0b"),Object(u["a"])(et,s,a,!1,null,null,null)),nt=it.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(nt)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"6f9b":function(t,e,i){},"9c0c":function(t,e,i){},a885:function(t,e,i){"use strict";var n=i("30c4"),s=i.n(n);s.a},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},e958:function(t,e,i){"use strict";var n=i("6f9b"),s=i.n(n);s.a},f2b7:function(t,e,i){"use strict";var n=i("1031"),s=i.n(n);s.a}});
//# sourceMappingURL=index.238d1ef6.js.map