(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5Cu4":function(t,e,n){"use strict";n.r(e),n.d(e,"CodeBlockModule",(function(){return u}));var r=n("Valr"),o=n("TYT/"),i=n("vVVL"),c=["codeContainer"],s=function(){function t(t){this.pretty=t,this.code="",this.formattedCode=""}return t.prototype.ngAfterContentInit=function(){var t=this;this.pretty.formatCode("effects"===this.code?"\nsearch$ = createEffect(() => \n  this.actions$.pipe(\n    ofType(BookActions.search),\n    exhaustMap(action =>\n      this.googleBooksService.search(action.query)\n    )\n  )\n);":"\n$ ng g store State --root --module app.module.ts\n create src/app/reducers/index.ts\n update src/app/app.module.ts\n").subscribe((function(e){t.codeContainer.nativeElement.innerHTML=e}))},t.\u0275fac=function(e){return new(e||t)(o.Nb(i.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["ngrx-code-block"]],viewQuery:function(t,e){var n;1&t&&o.xc(c,!0,o.j),2&t&&o.oc(n=o.ac())&&(e.codeContainer=n.first)},inputs:{code:"code"},decls:3,vars:0,consts:[[1,"prettyprint-scroller"],[1,"prettyprint"],["codeContainer",""]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Ob(1,"pre",1,2),o.Rb())},encapsulation:2}),t}(),u=function(){function t(){this.customElementComponent=s}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},providers:[i.a],imports:[[r.b]]}),t}()},vVVL:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("0/uQ"),o=n("S1nX"),i=n("67Y/"),c=n("P6uZ"),s=n("TYT/"),u=n("vHPH"),a=function(){function t(t){this.logger=t,this.prettyPrintOne=Object(r.a)(this.getPrettyPrintOne()).pipe(Object(o.a)())}return t.prototype.getPrettyPrintOne=function(){var t=this,e=window.prettyPrintOne;return e?Promise.resolve(e):n.e(5).then(n.t.bind(null,"Ue1H",7)).then((function(){return window.prettyPrintOne}),(function(e){var n="Cannot get prettify.js from server: "+e.message;return t.logger.error(new Error(n)),function(){throw new Error(n)}}))},t.prototype.formatCode=function(t,e,n){return this.prettyPrintOne.pipe(Object(i.a)((function(r){try{return r(t,e,n)}catch(i){var o="Could not format code that begins '"+t.substr(0,50)+"...'.";throw console.error(o,i),new Error(o)}})),Object(c.a)())},t.\u0275fac=function(e){return new(e||t)(s.Wb(u.a))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t}()}}]);
//# sourceMappingURL=ngrx-code-block-module.b0d5c869503e9db0cb0f.js.map