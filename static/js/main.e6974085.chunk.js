(this["webpackJsonpservants-app"]=this["webpackJsonpservants-app"]||[]).push([[0],Array(34).concat([function(e,a,t){var s={"./caster-anastasia.png":35,"./caster-crane.png":36,"./caster-leonardo.png":37,"./caster-medea.png":38,"./caster-merlin.png":39,"./caster-nitocris.png":40,"./caster-paracelsus.png":41,"./caster-shakespeare.png":42,"./caster-tamamo.png":43,"./caster-zhuge.png":44,"./saber-arthur.png":45,"./saber-artoria.png":46,"./saber-caesar.png":47,"./saber-dioscuri.png":48,"./saber-mordred.png":49,"./saber-muramasa.png":50,"./saber-musashi.png":51,"./saber-nero.png":52,"./saber-okita.png":53,"./saber-siegfried.png":54,"./saber-sigurd.png":55};function r(e){var a=n(e);return t(a)}function n(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id=34},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-anastasia.a6e0c57d.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-crane.f84c5c72.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-leonardo.b8bc8948.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-medea.15fc2b69.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-merlin.f1b67dce.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-nitocris.4e1edc63.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-paracelsus.5427862d.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-shakespeare.9ff01acc.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-tamamo.8eb202b9.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/caster-zhuge.04460f09.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-arthur.70ef63e1.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-artoria.fd6dcf0b.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-caesar.214db399.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-dioscuri.85dbbe23.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-mordred.cd316c6d.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-muramasa.366ebcf4.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-musashi.40c80169.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-nero.d38a435a.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-okita.55e04637.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-siegfried.43767667.png"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/saber-sigurd.943a46ff.png"},,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var s=t(1),r=t(21),n=t.n(r),c=t(10),i=Object(s.createContext)(),o=t(4),l="[auth] login",u="[auth] logout",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},b=t(8),j=t(2),h=t(13),m=t(0),g=function(e){var a=e.isAuthenticated,t=e.component,s=Object(h.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",s.location.pathname),Object(m.jsx)(j.b,Object(o.a)(Object(o.a)({},s),{},{component:function(e){return a?Object(m.jsx)(t,Object(o.a)({},e)):Object(m.jsx)(j.a,{to:"/login"})}}))},p=function(e){var a=e.isAuthenticated,t=e.component,s=Object(h.a)(e,["isAuthenticated","component"]);return Object(m.jsx)(j.b,Object(o.a)(Object(o.a)({},s),{},{component:function(e){return a?Object(m.jsx)(j.a,{to:"/"}):Object(m.jsx)(t,Object(o.a)({},e))}}))},v=function(e){var a=e.history,t=Object(s.useContext)(i).dispatch;return Object(m.jsxs)("div",{className:"container mt-5",children:[Object(m.jsx)("h1",{children:"LoginScreen"}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";t({type:l,payload:{name:"Osiris"}}),a.replace(e)},children:"Login"})]})},f=function(){var e=Object(s.useContext)(i),a=e.user.name,t=e.dispatch,r=Object(j.g)();return Object(m.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid d-flex",children:[Object(m.jsx)(b.b,{className:"navbar-brand bd-highlight",to:"/",children:"Clases"}),Object(m.jsxs)("div",{className:"navbar-nav bd-highlight",children:[Object(m.jsx)(b.c,{exact:!0,activeClassName:"active",className:"nav-item nav-link","aria-current":"page",to:"/saber",children:"Saber"}),Object(m.jsx)(b.c,{exact:!0,activeClassName:"active",className:"nav-item nav-link",to:"/caster",children:"Caster"}),Object(m.jsx)(b.c,{exact:!0,activeClassName:"active",className:"nav-item nav-link",to:"/search",children:"Search"})]}),Object(m.jsxs)("div",{className:"navbar-nav ms-auto bd-highlight",children:[Object(m.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(m.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){r.replace("/login"),t({type:u})},children:"Logout"})]})]})})},O=[{id:"saber-artoria",servant:"Artoria Pendragon",servantClass:"Saber",noblePhantasm:"Excalibur",region:"England",source:"Arthurian Legends"},{id:"saber-okita",servant:"Okita S\u014dji",servantClass:"Saber",noblePhantasm:"Mumyou Sandan-Zuki",region:"Japan",source:"Historical Fact"},{id:"saber-mordred",servant:"Mordred",servantClass:"Saber",noblePhantasm:"Clarent Blood Arthur",region:"England",source:"Arthurian Legends"},{id:"saber-muramasa",servant:"Senji Muramasa",servantClass:"Saber",noblePhantasm:"Tsumukari Muramasa",region:"Japan",source:"Historical fact"},{id:"saber-siegfried",servant:"Siegfried",servantClass:"Saber",noblePhantasm:"Balmung",region:"Germany",source:"Nibelungenlied (The Song of the Nibelungs)"},{id:"saber-caesar",servant:"Gaius Julius Caesar",servantClass:"Saber",noblePhantasm:"Crocea Mors",region:"Europe",source:"Historical Fact"},{id:"saber-musashi",servant:"Miyamoto Musashi",servantClass:"Saber",noblePhantasm:"Rikudou Gorin - Kurikara Tenshou",region:"Japan",source:"Historical Fact"},{id:"saber-sigurd",servant:"Sigurd",servantClass:"Saber",noblePhantasm:"B\xf6lverkr Gram",region:"Europe",source:"Norse Mythology"},{id:"saber-dioscuri",servant:"Dioscuri",servantClass:"Saber",noblePhantasm:"Dioscures Tyndaridae",region:"Europe",source:"Greek Mythology"},{id:"saber-nero",servant:"Nero Claudius",servantClass:"Saber",noblePhantasm:"Laus Saint Claudius",region:"Rome",source:"Historical fact"},{id:"saber-arthur",servant:"Arthur Pendragon",servantClass:"Saber",noblePhantasm:"Excalibur",region:"England",source:"Arthurian Legends"},{id:"caster-medea",servant:"Medea",servantClass:"Caster",noblePhantasm:"Rule Breaker",region:"Greece, Corinth",source:"Greek Mythology"},{id:"caster-tamamo",servant:"Tamamo no Mae",servantClass:"Caster",noblePhantasm:"Suiten Nikkou Amaterasu Yano Shizu-Ishi",region:"Japan",source:"Japanese Mythology. One of the Three Great Monsters."},{id:"caster-zhuge",servant:"Zhuge Liang",servantClass:"Caster",noblePhantasm:"Unreturning Formation",region:"China",source:"The Romance of the Three Kingdoms"},{id:"caster-shakespeare",servant:"William Shakespeare",servantClass:"Caster",noblePhantasm:"First Folio",region:"England",source:"Historical fact"},{id:"caster-paracelsus",servant:"Paracelsus von Hohenheim",servantClass:"Caster",noblePhantasm:"Sword of Paracelsus",region:"Europe",source:"Historical fact"},{id:"caster-merlin",servant:"Merlin",servantClass:"Caster",noblePhantasm:"Garden of Avalon",region:"West European countries",source:"Arthurian legends, and others"},{id:"caster-nitocris",servant:"Nitocris",servantClass:"Caster",noblePhantasm:"Anpu Neb Ta Djeser",region:"Egypt",source:"Historical Fact"},{id:"caster-leonardo",servant:"Leonardo Da Vinci",servantClass:"Caster",noblePhantasm:"Uomo Universale",region:"Europe",source:"Historical Fact"},{id:"caster-anastasia",servant:"Anastasia Nikolaevna Romanova",servantClass:"Caster",noblePhantasm:"Viy Viy Viy",region:"Russia",source:"Historic Fact"},{id:"caster-crane",servant:"Miss Crane",servantClass:"Caster",noblePhantasm:"Ten'imuh\u014d - Tsuru no Enishi Namida no Wakare",region:"Japan",source:"Japan Folklore"}],x=t(34),C=function(e){var a=e.id,t=e.servant,s=(e.servantClass,e.noblePhantasm),r=(e.region,e.source);return Object(m.jsx)("div",{className:"col animate__animated animate__fadeIn",children:Object(m.jsx)("div",{className:"card mb-3",style:{maxWidth:540},children:Object(m.jsxs)("div",{className:"row g-0",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("img",{src:x("./".concat(a,".png")).default,className:"card-img",alt:t})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:t}),Object(m.jsxs)("p",{className:"card-text",children:[s," "]}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:r})}),Object(m.jsx)(b.b,{to:"./servant/".concat(a),children:"Mas..."})]})})]})})})},N=function(e){var a=e.servantClass,t=Object(s.useMemo)((function(){return function(e){if(!["Saber","Caster"].includes(e))throw new Error('Clase "'.concat(e,'" no es correcto'));return O.filter((function(a){return a.servantClass===e}))}(a)}),[a]);return Object(m.jsx)("div",{className:"row row-cols-1 row-cols-md-1 row-cols-lg-2 g-2",children:t.map((function(e){return Object(m.jsx)(C,Object(o.a)({},e),e.id)}))})},S=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"SaberScreen"}),Object(m.jsx)("hr",{}),Object(m.jsx)(N,{servantClass:"Saber"})]})},y=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"CasterScreen"}),Object(m.jsx)("hr",{}),Object(m.jsx)(N,{servantClass:"Caster"})]})},k=function(e){var a=e.history,t=Object(j.i)().servantId,r=Object(s.useMemo)((function(){return e=t,O.find((function(a){return a.id===e}));var e}),[t]);if(!r)return Object(m.jsx)(j.a,{to:"/"});var n=r.servant,c=r.servantClass,i=r.noblePhantasm,o=r.region,l=r.source;return Object(m.jsxs)("div",{className:"row mt-5 animate__animated animate__fadeInLeft animate__faster",children:[Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)("img",{src:x("./".concat(t,".png")).default,alt:n,className:"img-thumbnail"})}),Object(m.jsxs)("div",{className:"col-8",children:[Object(m.jsx)("h3",{children:n}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsxs)("li",{className:"list-group-item",children:[" ",Object(m.jsx)("b",{children:"Class: "})," ",c," "]}),Object(m.jsxs)("li",{className:"list-group-item",children:[" ",Object(m.jsx)("b",{children:"Noble Phantasm: "})," ",i," "]}),Object(m.jsxs)("li",{className:"list-group-item",children:[" ",Object(m.jsx)("b",{children:"Region: "})," ",o," "]}),Object(m.jsxs)("li",{className:"list-group-item",children:[" ",Object(m.jsx)("b",{children:"Origin: "})," ",l," "]})]}),Object(m.jsx)("h5",{children:" Origin "}),Object(m.jsx)("p",{children:l}),Object(m.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){a.length<=2?a.push("/".concat(c.toLowerCase())):a.goBack()},children:"Return"})]})]})},P=t(23),M=t.n(P),E=t(12),w=function(e){var a=e.history,t=Object(j.h)(),r=M.a.parse(t.search).q,n=void 0===r?"":r,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(s.useState)(e),t=Object(c.a)(a,2),r=t[0],n=t[1];return[r,function(e){var a=e.target;n(Object(o.a)(Object(o.a)({},r),{},Object(E.a)({},a.name,a.value)))},function(){n(e)}]}({searchText:n}),l=Object(c.a)(i,2),u=l[0],d=l[1],b=u.searchText,h=Object(s.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLowerCase(),O.filter((function(a){return a.servant.toLowerCase().includes(e)})))}(n)}),[n]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"SearchScreen"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-5",children:[Object(m.jsx)("h4",{children:"Search Form"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(b))},children:[Object(m.jsx)("input",{type:"text",placeholder:"find a servant",className:"form-control",name:"searchText",autoComplete:"off",value:b,onChange:d}),Object(m.jsx)("div",{className:"d-grid gap-2",children:Object(m.jsx)("button",{type:"submit",className:"btn my-1 btn-outline-primary",children:"Search..."})})]})]}),Object(m.jsxs)("div",{className:"col-7",children:[Object(m.jsx)("h4",{children:"Results"}),Object(m.jsx)("hr",{}),""===n?Object(m.jsx)("div",{className:"alert alert-info",children:"Search a servant"}):0===h.length&&Object(m.jsx)("div",{className:"alert alert-danger",children:"Servant not found"}),h.map((function(e){return Object(m.jsx)(C,Object(o.a)({},e),e.id)}))]})]})]})},A=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)("div",{className:"container mt-2",children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/saber",component:S}),Object(m.jsx)(j.b,{exact:!0,path:"/caster",component:y}),Object(m.jsx)(j.b,{exact:!0,path:"/servant/:servantId",component:k}),Object(m.jsx)(j.b,{exact:!0,path:"/search",component:w}),Object(m.jsx)(j.a,{to:"/saber"})]})})]})},T=function(){var e=Object(s.useContext)(i).user;return Object(m.jsx)(b.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(p,{exact:!0,path:"/login",component:v,isAuthenticated:e.logged}),Object(m.jsx)(g,{path:"/",component:A,isAuthenticated:e.logged})]})})})},L=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},F=function(){var e=Object(s.useReducer)(d,{},L),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(s.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),Object(m.jsx)(i.Provider,{value:{user:t,dispatch:r},children:Object(m.jsx)(T,{})})};n.a.render(Object(m.jsx)(F,{}),document.getElementById("root"))}]),[[69,1,2]]]);
//# sourceMappingURL=main.e6974085.chunk.js.map