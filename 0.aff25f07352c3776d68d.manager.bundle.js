(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{503:function(mo,me,w){"use strict";w.r(me),w.d(me,"WithTooltipPure",function(){return Re}),w.d(me,"WithToolTipState",function(){return Ue}),w.d(me,"WithTooltip",function(){return Ue});var go=w(35),yo=w(106),bo=w(31),Oo=w(36),O=w(0),k=w.n(O),ge=w(1),je=w(4),kt=w(41),z=w(6),Ye=w(137),Wt=w(163),Xe=O.createContext(),ze=O.createContext();function Bt(t){var e=t.children,o=O.useState(null),r=o[0],n=o[1],i=O.useRef(!1);O.useEffect(function(){return function(){i.current=!0}},[]);var s=O.useCallback(function(a){i.current||n(a)},[]);return O.createElement(Xe.Provider,{value:r},O.createElement(ze.Provider,{value:s},e))}var Ge=function(e){return Array.isArray(e)?e[0]:e},Je=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Ae=function(e,o){if(typeof e=="function")return Je(e,o);e!=null&&(e.current=o)},Ke=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},Qe=typeof window!="undefined"&&window.document&&window.document.createElement?O.useLayoutEffect:O.useEffect;function te(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function L(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Me(t){var e=L(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function ae(t){var e=L(t).Element;return t instanceof e||t instanceof Element}function H(t){var e=L(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ze(t){if(typeof ShadowRoot=="undefined")return!1;var e=L(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Dt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Lt(t){return t===L(t)||!H(t)?Me(t):Dt(t)}function U(t){return t?(t.nodeName||"").toLowerCase():null}function Q(t){return((ae(t)?t.ownerDocument:t.document)||window.document).documentElement}function ke(t){return te(Q(t)).left+Me(t).scrollLeft}function G(t){return L(t).getComputedStyle(t)}function We(t){var e=G(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Ht(t,e,o){o===void 0&&(o=!1);var r=Q(e),n=te(t),i=H(e),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(i||!i&&!o)&&((U(e)!=="body"||We(r))&&(s=Lt(e)),H(e)?(a=te(e),a.x+=e.clientLeft,a.y+=e.clientTop):r&&(a.x=ke(r))),{x:n.left+s.scrollLeft-a.x,y:n.top+s.scrollTop-a.y,width:n.width,height:n.height}}function Be(t){var e=te(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function ye(t){return U(t)==="html"?t:t.assignedSlot||t.parentNode||(Ze(t)?t.host:null)||Q(t)}function qe(t){return["html","body","#document"].indexOf(U(t))>=0?t.ownerDocument.body:H(t)&&We(t)?t:qe(ye(t))}function se(t,e){var o;e===void 0&&(e=[]);var r=qe(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=L(r),s=n?[i].concat(i.visualViewport||[],We(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(se(ye(s)))}function Nt(t){return["table","td","th"].indexOf(U(t))>=0}function _e(t){return!H(t)||G(t).position==="fixed"?null:t.offsetParent}function It(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&H(t)){var r=G(t);if(r.position==="fixed")return null}for(var n=ye(t);H(n)&&["html","body"].indexOf(U(n))<0;){var i=G(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function le(t){for(var e=L(t),o=_e(t);o&&Nt(o)&&G(o).position==="static";)o=_e(o);return o&&(U(o)==="html"||U(o)==="body"&&G(o).position==="static")?e:o||It(t)||e}var W="top",N="bottom",I="right",B="left",De="auto",ce=[W,N,I,B],re="start",Le="end",Ut="clippingParents",et="viewport",pe="popper",$t="reference",tt=ce.reduce(function(t,e){return t.concat([e+"-"+re,e+"-"+Le])},[]),rt=[].concat(ce,[De]).reduce(function(t,e){return t.concat([e,e+"-"+re,e+"-"+Le])},[]),Ft="beforeRead",Vt="read",Yt="afterRead",Xt="beforeMain",zt="main",Gt="afterMain",Jt="beforeWrite",Kt="write",Qt="afterWrite",Zt=[Ft,Vt,Yt,Xt,zt,Gt,Jt,Kt,Qt];function qt(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function _t(t){var e=qt(t);return Zt.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function er(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function tr(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var wo="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",To="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",ot={placement:"bottom",modifiers:[],strategy:"absolute"};function nt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function it(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?ot:n;return function(a,l,p){p===void 0&&(p=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ot,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,f={state:c,setOptions:function(R){g(),c.options=Object.assign({},i,c.options,R),c.scrollParents={reference:ae(a)?se(a):a.contextElement?se(a.contextElement):[],popper:se(l)};var T=_t(tr([].concat(r,c.options.modifiers)));if(c.orderedModifiers=T.filter(function(j){return j.enabled}),!1)var x,u,y,b,C,P,E;return h(),f.update()},forceUpdate:function(){if(!m){var R=c.elements,T=R.reference,x=R.popper;if(!!nt(T,x)){c.rects={reference:Ht(T,le(x),c.options.strategy==="fixed"),popper:Be(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(A){return c.modifiersData[A.name]=Object.assign({},A.data)});for(var u=0,y=0;y<c.orderedModifiers.length;y++){if(c.reset===!0){c.reset=!1,y=-1;continue}var b=c.orderedModifiers[y],C=b.fn,P=b.options,E=P===void 0?{}:P,j=b.name;typeof C=="function"&&(c=C({state:c,options:E,name:j,instance:f})||c)}}}},update:er(function(){return new Promise(function(v){f.forceUpdate(),v(c)})}),destroy:function(){g(),m=!0}};if(!nt(a,l))return f;f.setOptions(p).then(function(v){!m&&p.onFirstUpdate&&p.onFirstUpdate(v)});function h(){c.orderedModifiers.forEach(function(v){var R=v.name,T=v.options,x=T===void 0?{}:T,u=v.effect;if(typeof u=="function"){var y=u({state:c,name:R,instance:f,options:x}),b=function(){};d.push(y||b)}})}function g(){d.forEach(function(v){return v()}),d=[]}return f}}var xo=it(),be={passive:!0};function rr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=L(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&p.forEach(function(c){c.addEventListener("scroll",o.update,be)}),a&&l.addEventListener("resize",o.update,be),function(){i&&p.forEach(function(c){c.removeEventListener("scroll",o.update,be)}),a&&l.removeEventListener("resize",o.update,be)}}var or={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:rr,data:{}};function $(t){return t.split("-")[0]}function ue(t){return t.split("-")[1]}function He(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function at(t){var e=t.reference,o=t.element,r=t.placement,n=r?$(r):null,i=r?ue(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case W:l={x:s,y:e.y-o.height};break;case N:l={x:s,y:e.y+e.height};break;case I:l={x:e.x+e.width,y:a};break;case B:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var p=n?He(n):null;if(p!=null){var c=p==="y"?"height":"width";switch(i){case re:l[p]=l[p]-(e[c]/2-o[c]/2);break;case Le:l[p]=l[p]+(e[c]/2-o[c]/2);break;default:}}return l}function nr(t){var e=t.state,o=t.name;e.modifiersData[o]=at({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var ir={name:"popperOffsets",enabled:!0,phase:"read",fn:nr,data:{}},Z=Math.max,fe=Math.min,Oe=Math.round,ar={top:"auto",right:"auto",bottom:"auto",left:"auto"};function sr(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:Oe(Oe(e*n)/n)||0,y:Oe(Oe(o*n)/n)||0}}function st(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.offsets,s=t.position,a=t.gpuAcceleration,l=t.adaptive,p=t.roundOffsets,c=p===!0?sr(i):typeof p=="function"?p(i):i,d=c.x,m=d===void 0?0:d,f=c.y,h=f===void 0?0:f,g=i.hasOwnProperty("x"),v=i.hasOwnProperty("y"),R=B,T=W,x=window;if(l){var u=le(o),y="clientHeight",b="clientWidth";u===L(o)&&(u=Q(o),G(u).position!=="static"&&(y="scrollHeight",b="scrollWidth")),u=u,n===W&&(T=N,h-=u[y]-r.height,h*=a?1:-1),n===B&&(R=I,m-=u[b]-r.width,m*=a?1:-1)}var C=Object.assign({position:s},l&&ar);if(a){var P;return Object.assign({},C,(P={},P[T]=v?"0":"",P[R]=g?"0":"",P.transform=(x.devicePixelRatio||1)<2?"translate("+m+"px, "+h+"px)":"translate3d("+m+"px, "+h+"px, 0)",P))}return Object.assign({},C,(e={},e[T]=v?h+"px":"",e[R]=g?m+"px":"",e.transform="",e))}function lr(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a;if(!1)var p;var c={placement:$(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,st(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,st(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var cr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:lr,data:{}};function pr(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!H(i)||!U(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function ur(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,p){return l[p]="",l},{});!H(n)||!U(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var fr={name:"applyStyles",enabled:!0,phase:"write",fn:pr,effect:ur,requires:["computeStyles"]};function dr(t,e,o){var r=$(t),n=[B,W].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[B,I].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function vr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=rt.reduce(function(c,d){return c[d]=dr(d,e.rects,i),c},{}),a=s[e.placement],l=a.x,p=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=p),e.modifiersData[r]=s}var hr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:vr},mr={left:"right",right:"left",bottom:"top",top:"bottom"};function we(t){return t.replace(/left|right|bottom|top/g,function(e){return mr[e]})}var gr={start:"end",end:"start"};function lt(t){return t.replace(/start|end/g,function(e){return gr[e]})}function yr(t){var e=L(t),o=Q(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+ke(t),y:a}}function br(t){var e,o=Q(t),r=Me(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=Z(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=Z(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+ke(t),l=-r.scrollTop;return G(n||o).direction==="rtl"&&(a+=Z(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function ct(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&Ze(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ne(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Or(t){var e=te(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function pt(t,e){return e===et?Ne(yr(t)):H(e)?Or(e):Ne(br(Q(t)))}function wr(t){var e=se(ye(t)),o=["absolute","fixed"].indexOf(G(t).position)>=0,r=o&&H(t)?le(t):t;return ae(r)?e.filter(function(n){return ae(n)&&ct(n,r)&&U(n)!=="body"}):[]}function Tr(t,e,o){var r=e==="clippingParents"?wr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var p=pt(t,l);return a.top=Z(p.top,a.top),a.right=fe(p.right,a.right),a.bottom=fe(p.bottom,a.bottom),a.left=Z(p.left,a.left),a},pt(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ut(){return{top:0,right:0,bottom:0,left:0}}function ft(t){return Object.assign({},ut(),t)}function dt(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}function de(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?Ut:i,a=o.rootBoundary,l=a===void 0?et:a,p=o.elementContext,c=p===void 0?pe:p,d=o.altBoundary,m=d===void 0?!1:d,f=o.padding,h=f===void 0?0:f,g=ft(typeof h!="number"?h:dt(h,ce)),v=c===pe?$t:pe,R=t.elements.reference,T=t.rects.popper,x=t.elements[m?v:c],u=Tr(ae(x)?x:x.contextElement||Q(t.elements.popper),s,l),y=te(R),b=at({reference:y,element:T,strategy:"absolute",placement:n}),C=Ne(Object.assign({},T,b)),P=c===pe?C:y,E={top:u.top-P.top+g.top,bottom:P.bottom-u.bottom+g.bottom,left:u.left-P.left+g.left,right:P.right-u.right+g.right},j=t.modifiersData.offset;if(c===pe&&j){var A=j[n];Object.keys(E).forEach(function(M){var S=[I,N].indexOf(M)>=0?1:-1,Y=[W,N].indexOf(M)>=0?"y":"x";E[M]+=A[Y]*S})}return E}function xr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,p=l===void 0?rt:l,c=ue(r),d=c?a?tt:tt.filter(function(h){return ue(h)===c}):ce,m=d.filter(function(h){return p.indexOf(h)>=0});m.length===0&&(m=d);var f=m.reduce(function(h,g){return h[g]=de(t,{placement:g,boundary:n,rootBoundary:i,padding:s})[$(g)],h},{});return Object.keys(f).sort(function(h,g){return f[h]-f[g]})}function Rr(t){if($(t)===De)return[];var e=we(t);return[lt(t),e,lt(e)]}function Pr(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,p=o.padding,c=o.boundary,d=o.rootBoundary,m=o.altBoundary,f=o.flipVariations,h=f===void 0?!0:f,g=o.allowedAutoPlacements,v=e.options.placement,R=$(v),T=R===v,x=l||(T||!h?[we(v)]:Rr(v)),u=[v].concat(x).reduce(function(ee,X){return ee.concat($(X)===De?xr(e,{placement:X,boundary:c,rootBoundary:d,padding:p,flipVariations:h,allowedAutoPlacements:g}):X)},[]),y=e.rects.reference,b=e.rects.popper,C=new Map,P=!0,E=u[0],j=0;j<u.length;j++){var A=u[j],M=$(A),S=ue(A)===re,Y=[W,N].indexOf(M)>=0,_=Y?"width":"height",J=de(e,{placement:A,boundary:c,rootBoundary:d,altBoundary:m,padding:p}),K=Y?S?I:B:S?N:W;y[_]>b[_]&&(K=we(K));var he=we(K),oe=[];if(i&&oe.push(J[M]<=0),a&&oe.push(J[K]<=0,J[he]<=0),oe.every(function(ee){return ee})){E=A,P=!1;break}C.set(A,oe)}if(P)for(var Pe=h?3:1,$e=function(X){var Ee=u.find(function(Fe){var ie=C.get(Fe);if(ie)return ie.slice(0,X).every(function(Ve){return Ve})});if(Ee)return E=Ee,"break"},ne=Pe;ne>0;ne--){var Ce=$e(ne);if(Ce==="break")break}e.placement!==E&&(e.modifiersData[r]._skip=!0,e.placement=E,e.reset=!0)}}var Cr={name:"flip",enabled:!0,phase:"main",fn:Pr,requiresIfExists:["offset"],data:{_skip:!1}};function Er(t){return t==="x"?"y":"x"}function Te(t,e,o){return Z(t,fe(e,o))}function Sr(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,p=o.rootBoundary,c=o.altBoundary,d=o.padding,m=o.tether,f=m===void 0?!0:m,h=o.tetherOffset,g=h===void 0?0:h,v=de(e,{boundary:l,rootBoundary:p,padding:d,altBoundary:c}),R=$(e.placement),T=ue(e.placement),x=!T,u=He(R),y=Er(u),b=e.modifiersData.popperOffsets,C=e.rects.reference,P=e.rects.popper,E=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,j={x:0,y:0};if(!!b){if(i||a){var A=u==="y"?W:B,M=u==="y"?N:I,S=u==="y"?"height":"width",Y=b[u],_=b[u]+v[A],J=b[u]-v[M],K=f?-P[S]/2:0,he=T===re?C[S]:P[S],oe=T===re?-P[S]:-C[S],Pe=e.elements.arrow,$e=f&&Pe?Be(Pe):{width:0,height:0},ne=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ut(),Ce=ne[A],ee=ne[M],X=Te(0,C[S],$e[S]),Ee=x?C[S]/2-K-X-Ce-E:he-X-Ce-E,Fe=x?-C[S]/2+K+X+ee+E:oe+X+ee+E,ie=e.elements.arrow&&le(e.elements.arrow),Ve=ie?u==="y"?ie.clientTop||0:ie.clientLeft||0:0,Pt=e.modifiersData.offset?e.modifiersData.offset[e.placement][u]:0,Ct=b[u]+Ee-Pt-Ve,Et=b[u]+Fe-Pt;if(i){var St=Te(f?fe(_,Ct):_,Y,f?Z(J,Et):J);b[u]=St,j[u]=St-Y}if(a){var vo=u==="x"?W:B,ho=u==="x"?N:I,Se=b[y],jt=Se+v[vo],At=Se-v[ho],Mt=Te(f?fe(jt,Ct):jt,Se,f?Z(At,Et):At);b[y]=Mt,j[y]=Mt-Se}}e.modifiersData[r]=j}}var jr={name:"preventOverflow",enabled:!0,phase:"main",fn:Sr,requiresIfExists:["offset"]},Ar=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,ft(typeof e!="number"?e:dt(e,ce))};function Mr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=$(o.placement),l=He(a),p=[B,I].indexOf(a)>=0,c=p?"height":"width";if(!(!i||!s)){var d=Ar(n.padding,o),m=Be(i),f=l==="y"?W:B,h=l==="y"?N:I,g=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],v=s[l]-o.rects.reference[l],R=le(i),T=R?l==="y"?R.clientHeight||0:R.clientWidth||0:0,x=g/2-v/2,u=d[f],y=T-m[c]-d[h],b=T/2-m[c]/2+x,C=Te(u,b,y),P=l;o.modifiersData[r]=(e={},e[P]=C,e.centerOffset=C-b,e)}}function kr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!ct(e.elements.popper,n)||(e.elements.arrow=n))}var Wr={name:"arrow",enabled:!0,phase:"main",fn:Mr,effect:kr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vt(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function ht(t){return[W,I,N,B].some(function(e){return t[e]>=0})}function Br(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=de(e,{elementContext:"reference"}),a=de(e,{altBoundary:!0}),l=vt(s,r),p=vt(a,n,i),c=ht(l),d=ht(p);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}var Dr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Br},Lr=[or,ir,cr,fr,hr,Cr,jr,Wr,Dr],Hr=it({defaultModifiers:Lr}),Nr=w(448),Ir=w.n(Nr),Ur=[],$r=function(e,o,r){r===void 0&&(r={});var n=O.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||Ur},s=O.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],p=O.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(f){var h=f.state,g=Object.keys(h.elements);l({styles:Ke(g.map(function(v){return[v,h.styles[v]||{}]})),attributes:Ke(g.map(function(v){return[v,h.attributes[v]]}))})},requires:["computeStyles"]}},[]),c=O.useMemo(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[p,{name:"applyStyles",enabled:!1}])};return Ir()(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,p]),d=O.useRef();return Qe(function(){d.current&&d.current.setOptions(c)},[c]),Qe(function(){if(!(e==null||o==null)){var m=r.createPopper||Hr,f=m(e,o,c);return d.current=f,function(){f.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},Fr=function(){},Vr=function(){return Promise.resolve(null)},Yr=[];function Xr(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?Yr:i,a=t.referenceElement,l=t.onFirstUpdate,p=t.innerRef,c=t.children,d=O.useContext(Xe),m=O.useState(null),f=m[0],h=m[1],g=O.useState(null),v=g[0],R=g[1];O.useEffect(function(){Ae(p,f)},[p,f]);var T=O.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:v!=null,options:{element:v}}])}},[o,n,l,s,v]),x=$r(a||d,f,T),u=x.state,y=x.styles,b=x.forceUpdate,C=x.update,P=O.useMemo(function(){return{ref:h,style:y.popper,placement:u?u.placement:o,hasPopperEscaped:u&&u.modifiersData.hide?u.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:u&&u.modifiersData.hide?u.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:y.arrow,ref:R},forceUpdate:b||Fr,update:C||Vr}},[h,R,o,u,y,C,b]);return Ge(c)(P)}var zr=w(501),Gr=w.n(zr);function Jr(t){var e=t.children,o=t.innerRef,r=O.useContext(ze),n=O.useCallback(function(i){Ae(o,i),Je(r,i)},[o,r]);return O.useEffect(function(){return function(){return Ae(o,null)}}),O.useEffect(function(){Gr()(Boolean(r),"`Reference` should not be used outside of a `Manager` component.")},[r]),Ge(e)({ref:n})}var mt=k.a.createContext({}),F=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},Kr=function(){},gt=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},Qr=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},yt=function(t){Object(Ye.a)(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,p=r.props,c=p.hideTooltip,d=p.clearScheduled;d(),c(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,p=r.props,c=p.hideTooltip,d=p.clearScheduled;d(),c(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,Qr(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),Object(z.a)({},a,{style:Object(z.a)({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),Object(z.a)({},a,r.isTriggeredBy("hover")&&{onMouseEnter:F(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:F(r.props.hideTooltip,a.onMouseLeave)},{style:Object(z.a)({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return k.a.createElement(mt.Provider,{value:this.contextValue},a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(O.Component);yt.contextType=mt;var Zr={childList:!0,subtree:!0},bt=function(t){Object(Ye.a)(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,p=a.pageY;r.clearScheduled();var c={tooltipShown:!0};r.props.followCursor&&(c=Object(z.a)({},c,{pageX:l,pageY:p})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(c)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,p=a.pageY,c=r.getState()?"hideTooltip":"showTooltip";r[c]({pageX:l,pageY:p})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,p=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:p})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,p=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:p})},r.getTriggerProps=function(a){return a===void 0&&(a={}),Object(z.a)({},a,r.isTriggeredBy("click")&&{onClick:F(r.clickToggle,a.onClick),onTouchEnd:F(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:F(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&Object(z.a)({onMouseEnter:F(r.showTooltip,a.onMouseEnter),onMouseLeave:F(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:F(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:F(r.showTooltip,a.onFocus),onBlur:F(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,p=i.trigger,c=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,f=i.usePortal,h=i.portalContainer,g=i.followCursor,v=i.getTooltipRef,R=i.mutationObserverOptions,T=Object(kt.a)(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),x=k.a.createElement(Xr,Object(z.a)({innerRef:v,placement:l,modifiers:[{name:"followCursor",enabled:g,phase:"main",fn:function(y){n.popperOffset=y.state.rects.popper}}].concat(d)},T),function(u){var y=u.ref,b=u.style,C=u.placement,P=u.arrowProps,E=u.isReferenceHidden,j=u.update;if(g&&n.popperOffset){var A=n.state,M=A.pageX,S=A.pageY,Y=n.popperOffset,_=Y.width,J=Y.height,K=M+_>window.pageXOffset+document.body.offsetWidth?M-_:M,he=S+J>window.pageYOffset+document.body.offsetHeight?S-J:S;b.transform="translate3d("+K+"px, "+he+"px, 0"}return k.a.createElement(yt,Object(z.a)({arrowProps:P,closeOnReferenceHidden:m,isReferenceHidden:E,placement:C,update:j,style:b,tooltip:a,trigger:p,mutationObserverOptions:R},{clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:y}))});return k.a.createElement(Bt,null,k.a.createElement(Jr,{innerRef:c},function(u){var y=u.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:y})}),this.getState()&&(f?Object(Wt.createPortal)(x,h):x))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(O.Component);bt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:Kr,placement:"right",portalContainer:gt()?document.body:null,trigger:"hover",usePortal:gt(),mutationObserverOptions:Zr,modifiers:[]};var qr=bt,Ro=w(8),Po=w(23),Co=w(14),Eo=w(19),So=w(74),jo=w(172),_r=w(21),eo=w.n(_r),V=w(98);function xe(){return xe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},xe.apply(this,arguments)}function to(t,e){if(t==null)return{};var o=ro(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function ro(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}var D=eo()(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),q=8,oo=ge.styled.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}default:}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(D("top",r,q*-1,"auto"),"px"),top:"".concat(D("bottom",r,q*-1,"auto"),"px"),right:"".concat(D("left",r,q*-1,"auto"),"px"),left:"".concat(D("right",r,q*-1,"auto"),"px"),borderBottomWidth:"".concat(D("top",r,"0",q),"px"),borderTopWidth:"".concat(D("bottom",r,"0",q),"px"),borderRightWidth:"".concat(D("left",r,"0",q),"px"),borderLeftWidth:"".concat(D("right",r,"0",q),"px"),borderTopColor:D("top",r,e.color[o]||o||e.base==="light"?Object(V.c)(e.background.app):Object(V.a)(e.background.app),"transparent"),borderBottomColor:D("bottom",r,e.color[o]||o||e.base==="light"?Object(V.c)(e.background.app):Object(V.a)(e.background.app),"transparent"),borderLeftColor:D("left",r,e.color[o]||o||e.base==="light"?Object(V.c)(e.background.app):Object(V.a)(e.background.app),"transparent"),borderRightColor:D("right",r,e.color[o]||o||e.base==="light"?Object(V.c)(e.background.app):Object(V.a)(e.background.app),"transparent")}}),no=ge.styled.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?Object(V.c)(e.background.app):Object(V.a)(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Ie=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,p=to(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return k.a.createElement(no,xe({hasChrome:r,placement:o,ref:s},p,{color:l}),r&&k.a.createElement(oo,xe({placement:o,ref:a},i,{color:l})),n)};Ie.displayName="Tooltip",Ie.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var Ot,wt;function io(t,e){return co(t)||lo(t,e)||so(t,e)||ao()}function ao(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function so(t,e){if(!!t){if(typeof t=="string")return Tt(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Tt(t,e)}}function Tt(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function lo(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var o=[],r=!0,n=!1,i=void 0;try{for(var s=t[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(o.push(a.value),!(e&&o.length===e));r=!0);}catch(l){n=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(n)throw i}}return o}}function co(t){if(Array.isArray(t))return t}function ve(){return ve=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},ve.apply(this,arguments)}function xt(t,e){if(t==null)return{};var o=po(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function po(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function Rt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var uo=ge.styled.div(Ot||(Ot=Rt([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),fo=ge.styled.g(wt||(wt=Rt([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Re=function(e){var o=e.svg,r=e.trigger,n=e.closeOnClick,i=e.placement,s=e.modifiers,a=e.hasChrome,l=e.tooltip,p=e.children,c=e.tooltipShown,d=e.onVisibilityChange,m=xt(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),f=o?fo:uo;return k.a.createElement(qr,{placement:i,trigger:r,modifiers:s,tooltipShown:c,onVisibilityChange:d,tooltip:function(g){var v=g.getTooltipProps,R=g.getArrowProps,T=g.tooltipRef,x=g.arrowRef,u=g.placement;return k.a.createElement(Ie,ve({hasChrome:a,placement:u,tooltipRef:T,arrowRef:x,arrowProps:R()},v()),typeof l=="function"?l({onHide:function(){return d(!1)}}):l)}},function(h){var g=h.getTriggerProps,v=h.triggerRef;return k.a.createElement(f,ve({ref:v},g(),m),p)})};Re.displayName="WithTooltipPure",Re.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Ue=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=xt(e,["startOpen","onVisibilityChange"]),i=Object(O.useState)(o||!1),s=io(i,2),a=s[0],l=s[1],p=Object(O.useCallback)(function(c){r&&r(c)===!1||l(c)},[r]);return Object(O.useEffect)(function(){var c=function(){return p(!1)};je.document.addEventListener("keydown",c,!1);var d=Array.from(je.document.getElementsByTagName("iframe")),m=[];return d.forEach(function(f){var h=function(){try{f.contentWindow.document&&(f.contentWindow.document.addEventListener("click",c),m.push(function(){try{f.contentWindow.document.removeEventListener("click",c)}catch(v){}}))}catch(v){}};h(),f.addEventListener("load",h),m.push(function(){f.removeEventListener("load",h)})}),function(){je.document.removeEventListener("keydown",c),m.forEach(function(f){f()})}}),k.a.createElement(Re,ve({},n,{tooltipShown:a,onVisibilityChange:p}))};Ue.displayName="WithToolTipState"}}]);
