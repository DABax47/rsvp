(this.webpackJsonprsvp=this.webpackJsonprsvp||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(4),u=n.n(l),r=(n(15),n(7)),s=n(2),o=n(1),c=n(5),d=n(6),m=n(9),g=n(8),E=function(e){return e.isEditing?i.a.createElement("input",{type:"text",value:e.children,onChange:e.handleNameEdits}):i.a.createElement("span",null,e.children)},f=function(e){return i.a.createElement("li",null,i.a.createElement(E,{isEditing:e.isEditing,handleNameEdits:function(t){e.setName(t.target.value)}},e.name),i.a.createElement("label",null,i.a.createElement("input",{checked:e.hand,onChange:e.handleConfirmation,type:"checkbox"})," Confirmed"),i.a.createElement("button",{onClick:e.handleToggleEditing},e.isEditing?"save":"edit"),i.a.createElement("button",{onClick:e.handleRemoveGuest},"remove"))},h=function(e){return e.name?i.a.createElement("li",{className:"pending"},i.a.createElement("span",null,e.name)):null},p=function(e){return i.a.createElement("ul",null,i.a.createElement(h,{name:e.pendingGuest}),e.guest.filter((function(e,t){return!e.isFiltered||e.isConfirmed})).map((function(t,n){return i.a.createElement(f,{handleRemoveGuest:function(){return e.handleRemoveGuest(n)},handleConfirmation:function(){e.toggleConfirmationAt(n)},handleToggleEditing:function(){e.toggleEditingAt(n)},name:t.name,isEditing:t.isEditing,isConfirmed:t.isConfirmed,setName:function(t){return e.setNameAt(t,n)}})})))},v=function(e){return i.a.createElement("table",{className:"counter"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Attending:"),i.a.createElement("td",null,e.numberAttending)),i.a.createElement("tr",null,i.a.createElement("td",null,"Unconfirmed:"),i.a.createElement("td",null,e.numberUnconfirmed)),i.a.createElement("tr",null,i.a.createElement("td",null,"Total:"),i.a.createElement("td",null,e.totalInvited))))},b=function(e){var t=e.addNewGuest,n=e.handleGuestInput,a=e.pendingGuest;return i.a.createElement("form",{onSubmit:t},i.a.createElement("input",{type:"text",onChange:n,value:a,placeholder:"Invite Someone"}),i.a.createElement("button",{type:"submit",name:"submit",value:"submit"},"Submit"))},G=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={pendingGuest:"",isFiltered:!1,guest:[]},e.toggleGuestPropertyAt=function(t,n){return e.setState({guest:e.state.guest.map((function(e,a){return a===n?Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},t,!e[t])):e}))})},e.toggleConfirmationAt=function(t){e.toggleGuestPropertyAt("isConfirmed",t)},e.toggleEditingAt=function(t){e.toggleGuestPropertyAt("isEditing",t)},e.setNameAt=function(t,n){return e.setState({guest:e.state.guest.map((function(e,a){return a===n?Object(o.a)(Object(o.a)({},e),{},{name:t}):e}))})},e.toggleFilter=function(){e.setState({isFiltered:!e.state.isFiltered})},e.getTotalInvited=function(){return e.state.guest.length},e.handleGuestInput=function(t){e.setState({pendingGuest:t.target.value})},e.addNewGuest=function(t){t.preventDefault(),e.setState({guest:[{name:e.state.pendingGuest,isConfirmed:!1,isEditing:!1}].concat(Object(r.a)(e.state.guest)),pendingGuest:""})},e.handleRemoveGuest=function(t){return e.setState({guest:e.state.guest.filter((function(e,n){return n!==t}))})},e.getAttendingGuests=function(){return e.state.guest.reduce((function(e,t){return t.isConfirmed?e+1:e}),0)},e.getTotalInvited=function(){return e.state.guest.length},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.getTotalInvited(),t=this.getAttendingGuests(),n=e-t;return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("h1",null,"RSVP"),i.a.createElement("p",null,"Useful React Fundementals"),i.a.createElement(b,{addNewGuest:this.addNewGuest,handleGuestInput:this.handleGuestInput,pendingGuest:this.state.pendingGuest})),i.a.createElement("div",{className:"main"},i.a.createElement("div",null,i.a.createElement("h2",null,"Invitees"),i.a.createElement("label",null,i.a.createElement("input",{onChange:this.toggleFilter,checked:this.state.isFiltered,type:"checkbox"})," ","Hide those who haven't responded")),i.a.createElement(v,{totalInvited:e,numberAttending:t,numberUnconfirmed:n}),i.a.createElement(p,{pendingGuest:this.state.pendingGuest,handleRemoveGuest:this.handleRemoveGuest,isFiltered:this.state.isFiltered,guest:this.state.guest,toggleConfirmationAt:this.toggleConfirmationAt,toggleEditingAt:this.toggleEditingAt,setNameAt:this.setNameAt})))}}]),n}(i.a.Component);u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(G,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.669863a7.chunk.js.map