(self.webpackChunkngrx_io=self.webpackChunkngrx_io||[]).push([["src_app_custom-elements_resource_resource-list_module_ts"],{9119:function(e,r,t){"use strict";t.r(r),t.d(r,{ResourceListModule:function(){return T}});var o=t(98),n=t(744),i=t(5639),c=t(4152),s=t(1640),u=t(5472),a=s.bL+"resources.json",f=function(){function e(e){this.http=e,this.categories=this.getCategories()}return e.prototype.getCategories=function(){var e=this.http.get(a).pipe((0,i.U)(function(e){return r=e,Object.keys(r).map(function(e){var t=r[e];return{id:h(e),title:e,order:t.order,subCategories:p(t.subCategories,e)}}).sort(g);var r}),(0,c.C)());return e.connect(),e},e.\u0275fac=function(r){return new(r||e)(n.LFG(u.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e}();function p(e,r){return Object.keys(e).map(function(t){var o=e[t];return{id:h(t),title:t,order:o.order,resources:l(o.resources,t,r)}}).sort(g)}function l(e,r,t){return Object.keys(e).map(function(o){var n=e[o];return n.category=t,n.subCategory=r,n.id=h(o),n}).sort(d)}function g(e,r){return e.order===r.order?d(e,r):e.order>r.order?1:-1}function d(e,r){return e.title.toUpperCase()>r.title.toUpperCase()?1:-1}function h(e){return e.toLowerCase().replace(/\s+/g,"-")}function v(e,r){if(1&e&&(n.TgZ(0,"div",10),n.TgZ(1,"a",11),n.TgZ(2,"div"),n.TgZ(3,"h4"),n._uU(4),n.qZA(),n.TgZ(5,"p",12),n._uU(6),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e){var t=n.oxw().$implicit;n.xp6(1),n.Q6J("href",t.url,n.LSH),n.xp6(3),n.Oqu(t.title),n.xp6(2),n.Oqu(t.desc||"No Description")}}function Z(e,r){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,v,7,3,"div",9),n.qZA()),2&e){var t=r.$implicit;n.xp6(1),n.Q6J("ngIf",t.rev)}}function m(e,r){if(1&e&&(n.TgZ(0,"div"),n._UZ(1,"a",5),n.TgZ(2,"h3",8),n._uU(3),n.qZA(),n.YNc(4,Z,2,1,"div",7),n.qZA()),2&e){var t=r.$implicit;n.xp6(1),n.s9C("id",t.id),n.xp6(2),n.Oqu(t.title),n.xp6(1),n.Q6J("ngForOf",t.resources)}}function q(e,r){if(1&e&&(n.TgZ(0,"div",3),n.TgZ(1,"header",4),n._UZ(2,"a",5),n.TgZ(3,"h2"),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"div",6),n.YNc(6,m,5,3,"div",7),n.qZA(),n.qZA()),2&e){var t=r.$implicit;n.xp6(2),n.s9C("id",t.id),n.xp6(2),n.Oqu(t.title),n.xp6(2),n.Q6J("ngForOf",t.subCategories)}}var x=function(){function e(e,r){this.resourceService=r,this.scrollPos=0,this.location=e.pathname.replace(/^\/+/,"")}return e.prototype.href=function(e){return this.location+"#"+e.id},e.prototype.ngOnInit=function(){var e=this;this.resourceService.categories.subscribe(function(r){return e.categories=r})},e.prototype.onScroll=function(e){this.scrollPos=e&&(e.scrollTop||e.body.scrollTop)||0},e.\u0275fac=function(r){return new(r||e)(n.Y36(o.lw),n.Y36(f))},e.\u0275cmp=n.Xpm({type:e,selectors:[["aio-resource-list"]],hostBindings:function(e,r){1&e&&n.NdJ("scroll",function(e){return r.onScroll(e.target)},!1,n.Jf7)},decls:3,vars:1,consts:[[1,"resources-container"],[1,"l-flex--column"],["class","showcase",4,"ngFor","ngForOf"],[1,"showcase"],[1,"c-resource-header"],[1,"h-anchor-offset",3,"id"],[1,"shadow-1"],[4,"ngFor","ngForOf"],[1,"subcategory-title"],["class","c-resource",4,"ngIf"],[1,"c-resource"],["target","_blank",1,"l-flex--column","resource-row-link",3,"href"],[1,"resource-description"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.YNc(2,q,7,3,"div",2),n.qZA(),n.qZA()),2&e&&(n.xp6(2),n.Q6J("ngForOf",r.categories))},directives:[o.sg,o.O5],encapsulation:2}),e}(),T=function(){function e(){this.customElementComponent=x}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[f],imports:[[o.ez]]}),e}()}}]);
//# sourceMappingURL=src_app_custom-elements_resource_resource-list_module_ts.09910bf9f40ed27bd802.js.map