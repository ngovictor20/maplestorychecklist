(this["webpackJsonpmaplestory-checklist"]=this["webpackJsonpmaplestory-checklist"]||[]).push([[0],{26:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a,r,s=c(1),n=c.n(s),i=c(17),l=c.n(i),o=c(4),d=c(16),h=function(){return Object(d.b)()},u=d.c,b=c(11),j=c(19),m=c(9),f={dailyChecklist:{"Arcane Dailies":!1,Ursus:!1,"Maple Tour":!1,"Monster Park":!1,"Yu Garden":!1,Gollux:!1,"Legion Quest":!1,Bosses:{Zakum:!1,Horntail:!1,Hila:!1,"Root Abyss":!1,"Von Leon":!1,Arkarium:!1,Magnus:!1,"Pink Bean":!1,Ranmaru:!1},Commerci:{"Commerci PQ":!1,"Commerci Solo":!1}},shiftChecklist:{"Wealth Acquisition Potion":!1,"2x EXP":!1,Legion:!1,Familiars:!1,"Drop/Meso Gear":!1,"Wild Totem":!1,"Additional EXP Shit":!1,"Link Skill Review":!1,"Legion Board Review":!1,Pets:!1},weeklyBosses:{"Hard Magnus":!1,"Chaos Zakum":!1,"Hard Hila":!1,"Chao Pink Bean":!1,Cygnus:!1,"Chaos Root Abyss":{"Chaos Queen":!1,"Chaos Von Bon":!1,"Chaos Pierre":!1,"Chaos Vellum":!1},"Chaos Papulatus":!1,"Princess No":!1,Akechi:!1,Lotus:!1,Damien:!1,Lucid:!1,"Verus Hila":!1}};!function(e){e.dailyChecklist="dailyChecklist",e.weeklyBosses="weeklyBosses",e.shiftChecklist="shiftChecklist"}(a||(a={})),function(e){e.magician="magician",e.thief="thief",e.warrior="warrior",e.bowman="bowman",e.pirate="pirate"}(r||(r={}));var g,x,O,p,k,y,v=c(3),C=c(8),N=function e(t){var c={};return Object.entries(t).forEach((function(t){var a=Object(v.a)(t,2),r=a[0],s=a[1];c[r]="boolean"!==typeof s&&e(s)})),c},w=c(22),S=c.n(w),I={checklist:{dailyChecklist:{},shiftChecklist:{},weeklyBosses:{}},characters:[],characterIndex:0,checklistType:a.dailyChecklist},T=Object(j.b)({name:"state",initialState:I,reducers:{updateChecklist:function(e,t){e.checklist=t.payload},updateCharList:function(e,t){e.characters=t.payload},setChecklistType:function(e,t){e.checklistType=t.payload},updateCharacter:function(e,t){e.characters[e.characterIndex]=t.payload,localStorage.setItem("characters",JSON.stringify(Object(m.a)(e).characters))},addChar:function(e,t){e.characters.push(t.payload),localStorage.setItem("characters",JSON.stringify(Object(m.a)(e).characters))},updateChecklistItem:function(e,t){var c=t.payload.field,a=e.checklistType,r=e.characters,s=e.checklist,n=e.characterIndex;e.checklist[a][c]=!s[a][c],localStorage.setItem(r[n].name,JSON.stringify(Object(m.a)(e).checklist))},setCharIndex:function(e,t){var c=e.characters[t.payload].name;e.checklist=function(e){var t=JSON.parse(localStorage.getItem(e));return Object(C.isEmpty)(t)?(localStorage.setItem(e,JSON.stringify(f)),f):t}(c),e.characterIndex=t.payload},dailyResetChecklists:function(e){Object(m.a)(e).characters.forEach((function(e){var t=localStorage.getItem(e.name);if(t){var c=JSON.parse(t.toString()),a=c.weeklyBosses,r=N(c);localStorage.setItem(e.name,JSON.stringify(Object(b.a)(Object(b.a)({},r),{},{weeklyBosses:a})))}else localStorage.setItem(e.name,JSON.stringify(Object(b.a)({},f)))}))},weeklyResetChecklists:function(e){Object(m.a)(e).characters.forEach((function(e){var t=localStorage.getItem(e.name);if(t){var c=JSON.parse(t.toString()),a=N(c);localStorage.setItem(e.name,JSON.stringify(Object(b.a)({},a)))}else localStorage.setItem(e.name,JSON.stringify(Object(b.a)({},f)))}))},resetChecklists:function(e){Object(m.a)(e).characters.forEach((function(e){localStorage.setItem(e.name,JSON.stringify(Object(b.a)({},f)))}))},deleteCharacter:function(e,t){var c=e.characters[t.payload].name;localStorage.removeItem(c),e.characters.splice(t.payload,1),localStorage.setItem("characters",JSON.stringify(Object(m.a)(e).characters))},updateSubChecklist:function(e,t){e.checklist[e.checklistType][t.payload.field]=t.payload.data,localStorage.setItem(e.characters[e.characterIndex].name,JSON.stringify(Object(m.a)(e).checklist))},addChecklistItem:function(e,t){var c=Object(m.a)(e),a=c.checklistType,r=c.checklist;t.payload in r[a]||(e.checklist[a][t.payload]=!1,localStorage.setItem(e.characters[e.characterIndex].name,JSON.stringify(Object(m.a)(e).checklist)))},deleteChecklistItem:function(e,t){var c=Object(m.a)(e),a=c.checklistType,r=c.checklist;t.payload.heading?(S()(r[a][t.payload.heading]),e.checklist[a][t.payload.heading]=Object(C.omit)(r[a][t.payload.heading],[t.payload.field])):(S()(r[a]),e.checklist[a]=Object(C.omit)(r[a],[t.payload.field])),localStorage.setItem(e.characters[e.characterIndex].name,JSON.stringify(Object(m.a)(e).checklist))},addSubChecklist:function(e,t){var c=Object(m.a)(e),a=c.checklistType,r=c.checklist;t.payload in r[a]||(e.checklist[a][t.payload]={},localStorage.setItem(e.characters[e.characterIndex].name,JSON.stringify(Object(m.a)(e).checklist)))},addSubChecklistItem:function(e,t){var c=Object(m.a)(e),a=c.checklistType,r=c.checklist;"boolean"!==typeof r[a][t.payload.heading]&&(t.payload.field in r[a][t.payload.heading]||(e.checklist[a][t.payload.heading][t.payload.field]=!1,localStorage.setItem(e.characters[e.characterIndex].name,JSON.stringify(Object(m.a)(e).checklist))))},clearExistingChecklist:function(e){var t=Object(m.a)(e),c=t.checklistType,a=t.checklist;e.checklist[c]=N(a[c]),localStorage.setItem(e.characters[e.characterIndex].name,JSON.stringify(Object(m.a)(e).checklist))},clearCharacterChecklist:function(e){var t=Object(m.a)(e).checklist,c=N(t);e.checklist=Object(b.a)({},c),localStorage.setItem(e.characters[e.characterIndex].name,JSON.stringify(Object(m.a)(e).checklist))}}}),D=T.actions,E=(D.updateChecklist,D.setCharIndex),A=D.updateCharList,J=D.addChar,R=D.updateCharacter,M=D.updateChecklistItem,B=D.dailyResetChecklists,P=D.weeklyResetChecklists,L=D.resetChecklists,H=D.clearExistingChecklist,V=D.clearCharacterChecklist,W=D.setChecklistType,z=D.deleteCharacter,K=D.updateSubChecklist,Y=D.addChecklistItem,G=D.addSubChecklistItem,Q=D.addSubChecklist,U=D.deleteChecklistItem,X=function(e){return e.checklist},Z=function(e){return e.checklistType},_=function(e){return e.characters},q=function(e){return e.characterIndex},F=T.reducer,$=c(5),ee=c(0),te=$.a.div(g||(g=Object(o.a)(["\n  background-color: #eeeeee;\n  border: 1px solid #8d8d8d;\n  height: calc(100% - 3rem);\n"]))),ce=$.a.button(x||(x=Object(o.a)(["\n  background: linear-gradient(180deg, #ddff00 0%, #88cc00 100%);\n"]))),ae=$.a.input(O||(O=Object(o.a)(["\n  -moz-appearance: textfield;\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n"]))),re="mb-1 w-full block border-0 border-gray-300 border-b-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",se=function(e){var t=e.setDialogOpen,c=Object(s.useState)(""),a=Object(v.a)(c,2),n=a[0],i=a[1],l=Object(s.useState)(r.magician),o=Object(v.a)(l,2),d=o[0],u=o[1],b=Object(s.useState)(0),j=Object(v.a)(b,2),m=j[0],f=j[1],g=h();return Object(ee.jsxs)("div",{className:"flex flex-col h-full content-center",children:[Object(ee.jsxs)(te,{className:"rounded-xl m-3 mb-1 flex items-center px-1 py-4",children:[Object(ee.jsxs)("div",{className:"relative flex bg-white mx-2 px-4 py-4 h-full w-full rounded-xl flex flex-col gap-2",children:[Object(ee.jsx)("p",{className:"text-2xl text-center mb-2 font-semibold underline",children:"Add Character"}),Object(ee.jsxs)("label",{className:"block",children:[Object(ee.jsx)("span",{children:"Name"}),Object(ee.jsx)("input",{type:"text",maxLength:12,onChange:function(e){i(e.target.value)},className:re})]}),Object(ee.jsxs)("label",{className:"block",children:[Object(ee.jsx)("span",{children:"Class"}),Object(ee.jsx)("select",{onChange:function(e){u(r[e.target.value])},className:re,children:Object.keys(r).map((function(e){return Object(ee.jsx)("option",{children:e})}))})]}),Object(ee.jsxs)("label",{className:"block",children:[Object(ee.jsx)("span",{children:"Level"}),Object(ee.jsx)(ae,{type:"number",max:300,min:0,onChange:function(e){var t=parseInt(e.target.value);f(t>300||t<0?0:t)},value:m,className:re})]})]}),Object(ee.jsx)("img",{onClick:function(){return t(!1)},src:"".concat("/maplestorychecklist","/exit.svg"),className:"absolute top-0 right-0 h-4 w-4 m-4 cursor-pointer",alt:"exit"})]}),Object(ee.jsx)(ce,{onClick:function(){g(J({name:n,level:m,class:d})),t(!1)},className:"self-end mr-4 h-6 mb-2 w-16 text-sm rounded-md text-white",children:"Add"})]})};!function(e){e[e.deleteCharacter=0]="deleteCharacter",e[e.addCharacter=1]="addCharacter",e[e.deleteStorage=2]="deleteStorage",e[e.informReset=3]="informReset",e[e.resetAllChecklists=4]="resetAllChecklists"}(p||(p={}));var ne,ie,le,oe,de,he,ue,be,je,me,fe=$.a.div(k||(k=Object(o.a)(["\n  background-color: #eeeeee;\n  border: 1px solid #8d8d8d;\n  height: calc(100% - 3rem);\n"]))),ge=$.a.button(y||(y=Object(o.a)(["\n  background: linear-gradient(180deg, #ddff00 0%, #88cc00 100%);\n"]))),xe=function(e){var t=e.setDialogOpen,c=e.confirmMessage,a=e.onConfirm;return Object(ee.jsxs)("div",{className:"relative flex flex-col h-full content-center ",children:[Object(ee.jsxs)(fe,{className:"rounded-xl m-3 mb-1 flex h-full items-center px-1 py-4",children:[Object(ee.jsx)("div",{className:"flex content-center justify-center w-1/3 h-full p-4 border-r-2 border-gray-200",children:Object(ee.jsx)("img",{src:"".concat("/maplestorychecklist","/admin.png"),className:"self-center",alt:""})}),Object(ee.jsx)("div",{className:"relative flex bg-white ml-4 mr-1 p-6 h-full w-full rounded-xl flex flex-col",children:Object(ee.jsx)("p",{className:"text-base self-center text-center text-gray-500",children:c})}),Object(ee.jsx)("img",{onClick:function(){return t(!1)},src:"".concat("/maplestorychecklist","/exit.svg"),className:"absolute top-0 right-0 h-4 w-4 m-4 cursor-pointer",alt:"exit"})]}),Object(ee.jsx)(ge,{className:"self-end mr-4 h-6 mb-2 w-16 text-sm rounded-md text-white",onClick:a,children:"OK"})]})},Oe=$.a.div(ne||(ne=Object(o.a)(["\n  background-color: #2e9cd7;\n"]))),pe=function(e){var t=e.setDialogOpen,c=e.type,a=Object(s.useState)("Dialog"),r=Object(v.a)(a,2),n=(r[0],r[1]),i=u((function(e){return e.characterIndex})),l=h();Object(s.useEffect)((function(){switch(c){case p.addCharacter:n("Add Character");break;case p.deleteCharacter||p.deleteStorage||p.resetAllChecklists:n("Confirm Action")}}),[c]);return Object(ee.jsx)("div",{className:"fixed h-full w-screen z-50 inset-0 bg-gray-300 bg-opacity-75 flex justify-center items-center",children:Object(ee.jsx)(Oe,{className:"relative max-w-1/3 rounded-xl text-black",children:function(){switch(c){case p.addCharacter:return Object(ee.jsx)(se,{setDialogOpen:t});case p.deleteCharacter:return Object(ee.jsx)(xe,{confirmMessage:"Are you sure you want to delete this character?",setDialogOpen:t,onConfirm:function(){l(z(i)),t(!1)}});case p.deleteStorage:return Object(ee.jsx)(xe,{confirmMessage:"Are you sure you want to wipe your character data?",setDialogOpen:t,onConfirm:function(){localStorage.clear(),t(!1),window.location.reload()}});case p.informReset:return Object(ee.jsx)(xe,{confirmMessage:"Your checklists have been reset!",setDialogOpen:t,onConfirm:function(){t(!1)}});case p.resetAllChecklists:return Object(ee.jsx)(xe,{confirmMessage:"Are you sure you want to reset all your checklists to the original list? This cannot be undone.",setDialogOpen:t,onConfirm:function(){l(L()),t(!1),window.location.reload()}})}}()})})},ke=function(){var e=Object(s.useState)(!1),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(p.deleteCharacter),n=Object(v.a)(r,2),i=n[0],l=n[1];return{toggleDialog:function(e){a(!c),l(e)},renderDialog:function(){return c&&Object(ee.jsx)(pe,{setDialogOpen:a,type:i})}}},ye="hover:bg-accent-grey h-full cursor-pointer px-3 flex items-center  text-right",ve=function(){var e=h(),t=ke(),c=t.renderDialog,r=t.toggleDialog;return Object(ee.jsxs)("div",{className:"fixed top-0 z-30 h-20 sm:px-10 lg:px-36 flex-1 min-w-full flex container bg-header-grey text-white justify-between",children:[c(),Object(ee.jsxs)("div",{className:"flex items-center ",children:[Object(ee.jsx)("img",{src:"".concat("/maplestorychecklist","/maplestory-icon.png"),alt:"Icon",className:"w-12 h-12"}),Object(ee.jsx)("p",{className:"text-2xl",children:"Maplelist"})]}),Object(ee.jsxs)("div",{className:"flex justify space-x-2 h-full text-xl text-white",children:[Object(ee.jsx)("div",{onClick:function(){e(W(a.dailyChecklist))},className:ye,children:Object(ee.jsx)("p",{children:"Dailies"})}),Object(ee.jsx)("div",{onClick:function(){e(W(a.weeklyBosses))},className:ye,children:Object(ee.jsx)("p",{children:"Weeklies"})}),Object(ee.jsx)("div",{onClick:function(){e(W(a.shiftChecklist))},className:ye,children:Object(ee.jsx)("p",{children:"Shift"})}),Object(ee.jsx)("div",{onClick:function(){r(p.deleteStorage)},className:"hover:bg-alert-red h-full cursor-pointer px-3 flex items-center text-right",children:Object(ee.jsx)("p",{children:"Clear Data"})})]})]})},Ce=c(15),Ne=(c(26),{type:"info",className:"tooltip",arrowColor:"#0c0c0fdd"}),we=$.a.input(ie||(ie=Object(o.a)(["\n  height: 30%;\n  width: 100%;\n"]))),Se=$.a.div(le||(le=Object(o.a)(['\n  input:read-only {\n    border: 0px;\n  }\n  input[type="number"]::-webkit-inner-spin-button,\n  input[type="number"]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type="number"] {\n    -moz-appearance: textfield;\n  }\n']))),Ie=function(e){var t=e.className,c=e.level,a=e.name,n=e.index,i=e.selected,l=e.toggleDialog,o=h(),d=Object(s.useState)(!0),u=Object(v.a)(d,2),b=u[0],j=u[1],m=Object(s.useState)(a),f=Object(v.a)(m,2),g=f[0],x=f[1],O=Object(s.useState)(c),k=Object(v.a)(O,2),y=k[0],C=k[1];return Object(ee.jsxs)(Se,{className:"w-4/5 relative cursor-pointer border-accent-grey border-2 shadow-lg flex items-center h-20 rounded-md hover:ring-2 focus:ring-gray-300 ".concat(i?"ring ring-gray-300 ring-offset-1":""),onClick:function(){return o(E(n))},children:[Object(ee.jsx)("img",{className:"hidden lg:block w-12 h-12 m-2 rounded-full ring-1",src:"".concat("/maplestorychecklist","/").concat(r[t],".svg"),alt:"".concat(r[t])}),Object(ee.jsxs)("div",{className:"grid grid-cols-2 h-full",children:[Object(ee.jsxs)("div",{className:"text-xs sm:text-sm lg:text-base flex flex-col justify-center",children:[Object(ee.jsx)(we,{type:"text",readOnly:b,className:"w-full p-0 border-0 ".concat(b?"":"border-gray-300 border-b"),onChange:function(e){x(e.currentTarget.value)},placeholder:a}),Object(ee.jsx)(we,{type:"number",readOnly:b,className:"w-full p-0 border-0 ".concat(b?"":"border-gray-300 border-b"),onChange:function(e){C(Number(e.currentTarget.value))},placeholder:c.toString()})]}),Object(ee.jsxs)("div",{className:"flex flex-col justify-center pr-2 items-center",children:[Object(ee.jsx)("img",{src:"".concat("/maplestorychecklist","/exit.svg"),className:"self-end",alt:"exit",onClick:function(){l(p.deleteCharacter)}}),Object(ee.jsx)("img",{onClick:function(){b||o(R({name:g,class:t,level:y})),j(!b)},src:"".concat("/maplestorychecklist","/").concat(b?"edit":"checkmark",".svg"),className:"self-end",alt:"exit","data-tip":!0,"data-for":"edit-tip"})]})]}),b&&Object(ee.jsx)(Ce.a,{id:"edit-tip",TooltipProps:Ne,children:Object(ee.jsx)("span",{children:"Edit character information"})})]})},Te=c(50),De=c(51),Ee=c(46),Ae=c(47),Je=c(48),Re=function(){var e=u(_),t=u(q),c=h(),a=ke(),r=a.renderDialog,n=a.toggleDialog;return Object(s.useEffect)((function(){var e=localStorage.getItem("characters");Object(C.isEmpty)(e)||c(A(JSON.parse(e.toString()))),function(){var e=Object(Te.a)(new Date,"America/New_York"),t=localStorage.getItem("lastVisited");if(t){var a=Object(De.a)(e,{hours:19,minutes:0,seconds:0,milliseconds:0}),r=Object(Te.a)(t.toString(),"America/New_York");Object(Ee.a)(e)>=19&&Object(Ae.a)(r,a)&&(Object(Je.a)(e)?(c(P()),console.log("Weekly Reset Triggered")):(c(B()),console.log("Daily Reset Triggered")),n(p.informReset))}localStorage.setItem("lastVisited",e.toISOString())}()}),[]),Object(ee.jsxs)("div",{className:"",children:[r(),Object(ee.jsx)("div",{className:"flex flex-col items-center py-5 gap-y-6",children:e&&e.map((function(e,c){return Object(s.createElement)(Ie,{index:c,name:e.name,className:e.class,level:e.level,selected:c===t,toggleDialog:n,key:e.name})}))})]})},Me=$.a.div(oe||(oe=Object(o.a)(["\n  height: calc(100vh - 5rem);\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);\n"]))),Be=function(){var e=ke(),t=e.renderDialog,c=e.toggleDialog;return Object(ee.jsxs)(Me,{className:" bottom-0 w-full left-0 relative shadow-xl flex flex-col items-center text-header-grey",children:[t(),Object(ee.jsx)("div",{className:"pt-6 w-full",children:Object(ee.jsx)(Re,{})}),Object(ee.jsx)("div",{onClick:function(){c(p.addCharacter)},className:"hover:bg-accent-grey hover:text-white absolute bottom-2 w-4/5 h-14 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md",children:Object(ee.jsx)("p",{children:"Add Character"})})]})},Pe=$.a.label(de||(de=Object(o.a)(["\n  width: 75%;\n  &:hover .hover-target {\n    visibility: visible;\n  }\n"]))),Le=function(e){var t=e.field,c=e.value,a=Object(s.useState)(!1),r=Object(v.a)(a,2),n=r[0],i=r[1],l=h();return Object(s.useEffect)((function(){i(c)}),[c]),Object(ee.jsx)("div",{className:"",children:Object(ee.jsxs)(Pe,{className:"flex items-center h-8 cursor-pointer justify-between hover:bg-gray-50",children:[Object(ee.jsxs)("div",{className:"inline-flex items-center",children:[Object(ee.jsx)("input",{type:"checkbox",className:"rounded text-pink-500 cursor-pointer",checked:n,onChange:function(e){i(e.target.checked),l(M({field:t}))}}),Object(ee.jsx)("span",{className:"ml-2",children:t})]}),Object(ee.jsx)("img",{onClick:function(){l(U({field:t}))},src:"".concat("/maplestorychecklist","/exit.svg"),className:"h-4 w-4 m-1 hover:bg-blue-200 hover-target invisible",alt:"exit"})]})},t)},He=c(18),Ve=$.a.label(he||(he=Object(o.a)(["\n  width: 100%;\n  &:hover .hover-target {\n    visibility: visible;\n  }\n"]))),We=function(e){var t=e.heading,c=e.field,a=e.globalChecked,r=e.value,n=e.onChangeHandler,i=Object(s.useState)(!1),l=Object(v.a)(i,2),o=l[0],d=l[1],u=h();return Object(s.useEffect)((function(){d(a)}),[a]),Object(s.useEffect)((function(){d(r)}),[r]),Object(ee.jsx)("div",{children:Object(ee.jsxs)(Ve,{className:"inline-flex items-center h-8 cursor-pointer justify-between hover:bg-gray-50",children:[Object(ee.jsxs)("div",{className:"inline-flex items-center",children:[Object(ee.jsx)("input",{type:"checkbox",className:"rounded text-pink-500 cursor-pointer",checked:o,onChange:function(e){console.log(e.target.checked),d(e.target.checked),n(c,e.target.checked)}}),Object(ee.jsx)("span",{className:"ml-2 w-full",children:c})]}),Object(ee.jsx)("img",{onClick:function(){u(U({field:c,heading:t}))},src:"".concat("/maplestorychecklist","/exit.svg"),className:"h-4 w-4 m-1 hover:bg-blue-200 hover-target invisible",alt:"exit"})]})})},ze=$.a.div(ue||(ue=Object(o.a)(["\n  width: 100%;\n  &:hover .hover-target {\n    visibility: visible;\n  }\n"]))),Ke=function(e){var t=e.checklist,c=e.label,a=Object(s.useState)(!1),r=Object(v.a)(a,2),n=r[0],i=r[1],l=Object(s.useState)(!1),o=Object(v.a)(l,2),d=o[0],u=o[1],j=h(),m=function(e,a){console.log("On change: ",e,a),j(K({field:c,data:Object(b.a)(Object(b.a)({},t),{},Object(He.a)({},e,a))}))};return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)(ze,{className:"inline-flex items-center h-8 justify-between",children:[Object(ee.jsxs)("div",{className:"inline-flex items-center",children:[Object(ee.jsx)("input",{type:"checkbox",className:"rounded text-pink-500 cursor-pointer",checked:n,onChange:function(e){var a;i(e.target.checked),a=e.target.checked,console.log("Change all"),j(K({field:c,data:Object(C.mapValues)(t,(function(){return a}))}))}}),Object(ee.jsx)("span",{className:"ml-2",children:c})]}),Object(ee.jsxs)("div",{className:"inline-flex items-end gap-1",children:[Object(ee.jsx)("img",{onClick:function(){u(!d)},src:"".concat("/maplestorychecklist","/add.svg"),className:"h-4 w-4 hover:bg-blue-200 hover-target invisible cursor-pointer ",alt:"add"}),Object(ee.jsx)("img",{onClick:function(){j(U({field:c}))},src:"".concat("/maplestorychecklist","/exit.svg"),className:"h-4 w-4 hover:bg-blue-200 hover-target invisible",alt:"exit"})]})]}),Object(ee.jsx)("div",{className:"ml-6",children:Object.entries(t).map((function(e){var t=Object(v.a)(e,2),a=t[0],r=t[1];return"boolean"===typeof r?Object(s.createElement)(We,{heading:c,field:a,value:r,globalChecked:n,onChangeHandler:m,key:a}):void 0}))}),Object(ee.jsx)("input",{type:"text",placeholder:"Add checklist item...",onKeyDown:function(e){if("Enter"===e.key){var t=e.currentTarget.value;Object(C.isEmpty)(t)||(j(G({heading:c,field:e.currentTarget.value})),e.currentTarget.value="",u(!1))}},className:"ml-10 ".concat(d?"block":"hidden"," border-0 border-gray-300 border-b-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50")})]})},Ye=$.a.div(be||(be=Object(o.a)(["\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n  height: 100%;\n  overflow-y: auto;\n"]))),Ge=function(){var e=u(Z),t=u(X),c=h(),r=Object(s.useState)([]),n=Object(v.a)(r,2),i=n[0],l=n[1],o=Object(s.useState)([]),d=Object(v.a)(o,2),b=d[0],j=d[1];Object(s.useEffect)((function(){var c=[],a=[];Object.entries(t[e]).forEach((function(e){var t=Object(v.a)(e,2),r=t[0],n=t[1];"boolean"!==typeof n?a.push(Object(ee.jsx)(Ke,{label:r,checklist:n},r)):c.push(Object(s.createElement)(Le,{field:r,value:n,key:r}))})),l(c),j(a)}),[t,e]);return Object(ee.jsxs)(Ye,{className:"container w-full flex flex-col text-lg p-6 ",children:[Object(ee.jsx)("h2",{className:"text-2xl sm:text-4xl lg:text-5xl leading-none font-bold text-gray-900 tracking-tight mb-5",children:function(){switch(e){case a.dailyChecklist:return"Daily Checklist";case a.shiftChecklist:return"Shift Checklist";case a.weeklyBosses:return"Weekly Bosses"}}()}),Object(ee.jsxs)("div",{className:"grid grid-cols-2",children:[Object(ee.jsxs)("div",{children:[Object(ee.jsx)("input",{type:"text",placeholder:"Add checklist item..",onKeyDown:function(e){if("Enter"===e.key){var t=e.currentTarget.value;Object(C.isEmpty)(t)||(c(Y(e.currentTarget.value)),e.currentTarget.value="")}},className:"mb-1 block border-0 border-gray-300 border-b-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"}),i]}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)("input",{type:"text",placeholder:"Add category...",onKeyDown:function(e){if("Enter"===e.key){var t=e.currentTarget.value;Object(C.isEmpty)(t)||(c(Q(e.currentTarget.value)),e.currentTarget.value="")}},className:"block border-0 border-gray-300 border-b-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"}),b]})]})]})},Qe=c(52),Ue=c(49),Xe=function(e){var t=new Date,c=Object(Ue.a)(e,t);return{days:Math.floor(c/864e5),hours:Math.floor(c/36e5%24),minutes:Math.floor(c/1e3/60%60),seconds:Math.floor(c/1e3%60)}},Ze=function(e){var t=e.hours,c=e.minutes,a=e.seconds;return t<10&&(t="0"+t),c<10&&(c="0"+c),a<10&&(a="0"+a),"".concat(t,":").concat(c,":").concat(a)},_e=function(){var e=Object(s.useState)(Xe(Object(Qe.a)())),t=Object(v.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){a(Xe(Object(Qe.a)()))}),1e3);return function(){return clearTimeout(e)}})),Object(ee.jsxs)("div",{className:"p-6",children:[Object(ee.jsx)("h2",{className:"text-xl sm:text-2xl lg:text-5xl leading-none font-bold text-gray-900 tracking-tight mb-5",children:"Timers"}),Object(ee.jsx)("p",{className:"text-sm sm:text-base lg:text-lg",children:"Today's Reset - ".concat(Ze(c))})]})},qe={type:"info",className:"tooltip",arrowColor:"#0c0c0fdd"},Fe=function(){var e=h(),t=ke(),c=t.renderDialog,a=t.toggleDialog;return Object(ee.jsxs)("div",{className:"p2 sm:p-3 lg:p-6 flex flex-col items-center gap-3 text-xs sm:text-sm lg:text-base",children:[c(),Object(ee.jsx)("div",{onClick:function(){a(p.resetAllChecklists)},"data-tip":!0,"data-for":"reset-all-checklists",className:"w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2",children:"Reset All Checklists"}),Object(ee.jsx)("div",{onClick:function(){e(H())},"data-tip":!0,"data-for":"clear-checklist",className:"w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2",children:"Clear Checklist"}),Object(ee.jsx)("div",{onClick:function(){e(V())},"data-tip":!0,"data-for":"clear-current-checklists",className:"w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2",children:"Clear All Checklist"}),Object(ee.jsx)(Ce.a,{id:"reset-all-checklists",TooltipProps:qe,children:Object(ee.jsxs)("span",{children:["Click this button to reset all character's checklists to the original checklist. ",Object(ee.jsx)("br",{})," This will wipe any custom checklists"]})}),Object(ee.jsx)(Ce.a,{id:"clear-checklist",TooltipProps:qe,children:Object(ee.jsx)("span",{children:"Unchecks all the boxes in the currently viewed checklist"})}),Object(ee.jsx)(Ce.a,{id:"clear-current-checklists",TooltipProps:qe,children:Object(ee.jsx)("span",{children:"Unchecks all boxes in all checklists for the current character"})})]})},$e=$.a.div(je||(je=Object(o.a)(["\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n"]))),et=function(){return Object(ee.jsxs)("div",{className:"py-10 sm:pr-10 lg:pr-36 relative grid grid-cols-mainLayout grid-rows-2",children:[Object(ee.jsx)("div",{className:"row-span-2 mx-10",children:Object(ee.jsx)(Ge,{})}),Object(ee.jsx)($e,{className:"mb-10",children:Object(ee.jsx)(_e,{})}),Object(ee.jsx)($e,{children:Object(ee.jsx)(Fe,{})})]})},tt=$.a.div(me||(me=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 20% auto;\n  width: 100vw;\n"]))),ct=function(){return Object(ee.jsxs)("div",{className:"h-screen",children:[Object(ee.jsx)(ve,{}),Object(ee.jsxs)(tt,{className:"pt-20",children:[Object(ee.jsx)(Be,{}),Object(ee.jsx)(et,{})]})]})},at=Object(j.a)({reducer:F});var rt=function(){return Object(ee.jsx)("div",{children:Object(ee.jsx)(d.a,{store:at,children:Object(ee.jsx)(ct,{})})})};c(42);l.a.render(Object(ee.jsx)(n.a.StrictMode,{children:Object(ee.jsx)(rt,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.bac0e93d.chunk.js.map