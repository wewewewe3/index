-function(){"use strict";var f=function(a,b,c){var d;c?(d=document.createEvent("CustomEvent"),d.initCustomEvent(a,!0,!0,c)):(d=document.createEvent("Event"),d.initEvent(a,!0,!0));b.dispatchEvent(d);return d},g=function(a){a=a.timeStamp;return 5E12>a?a:a/1E3};var l=["auto","none","pan-x","pan-y"],m=2,n=null,p=!1,q=null,r=null,u=[],x=function(a,b){var c=b.changedTouches[0];null==n&&(n=c.identifier,q=c.clientX,r=c.clientY,p=!1);v(b);w(a,"pointerover",b);w(a,"pointerdown",b)},y=function(a,b,c){if(!p){var d;if(d=1!=a&&null!=q){var e=c.touches[0];d=Math.abs(e.clientX-q);e=Math.abs(e.clientY-r);d=2==a?d>e:e>d}d?(w(b,"pointercancel",c),p=!0,n=null):(w(b,"pointermove",c),c.preventDefault());r=q=null}},A=function(a,b){p||(v(b),z(b),w(a,"pointerup",b),w(a,"pointerout",
b))},z=function(a){null!=n&&B(a,function(a){n==a.identifier&&(r=q=n=null)})},v=function(a){a=a.changedTouches[0];n==a.identifier&&(a={i:a.clientX,j:a.clientY,l:a.screenX,m:a.screenY},u.push(a),setTimeout(function(a){a=u.indexOf(a);-1<a&&u.splice(a,1)}.bind(null,a),2500))},C=function(a,b,c,d){b=Math.abs(b-d);return 25>=Math.abs(a-c)&&25>=b},D=function(a,b,c,d){var e=document.createEvent("Event");e.initEvent(a,!0,!0);e.clientX=c.clientX;e.clientY=c.clientY;e.pointerId=b;e.isPrimary=d;return e},E={},
F=function(a){a=""+a.identifier;E[a]||(E[a]=m++);return E[a]},G=function(a,b,c){c.preventDefault();var d;a:{for(d=0;d<u.length;d++)if(C(c.clientX,c.clientY,u[d].i,u[d].j)||C(c.screenX,c.screenY,u[d].l,u[d].m)){d=!0;break a}d=!1}d||a.dispatchEvent(D(b,1,c,!0))},H=function(a,b,c){a.dispatchEvent(D(b,c.pointerId,c,c.isPrimary))},w=function(a,b,c){B(c,function(c){a.dispatchEvent(D(b,F(c),c,n==c.identifier))})},B=function(a,b){for(var c=a.changedTouches,d=0,e=c.length;d<e;++d)b(c[d])};var I=function(a){var b=document.createEvent("Event");b.initEvent("tap",!0,!0);b.clientX=a.clientX;b.clientY=a.clientY;return b},K=function(a,b,c){return J(a,c.clientX,c.clientY,c.clientX-b.downX,c.clientY-b.downY,c.clientX-b.lastX,c.clientY-b.lastY)},J=function(a,b,c,d,e,k,t){var h=document.createEvent("Event");h.initEvent(a,!0,!0);h.clientX=b;h.clientY=c;h.dx=d;h.dy=e;h.ddx=k;h.ddy=t;return h};var L=function(a,b){return Math.abs(a)>=Math.abs(b)?0<a?"swiperight":"swipeleft":0<b?"swipedown":"swipeup"};document.registerElement&&document.registerElement("gwd-gesture",{prototype:Object.create(HTMLElement.prototype,{createdCallback:{value:function(){this.a={};this.b=!1;this.g=f.bind(null,"hover",this);this.d=this.down_.bind(this);this.e=this.move_.bind(this);this.h=this.up_.bind(this);this.f=this.out_.bind(this);this.c=this.cancel_.bind(this);this.n=this.hasAttribute("swipe-velocity")?parseFloat(this.getAttribute("swipe-velocity")):.5;this.k=this.hasAttribute("swipe-distance")?parseFloat(this.getAttribute("swipe-distance")):
.1;var a=1;switch(this.getAttribute("touch-action")){case "auto":a=0;break;case "pan-x":a=2;break;case "pan-y":a=3}var a=a||0,b=l[a];this.setAttribute("touch-action",b);this.style.touchAction=b;this.style.msTouchAction=b;navigator.pointerEnabled||(navigator.msPointerEnabled?(this.addEventListener("MSPointerOver",H.bind(null,this,"pointerover"),!1),this.addEventListener("MSPointerDown",H.bind(null,this,"pointerdown"),!1),this.addEventListener("MSPointerMove",H.bind(null,this,"pointermove"),!1),this.addEventListener("MSPointerUp",
H.bind(null,this,"pointerup"),!1),this.addEventListener("MSPointerOut",H.bind(null,this,"pointerout"),!1),this.addEventListener("MSPointerCancel",H.bind(null,this,"pointercancel"),!1)):(this.addEventListener("mouseover",G.bind(null,this,"pointerover"),!1),this.addEventListener("mousedown",G.bind(null,this,"pointerdown"),!1),this.addEventListener("mousemove",G.bind(null,this,"pointermove"),!1),this.addEventListener("mouseup",G.bind(null,this,"pointerup"),!1),this.addEventListener("mouseout",G.bind(null,
this,"pointerout"),!1),void 0!==window.ontouchstart&&(this.addEventListener("touchstart",x.bind(null,this),!1),0!=a&&this.addEventListener("touchmove",y.bind(null,a,this),!1),this.addEventListener("touchend",A.bind(null,this),!1))))},enumerable:!0},attachedCallback:{value:function(){this.addEventListener("pointerover",this.g,!1);this.addEventListener("pointerdown",this.d,!1);this.addEventListener("pointermove",this.e,!1);this.addEventListener("pointerup",this.h,!1);this.addEventListener("pointerout",
this.f,!1);this.addEventListener("pointercancel",this.c,!1)},enumerable:!0},detachedCallback:{value:function(){this.removeEventListener("pointerover",this.g,!1);this.removeEventListener("pointerdown",this.d,!1);this.removeEventListener("pointermove",this.e,!1);this.removeEventListener("pointerup",this.h,!1);this.removeEventListener("pointerout",this.f,!1);this.removeEventListener("pointercancel",this.c,!1)},enumerable:!0},down_:{value:function(a){a.isPrimary&&(this.addPointer_(a),this.b=!1)},enumerable:!1},
move_:{value:function(a){var b=this.a[""+a.pointerId];if(b){if(10<Math.abs(b.downX-a.clientX)||10<Math.abs(b.downY-a.clientY))this.b=!0;b.tracking||(this.dispatchEvent(J("trackstart",b.downX,b.downY,0,0,0,0)),b.tracking=!0);this.dispatchEvent(K("track",b,a));b.lastX=a.clientX;b.lastY=a.clientY}},enumerable:!1},up_:{value:function(a){this.upOut_(a)&&(this.b||this.dispatchEvent(I(a)))},enumerable:!1},out_:{value:function(a){this.upOut_(a);f("hoverend",this)},enumerable:!1},upOut_:{value:function(a){var b=
this.a[""+a.pointerId];b&&(b.tracking&&(this.dispatchEvent(K("trackend",b,a)),this.maybeDispatchSwipe_(b,a)),this.removePointer_(a));return b},enumerable:!1},cancel_:{value:function(a){this.removePointer_(a);this.b=!0},enumerable:!1},removePointer_:{value:function(a){a=""+a.pointerId;this.a[a]&&delete this.a[a]},enumerable:!1},addPointer_:{value:function(a){var b=""+a.pointerId;this.a[b]||(this.a[b]={downX:a.clientX,downY:a.clientY,downTime:g(a),lastX:a.clientX,lastY:a.clientY,tracking:!1})},enumerable:!1},
maybeDispatchSwipe_:{value:function(a,b){var c=b.clientX-a.downX,d=b.clientY-a.downY,e;a:{var k=g(b)-a.downTime;e=this.k;var t=c/k,k=d/k;if(Math.abs(Math.sqrt(t*t+k*k))<this.n)e=!1;else switch(L(c,d)){case "swipeup":case "swipedown":e=.92<Math.abs(d/Math.sqrt(d*d+c*c))&&Math.abs(d)>=this.clientHeight*e;break a;case "swipeleft":case "swiperight":e=.92<Math.abs(c/Math.sqrt(c*c+d*d))&&Math.abs(c)>=this.clientWidth*e;break a;default:e=!1}}e&&f(L(c,d),this)}}})});}()
