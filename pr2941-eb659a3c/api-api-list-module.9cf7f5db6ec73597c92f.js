(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{dth9:function(t,e,i){"use strict";i.r(e),i.d(e,"ApiListModule",function(){return N});var s=i("ofXK"),n=i("tk/3"),a=i("PCNd"),r=i("mrSG"),c=i("jtHE"),o=i("itXk"),u=i("lJxs"),l=i("fXoL"),p=i("XNiG"),h=i("1G5W"),f=i("vkgz"),b=i("jn67"),y=i("vHPH"),v=function(){function t(t,e){this.http=t,this.logger=e,this.apiBase=b.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new p.a,this.sectionsSubject=new c.a(1),this._sections=this.sectionsSubject.pipe(Object(h.a)(this.onDestroy))}return Object.defineProperty(t.prototype,"sections",{get:function(){var t=this;return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(function(e){return t.logger.log("ApiService got API sections")})),this._sections.pipe(Object(f.a)(function(t){t.forEach(function(t){t.deprecated=!!t.items&&t.items.every(function(t){return"deprecated"===t.stability})})}))},enumerable:!1,configurable:!0}),t.prototype.ngOnDestroy=function(){this.onDestroy.next()},t.prototype.fetchSections=function(t){var e=this,i=this.apiBase+(t||this.apiListJsonDefault);this.http.get(i).pipe(Object(h.a)(this.onDestroy),Object(f.a)(function(){return e.logger.log("Got API sections from "+i)})).subscribe(function(t){return e.sectionsSubject.next(t)},function(t){throw e.logger.error(t),t})},t.\u0275fac=function(e){return new(e||t)(l.Rb(n.a),l.Rb(y.a))},t.\u0275prov=l.Eb({token:t,factory:t.\u0275fac}),t}(),d=i("/lUL"),g=i("x4lQ"),m=["filter"];function w(t,e){if(1&t&&(l.Nb(0,"h2"),l.Nb(1,"a",11),l.yc(2),l.Mb(),l.Mb()),2&t){var i=l.Yb().$implicit;l.wb(1),l.Ab("deprecated-api-item",i.deprecated),l.ec("href",i.path,l.pc),l.wb(1),l.Ac("@ngrx/",i.title,"")}}function S(t,e){if(1&t&&(l.Lb(0),l.Nb(1,"li",13),l.Nb(2,"a",11),l.Jb(3,"span"),l.yc(4),l.Mb(),l.Mb(),l.Kb()),2&t){var i=e.$implicit;l.wb(2),l.Ab("deprecated-api-item","deprecated"===i.stability),l.ec("href",i.path,l.pc),l.wb(1),l.zb("symbol ",i.docType,""),l.wb(1),l.Ac(" ",i.title," ")}}function M(t,e){if(1&t&&(l.Nb(0,"ul",12),l.wc(1,S,5,7,"ng-container",8),l.Mb()),2&t){var i=l.Yb().$implicit;l.wb(1),l.ec("ngForOf",i.items)}}function j(t,e){if(1&t&&(l.Nb(0,"div"),l.wc(1,w,3,4,"h2",9),l.wc(2,M,2,1,"ul",10),l.Mb()),2&t){var i=e.$implicit;l.wb(1),l.ec("ngIf",i.items),l.wb(1),l.ec("ngIf",null==i.items?null:i.items.length)}}var C=function(){return function(){this.query="",this.status="all",this.type="all"}}(),O=function(){function t(t,e){this.apiService=t,this.locationService=e,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new c.a(1),this.searchCriteria=new C,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}return t.prototype.ngOnInit=function(){var t=this;this.filteredSections=Object(o.a)([this.apiService.sections,this.criteriaSubject]).pipe(Object(u.a)(function(e){var i=e[1];return e[0].map(function(e){return Object(r.a)(Object(r.a)({},e),{items:t.filterSection(e,i)})})})),this.initializeSearchCriteria()},t.prototype.setQuery=function(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})},t.prototype.setStatus=function(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})},t.prototype.setType=function(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})},t.prototype.toggleStatusMenu=function(){this.showStatusMenu=!this.showStatusMenu},t.prototype.toggleTypeMenu=function(){this.showTypeMenu=!this.showTypeMenu},t.prototype.filterSection=function(t,e){var i=e.query,s=e.status,n=e.type,a=t.items.filter(function(e){return("all"===n||n===e.docType)&&("all"===s||s===e.stability||"security-risk"===s&&e.securityRisk)&&(!i||-1!==t.name.indexOf(i)||-1!==e.name.indexOf(i))});return a.length?a:"package"!==n||i&&-1===t.name.indexOf(i)?null:[]},t.prototype.initializeSearchCriteria=function(){var t=this.locationService.search(),e=t.status,i=t.type,s=(t.query||"").toLowerCase();this.queryEl.nativeElement.value=s,this.status=this.statuses.find(function(t){return t.value===e})||this.statuses[0],this.type=this.types.find(function(t){return t.value===i})||this.types[0],this.searchCriteria={query:s,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)},t.prototype.setLocationSearch=function(){var t=this.searchCriteria,e=t.status,i=t.type;this.locationService.setSearch("API Search",{query:t.query||void 0,status:"all"!==e?e:void 0,type:"all"!==i?i:void 0})},t.prototype.setSearchCriteria=function(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()},t.\u0275fac=function(e){return new(e||t)(l.Ib(v),l.Ib(d.a))},t.\u0275cmp=l.Cb({type:t,selectors:[["aio-api-list"]],viewQuery:function(t,e){var i;1&t&&l.sc(m,!0),2&t&&l.jc(i=l.Vb())&&(e.queryEl=i.first)},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","Type:",3,"options","selected","showSymbol","change"],["label","Status:",3,"options","selected","disabled","change"],[1,"form-search"],[1,"material-icons"],["placeholder","Filter",3,"input"],["filter",""],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(t,e){1&t&&(l.Nb(0,"div",0),l.Nb(1,"aio-select",1),l.Ub("change",function(t){return e.setType(t.option)}),l.Mb(),l.Nb(2,"aio-select",2),l.Ub("change",function(t){return e.setStatus(t.option)}),l.Mb(),l.Nb(3,"div",3),l.Nb(4,"i",4),l.yc(5,"search"),l.Mb(),l.Nb(6,"input",5,6),l.Ub("input",function(t){return e.setQuery(t.target.value)}),l.Mb(),l.Mb(),l.Mb(),l.Nb(8,"article",7),l.wc(9,j,3,2,"div",8),l.Zb(10,"async"),l.Mb()),2&t&&(l.wb(1),l.ec("options",e.types)("selected",e.type)("showSymbol",!0),l.wb(1),l.ec("options",e.statuses)("selected",e.status)("disabled","package"===e.type.value),l.wb(7),l.ec("ngForOf",l.ac(10,7,e.filteredSections)))},directives:[g.a,s.g,s.h],pipes:[s.a],encapsulation:2}),t}(),N=function(){function t(){this.customElementComponent=O}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(e){return new(e||t)},providers:[v],imports:[[s.b,a.a,n.b]]}),t}()}}]);
//# sourceMappingURL=api-api-list-module.9cf7f5db6ec73597c92f.js.map