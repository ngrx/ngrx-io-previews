(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6U+v":function(r,e,t){"use strict";t.r(e);var o=t("Valr"),n=t("TYT/"),c=t("67Y/"),i=t("kR3u"),s=t("jn67"),u=t("cUzu"),a=s.a+"resources.json",b=function(){function r(r){this.http=r,this.categories=this.getCategories()}return r.prototype.getCategories=function(){var r=this.http.get(a).pipe(Object(c.a)((function(r){return e=r,Object.keys(e).map((function(r){var t=e[r];return{id:v(r),title:r,order:t.order,subCategories:f(t.subCategories,r)}})).sort(d);var e})),Object(i.a)());return r.connect(),r},r.\u0275fac=function(e){return new(e||r)(n.Wb(u.a))},r.\u0275prov=n.Jb({token:r,factory:r.\u0275fac}),r}();function f(r,e){return Object.keys(r).map((function(t){var o=r[t];return{id:v(t),title:t,order:o.order,resources:l(o.resources,t,e)}})).sort(d)}function l(r,e,t){return Object.keys(r).map((function(o){var n=r[o];return n.category=t,n.subCategory=e,n.id=v(o),n})).sort(p)}function d(r,e){return r.order===e.order?p(r,e):r.order>e.order?1:-1}function p(r,e){return r.title.toUpperCase()>e.title.toUpperCase()?1:-1}function v(r){return r.toLowerCase().replace(/\s+/g,"-")}function h(r,e){if(1&r&&(n.Sb(0,"div",10),n.Sb(1,"a",11),n.Sb(2,"div"),n.Sb(3,"h4"),n.Bc(4),n.Rb(),n.Sb(5,"p",12),n.Bc(6),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&r){var t=n.dc().$implicit;n.zb(1),n.jc("href",t.url,n.uc),n.zb(3),n.Cc(t.title),n.zb(2),n.Cc(t.desc||"No Description")}}function g(r,e){if(1&r&&(n.Sb(0,"div"),n.zc(1,h,7,3,"div",9),n.Rb()),2&r){var t=e.$implicit;n.zb(1),n.jc("ngIf",t.rev)}}function S(r,e){if(1&r&&(n.Sb(0,"div"),n.Ob(1,"a",5),n.Sb(2,"h3",8),n.Bc(3),n.Rb(),n.zc(4,g,2,1,"div",7),n.Rb()),2&r){var t=e.$implicit;n.zb(1),n.kc("id",t.id),n.zb(2),n.Cc(t.title),n.zb(1),n.jc("ngForOf",t.resources)}}function m(r,e){if(1&r&&(n.Sb(0,"div",3),n.Sb(1,"header",4),n.Ob(2,"a",5),n.Sb(3,"h2"),n.Bc(4),n.Rb(),n.Rb(),n.Sb(5,"div",6),n.zc(6,S,5,3,"div",7),n.Rb(),n.Rb()),2&r){var t=e.$implicit;n.zb(2),n.kc("id",t.id),n.zb(2),n.Cc(t.title),n.zb(2),n.jc("ngForOf",t.subCategories)}}var z=function(){function r(r,e){this.resourceService=e,this.scrollPos=0,this.location=r.pathname.replace(/^\/+/,"")}return r.prototype.href=function(r){return this.location+"#"+r.id},r.prototype.ngOnInit=function(){var r=this;this.resourceService.categories.subscribe((function(e){return r.categories=e}))},r.prototype.onScroll=function(r){this.scrollPos=r&&(r.scrollTop||r.body.scrollTop)||0},r.\u0275fac=function(e){return new(e||r)(n.Nb(o.n),n.Nb(b))},r.\u0275cmp=n.Hb({type:r,selectors:[["aio-resource-list"]],hostBindings:function(r,e){1&r&&n.Zb("scroll",(function(r){return e.onScroll(r.target)}),!1,n.rc)},decls:3,vars:1,consts:[[1,"resources-container"],[1,"l-flex--column"],["class","showcase",4,"ngFor","ngForOf"],[1,"showcase"],[1,"c-resource-header"],[1,"h-anchor-offset",3,"id"],[1,"shadow-1"],[4,"ngFor","ngForOf"],[1,"subcategory-title"],["class","c-resource",4,"ngIf"],[1,"c-resource"],["target","_blank",1,"l-flex--column","resource-row-link",3,"href"],[1,"resource-description"]],template:function(r,e){1&r&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.zc(2,m,7,3,"div",2),n.Rb(),n.Rb()),2&r&&(n.zb(2),n.jc("ngForOf",e.categories))},directives:[o.g,o.h],encapsulation:2}),r}();t.d(e,"ResourceListModule",(function(){return R}));var R=function(){function r(){this.customElementComponent=z}return r.\u0275mod=n.Lb({type:r}),r.\u0275inj=n.Kb({factory:function(e){return new(e||r)},providers:[b],imports:[[o.b]]}),r}()}}]);
//# sourceMappingURL=resource-resource-list-module.3dfb1210f12f380016ad.js.map