(self.webpackChunkngrx_io=self.webpackChunkngrx_io||[]).push([["src_app_custom-elements_api_api-list_module_ts"],{5986:function(t,e,i){"use strict";i.r(e),i.d(e,{ApiListModule:function(){return A}});var s=i(98),n=i(5472),r=i(5289),a=i(1855),o=i(1509),c=i(1370),u=i(5639),l=i(744),p=i(8707),h=i(4213),f=i(9371),y=i(1640),g=i(901),v=function(){function t(t,e){this.http=t,this.logger=e,this.apiBase=y.Yp+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new p.xQ,this.sectionsSubject=new o.t(1),this._sections=this.sectionsSubject.pipe((0,h.R)(this.onDestroy))}return Object.defineProperty(t.prototype,"sections",{get:function(){var t=this;return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(function(e){return t.logger.log("ApiService got API sections")})),this._sections.pipe((0,f.b)(function(t){t.forEach(function(t){t.deprecated=!!t.items&&t.items.every(function(t){return"deprecated"===t.stability})})}))},enumerable:!1,configurable:!0}),t.prototype.ngOnDestroy=function(){this.onDestroy.next()},t.prototype.fetchSections=function(t){var e=this,i=this.apiBase+(t||this.apiListJsonDefault);this.http.get(i).pipe((0,h.R)(this.onDestroy),(0,f.b)(function(){return e.logger.log("Got API sections from "+i)})).subscribe(function(t){return e.sectionsSubject.next(t)},function(t){throw e.logger.error(t),t})},t.\u0275fac=function(e){return new(e||t)(l.LFG(n.eN),l.LFG(g.Y))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),t}(),d=i(63),m=i(8153),S=["filter"];function b(t,e){if(1&t&&(l.TgZ(0,"h2"),l.TgZ(1,"a",11),l._uU(2),l.qZA(),l.qZA()),2&t){var i=l.oxw().$implicit;l.xp6(1),l.ekj("deprecated-api-item",i.deprecated),l.Q6J("href",i.path,l.LSH),l.xp6(1),l.hij("@ngrx/",i.title,"")}}function Z(t,e){if(1&t&&(l.ynx(0),l.TgZ(1,"li",13),l.TgZ(2,"a",11),l._UZ(3,"span"),l._uU(4),l.qZA(),l.qZA(),l.BQk()),2&t){var i=e.$implicit;l.xp6(2),l.ekj("deprecated-api-item","deprecated"===i.stability),l.Q6J("href",i.path,l.LSH),l.xp6(1),l.Gre("symbol ",i.docType,""),l.xp6(1),l.hij(" ",i.title," ")}}function T(t,e){if(1&t&&(l.TgZ(0,"ul",12),l.YNc(1,Z,5,7,"ng-container",8),l.qZA()),2&t){var i=l.oxw().$implicit;l.xp6(1),l.Q6J("ngForOf",i.items)}}function x(t,e){if(1&t&&(l.TgZ(0,"div"),l.YNc(1,b,3,4,"h2",9),l.YNc(2,T,2,1,"ul",10),l.qZA()),2&t){var i=e.$implicit;l.xp6(1),l.Q6J("ngIf",i.items),l.xp6(1),l.Q6J("ngIf",null==i.items?null:i.items.length)}}var w=function(){return function(){this.query="",this.status="all",this.type="all"}}(),q=function(){function t(t,e){this.apiService=t,this.locationService=e,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new o.t(1),this.searchCriteria=new w,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"stable",title:"Stable"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}return t.prototype.ngOnInit=function(){var t=this;this.filteredSections=(0,c.aj)([this.apiService.sections,this.criteriaSubject]).pipe((0,u.U)(function(e){var i=e[1];return e[0].map(function(e){return(0,a.pi)((0,a.pi)({},e),{items:t.filterSection(e,i)})})})),this.initializeSearchCriteria()},t.prototype.setQuery=function(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})},t.prototype.setStatus=function(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})},t.prototype.setType=function(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})},t.prototype.toggleStatusMenu=function(){this.showStatusMenu=!this.showStatusMenu},t.prototype.toggleTypeMenu=function(){this.showTypeMenu=!this.showTypeMenu},t.prototype.filterSection=function(t,e){var i=e.query,s=e.status,n=e.type,r=t.items.filter(function(e){return("all"===n||n===e.docType)&&("all"===s||s===e.stability||"security-risk"===s&&e.securityRisk)&&(!i||-1!==t.name.indexOf(i)||-1!==e.name.indexOf(i))});return r.length?r:"package"!==n||i&&-1===t.name.indexOf(i)?null:[]},t.prototype.initializeSearchCriteria=function(){var t=this.locationService.search(),e=t.status,i=t.type,s=(t.query||"").toLowerCase();this.queryEl.nativeElement.value=s,this.status=this.statuses.find(function(t){return t.value===e})||this.statuses[0],this.type=this.types.find(function(t){return t.value===i})||this.types[0],this.searchCriteria={query:s,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)},t.prototype.setLocationSearch=function(){var t=this.searchCriteria,e=t.status,i=t.type;this.locationService.setSearch("API Search",{query:t.query||void 0,status:"all"!==e?e:void 0,type:"all"!==i?i:void 0})},t.prototype.setSearchCriteria=function(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()},t.\u0275fac=function(e){return new(e||t)(l.Y36(v),l.Y36(d.a))},t.\u0275cmp=l.Xpm({type:t,selectors:[["aio-api-list"]],viewQuery:function(t,e){var i;1&t&&l.Gf(S,7),2&t&&l.iGM(i=l.CRH())&&(e.queryEl=i.first)},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","Type:",3,"options","selected","showSymbol","change"],["label","Status:",3,"options","selected","disabled","change"],[1,"form-search"],[1,"material-icons"],["placeholder","Filter",3,"input"],["filter",""],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"aio-select",1),l.NdJ("change",function(t){return e.setType(t.option)}),l.qZA(),l.TgZ(2,"aio-select",2),l.NdJ("change",function(t){return e.setStatus(t.option)}),l.qZA(),l.TgZ(3,"div",3),l.TgZ(4,"i",4),l._uU(5,"search"),l.qZA(),l.TgZ(6,"input",5,6),l.NdJ("input",function(t){return e.setQuery(t.target.value)}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(8,"article",7),l.YNc(9,x,3,2,"div",8),l.ALo(10,"async"),l.qZA()),2&t&&(l.xp6(1),l.Q6J("options",e.types)("selected",e.type)("showSymbol",!0),l.xp6(1),l.Q6J("options",e.statuses)("selected",e.status)("disabled","package"===e.type.value),l.xp6(7),l.Q6J("ngForOf",l.lcZ(10,7,e.filteredSections)))},directives:[m.H,s.sg,s.O5],pipes:[s.Ov],encapsulation:2}),t}(),A=function(){function t(){this.customElementComponent=q}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({providers:[v],imports:[[s.ez,r.m,n.JF]]}),t}()}}]);
//# sourceMappingURL=src_app_custom-elements_api_api-list_module_ts.80d9eb44df89f0a093c6.js.map