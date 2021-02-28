(this["webpackJsonpmaplestory-checklist"]=this["webpackJsonpmaplestory-checklist"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a,s=c(0),n=c.n(s),i=c(19),r=c.n(i),l=c(11),o=c(1),d=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l.b,{to:"/dailies",children:"Dailies"}),Object(o.jsx)(l.b,{to:"/weeklies",children:"Weeklies"}),Object(o.jsx)(l.b,{to:"/quiche",children:"Quiche"})]})},u=c(4),h=c(18),b=c(21),j=c(6),x={dailyChecklist:{"Arcane Dailies":!1,Ursus:!1,"Maple Tour":!1,"Monster Park":!1,"Yu Garden":!1,Gollux:!1,"Legion Quest":!1,Bosses:!1,"Commerci PQ":!1,"Commerci Solo":!1},shiftChecklist:{WAP:!1,"2x":!1,Legion:!1,Familiars:!1,"Drop/Meso Gear":!1,"Wild Totem":!1,"Additional EXP Shit":!1,"Link Skill Review":!1,"Legion Board Review":!1,Pets:!1},weeklyBosses:{HMag:!1,CZak:!1,HHila:!1,CBean:!1,CRA:!1,CPap:!1,"Princess No":!1,Akechi:!1,Lotus:!1,Damien:!1,Lucid:!1,VHila:!1}},p=c(20),O=Object(b.b)({name:"state",initialState:{checklist:{dailyChecklist:{},shiftChecklist:{},weeklyBosses:{}},characters:[],characterIndex:0},reducers:{updateChecklist:function(e,t){e.checklist=t.payload},updateCharList:function(e,t){e.characters=t.payload},addChar:function(e,t){e.characters.push(t.payload),console.log(Object(j.a)(e).characters),localStorage.setItem("characters",JSON.stringify(Object(j.a)(e).characters))},updateChecklistItem:function(e,t){e.checklist[t.payload.type][t.payload.field]=!e.checklist[t.payload.type][t.payload.field],localStorage.setItem(e.characters[e.characterIndex].name,JSON.stringify(Object(j.a)(e).checklist))},setCharIndex:function(e,t){var c=JSON.parse(localStorage.getItem(e.characters[t.payload].name));Object(p.isEmpty)(c)?(localStorage.setItem(e.characters[t.payload].name,JSON.stringify(x)),e.checklist=x):(e.checklist=c,console.log(Object(j.a)(e).checklist)),e.characterIndex=t.payload},resetDailyChecklists:function(e){e.characters.forEach((function(e){var t=x.dailyChecklist;localStorage.setItem(e.name,JSON.stringify(Object(h.a)(Object(h.a)({},x),{},{dailyChecklist:t})))}))},resetWeeklyChecklists:function(e){e.characters.forEach((function(e){var t=x.weeklyBosses,c=x.dailyChecklist;localStorage.setItem(e.name,JSON.stringify(Object(h.a)(Object(h.a)({},x),{},{weeklyBosses:t,dailyChecklist:c})))}))}}}),f=O.actions,g=(f.updateChecklist,f.setCharIndex),m=f.updateCharList,k=f.addChar,y=f.updateChecklistItem,v=f.resetDailyChecklists,w=f.resetWeeklyChecklists,C=O.reducer,N=c(17),S=function(){return Object(N.b)()},I=N.c,D=function(e){var t=e.field,c=e.value,a=Object(s.useState)(!1),n=Object(u.a)(a,2),i=n[0],r=n[1],l=S();return Object(s.useEffect)((function(){r(c)}),[c]),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{className:"inline-flex items-center h-8 cursor-pointer",children:[Object(o.jsx)("input",{type:"checkbox",className:"rounded text-pink-500",checked:i,onChange:function(e){r(e.target.checked),l(y({field:t,type:"dailyChecklist"}))}}),Object(o.jsx)("span",{className:"ml-2",children:t})]})},t)},E=function(e){var t=e.checklist;return Object(o.jsx)("div",{className:"container w-full flex flex-col text-lg",children:Object.entries(t).map((function(e){var t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(s.createElement)(D,{field:c,value:a,key:c})}))})},L=function(){var e=I((function(e){return e.checklist})).dailyChecklist;return Object(o.jsx)("div",{children:Object(o.jsx)(E,{checklist:e})})},J=c(3),B=function(){var e=I((function(e){return e.checklist})).weeklyBosses;return Object(o.jsx)("div",{children:Object(o.jsx)(E,{checklist:e})})},M=function(){return Object(o.jsxs)("div",{className:"sticky top-0 z-40 h-14 px-36 flex-1 min-w-full flex items-center container bg-purple-500 text-white",children:[Object(o.jsx)("img",{src:"/maplestory-icon.png",alt:"Icon",width:32}),Object(o.jsx)("p",{className:"text-xl",children:"Maplelist"}),Object(o.jsx)(l.b,{to:"/dailies",className:"bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-20",children:"Dailies"}),Object(o.jsx)(l.b,{to:"/weeklies",className:"bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5",children:"Weeklies"}),Object(o.jsx)(l.b,{to:"/quiche",className:"bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5",children:"Quiche"})]})};!function(e){e.magician="magician",e.thief="thief",e.warrior="warrior",e.bowman="bowman",e.pirate="pirate"}(a||(a={}));var A,H,P,W,z=[{name:"Victor",class:a.pirate,level:210},{name:"SuperKilla",class:a.magician,level:210}],Q=c(15),V=c(16),q=V.a.div(A||(A=Object(Q.a)(["\n    display: flex;\n    position: relative;\n    flex-direction: column; \n    width: 60%;\n    left: 50%;\n    transform: translate(-50%, 0%);\n"]))),G=function(e){e.setDialogOpen,e.setIsLoading,e.setIsError,e.setErrorMsg;var t=Object(s.useState)(""),c=Object(u.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(a.magician),l=Object(u.a)(r,2),d=l[0],h=l[1],b=Object(s.useState)(0),j=Object(u.a)(b,2),x=j[0],p=j[1],O=S();return Object(o.jsxs)(q,{children:[Object(o.jsxs)("label",{className:"block",children:[Object(o.jsx)("span",{children:"Name"}),Object(o.jsx)("input",{type:"text",maxLength:12,onChange:function(e){i(e.target.value)},className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"})]}),Object(o.jsxs)("label",{className:"block",children:[Object(o.jsx)("span",{children:"Class"}),Object(o.jsx)("select",{onChange:function(e){h(a[e.target.value])},className:"block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",children:Object.keys(a).map((function(e){return Object(o.jsx)("option",{children:e})}))})]}),Object(o.jsxs)("label",{className:"block",children:[Object(o.jsx)("span",{children:"Number"}),Object(o.jsx)("input",{type:"number",max:300,min:0,onChange:function(e){var t=parseInt(e.target.value);p(t>300||t<0?0:t)},value:x,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"})]}),Object(o.jsx)("button",{onClick:function(){O(k({name:n,level:x,class:d}))},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5",children:"Add"})]})},R=V.a.div(H||(H=Object(Q.a)(["\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(0,0,0,0.7);\n    z-index: 3;\n    top: 0;\n    left: 0;\n    \n"]))),T=V.a.div(P||(P=Object(Q.a)(["\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    display: flex;\n    flex-direction: column;\n    transform: translate(-50%, -50%);\n    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n    min-width: 400px;\n    max-width: 100%; \n    min-height: 400px;\n    border-radius: 8px;\n    border: 1px solid black;\n"]))),F=V.a.div(W||(W=Object(Q.a)(["\n    border-radius: 5px 5px 0 0;\n    padding-left: 5px;\n    text-align: center;\n    font-size: 28px;\n    font-family: Montserrat;\n    padding: 1rem;\n"]))),K=function(e){var t=e.setDialogOpen,c=e.type,a=Object(s.useState)("Dialog"),n=Object(u.a)(a,2),i=n[0],r=n[1],l=Object(s.useState)(!1),d=Object(u.a)(l,2),h=(d[0],d[1]),b=Object(s.useState)(""),j=Object(u.a)(b,2),x=(j[0],j[1]),p=Object(s.useState)(!1),O=Object(u.a)(p,2),f=(O[0],O[1]);Object(s.useEffect)((function(){switch(c){case"addCharacter":r("Add Character")}}),[c]);return Object(o.jsx)(R,{children:Object(o.jsxs)(T,{children:[Object(o.jsx)(F,{children:i}),Object(o.jsx)("img",{onClick:function(){return t(!1)},src:"/exit.svg",className:"absolute top-0 right-0 h-4 w-4 m-3 hover:bg-blue-200",alt:"exit"}),function(){switch(c){case"addCharacter":return Object(o.jsx)(G,{setDialogOpen:t,setIsError:h,setErrorMsg:x,setIsLoading:f})}}()]})})},U=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1];return{setDialogOpen:a,renderDialog:function(e){return c&&Object(o.jsx)(K,{setDialogOpen:a,type:e})},dialogOpen:c}},X=function(e){var t=e.className,c=e.level,s=e.name,n=e.index,i=e.selected,r=S();return Object(o.jsxs)("div",{className:"cursor-pointer border-blue-400 border rounded-lg flex items-center ".concat(i?"text-white bg-blue-400":""),onClick:function(){return r(g(n))},children:[Object(o.jsx)("img",{className:" w-12 h-12 m-2 rounded-full ring-1 blue-500",src:"/".concat(a[t],".svg"),alt:"".concat(a[t])}),Object(o.jsxs)("div",{className:"pr-2",children:[Object(o.jsx)("p",{children:s}),Object(o.jsx)("p",{children:c})]})]})},Y=function(){var e=I((function(e){return e.characters})),t=I((function(e){return e.characterIndex})),c=S(),a=U(),n=a.renderDialog,i=a.setDialogOpen,r=a.dialogOpen;return Object(s.useEffect)((function(){!function(){var e=new Date,t=localStorage.getItem("lastVisited");console.log(e.getHours()),t&&e.getHours()>19&&new Date(t)<e&&new Date(t).getHours()<19?(console.log("Daily check passed"),0===e.getDay()?(console.log("week check passed"),c(w())):(console.log("weeklycheck failed"),c(v()))):c(v()),localStorage.setItem("lastVisited",e.toISOString())}();var e=localStorage.getItem("characters");Object(p.isEmpty)(e)?localStorage.setItem("characters",JSON.stringify(z)):c(m(JSON.parse(e.toString())))}),[]),Object(o.jsxs)("div",{className:"grid grid-rows-1 grid-cols-2",children:[n("addCharacter"),Object(o.jsx)("div",{className:"flex items-center py-5 gap-x-4",children:e&&e.map((function(e,c){return Object(s.createElement)(X,{index:c,name:e.name,className:e.class,level:e.level,selected:c===t,key:e.name})}))}),Object(o.jsx)("button",{onClick:function(){i(!r)},className:"col-start-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 w-40 place-self-end self-start",children:"Add Character"})]})},Z=Object(b.a)({reducer:C}),$=function(){var e=I((function(e){return e.checklist})).shiftChecklist;return Object(o.jsx)("div",{children:Object(o.jsx)(E,{checklist:e})})},_=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(N.a,{store:Z,children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(M,{}),Object(o.jsxs)("div",{className:"lg:z-50 max-w-8xl px-36 container min-w-full h-screen",children:[Object(o.jsx)(Y,{}),Object(o.jsxs)(J.c,{children:[Object(o.jsx)(J.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(J.a,{exact:!0,path:"/dailies",children:Object(o.jsx)(L,{})}),Object(o.jsx)(J.a,{exact:!0,path:"/weeklies",children:Object(o.jsx)(B,{})}),Object(o.jsx)(J.a,{exact:!0,path:"/quiche",children:Object(o.jsx)($,{})})]})]})]})})})};var ee=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(_,{})})};c(46);r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(ee,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.dfc47f48.chunk.js.map