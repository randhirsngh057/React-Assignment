"use strict";(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[199],{7199:function(e,n,a){a.r(n),a.d(n,{default:function(){return ne}});var o=a(9439),r=a(2791),t=a(1413),i=a(5987),s=a(1694),c=a.n(s),l=a(184),d=["as","disabled"];function D(e){var n=e.tagName,a=e.disabled,o=e.href,r=e.target,t=e.rel,i=e.role,s=e.onClick,c=e.tabIndex,l=void 0===c?0:c,d=e.type;n||(n=null!=o||null!=r||null!=t?"a":"button");var D={tagName:n};if("button"===n)return[{type:d||"button",disabled:a},D];var u=function(e){(a||"a"===n&&function(e){return!e||"#"===e.trim()}(o))&&e.preventDefault(),a?e.stopPropagation():null==s||s(e)};return"a"===n&&(o||(o="#"),a&&(o=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:a?void 0:l,href:o,target:"a"===n?r:void 0,"aria-disabled":a||void 0,rel:"a"===n?t:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},D]}var u=r.forwardRef((function(e,n){var a=e.as,r=e.disabled,t=function(e,n){if(null==e)return{};var a,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,d),i=D(Object.assign({tagName:a,disabled:r},t)),s=(0,o.Z)(i,2),c=s[0],u=s[1].tagName;return(0,l.jsx)(u,Object.assign({},t,c,{ref:n}))}));u.displayName="Button";var F=a(162),V=["as","bsPrefix","variant","size","active","disabled","className"],v=r.forwardRef((function(e,n){var a=e.as,r=e.bsPrefix,s=e.variant,d=void 0===s?"primary":s,u=e.size,v=e.active,f=void 0!==v&&v,b=e.disabled,m=void 0!==b&&b,h=e.className,x=(0,i.Z)(e,V),p=(0,F.vE)(r,"btn"),g=D((0,t.Z)({tagName:a,disabled:m},x)),N=(0,o.Z)(g,2),j=N[0],Z=N[1].tagName;return(0,l.jsx)(Z,(0,t.Z)((0,t.Z)((0,t.Z)({},j),x),{},{ref:n,disabled:m,className:c()(h,p,f&&"active",d&&"".concat(p,"-").concat(d),u&&"".concat(p,"-").concat(u),x.href&&m&&"disabled")}))}));v.displayName="Button";var f,b=v,m=a(3070),h=a(7357),x=a(8376),p=a(6382);function g(e){if((!f&&0!==f||e)&&h.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),f=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return f}var N=a(2134),j=a(3201),Z=a(1683),y=a(3690),E=a(6092),A=a(8898),z=a(2709),w=a(6543),k=(0,w.Z)("modal-body"),B=a(9820),R=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],H=r.forwardRef((function(e,n){var a=e.bsPrefix,o=e.className,r=e.contentClassName,s=e.centered,d=e.size,D=e.fullscreen,u=e.children,V=e.scrollable,v=(0,i.Z)(e,R);a=(0,F.vE)(a,"modal");var f="".concat(a,"-dialog"),b="string"===typeof D?"".concat(a,"-fullscreen-").concat(D):"".concat(a,"-fullscreen");return(0,l.jsx)("div",(0,t.Z)((0,t.Z)({},v),{},{ref:n,className:c()(f,o,d&&"".concat(a,"-").concat(d),s&&"".concat(f,"-centered"),V&&"".concat(f,"-scrollable"),D&&b),children:(0,l.jsx)("div",{className:c()("".concat(a,"-content"),r),children:u})}))}));H.displayName="ModalDialog";var C=H,K=(0,w.Z)("modal-footer"),M=a(8024),U=["bsPrefix","className","closeLabel","closeButton"],Q=r.forwardRef((function(e,n){var a=e.bsPrefix,o=e.className,r=e.closeLabel,s=void 0===r?"Close":r,d=e.closeButton,D=void 0!==d&&d,u=(0,i.Z)(e,U);return a=(0,F.vE)(a,"modal-header"),(0,l.jsx)(M.Z,(0,t.Z)((0,t.Z)({ref:n},u),{},{className:c()(o,a),closeLabel:s,closeButton:D}))}));Q.displayName="ModalHeader";var O=Q,G=(0,a(7472).Z)("h4"),T=(0,w.Z)("modal-title",{Component:G}),L=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function q(e){return(0,l.jsx)(z.Z,(0,t.Z)((0,t.Z)({},e),{},{timeout:null}))}function S(e){return(0,l.jsx)(z.Z,(0,t.Z)((0,t.Z)({},e),{},{timeout:null}))}var J=r.forwardRef((function(e,n){var a=e.bsPrefix,s=e.className,d=e.style,D=e.dialogClassName,u=e.contentClassName,V=e.children,v=e.dialogAs,f=void 0===v?C:v,b=e["aria-labelledby"],z=e["aria-describedby"],w=e["aria-label"],k=e.show,R=void 0!==k&&k,H=e.animation,K=void 0===H||H,M=e.backdrop,U=void 0===M||M,Q=e.keyboard,O=void 0===Q||Q,G=e.onEscapeKeyDown,T=e.onShow,J=e.onHide,X=e.container,P=e.autoFocus,I=void 0===P||P,Y=e.enforceFocus,W=void 0===Y||Y,_=e.restoreFocus,$=void 0===_||_,ee=e.restoreFocusOptions,ne=e.onEntered,ae=e.onExit,oe=e.onExiting,re=e.onEnter,te=e.onEntering,ie=e.onExited,se=e.backdropClassName,ce=e.manager,le=(0,i.Z)(e,L),de=(0,r.useState)({}),De=(0,o.Z)(de,2),ue=De[0],Fe=De[1],Ve=(0,r.useState)(!1),ve=(0,o.Z)(Ve,2),fe=ve[0],be=ve[1],me=(0,r.useRef)(!1),he=(0,r.useRef)(!1),xe=(0,r.useRef)(null),pe=(0,r.useState)(null),ge=(0,o.Z)(pe,2),Ne=ge[0],je=ge[1],Ze=(0,j.Z)(n,je),ye=(0,N.Z)(J),Ee=(0,F.SC)();a=(0,F.vE)(a,"modal");var Ae=(0,r.useMemo)((function(){return{onHide:ye}}),[ye]);function ze(){return ce||(0,A.t)({isRTL:Ee})}function we(e){if(h.Z){var n=ze().getScrollbarWidth()>0,a=e.scrollHeight>(0,x.Z)(e).documentElement.clientHeight;Fe({paddingRight:n&&!a?g():void 0,paddingLeft:!n&&a?g():void 0})}}var ke=(0,N.Z)((function(){Ne&&we(Ne.dialog)}));(0,Z.Z)((function(){(0,p.Z)(window,"resize",ke),null==xe.current||xe.current()}));var Be=function(){me.current=!0},Re=function(e){me.current&&Ne&&e.target===Ne.dialog&&(he.current=!0),me.current=!1},He=function(){be(!0),xe.current=(0,y.Z)(Ne.dialog,(function(){be(!1)}))},Ce=function(e){"static"!==U?he.current||e.target!==e.currentTarget?he.current=!1:null==J||J():function(e){e.target===e.currentTarget&&He()}(e)},Ke=(0,r.useCallback)((function(e){return(0,l.jsx)("div",(0,t.Z)((0,t.Z)({},e),{},{className:c()("".concat(a,"-backdrop"),se,!K&&"show")}))}),[K,se,a]),Me=(0,t.Z)((0,t.Z)({},d),ue);Me.display="block";return(0,l.jsx)(B.Z.Provider,{value:Ae,children:(0,l.jsx)(E.Z,{show:R,ref:Ze,backdrop:U,container:X,keyboard:!0,autoFocus:I,enforceFocus:W,restoreFocus:$,restoreFocusOptions:ee,onEscapeKeyDown:function(e){O?null==G||G(e):(e.preventDefault(),"static"===U&&He())},onShow:T,onHide:J,onEnter:function(e,n){e&&we(e),null==re||re(e,n)},onEntering:function(e,n){null==te||te(e,n),(0,m.ZP)(window,"resize",ke)},onEntered:ne,onExit:function(e){null==xe.current||xe.current(),null==ae||ae(e)},onExiting:oe,onExited:function(e){e&&(e.style.display=""),null==ie||ie(e),(0,p.Z)(window,"resize",ke)},manager:ze(),transition:K?q:void 0,backdropTransition:K?S:void 0,renderBackdrop:Ke,renderDialog:function(e){return(0,l.jsx)("div",(0,t.Z)((0,t.Z)({role:"dialog"},e),{},{style:Me,className:c()(s,a,fe&&"".concat(a,"-static"),!K&&"show"),onClick:U?Ce:void 0,onMouseUp:Re,"aria-label":w,"aria-labelledby":b,"aria-describedby":z,children:(0,l.jsx)(f,(0,t.Z)((0,t.Z)({},le),{},{onMouseDown:Be,className:D,contentClassName:u,children:V}))}))}})})}));J.displayName="Modal";var X=Object.assign(J,{Body:k,Header:O,Title:T,Footer:K,Dialog:C,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),P=a(1087),I=a(9434),Y=a(7692),W=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],_=r.forwardRef((function(e,n){var a=e.bsPrefix,o=e.className,r=e.striped,s=e.bordered,d=e.borderless,D=e.hover,u=e.size,V=e.variant,v=e.responsive,f=(0,i.Z)(e,W),b=(0,F.vE)(a,"table"),m=c()(o,b,V&&"".concat(b,"-").concat(V),u&&"".concat(b,"-").concat(u),r&&"".concat(b,"-").concat("string"===typeof r?"striped-".concat(r):"striped"),s&&"".concat(b,"-bordered"),d&&"".concat(b,"-borderless"),D&&"".concat(b,"-hover")),h=(0,l.jsx)("table",(0,t.Z)((0,t.Z)({},f),{},{className:m,ref:n}));if(v){var x="".concat(b,"-responsive");return"string"===typeof v&&(x="".concat(x,"-").concat(v)),(0,l.jsx)("div",{className:x,children:h})}return h})),$=_;var ee=function(e){var n=e.columns,a=e.rows,o=e.modalfunc;return(0,l.jsxs)($,{striped:!0,bordered:!0,hover:!0,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[n.map((function(e){return(0,l.jsx)("th",{children:e.label},e.id)})),(0,l.jsx)("th",{className:"action-width",children:" Action"})]})}),(null===a||void 0===a?void 0:a.length)>0?(0,l.jsx)("tbody",{children:a.map((function(e,n){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:e.email}),(0,l.jsx)("td",{children:e.username}),(0,l.jsx)("td",{children:e.mobile}),(0,l.jsx)("td",{children:e.roleKey}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"action-btn",children:[(0,l.jsx)(P.rU,{to:"/updaterecord/".concat(e.id),children:(0,l.jsx)("button",{type:"button",className:"btn btn-success mr-10",children:"Edit"})}),(0,l.jsx)("button",{type:"button",className:"btn btn-danger",variant:"primary",onClick:function(){return o(e.id)},children:"Delete"})]})})]},n)}))}):(0,l.jsx)("div",{className:"no-records",children:"No records"})]})};var ne=function(){var e=(0,r.useState)(!1),n=(0,o.Z)(e,2),a=n[0],t=n[1],i=(0,I.I0)(),s=(0,r.useState)(""),c=(0,o.Z)(s,2),d=c[0],D=c[1],u=(0,I.v9)((function(e){return e.users.users})),F=function(){D(""),t(!1)};return(0,l.jsxs)("div",{className:"container bg-white",children:[(0,l.jsxs)("div",{className:"page-title",children:[(0,l.jsx)("h3",{children:"All records "}),(0,l.jsx)(P.rU,{to:"/addrecord",children:(0,l.jsx)("button",{type:"button",className:"btn btn-primary",children:"Add Data"})})]}),(0,l.jsx)("div",{className:"auto-scroll",children:(0,l.jsx)(ee,{columns:[{id:1,label:"Name",value:"name"},{id:2,label:"Email",value:"email"},{id:3,label:"Username",value:"username"},{id:4,label:"Mobile",value:"mobile"},{id:5,label:"Rolekey",value:"roleKey"}],rows:u,modalfunc:function(e){D(e),t(!0)}})}),(0,l.jsxs)(X,{show:a,onHide:F,children:[(0,l.jsxs)(X.Body,{children:[(0,l.jsxs)("div",{className:"delete-icons",children:[" ",(0,l.jsx)("img",{src:"data:image/png;base64,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"})]}),(0,l.jsx)("div",{className:"popup-info",children:"Are you sure?"}),(0,l.jsx)("div",{className:"popup-info-m",children:"Do you really want to delete this record? This process cannot be undone"})]}),(0,l.jsxs)("div",{className:"popup-action",children:[(0,l.jsx)(b,{variant:"secondary",onClick:F,children:"Cancel"}),(0,l.jsx)(b,{variant:"danger",onClick:function(){i((0,Y.h8)({id:d})),F()},children:"Delete"})]})]})]})}}}]);
//# sourceMappingURL=199.88c18570.chunk.js.map