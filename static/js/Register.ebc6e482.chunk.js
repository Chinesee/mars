(this.webpackJsonpportal=this.webpackJsonpportal||[]).push([[8],{400:function(e,t,n){"use strict";var a=n(9),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(19)),c=r(n(17)),u=a(n(0)),o=r(n(5)),s=r(n(404)),i=n(401),d=n(18),f=r(n(57)),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e,t){var n,a=e.prefixCls,r=e.className,v=e.children,b=e.indeterminate,m=void 0!==b&&b,j=e.style,O=e.onMouseEnter,h=e.onMouseLeave,x=e.skipGroup,g=void 0!==x&&x,y=p(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),C=u.useContext(d.ConfigContext),w=C.getPrefixCls,k=C.direction,N=u.useContext(i.GroupContext),P=u.useRef(y.value);u.useEffect((function(){null===N||void 0===N||N.registerValue(y.value),(0,f.default)("checked"in y||!!N||!("value"in y),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),u.useEffect((function(){if(!g)return y.value!==P.current&&(null===N||void 0===N||N.cancelValue(P.current),null===N||void 0===N||N.registerValue(y.value)),function(){return null===N||void 0===N?void 0:N.cancelValue(y.value)}}),[y.value]);var E=w("checkbox",a),M=(0,c.default)({},y);N&&!g&&(M.onChange=function(){y.onChange&&y.onChange.apply(y,arguments),N.toggleOption&&N.toggleOption({label:v,value:y.value})},M.name=N.name,M.checked=-1!==N.value.indexOf(y.value),M.disabled=y.disabled||N.disabled);var I=(0,o.default)((n={},(0,l.default)(n,"".concat(E,"-wrapper"),!0),(0,l.default)(n,"".concat(E,"-rtl"),"rtl"===k),(0,l.default)(n,"".concat(E,"-wrapper-checked"),M.checked),(0,l.default)(n,"".concat(E,"-wrapper-disabled"),M.disabled),n),r),V=(0,o.default)((0,l.default)({},"".concat(E,"-indeterminate"),m));return u.createElement("label",{className:I,style:j,onMouseEnter:O,onMouseLeave:h},u.createElement(s.default,(0,c.default)({},M,{prefixCls:E,className:V,ref:t})),void 0!==v&&u.createElement("span",null,v))},b=u.forwardRef(v);b.displayName="Checkbox";var m=b;t.default=m},401:function(e,t,n){"use strict";var a=n(9),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GroupContext=void 0;var l=r(n(17)),c=r(n(19)),u=r(n(93)),o=r(n(29)),s=a(n(0)),i=r(n(5)),d=r(n(58)),f=r(n(400)),p=n(18),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=s.createContext(null);t.GroupContext=b;var m=function(e,t){var n=e.defaultValue,a=e.children,r=e.options,m=void 0===r?[]:r,j=e.prefixCls,O=e.className,h=e.style,x=e.onChange,g=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),y=s.useContext(p.ConfigContext),C=y.getPrefixCls,w=y.direction,k=s.useState(g.value||n||[]),N=(0,o.default)(k,2),P=N[0],E=N[1],M=s.useState([]),I=(0,o.default)(M,2),V=I[0],_=I[1];s.useEffect((function(){"value"in g&&E(g.value||[])}),[g.value]);var S=function(){return m.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},G=C("checkbox",j),q="".concat(G,"-group"),R=(0,d.default)(g,["value","disabled"]);m&&m.length>0&&(a=S().map((function(e){return s.createElement(f.default,{prefixCls:G,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:-1!==P.indexOf(e.value),onChange:e.onChange,className:"".concat(q,"-item"),style:e.style},e.label)})));var F={toggleOption:function(e){var t=P.indexOf(e.value),n=(0,u.default)(P);-1===t?n.push(e.value):n.splice(t,1),"value"in g||E(n);var a=S();null===x||void 0===x||x(n.filter((function(e){return-1!==V.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:P,disabled:g.disabled,name:g.name,registerValue:function(e){_((function(t){return[].concat((0,u.default)(t),[e])}))},cancelValue:function(e){_((function(t){return t.filter((function(t){return t!==e}))}))}},L=(0,i.default)(q,(0,c.default)({},"".concat(q,"-rtl"),"rtl"===w),O);return s.createElement("div",(0,l.default)({className:L,style:h},R,{ref:t}),s.createElement(b.Provider,{value:F},a))},j=s.forwardRef(m),O=s.memo(j);t.default=O},402:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(400)),l=a(n(401)),c=r.default;c.Group=l.default,c.__ANT_CHECKBOX=!0;var u=c;t.default=u},406:function(e,t,n){"use strict";n(31),n(412)},412:function(e,t,n){},536:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c}));var a=n(81);function r(){return Object(a.a)({url:"/user/info",method:"get"})}function l(e){return Object(a.a)({url:"/user/login",method:"post",data:e})}function c(e){return Object(a.a)({url:"/user/register",method:"post",data:e})}},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(143);function r(e){return{type:a.a,payload:e}}},710:function(e,t,n){"use strict";n.r(t);n(94);var a=n(79),r=n.n(a),l=(n(406),n(402)),c=n.n(l),u=(n(190),n(138)),o=n.n(u),s=n(97),i=n.n(s),d=n(125),f=(n(455),n(456)),p=n.n(f),v=n(59),b=n(0),m=n(24),j=n(45),O=n(536),h=n(28),x=n(54),g=n(537),y=n(53),C=n(2);t.default=function(){var e=Object(h.c)(),t=Object(b.useState)(!1),n=Object(v.a)(t,2),a=n[0],l=n[1],u=Object(m.g)(),s=p.a.useForm(),f=Object(v.a)(s,1)[0],w=function(){var t=Object(d.a)(i.a.mark((function t(n){var a,r,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,Object(O.c)(n);case 4:return t.next=6,Object(O.b)(n);case 6:return a=t.sent,r=a.token,t.next=10,Object(O.a)();case 10:return c=t.sent,o=c.info,Object(y.c)(r),t.next=15,e(Object(x.c)());case 15:return t.next=17,e(Object(g.a)(o));case 17:u.replace("/"),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),l(!1);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(e){return t.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:"register-form",children:[Object(C.jsxs)("div",{className:"form-bar",children:[Object(C.jsx)("h2",{className:"title",children:"\u6ce8\u518c\u8d26\u53f7"}),Object(C.jsx)("p",{className:"desc",children:"\u521b\u5efa\u4e00\u4e2a\u8d26\u53f7\u4ee5\u767b\u5f55\u672c\u7cfb\u7edf"})]}),Object(C.jsxs)(p.a,{hideRequiredMark:!0,form:f,layout:"vertical",size:"large",onFinish:w,children:[Object(C.jsx)(p.a.Item,{label:"\u8d26\u53f7",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7"}],children:Object(C.jsx)(o.a,{placeholder:"\u624b\u673a\u53f7/\u90ae\u7bb1"})}),Object(C.jsx)(p.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:Object(C.jsx)(o.a.Password,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})}),Object(C.jsx)(p.a.Item,{dependencies:["password"],label:"\u786e\u8ba4\u5bc6\u7801",name:"passwordConfirm",rules:[{required:!0,message:"\u8bf7\u518d\u6b21\u786e\u8ba4\u5bc6\u7801"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4\uff01")):Promise.resolve()}}}],children:Object(C.jsx)(o.a.Password,{placeholder:"\u8bf7\u518d\u6b21\u786e\u8ba4\u5bc6\u7801"})}),Object(C.jsx)(p.a.Item,{className:"mb-0",name:"remember",rules:[{required:!0,message:"\u9700\u8981\u540c\u610f\u534f\u8bae\u624d\u80fd\u8fdb\u884c\u6ce8\u518c"}],valuePropName:"checked",children:Object(C.jsxs)(c.a,{children:["\u6211\u540c\u610f",Object(C.jsx)("span",{className:"primary",children:"\u300a\u7528\u6237\u9690\u79c1\u534f\u8bae\u300b"})]})}),Object(C.jsxs)(p.a.Item,{children:[Object(C.jsx)(r.a,{ghost:!0,className:"w-full",htmlType:"submit",loading:a,size:"large",type:"primary",children:"\u7acb\u5373\u6ce8\u518c"}),Object(C.jsxs)("p",{className:"mt-4 text-gray-500",children:["\u5df2\u7ecf\u6709\u8d26\u53f7\u4e86\uff1f",Object(C.jsx)(j.c,{className:"opacity-75 cursor-pointer transition primary hover:opacity-100",to:"/user/login",children:"\u7acb\u5373\u767b\u5f55"})]})]})]})]})}}}]);
//# sourceMappingURL=Register.ebc6e482.chunk.js.map