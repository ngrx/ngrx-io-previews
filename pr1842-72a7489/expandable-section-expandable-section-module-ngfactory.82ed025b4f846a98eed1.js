(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"Qg/A":function(t,e,n){"use strict";n.r(e);var a=n("8Y7J");class i{}class o{constructor(){this.customElementComponent=i}}n("GS7A");var s=n("KCVW"),l=n("XNiG"),r=n("quSY");let d=0;class p{constructor(t,e,n){this.accordion=t,this._changeDetectorRef=e,this._expansionDispatcher=n,this._openCloseAllSubscription=r.a.EMPTY,this.closed=new a.m,this.opened=new a.m,this.destroyed=new a.m,this.expandedChange=new a.m,this.id=`cdk-accordion-child-${d++}`,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=(()=>{}),this._removeUniqueSelectionListener=n.listen((t,e)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===e&&this.id!==t&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(t){t=Object(s.b)(t),this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){this._disabled=Object(s.b)(t)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}}class c{}var h=n("zMNK"),u=n("EY2u"),m=n("VRyK"),b=n("JX91"),x=n("pLZG"),g=n("IzEk"),_=n("5GAg"),f=n("dvZr");const y=new a.p("MAT_ACCORDION");let v=0;class w extends p{constructor(t,e,n,i,o,s){super(t,e,n),this._viewContainerRef=i,this._animationMode=s,this._hideToggle=!1,this.afterExpand=new a.m,this.afterCollapse=new a.m,this._inputChanges=new l.a,this._headerId=`mat-expansion-panel-header-${v++}`,this.accordion=t,this._document=o}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=Object(s.b)(t)}_hasSpacing(){return!!this.accordion&&"default"===(this.expanded?this.accordion.displayMode:this._getExpandedState())}_getExpandedState(){return this.expanded?"expanded":"collapsed"}ngAfterContentInit(){this._lazyContent&&this.opened.pipe(Object(b.a)(null),Object(x.a)(()=>this.expanded&&!this._portal),Object(g.a)(1)).subscribe(()=>{this._portal=new h.h(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_bodyAnimation(t){const{phaseName:e,toState:n,fromState:a}=t;"done"===e&&"expanded"===n&&"void"!==a&&this.afterExpand.emit(),"done"===e&&"collapsed"===n&&"void"!==a&&this.afterCollapse.emit()}_containsFocus(){if(this._body&&this._document){const t=this._document.activeElement,e=this._body.nativeElement;return t===e||e.contains(t)}return!1}}class C{constructor(t,e,n,a){this.panel=t,this._element=e,this._focusMonitor=n,this._changeDetectorRef=a,this._parentChangeSubscription=r.a.EMPTY;const i=t.accordion?t.accordion._stateChanges.pipe(Object(x.a)(t=>!!t.hideToggle)):u.a;this._parentChangeSubscription=Object(m.a)(t.opened,t.closed,i,t._inputChanges.pipe(Object(x.a)(t=>!(!t.hideToggle&&!t.disabled)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(Object(x.a)(()=>t._containsFocus())).subscribe(()=>n.focusVia(e,"program")),n.monitor(e).subscribe(e=>{e&&t.accordion&&t.accordion._handleHeaderFocus(this)})}get disabled(){return this.panel.disabled}_toggle(){this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_keydown(t){switch(t.keyCode){case f.j:case f.d:t.preventDefault(),this._toggle();break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}}focus(t="program"){this._focusMonitor.focusVia(this._element,t)}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}class R{}var E=n("SVse"),A=n("8bJo"),P=n("omvX"),k=a.nb({encapsulation:2,styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media screen and (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel._mat-animation-noopable,.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button{margin-left:0;margin-right:8px}"],data:{animation:[{type:7,name:"bodyExpansion",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{height:"0px",visibility:"hidden"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{height:"*",visibility:"visible"},offset:null},options:void 0},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"},options:null}],options:{}}]}});function F(t){return a.Hb(0,[(t()(),a.gb(0,null,null,0))],null,null)}function H(t){return a.Hb(2,[a.Db(402653184,1,{_body:0}),a.xb(null,0),(t()(),a.pb(2,0,[[1,0],["body",1]],null,5,"div",[["class","mat-expansion-panel-content"],["role","region"]],[[24,"@bodyExpansion",0],[1,"aria-labelledby",0],[8,"id",0]],[[null,"@bodyExpansion.done"]],function(t,e,n){var a=!0;return"@bodyExpansion.done"===e&&(a=!1!==t.component._bodyAnimation(n)&&a),a},null,null)),(t()(),a.pb(3,0,null,null,3,"div",[["class","mat-expansion-panel-body"]],null,null,null,null,null)),a.xb(null,1),(t()(),a.gb(16777216,null,null,1,null,F)),a.ob(6,212992,null,0,h.c,[a.j,a.P],{portal:[0,"portal"]},null),a.xb(null,2)],function(t,e){t(e,6,0,e.component._portal)},function(t,e){var n=e.component;t(e,2,0,n._getExpandedState(),n._headerId,n.id)})}var D=a.nb({encapsulation:2,styles:[".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],data:{animation:[{type:7,name:"indicatorRotate",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{transform:"rotate(0deg)"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{transform:"rotate(180deg)"},offset:null},options:void 0},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"},options:null}],options:{}},{type:7,name:"expansionHeight",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{height:"{{collapsedHeight}}"},offset:null},options:{params:{collapsedHeight:"48px"}}},{type:0,name:"expanded",styles:{type:6,styles:{height:"{{expandedHeight}}"},offset:null},options:{params:{expandedHeight:"64px"}}},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:3,steps:[{type:11,selector:"@indicatorRotate",animation:{type:9,options:null},options:{optional:!0}},{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"}],options:null},options:null}],options:{}}]}});function j(t){return a.Hb(0,[(t()(),a.pb(0,0,null,null,0,"span",[["class","mat-expansion-indicator"]],[[24,"@indicatorRotate",0]],null,null,null,null))],null,function(t,e){t(e,0,0,e.component._getExpandedState())})}function O(t){return a.Hb(2,[(t()(),a.pb(0,0,null,null,3,"span",[["class","mat-content"]],null,null,null,null,null)),a.xb(null,0),a.xb(null,1),a.xb(null,2),(t()(),a.gb(16777216,null,null,1,null,j)),a.ob(5,16384,null,0,E.k,[a.P,a.M],{ngIf:[0,"ngIf"]},null)],function(t,e){t(e,5,0,e.component._showToggle())},null)}var S=a.nb({encapsulation:2,styles:[],data:{}});function T(t){return a.Hb(0,[(t()(),a.pb(0,16777216,null,null,9,"mat-expansion-panel",[["class","mat-expansion-panel"],["style","background: inherit"]],[[2,"mat-expanded",null],[2,"_mat-animation-noopable",null],[2,"mat-expansion-panel-spacing",null]],null,null,H,k)),a.ob(1,1753088,null,1,w,[[3,y],a.h,A.c,a.P,E.d,[2,P.a]],null,null),a.Db(335544320,1,{_lazyContent:0}),a.Cb(256,null,y,void 0,[]),(t()(),a.pb(4,0,null,0,4,"mat-expansion-panel-header",[["class","mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==a.yb(t,5)._toggle()&&i),"keydown"===e&&(i=!1!==a.yb(t,5)._keydown(n)&&i),i},O,D)),a.ob(5,180224,null,0,C,[w,a.k,_.d,a.h],null,null),a.Ab(6,{collapsedHeight:0,expandedHeight:1}),a.Ab(7,{value:0,params:1}),(t()(),a.Fb(8,2,[" "," "])),a.xb(1,0)],null,function(t,e){var n=e.component;t(e,0,0,a.yb(e,1).expanded,"NoopAnimations"===a.yb(e,1)._animationMode,a.yb(e,1)._hasSpacing());var i=a.yb(e,5).panel._headerId,o=a.yb(e,5).disabled?-1:0,s=a.yb(e,5)._getPanelId(),l=a.yb(e,5)._isExpanded(),r=a.yb(e,5).panel.disabled,d=a.yb(e,5)._isExpanded(),p=t(e,7,0,a.yb(e,5)._getExpandedState(),t(e,6,0,a.yb(e,5).collapsedHeight,a.yb(e,5).expandedHeight));t(e,4,0,i,o,s,l,r,d,p),t(e,8,0,n.title)})}function I(t){return a.Hb(0,[(t()(),a.pb(0,0,null,null,1,"aio-expandable-section",[],null,null,null,T,S)),a.ob(1,49152,null,0,i,[],null,null)],null,null)}var z=a.lb("aio-expandable-section",i,I,{title:"title"},{},["*"]);n.d(e,"ExpandableSectionModuleNgFactory",function(){return M});var M=a.mb(o,[],function(t){return a.vb([a.wb(512,a.j,a.bb,[[8,[z]],[3,a.j],a.w]),a.wb(4608,E.m,E.l,[a.t,[2,E.x]]),a.wb(1073742336,E.c,E.c,[]),a.wb(1073742336,c,c,[]),a.wb(1073742336,h.g,h.g,[]),a.wb(1073742336,R,R,[]),a.wb(1073742336,o,o,[])])})},zMNK:function(t,e,n){"use strict";n.d(e,"d",function(){return s}),n.d(e,"h",function(){return l}),n.d(e,"a",function(){return r}),n.d(e,"e",function(){return d}),n.d(e,"b",function(){return p}),n.d(e,"c",function(){return c}),n.d(e,"g",function(){return h}),n.d(e,"f",function(){return u});var a=n("8Y7J");function i(){throw Error("Host already has a portal attached")}class o{attach(t){return null==t&&function(){throw Error("Attempting to attach a portal to a null PortalOutlet")}(),t.hasAttached()&&i(),this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;null==t?function(){throw Error("Attempting to detach a portal that is not attached to a host")}():(this._attachedHost=null,t.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(t){this._attachedHost=t}}class s extends o{constructor(t,e,n,a){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.componentFactoryResolver=a}}class l extends o{constructor(t,e,n){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}}class r{constructor(){this._isDisposed=!1}hasAttached(){return!!this._attachedPortal}attach(t){return t||function(){throw Error("Must provide a portal to attach")}(),this.hasAttached()&&i(),this._isDisposed&&function(){throw Error("This PortalOutlet has already been disposed")}(),t instanceof s?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof l?(this._attachedPortal=t,this.attachTemplatePortal(t)):void function(){throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")}()}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class d extends r{constructor(t,e,n,a){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=n,this._defaultInjector=a}attachComponentPortal(t){const e=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component);let n;return t.viewContainerRef?(n=t.viewContainerRef.createComponent(e,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector),this.setDisposeFn(()=>n.destroy())):(n=e.create(t.injector||this._defaultInjector),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),n}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context);return n.detectChanges(),n.rootNodes.forEach(t=>this.outletElement.appendChild(t)),this.setDisposeFn(()=>{let t=e.indexOf(n);-1!==t&&e.remove(t)}),n}dispose(){super.dispose(),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)}_getComponentRootNode(t){return t.hostView.rootNodes[0]}}class p extends l{constructor(t,e){super(t,e)}}class c extends r{constructor(t,e){super(),this._componentFactoryResolver=t,this._viewContainerRef=e,this._isInitialized=!1,this.attached=new a.m}get portal(){return this._attachedPortal}set portal(t){(!this.hasAttached()||t||this._isInitialized)&&(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(t){t.setAttachedHost(this);const e=null!=t.viewContainerRef?t.viewContainerRef:this._viewContainerRef,n=this._componentFactoryResolver.resolveComponentFactory(t.component),a=e.createComponent(n,e.length,t.injector||e.injector);return super.setDisposeFn(()=>a.destroy()),this._attachedPortal=t,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(t){t.setAttachedHost(this);const e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context);return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}}class h{}class u{constructor(t,e){this._parentInjector=t,this._customTokens=e}get(t,e){const n=this._customTokens.get(t);return void 0!==n?n:this._parentInjector.get(t,e)}}}}]);
//# sourceMappingURL=expandable-section-expandable-section-module-ngfactory.82ed025b4f846a98eed1.js.map