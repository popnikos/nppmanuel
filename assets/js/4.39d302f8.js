(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(t,n,e){},163:function(t,n,e){"use strict";var r=e(159);e.n(r).a},282:function(t,n,e){"use strict";e.r(n);e(28),e(79),e(78),e(49),e(27);var r={props:{match:{default:"",type:String},sort:{default:null,type:String},useRootIndex:{default:!1,type:Boolean}},computed:{pages:function(){var t=this;console.log(this);var n=this.$site.pages.filter(function(n){return n.path.match(t.match)});return this.sort?n.sort(function(n,e){return(n=n.frontmatter&&n.frontmatter[t.sort]?n.frontmatter[t.sort]:9999)<(e=e.frontmatter&&e.frontmatter[t.sort]?e.frontmatter[t.sort]:9999)?-1:n>e?1:0}):n},initialDepth:function(){return this.match?this.match.split("/").length-1:2}},methods:{depth:function(t){return(t=this.useRootIndex?t.replace(/(.)\/$/,"$1"):t).split("/").length-this.initialDepth}}},s=(e(163),e(0)),a=Object(s.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"pages-list"},t._l(t.pages,function(n){return e("li",[t._v("\n    "+t._s("—".repeat(t.depth(n.path)))+" \n    "),e("router-link",{staticClass:"sidebar-link",attrs:{to:n.path}},[t._v("\n        "+t._s(n.title)+"\n    ")])],1)}))},[],!1,null,null,null);n.default=a.exports}}]);