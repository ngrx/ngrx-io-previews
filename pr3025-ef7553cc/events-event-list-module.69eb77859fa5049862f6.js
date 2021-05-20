(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{zzL8:function(t,e,n){"use strict";n.r(e),n.d(e,"EventListModule",function(){return w});var r=n("ofXK"),c=n("fXoL"),a=n("mrSG"),i=n("lJxs"),b=n("qZ0a"),o=n("jn67"),u=n("tk/3"),s=o.a+"events.json",f=function(){function t(t){var e=this;this.http=t;var n=new Date;this.currentDate=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),this.events$=this.getEvents(),this.upcomingEvents$=this.events$.pipe(Object(i.a)(function(t){return t.filter(function(t){return t.endDate>=e.currentDate})})),this.pastEvents$=this.events$.pipe(Object(i.a)(function(t){return t.filter(function(t){return t.endDate<e.currentDate})}))}return t.prototype.getEvents=function(){var t=this.http.get(s).pipe(Object(i.a)(function(t){return t.map(function(t){return Object(a.a)(Object(a.a)({},t),{startDate:t.startDate?new Date(t.startDate):void 0,endDate:new Date(t.endDate)})})}),Object(b.a)());return t.connect(),t},t.\u0275fac=function(e){return new(e||t)(c.Rb(u.a))},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac}),t}(),p=function(){function t(){}return t.prototype.transform=function(t,e){if(null===t)return[];switch(e){case"ascending":return t.sort(function(t,e){return+(t.startDate||t.endDate)-+(e.startDate||e.endDate)});case"descending":return t.sort(function(t,e){return+(e.startDate||e.endDate)-+(t.startDate||t.endDate)})}},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Hb({name:"eventOrderBy",type:t,pure:!0}),t}(),v=function(){function t(){}return t.prototype.transform=function(t){var e=t.startDate,n=t.endDate;return e&&e.getTime()!==n.getTime()?d(e)===d(n)&&y(e)===y(n)?d(e)+" "+h(e)+" - "+h(n)+", "+y(e):y(e)===y(n)?d(e)+" "+h(e)+" - "+d(n)+" "+h(n)+", "+y(e):D(e)+" - "+D(n):D(n)},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Hb({name:"eventDateRange",type:t,pure:!0}),t}(),h=function(t){return t.getUTCDate()},d=function(t){return g[t.getUTCMonth()]},y=function(t){return t.getUTCFullYear()},D=function(t){return d(t)+" "+h(t)+", "+y(t)},g=["January","February","March","April","May","June","July","August","September","October","November","December"];function l(t,e){if(1&t&&(c.Nb(0,"tr"),c.Nb(1,"th"),c.Nb(2,"a",2),c.yc(3),c.Mb(),c.Mb(),c.Nb(4,"td"),c.yc(5),c.Mb(),c.Nb(6,"td"),c.yc(7),c.Zb(8,"eventDateRange"),c.Mb(),c.Mb()),2&t){var n=e.$implicit;c.wb(2),c.ec("href",n.url,c.pc)("title",n.name),c.wb(1),c.zc(n.name),c.wb(2),c.zc(n.location),c.wb(2),c.zc(c.ac(8,5,n))}}function M(t,e){if(1&t&&(c.Nb(0,"tr"),c.Nb(1,"th"),c.Nb(2,"a",2),c.yc(3),c.Mb(),c.Mb(),c.Nb(4,"td"),c.yc(5),c.Mb(),c.Nb(6,"td"),c.yc(7),c.Zb(8,"eventDateRange"),c.Mb(),c.Mb()),2&t){var n=e.$implicit;c.wb(2),c.ec("href",n.url,c.pc)("title",n.name),c.wb(1),c.zc(n.name),c.wb(2),c.zc(n.location),c.wb(2),c.zc(c.ac(8,5,n))}}var m=function(){function t(t){this.eventService=t,this.upcomingEvents$=this.eventService.upcomingEvents$,this.pastEvents$=this.eventService.pastEvents$}return t.\u0275fac=function(e){return new(e||t)(c.Ib(f))},t.\u0275cmp=c.Cb({type:t,selectors:[["aio-event-list"]],decls:30,vars:12,consts:[[1,"is-full-width"],[4,"ngFor","ngForOf"],[3,"href","title"]],template:function(t,e){1&t&&(c.Nb(0,"p"),c.yc(1,"Upcoming Events presenting about NgRx:"),c.Mb(),c.Nb(2,"table",0),c.Nb(3,"thead"),c.Nb(4,"tr"),c.Nb(5,"th"),c.yc(6,"Event"),c.Mb(),c.Nb(7,"th"),c.yc(8,"Location"),c.Mb(),c.Nb(9,"th"),c.yc(10,"Date"),c.Mb(),c.Mb(),c.Mb(),c.Nb(11,"tbody"),c.wc(12,l,9,7,"tr",1),c.Zb(13,"eventOrderBy"),c.Zb(14,"async"),c.Mb(),c.Mb(),c.Nb(15,"p"),c.yc(16,"Past Events:"),c.Mb(),c.Nb(17,"table",0),c.Nb(18,"thead"),c.Nb(19,"tr"),c.Nb(20,"th"),c.yc(21,"Event"),c.Mb(),c.Nb(22,"th"),c.yc(23,"Location"),c.Mb(),c.Nb(24,"th"),c.yc(25,"Date"),c.Mb(),c.Mb(),c.Mb(),c.Nb(26,"tbody"),c.wc(27,M,9,7,"tr",1),c.Zb(28,"eventOrderBy"),c.Zb(29,"async"),c.Mb(),c.Mb()),2&t&&(c.wb(12),c.ec("ngForOf",c.bc(13,2,c.ac(14,5,e.upcomingEvents$),"ascending")),c.wb(15),c.ec("ngForOf",c.bc(28,7,c.ac(29,10,e.pastEvents$),"descending")))},directives:[r.g],pipes:[p,r.a,v],encapsulation:2}),t}(),w=function(){function t(){this.customElementComponent=m}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},providers:[f],imports:[[r.b]]}),t}()}}]);
//# sourceMappingURL=events-event-list-module.69eb77859fa5049862f6.js.map