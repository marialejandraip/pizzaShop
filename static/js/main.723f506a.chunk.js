(this["webpackJsonppizza-shop"]=this["webpackJsonppizza-shop"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"ingredients":{"Pollo":{"precio":5000},"Peperoni":{"precio":4500},"Aceitunas":{"precio":3000},"Champi\xf1ones":{"precio":3000},"Albahaca":{"precio":3000},"Rugula":{"precio":3000},"Tomate":{"precio":3000},"Queso Mozarella":{"precio":3000},"Cebolla":{"precio":3000},"Ma\xedz":{"precio":3000},"Pepinillos":{"precio":3000},"Salami":{"precio":3000},"Jam\xf3n":{"precio":3000},"Piment\xf3n en rodaja":{"precio":3000},"Brocoli":{"precio":3000},"Berenjena":{"precio":3000},"Jam\xf3n serrano":{"precio":3000},"Queso parmesano":{"precio":3000}}}')},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),r=c.n(a),i=c(31),s=c.n(i),o=(c(40),c(41),c(19)),j=c(4),d=c(12),l=c(23),p=c.p+"static/media/Logo.d13a677e.svg";c(42);function b(e){var t=e.nav;return Object(n.jsxs)("div",{className:"Header-nav",children:[Object(n.jsx)("div",{className:"Nav-container",children:t.map((function(e,t){return Object(n.jsx)(o.b,{className:"Nav",to:e.route,children:e.name},"".concat(t," menu"))}))}),Object(n.jsx)("div",{className:"Image-nav",children:Object(n.jsx)("img",{src:p,alt:"logo"})})]})}var u=c(34);function h(e){var t=e.product,c=e.idx,r=e.setToppings,i=e.toppings,s=e.Data,o=Object(a.useState)(!1),j=Object(d.a)(o,2),l=j[0],p=j[1],b=Object.values(s);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",nome:t,checked:l,onChange:function(){!function(e){p(!l),r([].concat(Object(u.a)(i),[{producto:t,precio:b[e].precio,idx:e}]))}(c)}}),"".concat(t)]},"".concat(c))})}function O(e){var t=e.pizzaName,c=e.setName,a=e.setPhone,r=e.day,i=e.month,s=e.year;return Object(n.jsxs)("div",{className:"container-lastform",children:[Object(n.jsx)("h4",{children:"Para terminar tu pizza responde..."}),Object(n.jsx)("label",{children:Object(n.jsxs)("p",{children:["Nombre de la pizza: ",t]})}),Object(n.jsxs)("label",{children:["Nombre:",Object(n.jsx)("input",{type:"text",name:"name",className:"Input-Name",placeholder:"  Mar\xeda",onChange:function(e){return c(e.target.value)}})]}),Object(n.jsxs)("label",{children:["Tel\xe9fono:",Object(n.jsx)("input",{type:"text",name:"name",className:"Input-Phone",placeholder:"  3001112224",onChange:function(e){return a(e.target.value)}})]}),Object(n.jsx)("label",{children:Object(n.jsx)("p",{children:"Fecha: ".concat(r,"/").concat(i+1,"/").concat(s)})}),Object(n.jsx)("button",{type:"submit",className:"button-form",children:"Guardar"})]})}c(47);function m(e){var t=e.toppings,c=e.total;return Object(n.jsxs)("div",{className:"Resumen",children:[Object(n.jsx)("h3",{children:"Resumen"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Ingredientes"}),Object(n.jsx)("th",{children:"Precio"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.producto},"".concat(t," topping")),Object(n.jsxs)("td",{children:[" $ ",e.precio]},"".concat(t," price"))]},"".concat(t," row"))}))}),Object(n.jsx)("tfoot",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Total"}),Object(n.jsxs)("th",{children:["$ ",c," "]})]})})]})]})}c(48);function x(){return Object(n.jsx)("div",{className:"Footer",children:Object(n.jsx)("p",{children:"Made it by Mar\xeda Alejandra Ib\xe1\xf1ez "})})}c(49);var f=c(26),z=c.n(f),g=c(28),v=c(33),N=(c(30),c(27));N.a.initializeApp({apiKey:"AIzaSyBF3D5A9EJP_JymTdb4_TY7fA3Coyl-YyQ",authDomain:"pizzashop-a80af.firebaseapp.com",projectId:"pizzashop-a80af",storageBucket:"pizzashop-a80af.appspot.com",messagingSenderId:"501240171793",appId:"1:501240171793:web:e1dc6e56f7257109d0d0b0"});var y=N.a.firestore();function C(){return(C=Object(v.a)(z.a.mark((function e(t){var c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.collection("pizzas").add({pizzaName:t.pizzaName,name:t.name,phone:t.phone,products:t.products,totalOrder:t.totalOrder,date:t.date,time:t.time});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function P(){var e=Object.keys(l.ingredients),t=Object(a.useState)(""),c=Object(d.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)([{producto:"Masa base",precio:1e4}]),o=Object(d.a)(s,2),j=o[0],p=o[1],u=Object(a.useState)(0),f=Object(d.a)(u,2),z=f[0],g=f[1],v=Object(a.useState)(""),N=Object(d.a)(v,2),y=N[0],P=N[1],T=Object(a.useState)(""),k=Object(d.a)(T,2),S=k[0],I=k[1],F=new Date,B=F.getDate(),D=F.getMonth(),M=F.getFullYear(),A={pizzaName:r,name:y,phone:S,products:j,totalOrder:z,time:F,date:"".concat(B,"/").concat(D+1,"/").concat(M)};return Object(a.useEffect)((function(){g(j.reduce((function(e,t){return e+t.precio}),0))}),[j,p]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{nav:[{route:"/",name:"Crear Pizza"},{route:"/Tracking",name:"Tracking"}]}),Object(n.jsx)("div",{className:"Banner-pizza"}),Object(n.jsxs)("div",{className:"Container-crearPizza",children:[Object(n.jsx)("h1",{children:"Crea tu pizza"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){C.apply(this,arguments)}(A),p([{producto:"Masa base",precio:1e4}]),i(""),e.target.reset()},children:[Object(n.jsxs)("label",{className:"name-input",children:["Nombre de la pizza:",Object(n.jsx)("input",{type:"text",name:"name",className:"Input-PizzaName",placeholder:"  Aqu\xed el nombre de tu pizza",onChange:function(e){return i(e.target.value)}})]}),Object(n.jsxs)("div",{className:"Container-ingredientes",children:[Object(n.jsx)("h2",{children:"Ingredientes"}),Object(n.jsx)("div",{className:"Container-products",children:e.map((function(t,c){return Object(n.jsx)(h,{product:t,idx:c,ingredientes:e,Data:l.ingredients,setToppings:p,toppings:j},"".concat(c))}))})]}),Object(n.jsxs)("div",{className:"container-last",children:[Object(n.jsx)(O,{pizzaName:r,setName:P,setPhone:I,day:B,month:D,year:M}),Object(n.jsx)(m,{toppings:j,total:z})]})]})]}),Object(n.jsx)(x,{})]})}c(52);function T(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){!function(e,t,c){y.collection(e).orderBy("time","desc").onSnapshot((function(e){return e.forEach((function(e){var c=e.data();t.push(Object(g.a)(Object(g.a)({},c),{},{idDoc:e.id}))})),c(t)}))}("pizzas",[],r)}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{nav:[{route:"/",name:"Crear Pizza"},{route:"/Tracking",name:"Tracking"}]}),Object(n.jsx)("div",{className:"Banner-tracking"}),Object(n.jsx)("h1",{children:"Tracking"}),Object(n.jsxs)("table",{className:"table-tracking",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Nombre de la pizza"}),Object(n.jsx)("th",{children:"Nombre Cliente"}),Object(n.jsx)("th",{children:"Tel\xe9fono Cliente"}),Object(n.jsx)("th",{children:"Fecha"}),Object(n.jsx)("th",{children:"Productos"}),Object(n.jsx)("th",{children:"Total"})]})}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.pizzaName}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsx)("td",{children:e.date}),Object(n.jsx)("td",{children:Object(n.jsx)("ul",{children:e.products.map((function(e,t){return Object(n.jsx)("li",{children:e.producto},"".concat(t))}))})}),Object(n.jsx)("td",{children:e.totalOrder})]},t)}))})]}),Object(n.jsx)(x,{})]})}var k=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:P}),Object(n.jsx)(j.a,{path:"/Tracking",component:T})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),S()}},[[53,1,2]]]);
//# sourceMappingURL=main.723f506a.chunk.js.map