(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5UAH":function(n,e,t){"use strict";t.r(e),t.d(e,"AnnouncementBarModule",(function(){return l}));var r=t("ofXK"),o=t("tk/3"),c=t("PCNd"),a=t("JIr8"),i=t("lJxs"),u=t("jn67"),s=t("fXoL"),f=t("vHPH");function b(n,e){if(1&n&&(s.Nb(0,"div",1),s.Nb(1,"div",2),s.Jb(2,"img",3),s.Jb(3,"p",4),s.Nb(4,"a",5),s.yc(5,"Learn More"),s.Mb(),s.Mb(),s.Mb()),2&n){var t=s.Yb();s.wb(2),s.ec("src",t.announcement.imageUrl,s.pc),s.wb(1),s.ec("innerHTML",t.announcement.message,s.oc),s.wb(1),s.ec("href",t.announcement.linkUrl,s.pc)}}var m=u.a+"announcements.json",p=function(){function n(n,e){this.http=n,this.logger=e}return n.prototype.ngOnInit=function(){var n=this;this.http.get(m).pipe(Object(a.a)((function(e){return n.logger.error(new Error(m+" request failed: "+e.message)),[]})),Object(i.a)((function(e){return n.findCurrentAnnouncement(e)})),Object(a.a)((function(e){return n.logger.error(new Error(m+" contains invalid data: "+e.message)),[]}))).subscribe((function(e){return n.announcement=e}))},n.prototype.findCurrentAnnouncement=function(n){return n.filter((function(n){return new Date(n.startDate).valueOf()<Date.now()})).filter((function(n){return new Date(n.endDate).valueOf()>Date.now()}))[0]},n.\u0275fac=function(e){return new(e||n)(s.Ib(o.a),s.Ib(f.a))},n.\u0275cmp=s.Cb({type:n,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],[3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&s.wc(0,b,6,3,"div",0),2&n&&s.ec("ngIf",e.announcement)},directives:[r.h],encapsulation:2}),n}(),l=function(){function n(){this.customElementComponent=p}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(e){return new(e||n)},imports:[[r.b,c.a,o.b]]}),n}()}}]);
//# sourceMappingURL=announcement-bar-announcement-bar-module.8e5e2b9c2c1c3c655616.js.map