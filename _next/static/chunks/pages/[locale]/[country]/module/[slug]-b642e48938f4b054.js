(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[744],{4364:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/[country]/module/[slug]",function(){return t(1283)}])},3273:function(e){"use strict";e.exports={i18n:{defaultLocale:"en",locales:["en","ar","es"],defaultCountry:"philippines",countries:["argentina","ethiopia","india","kenya","mexico","philippines","united-arab-emirates"]},reloadOnPrerender:!0}},1283:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return x},default:function(){return k}});var a=t(5893),u=t(7294),r=t(1163),o=t(8520),c=t.n(o),s=(t(3273),t(6297));function i(e,n,t,a,u,r,o){try{var c=e[r](o),s=c.value}catch(i){return void t(i)}c.done?n(s):Promise.resolve(s).then(a,u)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(a,u){var r=e.apply(n,t);function o(e){i(r,a,u,o,c,"next",e)}function c(e){i(r,a,u,o,c,"throw",e)}o(void 0)}))}}l(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.map((function(e){return e.modules.map((function(n){return{params:{locale:e.language,country:e.country,slug:n}}}))})).flat();case 2:return e.t0=e.sent,e.abrupt("return",{paths:e.t0,fallback:!1});case 4:case"end":return e.stop()}}),e)})));var p=t(5839),f=t(6970),v=t(8222),h=t(9683),d=t(6780),y=t(3815),g=t(2154),_=t(873),x=!0;function k(e){var n=e.source,t=e.frontMatter,o=(0,h.Z)().isDesktop,c=(0,r.useRouter)(),s=(0,u.useState)(!1),i=s[0],l=s[1],x=(0,u.useState)(c.query.locale?c.query.locale:"en"),k=x[0],C=x[1],m=(0,u.useState)("en"),w=m[0],O=m[1],b=(0,u.useState)([]),L=b[0],S=b[1],E=(0,u.useState)([]),P=E[0],q=E[1],N=[{key:"en",value:"en",text:"English"},{key:"ar",value:"ar",text:"Arabic"},{key:"ar",value:"es",text:"Spanish"}];(0,u.useEffect)((function(){q(y[k].map((function(e){return{key:e,value:e,text:(0,_.fp)(e)}})))}),[k]);var Z=function(e,n){if(g[c.query.country].includes(n.value)){var t=c.asPath.replace("/".concat(c.query.locale),"/".concat(n.value));C(n.value),c.push(t)}g[c.query.country].includes(n.value)||(O(n.value),S(y[n.value]),l(!0))},j=function(e,n){var t=c.asPath.replace("/".concat(c.query.country),"/".concat(n.value));c.push(t)};return(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(d.Z,{open:i,setOpen:l,setCountryOptions:q,currentLanguage:k,selectedLang:w,availableCountries:L}),o?(0,a.jsx)(v.Z,{source:n,frontMatter:t,open:i,setOpen:l,currentLanguage:k,selectedLang:w,availableCountries:L,countryOptions:P,handleCountryChange:j,languageOptions:N,handleLangChange:Z}):(0,a.jsx)(f.Z,{source:n,frontMatter:t,currentLanguage:k,countryOptions:P,handleCountryChange:j,languageOptions:N,handleLangChange:Z})]})}}},function(e){e.O(0,[217,955,457,774,888,179],(function(){return n=4364,e(e.s=n);var n}));var n=e.O();_N_E=n}]);