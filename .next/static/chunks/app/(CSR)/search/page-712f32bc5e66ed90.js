(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{6553:function(e,t,r){Promise.resolve().then(r.bind(r,8466))},2597:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return o}});let a=r(1024),l=r(3655),s=r(7707),n=r(6964),i=a._(r(5324)),o=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=n.Image},8466:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});var a=r(7437),l=r(6691),s=r.n(l),n=r(2265),i=r(4738),o=r(9071),c=r(4458),d=r.n(c),u=r(8992),f=r.n(u);let m={type:f().string,tooltip:f().bool,as:f().elementType},h=n.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:l=!1,...s},n)=>(0,a.jsx)(e,{...s,ref:n,className:d()(t,`${r}-${l?"tooltip":"feedback"}`)}));h.displayName="Feedback",h.propTypes=m;let p=n.createContext({});var x=r(4473);let v=n.forwardRef(({id:e,bsPrefix:t,className:r,type:l="checkbox",isValid:s=!1,isInvalid:i=!1,as:o="input",...c},u)=>{let{controlId:f}=(0,n.useContext)(p);return t=(0,x.vE)(t,"form-check-input"),(0,a.jsx)(o,{...c,ref:u,type:l,id:e||f,className:d()(r,t,s&&"is-valid",i&&"is-invalid")})});v.displayName="FormCheckInput";let g=n.forwardRef(({bsPrefix:e,className:t,htmlFor:r,...l},s)=>{let{controlId:i}=(0,n.useContext)(p);return e=(0,x.vE)(e,"form-check-label"),(0,a.jsx)("label",{...l,ref:s,htmlFor:r||i,className:d()(t,e)})});g.displayName="FormCheckLabel";let y=n.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:l=!1,reverse:s=!1,disabled:i=!1,isValid:o=!1,isInvalid:c=!1,feedbackTooltip:u=!1,feedback:f,feedbackType:m,className:y,style:b,title:j="",type:N="checkbox",label:w,children:$,as:F="input",...C},k)=>{t=(0,x.vE)(t,"form-check"),r=(0,x.vE)(r,"form-switch");let{controlId:E}=(0,n.useContext)(p),R=(0,n.useMemo)(()=>({controlId:e||E}),[E,e]),S=!$&&null!=w&&!1!==w||n.Children.toArray($).some(e=>n.isValidElement(e)&&e.type===g),I=(0,a.jsx)(v,{...C,type:"switch"===N?"checkbox":N,ref:k,isValid:o,isInvalid:c,disabled:i,as:F});return(0,a.jsx)(p.Provider,{value:R,children:(0,a.jsx)("div",{style:b,className:d()(y,S&&t,l&&`${t}-inline`,s&&`${t}-reverse`,"switch"===N&&r),children:$||(0,a.jsxs)(a.Fragment,{children:[I,S&&(0,a.jsx)(g,{title:j,children:w}),f&&(0,a.jsx)(h,{type:m,tooltip:u,children:f})]})})})});y.displayName="FormCheck";var b=Object.assign(y,{Input:v,Label:g});r(314);let j=n.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:l,id:s,className:i,isValid:o=!1,isInvalid:c=!1,plaintext:u,readOnly:f,as:m="input",...h},v)=>{let g;let{controlId:y}=(0,n.useContext)(p);return e=(0,x.vE)(e,"form-control"),g=u?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,a.jsx)(m,{...h,type:t,size:l,ref:v,readOnly:f,id:s||y,className:d()(i,g,o&&"is-valid",c&&"is-invalid","color"===t&&`${e}-color`)})});j.displayName="FormControl";var N=Object.assign(j,{Feedback:h}),w=(0,r(4092).Z)("form-floating");let $=n.forwardRef(({controlId:e,as:t="div",...r},l)=>{let s=(0,n.useMemo)(()=>({controlId:e}),[e]);return(0,a.jsx)(p.Provider,{value:s,children:(0,a.jsx)(t,{...r,ref:l})})});$.displayName="FormGroup";let F=n.forwardRef((e,t)=>{let[{className:r,...l},{as:s="div",bsPrefix:n,spans:i}]=function({as:e,bsPrefix:t,className:r,...a}){t=(0,x.vE)(t,"col");let l=(0,x.pi)(),s=(0,x.zG)(),n=[],i=[];return l.forEach(e=>{let r,l,o;let c=a[e];delete a[e],"object"==typeof c&&null!=c?{span:r,offset:l,order:o}=c:r=c;let d=e!==s?`-${e}`:"";r&&n.push(!0===r?`${t}${d}`:`${t}${d}-${r}`),null!=o&&i.push(`order${d}-${o}`),null!=l&&i.push(`offset${d}-${l}`)}),[{...a,className:d()(r,...n,...i)},{as:e,bsPrefix:t,spans:n}]}(e);return(0,a.jsx)(s,{...l,ref:t,className:d()(r,!i.length&&n)})});F.displayName="Col";let C=n.forwardRef(({as:e="label",bsPrefix:t,column:r=!1,visuallyHidden:l=!1,className:s,htmlFor:i,...o},c)=>{let{controlId:u}=(0,n.useContext)(p);t=(0,x.vE)(t,"form-label");let f="col-form-label";"string"==typeof r&&(f=`${f} ${f}-${r}`);let m=d()(s,t,l&&"visually-hidden",r&&f);return(i=i||u,r)?(0,a.jsx)(F,{ref:c,as:"label",className:m,htmlFor:i,...o}):(0,a.jsx)(e,{ref:c,className:m,htmlFor:i,...o})});C.displayName="FormLabel";let k=n.forwardRef(({bsPrefix:e,className:t,id:r,...l},s)=>{let{controlId:i}=(0,n.useContext)(p);return e=(0,x.vE)(e,"form-range"),(0,a.jsx)("input",{...l,type:"range",ref:s,className:d()(t,e),id:r||i})});k.displayName="FormRange";let E=n.forwardRef(({bsPrefix:e,size:t,htmlSize:r,className:l,isValid:s=!1,isInvalid:i=!1,id:o,...c},u)=>{let{controlId:f}=(0,n.useContext)(p);return e=(0,x.vE)(e,"form-select"),(0,a.jsx)("select",{...c,size:r,ref:u,className:d()(l,e,t&&`${e}-${t}`,s&&"is-valid",i&&"is-invalid"),id:o||f})});E.displayName="FormSelect";let R=n.forwardRef(({bsPrefix:e,className:t,as:r="small",muted:l,...s},n)=>(e=(0,x.vE)(e,"form-text"),(0,a.jsx)(r,{...s,ref:n,className:d()(t,e,l&&"text-muted")})));R.displayName="FormText";let S=n.forwardRef((e,t)=>(0,a.jsx)(b,{...e,ref:t,type:"switch"}));S.displayName="Switch";var I=Object.assign(S,{Input:b.Input,Label:b.Label});let _=n.forwardRef(({bsPrefix:e,className:t,children:r,controlId:l,label:s,...n},i)=>(e=(0,x.vE)(e,"form-floating"),(0,a.jsxs)($,{ref:i,className:d()(t,e),controlId:l,...n,children:[r,(0,a.jsx)("label",{htmlFor:l,children:s})]})));_.displayName="FloatingLabel";let P={_ref:f().any,validated:f().bool,as:f().elementType},O=n.forwardRef(({className:e,validated:t,as:r="form",...l},s)=>(0,a.jsx)(r,{...l,ref:s,className:d()(e,t&&"was-validated")}));O.displayName="Form",O.propTypes=P;var L=Object.assign(O,{Group:$,Control:N,Floating:w,Check:b,Switch:I,Label:C,Text:R,Range:k,Select:E,FloatingLabel:_}),T=r(2274),q=r(7970),z=r.n(q);function G(){let[e,t]=(0,n.useState)(null),[r,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(!1);async function u(e){var r;e.preventDefault();let a=new FormData(e.target),s=null===(r=a.get("query"))||void 0===r?void 0:r.toString().trim();if(s)try{t(null),d(!1),l(!0);let e=await fetch("/api/search?query="+s),r=await e.json();t(r)}catch(e){console.error(e),d(!0)}finally{l(!1)}}return(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsxs)(i.Z,{children:["This page fetches data ",(0,a.jsx)("strong",{children:"client-side"}),". In order to not leak API credentials, the request is sent to a NextJS"," ",(0,a.jsx)("strong",{children:"route handler"})," that runs on the server. This route handler then fetches the data from the Unsplash API and returns it to the client."]}),(0,a.jsxs)(L,{onSubmit:u,children:[(0,a.jsxs)(L.Group,{className:"mb-3",controlId:"search-input",children:[(0,a.jsx)(L.Label,{children:"Search query"}),(0,a.jsx)(L.Control,{name:"query",placeholder:"E.g. cats, hotdogs, ..."})]}),(0,a.jsx)(o.Z,{type:"submit",className:"mb-3",disabled:r,children:"Search"})]}),(0,a.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[r&&(0,a.jsx)(T.Z,{animation:"border"}),c&&(0,a.jsx)("p",{children:"Something went wrong. Please try again."}),(null==e?void 0:e.length)===0&&(0,a.jsx)("p",{children:"Nothing found. Try a different query!"})]}),e&&(0,a.jsx)(a.Fragment,{children:e.map(e=>(0,a.jsx)(s(),{src:e.urls.raw,width:250,height:250,alt:e.description,className:z().image},e.urls.raw))})]})}},7970:function(e){e.exports={image:"SearchPage_image__YgKhI"}},6691:function(e,t,r){e.exports=r(2597)},9071:function(e,t,r){"use strict";var a=r(4458),l=r.n(a),s=r(2265),n=r(3791),i=r(4473),o=r(7437);let c=s.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:a,active:s=!1,disabled:c=!1,className:d,...u},f)=>{let m=(0,i.vE)(t,"btn"),[h,{tagName:p}]=(0,n.FT)({tagName:e,disabled:c,...u});return(0,o.jsx)(p,{...h,...u,ref:f,disabled:c,className:l()(d,m,s&&"active",r&&`${m}-${r}`,a&&`${m}-${a}`,u.href&&c&&"disabled")})});c.displayName="Button",t.Z=c},314:function(e){"use strict";e.exports=function(){}}},function(e){e.O(0,[469,964,971,864,744],function(){return e(e.s=6553)}),_N_E=e.O()}]);