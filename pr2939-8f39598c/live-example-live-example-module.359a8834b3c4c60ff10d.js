(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{m7ka:function(t,e,n){"use strict";n.r(e),n.d(e,"LiveExampleModule",function(){return y});var i=n("ofXK"),o=n("jn67"),a=n("fXoL");function r(t,e){var n="string"==typeof e?e:e.find(function(e){return t.hasOwnProperty(e.toLowerCase())});return void 0===n?void 0:t[n.toLowerCase()]}function c(t,e){return void 0===e&&(e=!1),void 0===t?e:"false"!==t.trim()}var s=["content"];function l(t,e){if(1&t&&(a.Nb(0,"p"),a.yc(1," You can also "),a.Nb(2,"a",8),a.yc(3,"download this example"),a.Mb(),a.yc(4,". "),a.Mb()),2&t){var n=a.Yb(2);a.wb(2),a.ec("href",n.zip,a.pc)}}function b(t,e){if(1&t&&(a.Nb(0,"span"),a.Nb(1,"div",5),a.Jb(2,"aio-embedded-stackblitz",6),a.Mb(),a.wc(3,l,5,1,"p",7),a.Mb()),2&t){var n=a.Yb();a.wb(1),a.fc("title",n.title),a.wb(1),a.ec("src",n.stackblitz),a.wb(1),a.ec("ngIf",n.enableDownload)}}function f(t,e){if(1&t&&(a.Nb(0,"span"),a.Nb(1,"a",9),a.yc(2),a.Mb(),a.Mb()),2&t){var n=a.Yb();a.wb(1),a.fc("title",n.title),a.ec("href",n.zip,a.pc),a.wb(1),a.zc(n.title)}}function p(t,e){if(1&t&&(a.Nb(0,"span"),a.yc(1," / "),a.Nb(2,"a",8),a.yc(3,"download example"),a.Mb(),a.Mb()),2&t){var n=a.Yb(2);a.wb(2),a.ec("href",n.zip,a.pc)}}function u(t,e){if(1&t&&(a.Nb(0,"span"),a.Nb(1,"a",10),a.yc(2),a.Mb(),a.wc(3,p,4,1,"span",7),a.Mb()),2&t){var n=a.Yb();a.wb(1),a.fc("title",n.title),a.ec("href",n.stackblitz,a.pc),a.wb(1),a.zc(n.title),a.wb(1),a.ec("ngIf",n.enableDownload)}}var d=["*"],w=["iframe"],m=o.a+"live-examples/",h=o.a+"zips/",v=function(){function t(t,e){var n=function(t){for(var e={},n=0,i=t instanceof a.j?t.nativeElement.attributes:t.attributes;n<i.length;n++){var o=i[n];e[o.name.toLowerCase()]=o.value}return e}(t),i=this.getExampleDir(n,e.path(!1)),o=this.getStackblitzName(n);this.mode=this.getMode(n),this.enableDownload=this.getEnableDownload(n),this.stackblitz=this.getStackblitz(i,o,"embedded"===this.mode),this.zip=this.getZip(i,o),this.title=this.getTitle(n)}return t.prototype.ngAfterContentInit=function(){var t=this.content.nativeElement.textContent.trim();t&&(this.title=t)},t.prototype.getEnableDownload=function(t){return!c(r(t,"noDownload"))},t.prototype.getExampleDir=function(t,e){var n=r(t,"name");if(!n){var i=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);n=i?i[0]:"index"}return n.trim()},t.prototype.getMode=function(t){var e=c(r(t,"downloadOnly")),n=c(r(t,"embedded"));return e?"downloadOnly":n?"embedded":"default"},t.prototype.getStackblitz=function(t,e,n){return""+m+t+"/"+e+"stackblitz.html"+(n?"?ctl=1":"")},t.prototype.getStackblitzName=function(t){var e=(r(t,"stackblitz")||"").trim();return e&&e+"."},t.prototype.getTitle=function(t){return(r(t,"title")||"live example").trim()},t.prototype.getZip=function(t,e){var n=t.split("/")[0];return""+h+t+"/"+e+n+".zip"},t.\u0275fac=function(e){return new(e||t)(a.Ib(a.j),a.Ib(i.d))},t.\u0275cmp=a.Cb({type:t,selectors:[["live-example"]],viewQuery:function(t,e){var n;1&t&&a.sc(s,!0),2&t&&a.jc(n=a.Vb())&&(e.content=n.first)},ngContentSelectors:d,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","Download example",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(t,e){1&t&&(a.dc(),a.Nb(0,"span",0,1),a.cc(2),a.Mb(),a.Nb(3,"span",2),a.wc(4,b,4,3,"span",3),a.wc(5,f,3,3,"span",3),a.wc(6,u,4,4,"span",4),a.Mb()),2&t&&(a.wb(3),a.ec("ngSwitch",e.mode),a.wb(1),a.ec("ngSwitchCase","embedded"),a.wb(1),a.ec("ngSwitchCase","downloadOnly"))},directives:function(){return[i.j,i.k,i.l,g,i.h]},encapsulation:2}),t}(),g=function(){function t(){}return t.prototype.ngAfterViewInit=function(){this.iframe&&(this.iframe.nativeElement.src=this.src)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Cb({type:t,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(t,e){var n;1&t&&a.sc(w,!0),2&t&&a.jc(n=a.Vb())&&(e.iframe=n.first)},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(t,e){1&t&&a.Jb(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%] { min-height: 400px; }"]}),t}(),y=function(){function t(){this.customElementComponent=v}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[i.b]]}),t}()}}]);
//# sourceMappingURL=live-example-live-example-module.359a8834b3c4c60ff10d.js.map