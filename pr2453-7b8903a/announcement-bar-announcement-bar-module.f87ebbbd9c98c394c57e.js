(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"5UAH":function(n,e,t){"use strict";t.r(e);var r=t("Valr"),o=t("cUzu"),c=t("PCNd"),a=t("9Z1F"),u=t("67Y/"),i=t("jn67"),s=t("TYT/"),f=t("vHPH");function b(n,e){if(1&n&&(s.Sb(0,"div",1),s.Sb(1,"div",2),s.Ob(2,"img",3),s.Ob(3,"p",4),s.Sb(4,"a",5),s.Bc(5,"Learn More"),s.Rb(),s.Rb(),s.Rb()),2&n){var t=s.dc();s.zb(2),s.jc("src",t.announcement.imageUrl,s.uc),s.zb(1),s.jc("innerHTML",t.announcement.message,s.tc),s.zb(1),s.jc("href",t.announcement.linkUrl,s.uc)}}var m=i.a+"announcements.json",p=function(){function n(n,e){this.http=n,this.logger=e}return n.prototype.ngOnInit=function(){var n=this;this.http.get(m).pipe(Object(a.a)((function(e){return n.logger.error(new Error(m+" request failed: "+e.message)),[]})),Object(u.a)((function(e){return n.findCurrentAnnouncement(e)})),Object(a.a)((function(e){return n.logger.error(new Error(m+" contains invalid data: "+e.message)),[]}))).subscribe((function(e){return n.announcement=e}))},n.prototype.findCurrentAnnouncement=function(n){return n.filter((function(n){return new Date(n.startDate).valueOf()<Date.now()})).filter((function(n){return new Date(n.endDate).valueOf()>Date.now()}))[0]},n.\u0275fac=function(e){return new(e||n)(s.Nb(o.a),s.Nb(f.a))},n.\u0275cmp=s.Hb({type:n,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],[3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&s.zc(0,b,6,3,"div",0),2&n&&s.jc("ngIf",e.announcement)},directives:[r.h],encapsulation:2}),n}();t.d(e,"AnnouncementBarModule",(function(){return l}));var l=function(){function n(){this.customElementComponent=p}return n.\u0275mod=s.Lb({type:n}),n.\u0275inj=s.Kb({factory:function(e){return new(e||n)},imports:[[r.b,c.a,o.b]]}),n}()}}]);
//# sourceMappingURL=announcement-bar-announcement-bar-module.f87ebbbd9c98c394c57e.js.map