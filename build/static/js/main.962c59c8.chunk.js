(this["webpackJsonpsoamee-tech-test"]=this["webpackJsonpsoamee-tech-test"]||[]).push([[0],{12:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t(18),s=t.n(n),r=t(8),i=(t(12),t(2)),l=t.p+"static/media/logo.7df48342.png",d=t(0),j=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("a",{href:"https://www.soamee.com/",alt:"Home",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:"header__logo",src:l,alt:"Logo",title:"Logo"})})})},o=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__paragraph",children:"\xa9 2021 Developed by Patricia Mart\xednez"})})},u=t(7);var m=function(e){var a="https://jsonplaceholder.typicode.com/users".concat(e?"?id="+e:"");return fetch(a).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{id:e.id,name:e.name,email:e.email,city:e.address.city,company:e.company.name,website:e.website}}))}))},b=function(){var e=Object(i.h)().userId,a=Object(i.g)(),t=Object(c.useState)({}),n=Object(u.a)(t,2),s=n[0],l=n[1];return Object(c.useEffect)((function(){m(e).then((function(e){1===e.length?l(e[0]):a.push("/not-found")}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"card__detail",children:Object(d.jsxs)("section",{className:"detail__item",children:[Object(d.jsxs)("p",{className:"card__user--name",children:["Nombre: ",s.name]}),Object(d.jsxs)("p",{className:"card__user--email",children:["Email: ",s.email]}),Object(d.jsxs)("p",{className:"card__user--city",children:["Ciudad: ",s.city]}),Object(d.jsxs)("p",{className:"card__user--company",children:["Empresa: ",s.company]}),Object(d.jsx)("p",{className:"",children:Object(d.jsxs)("a",{href:s.website,className:"card__user--website",children:["Web:",s.website]})}),Object(d.jsx)(r.b,{className:"card__link",to:"/",children:Object(d.jsx)("i",{className:"fas fa-times-circle icon ",alt:"Atr\xe1s",title:"Atr\xe1s"})})]})})})},h=t(17),O=function(e){return Object(d.jsxs)("div",{className:"new-card",children:[Object(d.jsxs)("div",{className:"new-card__container",children:[Object(d.jsx)("label",{className:"new-card__option",children:"Nombre: "}),Object(d.jsx)("input",{className:"new-card__input",type:"text",name:"name",id:"name",placeholder:"Escribe aqu\xed el nombre...",onChange:e.handleName,value:e.name})]}),Object(d.jsxs)("div",{className:"new-card__container",children:[Object(d.jsx)("label",{className:"new-card__option",children:"Email: "}),Object(d.jsx)("input",{className:"new-card__input",type:"email",name:"email",id:"email",placeholder:"ejemplo@ejemplo.com",onChange:e.handleEmail,value:e.email})]}),Object(d.jsxs)("div",{className:"new-card__container",children:[Object(d.jsx)("label",{className:"new-card__option",children:"Ciudad: "}),Object(d.jsx)("input",{className:"new-card__input",type:"text",name:"city",id:"city",placeholder:"Valladolid...",onChange:e.handleCity,value:e.city})]}),Object(d.jsxs)("div",{className:"new-card__container",children:[Object(d.jsx)("label",{className:"new-card__option",children:"Empresa: "}),Object(d.jsx)("input",{className:"new-card__input",type:"text",name:"company",id:"company",placeholder:"Empresa...",onChange:e.handleCompany,value:e.company})]}),Object(d.jsxs)("div",{className:"new-card__container",children:[Object(d.jsx)("label",{className:"new-card__option",children:"Web: "}),Object(d.jsx)("input",{className:"new-card__input",type:"text",name:"web",id:"web",placeholder:"Empresa...",onChange:e.handleWeb,value:e.web})]}),Object(d.jsx)("div",{className:"new-card__container",children:Object(d.jsx)("input",{className:"new-card__addbuton",type:"submit",value:"A\xf1adir",onClick:e.handleClick})})]})},p=function(e){var a=Object(i.g)();return Object(d.jsxs)("div",{className:"card__link",title:"Ver detalle",onClick:function(){a.push("/user/".concat(e.userData.id))},children:[Object(d.jsxs)("p",{className:"card__user--name",children:["Nombre: ",e.userData.name]}),Object(d.jsx)("p",{className:"",children:Object(d.jsxs)("a",{href:"{props.userData.website}",className:"card__user--website",children:["Web:",e.userData.website]})}),Object(d.jsx)("div",{className:"card__errase--container",children:Object(d.jsx)("i",{className:"fas fa-times-circle card__errase--btn",id:e.userData.id,onClick:function(a){a.stopPropagation(),e.handleErase(a)},title:"Borrar"})})]})},x=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"card__title",children:"Resultados"}),Object(d.jsx)("ul",{className:"card__list",children:e.data.map((function(a,t){return Object(d.jsx)("li",{className:"card__user",children:Object(d.jsx)(p,{userData:a,handleErase:e.handleErase})},t)}))})]})},_=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",placeholder:"Buscar usuario...",value:e.searchName,onChange:function(a){e.handleChangeFilter({value:a.target.value,id:"name"})}},"name")})},f=function(e){return Object(d.jsx)("form",{className:"form",onSubmit:function(e){return e.preventDefault()},children:Object(d.jsx)(_,{searchName:e.searchName,handleChangeFilter:e.handleChangeFilter})})},N=function(){var e=Object(c.useState)([]),a=Object(u.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)(""),o=Object(u.a)(j,2),b=o[0],p=o[1],_=Object(c.useState)(""),N=Object(u.a)(_,2),v=N[0],w=N[1],g=Object(c.useState)(""),y=Object(u.a)(g,2),C=y[0],E=y[1],k=Object(c.useState)(""),D=Object(u.a)(k,2),S=D[0],F=D[1],L=Object(c.useState)(""),I=Object(u.a)(L,2),T=I[0],W=I[1],A=Object(c.useState)(!1),B=Object(u.a)(A,2),J=B[0],P=B[1];Object(c.useEffect)((function(){m().then((function(e){n(e),console.log("Useeffect data",e)}))}),[]);var U=t.filter((function(e){return e.name.toLocaleLowerCase().includes(T.toLocaleLowerCase())}));return Object(d.jsxs)("section",{className:"cards",children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:"new-card__btn ",type:"submit",value:J?"Ocultar formulario":"Agregar usuario",onClick:function(e){e.preventDefault(),P(!J)}})}),J&&Object(d.jsx)(O,{className:"new-card",id:"new_user",handleName:function(e){l(e.currentTarget.value)},handleEmail:function(e){p(e.currentTarget.value)},handleCity:function(e){w(e.currentTarget.value)},handleCompany:function(e){E(e.currentTarget.value)},handleWebSite:function(e){F(e.currentTarget.value)},handleClick:function(e){e.preventDefault();var a={name:i,email:b,city:v,company:C,website:S};n([].concat(Object(h.a)(t),[a])),l(""),p(""),w(""),E(""),F("")},name:i,email:b,city:v,company:C,website:S}),Object(d.jsx)(f,{searchName:T,handleChangeFilter:function(e){W(e.value)}}),Object(d.jsx)(x,{data:U,handleErase:function(e){e.preventDefault();var a=t.findIndex((function(a){return a.id===parseInt(e.target.id)}));t.splice(a,1),n(Object(h.a)(t))}})]})};var v=function(){return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(j,{}),Object(d.jsx)("main",{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{exact:!0,path:"/",children:Object(d.jsx)(N,{})}),Object(d.jsx)(i.b,{exact:!0,path:"/user/:userId",children:Object(d.jsx)(b,{selectedUser:null})}),Object(d.jsx)(i.b,{path:"*",children:Object(d.jsx)(i.a,{to:"/"})})]})}),Object(d.jsx)(o,{})]})};s.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.962c59c8.chunk.js.map