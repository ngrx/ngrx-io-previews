(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"AU+R":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{constructor(l){this.eventService=l,this.upcomingEvents$=this.eventService.upcomingEvents$,this.pastEvents$=this.eventService.pastEvents$}}class a{constructor(){this.customElementComponent=e}}class s{transform(l,n){if(null===l)return[];switch(n){case"ascending":return l.sort((l,n)=>+(l.startDate||l.endDate)-+(n.startDate||n.endDate));case"descending":return l.sort((l,n)=>+(n.startDate||n.endDate)-+(l.startDate||l.endDate))}}}class i{transform(l){const n=l.startDate,u=l.endDate;return n&&n.getTime()!==u.getTime()?r(n)===r(u)&&c(n)===c(u)?r(n)+" "+b(n)+" - "+b(u)+", "+c(n):c(n)===c(u)?r(n)+" "+b(n)+" - "+r(u)+" "+b(u)+", "+c(n):o(n)+" - "+o(u):o(u)}}const b=l=>l.getUTCDate(),r=l=>p[l.getUTCMonth()],c=l=>l.getUTCFullYear(),o=l=>r(l)+" "+b(l)+", "+c(l),p=["January","February","March","April","May","June","July","August","September","October","November","December"];var h=u("SVse"),v=u("lJxs"),m=u("qZ0a");const d=u("jn67").a+"events.json";class g{constructor(l){this.http=l;const n=new Date;this.currentDate=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),this.events$=this.getEvents(),this.upcomingEvents$=this.events$.pipe(Object(v.a)(l=>l.filter(l=>l.endDate>=this.currentDate))),this.pastEvents$=this.events$.pipe(Object(v.a)(l=>l.filter(l=>l.endDate<this.currentDate)))}getEvents(){const l=this.http.get(d).pipe(Object(v.a)(l=>l.map(l=>Object.assign({},l,{startDate:l.startDate?new Date(l.startDate):void 0,endDate:new Date(l.endDate)}))),Object(m.a)());return l.connect(),l}}var D=t.nb({encapsulation:2,styles:[],data:{}});function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"a",[],[[8,"href",4],[8,"title",0]],null,null,null,null)),(l()(),t.Fb(3,null,["",""])),(l()(),t.pb(4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Fb(5,null,["",""])),(l()(),t.pb(6,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Fb(7,null,["",""])),t.Bb(8,1)],null,function(l,n){l(n,2,0,n.context.$implicit.url,n.context.$implicit.name),l(n,3,0,n.context.$implicit.name),l(n,5,0,n.context.$implicit.location);var u=t.Gb(n,7,0,l(n,8,0,t.yb(n.parent,1),n.context.$implicit));l(n,7,0,u)})}function F(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"a",[],[[8,"href",4],[8,"title",0]],null,null,null,null)),(l()(),t.Fb(3,null,["",""])),(l()(),t.pb(4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Fb(5,null,["",""])),(l()(),t.pb(6,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Fb(7,null,["",""])),t.Bb(8,1)],null,function(l,n){l(n,2,0,n.context.$implicit.url,n.context.$implicit.name),l(n,3,0,n.context.$implicit.name),l(n,5,0,n.context.$implicit.location);var u=t.Gb(n,7,0,l(n,8,0,t.yb(n.parent,1),n.context.$implicit));l(n,7,0,u)})}function $(l){return t.Hb(0,[t.zb(0,s,[]),t.zb(0,i,[]),(l()(),t.pb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Upcoming Events presenting about NgRx:"])),(l()(),t.pb(4,0,null,null,13,"table",[["class","is-full-width"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Event"])),(l()(),t.pb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Location"])),(l()(),t.pb(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Date"])),(l()(),t.pb(13,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,3,null,f)),t.ob(15,278528,null,0,h.j,[t.P,t.M,t.r],{ngForOf:[0,"ngForOf"]},null),t.zb(131072,h.b,[t.h]),t.Bb(17,2),(l()(),t.pb(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Past Events:"])),(l()(),t.pb(20,0,null,null,13,"table",[["class","is-full-width"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Event"])),(l()(),t.pb(25,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Location"])),(l()(),t.pb(27,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Date"])),(l()(),t.pb(29,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,3,null,F)),t.ob(31,278528,null,0,h.j,[t.P,t.M,t.r],{ngForOf:[0,"ngForOf"]},null),t.zb(131072,h.b,[t.h]),t.Bb(33,2)],function(l,n){var u=n.component,e=t.Gb(n,15,0,l(n,17,0,t.yb(n,0),t.Gb(n,15,0,t.yb(n,16).transform(u.upcomingEvents$)),"ascending"));l(n,15,0,e);var a=t.Gb(n,31,0,l(n,33,0,t.yb(n,0),t.Gb(n,31,0,t.yb(n,32).transform(u.pastEvents$)),"descending"));l(n,31,0,a)},null)}function w(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"aio-event-list",[],null,null,null,$,D)),t.ob(1,49152,null,0,e,[g],null,null)],null,null)}var E=t.lb("aio-event-list",e,w,{},{},[]),y=u("IheW");u.d(n,"EventListModuleNgFactory",function(){return x});var x=t.mb(a,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[E]],[3,t.j],t.w]),t.wb(4608,h.m,h.l,[t.t,[2,h.x]]),t.wb(4608,g,g,[y.c]),t.wb(1073742336,h.c,h.c,[]),t.wb(1073742336,a,a,[])])})}}]);
//# sourceMappingURL=events-event-list-module-ngfactory.1be14dc4c4256bb185c3.js.map