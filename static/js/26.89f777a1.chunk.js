(window["webpackJsonpjibon-bima-corporation"]=window["webpackJsonpjibon-bima-corporation"]||[]).push([[26],{1629:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(94),c=t.n(r),m=t(52),i=t(91),o=t(1620),s=t(97),u=t(1625),d=t(98),E=t(44),p=t(95),b=t.n(p),f=t(5),h=Array.from({length:300}).map((function(e){return{id:b.a.datatype.number(),first_name:"S-"+b.a.internet.userName(),last_name:"R-"+b.a.internet.userName(),role:"ADMIN",permission:"ADD, EDIT, UPDATE",email:b.a.internet.email()}}));Object(r.createTheme)("solarized",{text:{primary:"#268bd2",secondary:"#2aa198"},background:{default:"#191c24"},context:{background:"#cb4b16",text:"#FFFFFF"},divider:{default:"#073642"},action:{button:"rgba(0,0,0,.54)",hover:"rgba(0,0,0,.08)",disabled:"rgba(0,0,0,.12)"}},"dark");a.default=function(){var e=Object(f.g)().push,a=[{name:"First Name",selector:function(e){return e.first_name}},{name:"Last Name",selector:function(e){return e.last_name}},{name:"Role",selector:function(e){return e.role}},{name:"Email",selector:function(e){return e.email}},{name:"Permission",selector:function(e){return e.permission}},{name:"Status",cell:function(){return l.a.createElement("div",{class:"badge badge-outline-success"},"Approved")}},{cell:function(a){return l.a.createElement("div",null,l.a.createElement(m.a,{size:"small",onClick:function(a){e({pathname:"/users/edit"})}},l.a.createElement(E.a,null)),l.a.createElement(m.a,{variant:"danger",className:"ml-2",size:"small",onClick:function(e){}},l.a.createElement(E.c,null)),l.a.createElement(m.a,{variant:"secondary",className:"ml-2",size:"small",onClick:function(a){e({pathname:"/document-management"})}},l.a.createElement(E.b,null)))},margin:0,padding:0}];return l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement(i.a.Title,null,"User List"),l.a.createElement(i.a.Title,null,"Search User"),l.a.createElement(o.a,null,l.a.createElement(s.a,null,l.a.createElement(u.a,{className:"mb-3"},l.a.createElement(d.a,{placeholder:"Name",type:"text"}))),l.a.createElement(s.a,null,l.a.createElement(u.a,{className:"mb-3"},l.a.createElement(d.a,{placeholder:"Mobile Number",type:"text"}))),l.a.createElement(s.a,null,l.a.createElement(u.a,{className:"mb-3"},l.a.createElement(d.a,{placeholder:"Email",type:"text"}))),l.a.createElement(s.a,null,l.a.createElement(u.a,{className:"mb-3"},l.a.createElement(d.a,{placeholder:"Role",type:"text"}))),l.a.createElement(s.a,null,l.a.createElement(u.a,{className:"mb-3"},l.a.createElement(d.a,{placeholder:"Permission",type:"text"}))))),l.a.createElement(i.a.Body,null,l.a.createElement(c.a,{columns:a,data:h,theme:"solarized",pagination:!0,highlightOnHover:!0,pointerOnHover:!0})))}}}]);
//# sourceMappingURL=26.89f777a1.chunk.js.map