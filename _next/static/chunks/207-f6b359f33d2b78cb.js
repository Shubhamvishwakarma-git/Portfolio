"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[207],{905:(t,e,n)=>{n.d(e,{Mz:()=>tU,i3:()=>tK,UC:()=>tJ,bL:()=>tq,Bk:()=>tH});var r=n(2115);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,f=Math.floor,s=t=>({x:t,y:t}),u={left:"right",right:"left",bottom:"top",top:"bottom"},c={start:"end",end:"start"};function d(t,e){return"function"==typeof t?t(e):t}function p(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function m(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function y(t){return["top","bottom"].includes(p(t))?"y":"x"}function w(t){return t.replace(/start|end/g,t=>c[t])}function v(t){return t.replace(/left|right|bottom|top/g,t=>u[t])}function x(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function b(t){let{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function A(t,e,n){let r,{reference:i,floating:o}=t,l=y(e),a=m(y(e)),f=g(a),s=p(e),u="y"===l,c=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,w=i[f]/2-o[f]/2;switch(s){case"top":r={x:c,y:i.y-o.height};break;case"bottom":r={x:c,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(h(e)){case"start":r[a]-=w*(n&&u?-1:1);break;case"end":r[a]+=w*(n&&u?-1:1)}return r}let R=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(e)),s=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:c}=A(s,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:y,data:w,reset:v}=await m({x:u,y:c,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:s,platform:l,elements:{reference:t,floating:e}});u=null!=g?g:u,c=null!=y?y:c,p={...p,[o]:{...p[o],...w}},v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(d=v.placement),v.rects&&(s=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:u,y:c}=A(s,d,f)),n=-1)}return{x:u,y:c,placement:d,strategy:i,middlewareData:p}};async function L(t,e){var n;void 0===e&&(e={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=t,{boundary:s="clippingAncestors",rootBoundary:u="viewport",elementContext:c="floating",altBoundary:p=!1,padding:h=0}=d(e,t),m=x(h),g=a[p?"floating"===c?"reference":"floating":c],y=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:s,rootBoundary:u,strategy:f})),w="floating"===c?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,v=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),A=await (null==o.isElement?void 0:o.isElement(v))&&await (null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},R=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:v,strategy:f}):w);return{top:(y.top-R.top+m.top)/A.y,bottom:(R.bottom-y.bottom+m.bottom)/A.y,left:(y.left-R.left+m.left)/A.x,right:(R.right-y.right+m.right)/A.x}}function S(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function T(t){return i.some(e=>t[e]>=0)}async function E(t,e){let{placement:n,platform:r,elements:i}=t,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=h(n),f="y"===y(n),s=["left","top"].includes(l)?-1:1,u=o&&f?-1:1,c=d(e,t),{mainAxis:m,crossAxis:g,alignmentAxis:w}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return a&&"number"==typeof w&&(g="end"===a?-1*w:w),f?{x:g*u,y:m*s}:{x:m*s,y:g*u}}function C(){return"undefined"!=typeof window}function O(t){return H(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function k(t){var e;return null==(e=(H(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function H(t){return!!C()&&(t instanceof Node||t instanceof P(t).Node)}function D(t){return!!C()&&(t instanceof Element||t instanceof P(t).Element)}function N(t){return!!C()&&(t instanceof HTMLElement||t instanceof P(t).HTMLElement)}function j(t){return!!C()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof P(t).ShadowRoot)}function F(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=V(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function W(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function M(t){let e=z(),n=D(t)?V(t):t;return["transform","translate","scale","rotate","perspective"].some(t=>!!n[t]&&"none"!==n[t])||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function z(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function B(t){return["html","body","#document"].includes(O(t))}function V(t){return P(t).getComputedStyle(t)}function _(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function I(t){if("html"===O(t))return t;let e=t.assignedSlot||t.parentNode||j(t)&&t.host||k(t);return j(e)?e.host:e}function Y(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);let i=function t(e){let n=I(e);return B(n)?e.ownerDocument?e.ownerDocument.body:e.body:N(n)&&F(n)?n:t(n)}(t),o=i===(null==(r=t.ownerDocument)?void 0:r.body),l=P(i);if(o){let t=G(l);return e.concat(l,l.visualViewport||[],F(i)?i:[],t&&n?Y(t):[])}return e.concat(i,Y(i,[],n))}function G(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function X(t){let e=V(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=N(t),o=i?t.offsetWidth:n,l=i?t.offsetHeight:r,f=a(n)!==o||a(r)!==l;return f&&(n=o,r=l),{width:n,height:r,$:f}}function $(t){return D(t)?t:t.contextElement}function q(t){let e=$(t);if(!N(e))return s(1);let n=e.getBoundingClientRect(),{width:r,height:i,$:o}=X(e),l=(o?a(n.width):n.width)/r,f=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),f&&Number.isFinite(f)||(f=1),{x:l,y:f}}let U=s(0);function J(t){let e=P(t);return z()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:U}function K(t,e,n,r){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);let o=t.getBoundingClientRect(),l=$(t),a=s(1);e&&(r?D(r)&&(a=q(r)):a=q(t));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===P(l))&&i)?J(l):s(0),u=(o.left+f.x)/a.x,c=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let t=P(l),e=r&&D(r)?P(r):r,n=t,i=G(n);for(;i&&r&&e!==n;){let t=q(i),e=i.getBoundingClientRect(),r=V(i),o=e.left+(i.clientLeft+parseFloat(r.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(r.paddingTop))*t.y;u*=t.x,c*=t.y,d*=t.x,p*=t.y,u+=o,c+=l,i=G(n=P(i))}}return b({width:d,height:p,x:u,y:c})}function Q(t,e){let n=_(t).scrollLeft;return e?e.left+n:K(k(t)).left+n}function Z(t,e,n){void 0===n&&(n=!1);let r=t.getBoundingClientRect();return{x:r.left+e.scrollLeft-(n?0:Q(t,r)),y:r.top+e.scrollTop}}function tt(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=P(t),r=k(t),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let t=z();(!t||t&&"fixed"===e)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(t,n);else if("document"===e)r=function(t){let e=k(t),n=_(t),r=t.ownerDocument.body,i=l(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=l(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+Q(t),f=-n.scrollTop;return"rtl"===V(r).direction&&(a+=l(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:f}}(k(t));else if(D(e))r=function(t,e){let n=K(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=N(t)?q(t):s(1),l=t.clientWidth*o.x;return{width:l,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{let n=J(t);r={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return b(r)}function te(t){return"static"===V(t).position}function tn(t,e){if(!N(t)||"fixed"===V(t).position)return null;if(e)return e(t);let n=t.offsetParent;return k(t)===n&&(n=n.ownerDocument.body),n}function tr(t,e){let n=P(t);if(W(t))return n;if(!N(t)){let e=I(t);for(;e&&!B(e);){if(D(e)&&!te(e))return e;e=I(e)}return n}let r=tn(t,e);for(;r&&["table","td","th"].includes(O(r))&&te(r);)r=tn(r,e);return r&&B(r)&&te(r)&&!M(r)?n:r||function(t){let e=I(t);for(;N(e)&&!B(e);){if(M(e))return e;if(W(e))break;e=I(e)}return null}(t)||n}let ti=async function(t){let e=this.getOffsetParent||tr,n=this.getDimensions,r=await n(t.floating);return{reference:function(t,e,n){let r=N(e),i=k(e),o="fixed"===n,l=K(t,!0,o,e),a={scrollLeft:0,scrollTop:0},f=s(0);if(r||!r&&!o){if(("body"!==O(e)||F(i))&&(a=_(e)),r){let t=K(e,!0,o,e);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else i&&(f.x=Q(i))}let u=!i||r||o?s(0):Z(i,a);return{x:l.left+a.scrollLeft-f.x-u.x,y:l.top+a.scrollTop-f.y-u.y,width:l.width,height:l.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},to={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t,o="fixed"===i,l=k(r),a=!!e&&W(e.floating);if(r===l||a&&o)return n;let f={scrollLeft:0,scrollTop:0},u=s(1),c=s(0),d=N(r);if((d||!d&&!o)&&(("body"!==O(r)||F(l))&&(f=_(r)),N(r))){let t=K(r);u=q(r),c.x=t.x+r.clientLeft,c.y=t.y+r.clientTop}let p=!l||d||o?s(0):Z(l,f,!0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-f.scrollLeft*u.x+c.x+p.x,y:n.y*u.y-f.scrollTop*u.y+c.y+p.y}},getDocumentElement:k,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t,a=[..."clippingAncestors"===n?W(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=Y(t,[],!1).filter(t=>D(t)&&"body"!==O(t)),i=null,o="fixed"===V(t).position,l=o?I(t):t;for(;D(l)&&!B(l);){let e=V(l),n=M(l);n||"fixed"!==e.position||(i=null),(o?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||F(l)&&!n&&function t(e,n){let r=I(e);return!(r===n||!D(r)||B(r))&&("fixed"===V(r).position||t(r,n))}(t,l))?r=r.filter(t=>t!==l):i=e,l=I(l)}return e.set(t,r),r}(e,this._c):[].concat(n),r],f=a[0],s=a.reduce((t,n)=>{let r=tt(e,n,i);return t.top=l(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=l(r.left,t.left),t},tt(e,f,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:tr,getElementRects:ti,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=X(t);return{width:e,height:n}},getScale:q,isElement:D,isRTL:function(t){return"rtl"===V(t).direction}};function tl(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}let ta=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:r,placement:i,rects:a,platform:f,elements:s,middlewareData:u}=e,{element:c,padding:p=0}=d(t,e)||{};if(null==c)return{};let w=x(p),v={x:n,y:r},b=m(y(i)),A=g(b),R=await f.getDimensions(c),L="y"===b,S=L?"clientHeight":"clientWidth",T=a.reference[A]+a.reference[b]-v[b]-a.floating[A],E=v[b]-a.reference[b],C=await (null==f.getOffsetParent?void 0:f.getOffsetParent(c)),O=C?C[S]:0;O&&await (null==f.isElement?void 0:f.isElement(C))||(O=s.floating[S]||a.floating[A]);let P=O/2-R[A]/2-1,k=o(w[L?"top":"left"],P),H=o(w[L?"bottom":"right"],P),D=O-R[A]-H,N=O/2-R[A]/2+(T/2-E/2),j=l(k,o(N,D)),F=!u.arrow&&null!=h(i)&&N!==j&&a.reference[A]/2-(N<k?k:H)-R[A]/2<0,W=F?N<k?N-k:N-D:0;return{[b]:v[b]+W,data:{[b]:j,centerOffset:N-j-W,...F&&{alignmentOffset:W}},reset:F}}}),tf=(t,e,n)=>{let r=new Map,i={platform:to,...n},o={...i.platform,_c:r};return R(t,e,{...i,platform:o})};var ts=n(7650),tu="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function tc(t,e){let n,r,i;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!tc(t[r],e[r]))return!1;return!0}if((n=(i=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(e,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!t.$$typeof)&&!tc(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function td(t){return"undefined"==typeof window?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function tp(t,e){let n=td(t);return Math.round(e*n)/n}function th(t){let e=r.useRef(t);return tu(()=>{e.current=t}),e}let tm=t=>({name:"arrow",options:t,fn(e){let{element:n,padding:r}="function"==typeof t?t(e):t;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?ta({element:n.current,padding:r}).fn(e):{}:n?ta({element:n,padding:r}).fn(e):{}}}),tg=(t,e)=>({...function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,r;let{x:i,y:o,placement:l,middlewareData:a}=e,f=await E(e,t);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}}(t),options:[t,e]}),ty=(t,e)=>({...function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:r,placement:i}=e,{mainAxis:a=!0,crossAxis:f=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...u}=d(t,e),c={x:n,y:r},h=await L(e,u),g=y(p(i)),w=m(g),v=c[w],x=c[g];if(a){let t="y"===w?"top":"left",e="y"===w?"bottom":"right",n=v+h[t],r=v-h[e];v=l(n,o(v,r))}if(f){let t="y"===g?"top":"left",e="y"===g?"bottom":"right",n=x+h[t],r=x-h[e];x=l(n,o(x,r))}let b=s.fn({...e,[w]:v,[g]:x});return{...b,data:{x:b.x-n,y:b.y-r,enabled:{[w]:a,[g]:f}}}}}}(t),options:[t,e]}),tw=(t,e)=>({...function(t){return void 0===t&&(t={}),{options:t,fn(e){let{x:n,y:r,placement:i,rects:o,middlewareData:l}=e,{offset:a=0,mainAxis:f=!0,crossAxis:s=!0}=d(t,e),u={x:n,y:r},c=y(i),h=m(c),g=u[h],w=u[c],v=d(a,e),x="number"==typeof v?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(f){let t="y"===h?"height":"width",e=o.reference[h]-o.floating[t]+x.mainAxis,n=o.reference[h]+o.reference[t]-x.mainAxis;g<e?g=e:g>n&&(g=n)}if(s){var b,A;let t="y"===h?"width":"height",e=["top","left"].includes(p(i)),n=o.reference[c]-o.floating[t]+(e&&(null==(b=l.offset)?void 0:b[c])||0)+(e?0:x.crossAxis),r=o.reference[c]+o.reference[t]+(e?0:(null==(A=l.offset)?void 0:A[c])||0)-(e?x.crossAxis:0);w<n?w=n:w>r&&(w=r)}return{[h]:g,[c]:w}}}}(t),options:[t,e]}),tv=(t,e)=>({...function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,r,i,o,l;let{placement:a,middlewareData:f,rects:s,initialPlacement:u,platform:c,elements:x}=e,{mainAxis:b=!0,crossAxis:A=!0,fallbackPlacements:R,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:E=!0,...C}=d(t,e);if(null!=(n=f.arrow)&&n.alignmentOffset)return{};let O=p(a),P=y(u),k=p(u)===u,H=await (null==c.isRTL?void 0:c.isRTL(x.floating)),D=R||(k||!E?[v(u)]:function(t){let e=v(t);return[w(t),e,w(e)]}(u)),N="none"!==T;!R&&N&&D.push(...function(t,e,n,r){let i=h(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(p(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(w)))),o}(u,E,T,H));let j=[u,...D],F=await L(e,C),W=[],M=(null==(r=f.flip)?void 0:r.overflows)||[];if(b&&W.push(F[O]),A){let t=function(t,e,n){void 0===n&&(n=!1);let r=h(t),i=m(y(t)),o=g(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=v(l)),[l,v(l)]}(a,s,H);W.push(F[t[0]],F[t[1]])}if(M=[...M,{placement:a,overflows:W}],!W.every(t=>t<=0)){let t=((null==(i=f.flip)?void 0:i.index)||0)+1,e=j[t];if(e)return{data:{index:t,overflows:M},reset:{placement:e}};let n=null==(o=M.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:o.placement;if(!n)switch(S){case"bestFit":{let t=null==(l=M.filter(t=>{if(N){let e=y(t.placement);return e===P||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:l[0];t&&(n=t);break}case"initialPlacement":n=u}if(a!==n)return{reset:{placement:n}}}return{}}}}(t),options:[t,e]}),tx=(t,e)=>({...function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var n,r;let i,a;let{placement:f,rects:s,platform:u,elements:c}=e,{apply:m=()=>{},...g}=d(t,e),w=await L(e,g),v=p(f),x=h(f),b="y"===y(f),{width:A,height:R}=s.floating;"top"===v||"bottom"===v?(i=v,a=x===(await (null==u.isRTL?void 0:u.isRTL(c.floating))?"start":"end")?"left":"right"):(a=v,i="end"===x?"top":"bottom");let S=R-w.top-w.bottom,T=A-w.left-w.right,E=o(R-w[i],S),C=o(A-w[a],T),O=!e.middlewareData.shift,P=E,k=C;if(null!=(n=e.middlewareData.shift)&&n.enabled.x&&(k=T),null!=(r=e.middlewareData.shift)&&r.enabled.y&&(P=S),O&&!x){let t=l(w.left,0),e=l(w.right,0),n=l(w.top,0),r=l(w.bottom,0);b?k=A-2*(0!==t||0!==e?t+e:l(w.left,w.right)):P=R-2*(0!==n||0!==r?n+r:l(w.top,w.bottom))}await m({...e,availableWidth:k,availableHeight:P});let H=await u.getDimensions(c.floating);return A!==H.width||R!==H.height?{reset:{rects:!0}}:{}}}}(t),options:[t,e]}),tb=(t,e)=>({...function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){let{rects:n}=e,{strategy:r="referenceHidden",...i}=d(t,e);switch(r){case"referenceHidden":{let t=S(await L(e,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:T(t)}}}case"escaped":{let t=S(await L(e,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:T(t)}}}default:return{}}}}}(t),options:[t,e]}),tA=(t,e)=>({...tm(t),options:[t,e]});var tR=n(3360),tL=n(5155),tS=r.forwardRef((t,e)=>{let{children:n,width:r=10,height:i=5,...o}=t;return(0,tL.jsx)(tR.sG.svg,{...o,ref:e,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:(0,tL.jsx)("polygon",{points:"0,0 30,0 15,10"})})});tS.displayName="Arrow";var tT=n(8068),tE=n(8166),tC=n(1524),tO=n(6611),tP="Popper",[tk,tH]=(0,tE.A)(tP),[tD,tN]=tk(tP),tj=t=>{let{__scopePopper:e,children:n}=t,[i,o]=r.useState(null);return(0,tL.jsx)(tD,{scope:e,anchor:i,onAnchorChange:o,children:n})};tj.displayName=tP;var tF="PopperAnchor",tW=r.forwardRef((t,e)=>{let{__scopePopper:n,virtualRef:i,...o}=t,l=tN(tF,n),a=r.useRef(null),f=(0,tT.s)(e,a);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)}),i?null:(0,tL.jsx)(tR.sG.div,{...o,ref:f})});tW.displayName=tF;var tM="PopperContent",[tz,tB]=tk(tM),tV=r.forwardRef((t,e)=>{var n,i,a,s,u,c,d,p;let{__scopePopper:h,side:m="bottom",sideOffset:g=0,align:y="center",alignOffset:w=0,arrowPadding:v=0,avoidCollisions:x=!0,collisionBoundary:b=[],collisionPadding:A=0,sticky:R="partial",hideWhenDetached:L=!1,updatePositionStrategy:S="optimized",onPlaced:T,...E}=t,C=tN(tM,h),[O,P]=r.useState(null),H=(0,tT.s)(e,t=>P(t)),[D,N]=r.useState(null),j=function(t){let[e,n]=r.useState(void 0);return(0,tO.N)(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});let e=new ResizeObserver(e=>{let r,i;if(!Array.isArray(e)||!e.length)return;let o=e[0];if("borderBoxSize"in o){let t=o.borderBoxSize,e=Array.isArray(t)?t[0]:t;r=e.inlineSize,i=e.blockSize}else r=t.offsetWidth,i=t.offsetHeight;n({width:r,height:i})});return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}n(void 0)},[t]),e}(D),F=null!==(d=null==j?void 0:j.width)&&void 0!==d?d:0,W=null!==(p=null==j?void 0:j.height)&&void 0!==p?p:0,M="number"==typeof A?A:{top:0,right:0,bottom:0,left:0,...A},z=Array.isArray(b)?b:[b],B=z.length>0,V={padding:M,boundary:z.filter(tG),altBoundary:B},{refs:_,floatingStyles:I,placement:G,isPositioned:X,middlewareData:q}=function(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:s,open:u}=t,[c,d]=r.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(i);tc(p,i)||h(i);let[m,g]=r.useState(null),[y,w]=r.useState(null),v=r.useCallback(t=>{t!==R.current&&(R.current=t,g(t))},[]),x=r.useCallback(t=>{t!==L.current&&(L.current=t,w(t))},[]),b=l||m,A=a||y,R=r.useRef(null),L=r.useRef(null),S=r.useRef(c),T=null!=s,E=th(s),C=th(o),O=th(u),P=r.useCallback(()=>{if(!R.current||!L.current)return;let t={placement:e,strategy:n,middleware:p};C.current&&(t.platform=C.current),tf(R.current,L.current,t).then(t=>{let e={...t,isPositioned:!1!==O.current};k.current&&!tc(S.current,e)&&(S.current=e,ts.flushSync(()=>{d(e)}))})},[p,e,n,C,O]);tu(()=>{!1===u&&S.current.isPositioned&&(S.current.isPositioned=!1,d(t=>({...t,isPositioned:!1})))},[u]);let k=r.useRef(!1);tu(()=>(k.current=!0,()=>{k.current=!1}),[]),tu(()=>{if(b&&(R.current=b),A&&(L.current=A),b&&A){if(E.current)return E.current(b,A,P);P()}},[b,A,P,E,T]);let H=r.useMemo(()=>({reference:R,floating:L,setReference:v,setFloating:x}),[v,x]),D=r.useMemo(()=>({reference:b,floating:A}),[b,A]),N=r.useMemo(()=>{let t={position:n,left:0,top:0};if(!D.floating)return t;let e=tp(D.floating,c.x),r=tp(D.floating,c.y);return f?{...t,transform:"translate("+e+"px, "+r+"px)",...td(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:r}},[n,f,D.floating,c.x,c.y]);return r.useMemo(()=>({...c,update:P,refs:H,elements:D,floatingStyles:N}),[c,P,H,D,N])}({strategy:"fixed",placement:m+("center"!==y?"-"+y:""),whileElementsMounted:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t,e,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=$(t),h=a||s?[...p?Y(p):[],...Y(e)]:[];h.forEach(t=>{a&&t.addEventListener("scroll",n,{passive:!0}),s&&t.addEventListener("resize",n)});let m=p&&c?function(t,e){let n,r=null,i=k(t);function a(){var t;clearTimeout(n),null==(t=r)||t.disconnect(),r=null}return!function s(u,c){void 0===u&&(u=!1),void 0===c&&(c=1),a();let d=t.getBoundingClientRect(),{left:p,top:h,width:m,height:g}=d;if(u||e(),!m||!g)return;let y=f(h),w=f(i.clientWidth-(p+m)),v={rootMargin:-y+"px "+-w+"px "+-f(i.clientHeight-(h+g))+"px "+-f(p)+"px",threshold:l(0,o(1,c))||1},x=!0;function b(e){let r=e[0].intersectionRatio;if(r!==c){if(!x)return s();r?s(!1,r):n=setTimeout(()=>{s(!1,1e-7)},1e3)}1!==r||tl(d,t.getBoundingClientRect())||s(),x=!1}try{r=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch(t){r=new IntersectionObserver(b,v)}r.observe(t)}(!0),a}(p,n):null,g=-1,y=null;u&&(y=new ResizeObserver(t=>{let[r]=t;r&&r.target===p&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=y)||t.observe(e)})),n()}),p&&!d&&y.observe(p),y.observe(e));let w=d?K(t):null;return d&&function e(){let r=K(t);w&&!tl(w,r)&&n(),w=r,i=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach(t=>{a&&t.removeEventListener("scroll",n),s&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=y)||t.disconnect(),y=null,d&&cancelAnimationFrame(i)}}(...e,{animationFrame:"always"===S})},elements:{reference:C.anchor},middleware:[tg({mainAxis:g+W,alignmentAxis:w}),x&&ty({mainAxis:!0,crossAxis:!1,limiter:"partial"===R?tw():void 0,...V}),x&&tv({...V}),tx({...V,apply:t=>{let{elements:e,rects:n,availableWidth:r,availableHeight:i}=t,{width:o,height:l}=n.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(i,"px")),a.setProperty("--radix-popper-anchor-width","".concat(o,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),D&&tA({element:D,padding:v}),tX({arrowWidth:F,arrowHeight:W}),L&&tb({strategy:"referenceHidden",...V})]}),[U,J]=t$(G),Q=(0,tC.c)(T);(0,tO.N)(()=>{X&&(null==Q||Q())},[X,Q]);let Z=null===(n=q.arrow)||void 0===n?void 0:n.x,tt=null===(i=q.arrow)||void 0===i?void 0:i.y,te=(null===(a=q.arrow)||void 0===a?void 0:a.centerOffset)!==0,[tn,tr]=r.useState();return(0,tO.N)(()=>{O&&tr(window.getComputedStyle(O).zIndex)},[O]),(0,tL.jsx)("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...I,transform:X?I.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:tn,"--radix-popper-transform-origin":[null===(s=q.transformOrigin)||void 0===s?void 0:s.x,null===(u=q.transformOrigin)||void 0===u?void 0:u.y].join(" "),...(null===(c=q.hide)||void 0===c?void 0:c.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,tL.jsx)(tz,{scope:h,placedSide:U,onArrowChange:N,arrowX:Z,arrowY:tt,shouldHideArrow:te,children:(0,tL.jsx)(tR.sG.div,{"data-side":U,"data-align":J,...E,ref:H,style:{...E.style,animation:X?void 0:"none"}})})})});tV.displayName=tM;var t_="PopperArrow",tI={top:"bottom",right:"left",bottom:"top",left:"right"},tY=r.forwardRef(function(t,e){let{__scopePopper:n,...r}=t,i=tB(t_,n),o=tI[i.placedSide];return(0,tL.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,tL.jsx)(tS,{...r,ref:e,style:{...r.style,display:"block"}})})});function tG(t){return null!==t}tY.displayName=t_;var tX=t=>({name:"transformOrigin",options:t,fn(e){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:s}=e,u=(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset)!==0,c=u?0:t.arrowWidth,d=u?0:t.arrowHeight,[p,h]=t$(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(o=null===(r=s.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+c/2,y=(null!==(l=null===(i=s.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,w="",v="";return"bottom"===p?(w=u?m:"".concat(g,"px"),v="".concat(-d,"px")):"top"===p?(w=u?m:"".concat(g,"px"),v="".concat(f.floating.height+d,"px")):"right"===p?(w="".concat(-d,"px"),v=u?m:"".concat(y,"px")):"left"===p&&(w="".concat(f.floating.width+d,"px"),v=u?m:"".concat(y,"px")),{data:{x:w,y:v}}}});function t$(t){let[e,n="center"]=t.split("-");return[e,n]}var tq=tj,tU=tW,tJ=tV,tK=tY},3543:(t,e,n)=>{n.d(e,{b:()=>a,s:()=>l});var r=n(2115),i=n(3360),o=n(5155),l=r.forwardRef((t,e)=>(0,o.jsx)(i.sG.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));l.displayName="VisuallyHidden";var a=l}}]);