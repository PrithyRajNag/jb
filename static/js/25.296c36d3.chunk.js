(window["webpackJsonpjibon-bima-corporation"]=window["webpackJsonpjibon-bima-corporation"]||[]).push([[25],{1638:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),r=n(94),c=n.n(r),o=n(52),i=n(91),m=n(1620),u=n(97),s=n(1625),d=n(98),b=n(44),p=n(95),f=n.n(p),g=n(5);f.a.seed(123);var h=Array.from({length:300}).map((function(e){return{id:f.a.datatype.number(),name:"S-"+f.a.internet.userName(),shelf_no:"R-"+f.a.random.alphaNumeric(),location:f.a.address.city(),rack:f.a.datatype.number()}}));Object(r.createTheme)("solarized",{text:{primary:"#268bd2",secondary:"#2aa198"},background:{default:"#191c24"},context:{background:"#cb4b16",text:"#FFFFFF"},divider:{default:"#073642"},action:{button:"rgba(0,0,0,.54)",hover:"rgba(0,0,0,.08)",disabled:"rgba(0,0,0,.12)"}},"dark");a.default=function(){var e=Object(g.g)().push,a=[{name:"Name",selector:function(e){return e.name}},{name:"Shelf No",selector:function(e){return e.shelf_no}},{name:"Location",selector:function(e){return e.location}},{name:"Total Rack",selector:function(e){return e.rack}},{name:"Status",cell:function(){return f.a.datatype.boolean()?l.a.createElement("div",{class:"badge badge-outline-danger"},"Full"):l.a.createElement("div",{class:"badge badge-outline-success"},"Not Full")}},{cell:function(a){return l.a.createElement("div",null,l.a.createElement(o.a,{size:"small",onClick:function(a){e({pathname:"/users/edit"})}},l.a.createElement(b.a,null)),l.a.createElement(o.a,{variant:"danger",className:"ml-2",size:"small",onClick:function(e){}},l.a.createElement(b.c,null)),l.a.createElement(o.a,{variant:"secondary",className:"ml-2",size:"small",onClick:function(a){e({pathname:"/document-management"})}},l.a.createElement(b.b,null)))},margin:0,padding:0}];return l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement(i.a.Title,null,"Shelf List"),l.a.createElement(m.a,null,l.a.createElement(u.a,{xs:6},l.a.createElement(s.a,{className:"mb-3"},l.a.createElement(d.a,{placeholder:"Search with Rack Name",type:"text"}))))),l.a.createElement(i.a.Body,null,l.a.createElement(c.a,{columns:a,data:h,theme:"solarized",pagination:!0,highlightOnHover:!0,pointerOnHover:!0})))}}}]);
//# sourceMappingURL=25.296c36d3.chunk.js.map