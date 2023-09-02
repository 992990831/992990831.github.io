"use strict";(self.webpackChunklab_demo=self.webpackChunklab_demo||[]).push([[57],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return N},P:function(){return w},S:function(){return z},_:function(){return l},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,f);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(v,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=v.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:s().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],I=new Set;let A,j;const R=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=l(e,T);const{width:y,height:v,layout:b}=n,E=c(y,v,b),{style:w,className:N}=E,L=l(E,O),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((()=>{A||(A=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(C);if(j&&I.has(C))return;let t,r;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:I.has(C),image:n},f)),I.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,C,I,s,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(C)&&j&&(k.current.innerHTML=j(i({isLoading:I.has(C),isLoaded:I.has(C),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},L,{style:i({},w,s,{backgroundColor:u}),className:N+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));_.propTypes=x,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function H(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,q);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const F=H((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:v}=e,b=l(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=i({objectFit:y,objectPosition:v,backgroundColor:f},h);const{width:E,height:S,layout:x,images:T,placeholder:O,backgroundColor:I}=o,A=c(E,S,x),{style:j,className:R}=A,_=l(A,k),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},_,{style:i({},j,s,{backgroundColor:f}),className:R+(a?" "+a:"")}),r.createElement(g,{layout:x,width:E,height:S},r.createElement(w,i({},d(O,!1,x,E,S,I,y,v))),r.createElement(N,i({"data-gatsby-image-ssr":"",className:p},b,u("eager"===m,!1,q,m,h)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:S,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};F.displayName="StaticImage",F.propTypes=W;const z=H(_);z.displayName="StaticImage",z.propTypes=W},4525:function(e,t,a){var r,n=a(1721),s=a(7294),i=a(4160);!function(e){e[e.none=0]="none",e[e.people=1]="people",e[e.research=2]="research",e[e.news=3]="news",e[e.photos=4]="photos",e[e.publication=5]="publication"}(r||(r={}));let l=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleHandler=()=>{a.setState({isHandlerActive:!a.state.isHandlerActive})},a.updateFormStatus=e=>{a.setState({rlFormStatus:e})},a.loginField=()=>a.state.isLogin?s.createElement("li",{className:"userMenuLi"},s.createElement("div",{className:"userMenuWrapper"},"User Menu")):[s.createElement("li",{key:"0"},s.createElement("a",{href:"#",onClick:()=>a.updateFormStatus("register")},"Sign Up")),s.createElement("li",{key:"1"},s.createElement("a",{href:"#",onClick:()=>a.updateFormStatus("login")},"Sign In"))],a.state={isHandlerActive:!1,isLogin:t.isLogin},a}return(0,n.Z)(t,e),t.prototype.render=function(){return s.createElement("div",{className:"menuBar"},s.createElement("div",{className:"langSelectorWrapper"}),s.createElement("a",{href:"/"},s.createElement("div",{className:"homeLogo osLight",style:{display:"flex"}},s.createElement("div",{className:"sjtu-logo"}),s.createElement("div",{className:"lab-logo"},"阿尔法脑实验室",s.createElement("div",{className:"lab-logo-small"},"Alpha Brain Lab")))),s.createElement("a",{href:"#",className:"homeNavHandler visible-xs"+(this.state.isHandlerActive?" active":""),onClick:this.toggleHandler},s.createElement("div",null,s.createElement("div",{className:"mobile-menu-btn"}),s.createElement("div",{className:"mobile-menu-btn"}),s.createElement("div",{className:"mobile-menu-btn"}))),s.createElement("div",{className:"homeNav"+(this.state.isHandlerActive?" active":"")},s.createElement("ul",{style:{fontSize:"14px"}},s.createElement("li",{className:"moreOption"},s.createElement(i.rU,{to:"/",activeClassName:"activeLink"},"首页")),s.createElement("li",{className:"moreOption"},s.createElement(i.rU,{to:"/people",activeClassName:"activeLink"},"团队概况")),s.createElement("li",{className:"moreOption"},s.createElement(i.rU,{to:"/research",activeClassName:"activeLink"},"研究方向")),s.createElement("li",{className:"moreOption"},s.createElement(i.rU,{to:"/press",activeClassName:"activeLink"},"新闻")),s.createElement("li",{className:"moreOption"},s.createElement(i.rU,{to:"/publication",activeClassName:"activeLink"},"科研成果")),s.createElement("li",{className:"moreOption"},s.createElement("a",{href:"/contact"},"联系我们")))))},t}(s.Component);t.Z=l}}]);
//# sourceMappingURL=92da3061e96b927c67208ae6cc3b53c8a9880753-3540abf6037a6b191fda.js.map