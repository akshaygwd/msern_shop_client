(this.webpackJsonpmern_shop_client=this.webpackJsonpmern_shop_client||[]).push([[0],{46:function(e,t,a){e.exports=a(86)},51:function(e,t,a){},53:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),l=a.n(o),s=(a(51),a(52),a(53),a(12)),c=a(13),i=a(15),u=a(14),m=a(97),p=a(98),d=a(99),h=a(100),g=a(101),E=a(102),f=a(103),O=a(17),v=a(88),b=a(107),y=a(89),S=a(90),j=a(91),_=a(92),C=a(93),R=a(94),I=a(95),w=a(96),A=a(9),L=a(20),k=a.n(L),T=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"GET_ERRORS",payload:{message:e,status:t,id:a}}},D=function(e){var t=e().auth.token;console.log(t,"hit");var a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1,name:"",email:"",password:"",message:null},e.toggle=function(){e.setState({modal:!e.state.modal}),e.props.onClearError()},e.onChangHandler=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r={name:a.name,email:n,password:a.password};e.props.onRegister(r)},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.error;t!=e.error&&("REGISTER_FAIL"==t.id?this.setState({message:t.message.message}):this.setState({message:null})),this.state.modal&&this.props.isAuthenticated&&this.toggle()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{onClick:function(){return e.toggle()},href:"#"},"Register"),r.a.createElement(b.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(y.a,{toggle:this.toggle},"Register"),r.a.createElement(S.a,null,this.state.message?r.a.createElement(j.a,null,this.state.message):null,r.a.createElement(_.a,{onSubmit:function(t){return e.onFormSubmit(t)}},r.a.createElement(C.a,null,r.a.createElement(R.a,{for:"name"},"Name"),r.a.createElement(I.a,{type:"text",name:"name",id:"name",placeholder:"add Name",onChange:function(t){return e.onChangHandler(t)},value:this.state.value}),r.a.createElement(R.a,{for:"email"},"Email"),r.a.createElement(I.a,{type:"email",name:"email",id:"email",placeholder:"add email",onChange:function(t){return e.onChangHandler(t)},value:this.state.value}),r.a.createElement(R.a,{for:"password"},"password"),r.a.createElement(I.a,{type:"password",name:"password",id:"password",placeholder:"add password",onChange:function(t){return e.onChangHandler(t)},value:this.state.value}),r.a.createElement(w.a,{color:"dark",style:{marginTop:"2rem"}},"Register"))))))}}]),a}(n.Component),N=Object(A.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),(function(e){return{onRegister:function(t){return e(function(e){var t=e.name,a=e.email,n=e.password;return function(e){var r=JSON.stringify({name:t,email:a,password:n});k.a.post("https://mernshopserver.herokuapp.com/api/users",r,{headers:{"Content-type":"application/json"}}).then((function(t){console.log(t,"res"),e({type:"REGISTER_SUCCESS",payload:t.data})})).catch((function(t){console.log(t,"erroror mew"),e({type:"REGISTER_FAIL"}),e(T(t.response.data,t.response.status,"REGISTER_FAIL"))}))}}(t))},onClearError:function(){return e({type:"CLEAR_ERRORS"})}}}))(G),U=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1,email:"",password:"",message:null},e.toggle=function(){e.setState({modal:!e.state.modal}),e.props.onClearError()},e.onChangHandler=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,password:a.password};e.props.onLogin(n)},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.error;t!=e.error&&("LOGIN_FAIL"==t.id?this.setState({message:t.message.message}):this.setState({message:null})),this.state.modal&&this.props.isAuthenticated&&this.toggle()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{onClick:function(){return e.toggle()},href:"#"},"Login"),r.a.createElement(b.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(y.a,{toggle:this.toggle},"Login"),r.a.createElement(S.a,null,this.state.message?r.a.createElement(j.a,null,this.state.message):null,r.a.createElement(_.a,{onSubmit:function(t){return e.onFormSubmit(t)}},r.a.createElement(C.a,null,r.a.createElement(R.a,{for:"email"},"Email"),r.a.createElement(I.a,{type:"email",name:"email",id:"email",placeholder:"add email",onChange:function(t){return e.onChangHandler(t)},value:this.state.value}),r.a.createElement(R.a,{for:"password"},"password"),r.a.createElement(I.a,{type:"password",name:"password",id:"password",placeholder:"add password",onChange:function(t){return e.onChangHandler(t)},value:this.state.value}),r.a.createElement(w.a,{color:"dark",style:{marginTop:"2rem"}},"Login"))))))}}]),a}(n.Component),F=Object(A.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),(function(e){return{onLogin:function(t){return e(function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});k.a.post("https://mernshopserver.herokuapp.com/api/auth",n,{headers:{"Content-type":"application/json"}}).then((function(t){console.log(t,"res"),e({type:"LOGIN_SUCCESS",payload:t.data})})).catch((function(t){console.log(t,"erroror mew"),e({type:"LOGIN_FAIL"}),e(T(t.response.data,t.response.status,"LOGIN_FAIL"))}))}}(t))},onClearError:function(){return e({type:"CLEAR_ERRORS"})}}}))(U),H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:this.props.logout,href:"#"},"Logout"))}}]),a}(n.Component),M=Object(A.b)(null,{logout:function(){return{type:"LOGOUT_SUCCESS"}}})(H),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.auth,a=t.isAuthenticated,n=t.user,o=r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("strong",null,n?"Welcome ".concat(n.name):null)),r.a.createElement(m.a,null,r.a.createElement(M,null))),l=r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(N,null)),r.a.createElement(m.a,null,r.a.createElement(F,null)));return r.a.createElement("div",null,r.a.createElement(p.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(d.a,null,r.a.createElement(h.a,{href:"/"},"ShoppingList"),r.a.createElement(g.a,{onClick:function(){return e.toggle()}}),r.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(f.a,{className:"ml-auto",navbar:!0},a?o:l)))))}}]),a}(n.Component),J=Object(A.b)((function(e){return console.log(e.auth,"auth"),{auth:e.auth}}),null)(x),X=a(104),B=a(105),W=a(108),q=a(106),V=function(){return{type:"ITEM_LOADING"}},z=a(0),$=a.n(z),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.onGetItems()}},{key:"render",value:function(){var e=this,t=this.props,a=t.items,n=t.auth.isAuthenticated;return r.a.createElement(d.a,null,r.a.createElement(X.a,null,r.a.createElement(W.a,{className:"shopping-list"},a&&a.map((function(t,a){var o=t._id,l=t.name;return r.a.createElement(q.a,{key:o,timeout:500,classNames:"fade"},r.a.createElement(B.a,null,n?r.a.createElement(w.a,{className:"remove-btn",color:"danger",size:"sm",onClick:function(){return e.props.onDeleteItem(o)}},"Delete"):null,l))})))))}}]),a}(n.Component);K.protoTypes={onGetItems:$.a.func.isRequired,item:$.a.object.isRequired};var P=Object(A.b)((function(e){return console.log(e,"state"),{items:e.item.items,auth:e.auth}}),(function(e){return{onGetItems:function(){return e((function(e){e(V()),k.a.get("https://mernshopserver.herokuapp.com/api/items").then((function(t){console.log(t,"here me"),e({type:"GET_ITEMS",payload:t.data.items})})).catch((function(e){T(e.response.data,e.response.status)}))}))},onDeleteItem:function(t){return e(function(e){return function(t,a){t(V()),k.a.delete("https://mernshopserver.herokuapp.com/api/items/"+e,D(a)).then((function(a){t({type:"DELETE_ITEMS",payload:e})})).catch((function(e){T(e.response.data,e.response.status)}))}}(t))}}}))(K),Q=a(19),Y=a(43),Z=a(44),ee=a(8),te=(a(83),{items:[],loading:!1}),ae={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},ne={message:{},status:null,id:null},re=Object(Q.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(ee.a)(Object(ee.a)({},e),{},{items:t.payload,loading:!1});case"DELETE_ITEMS":return console.log(t),Object(ee.a)(Object(ee.a)({},e),{},{items:e.items.filter((function(e){return e._id!==t.payload}))});case"ADD_ITEMS":return console.log(t.payload,"payload"),console.log(e.items),Object(ee.a)(Object(ee.a)({},e),{},{items:[].concat(Object(Z.a)(e.items),[t.payload])});case"ITEM_LOADING":return console.log("me"),Object(ee.a)(Object(ee.a)({},e),{},{loading:!0});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(ee.a)(Object(ee.a)({},e),{},{isLoading:!0});case"USER_LOADED":return Object(ee.a)(Object(ee.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(ee.a)(Object(ee.a)(Object(ee.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT_SUCCESS":case"REGISTER_FAIL":return localStorage.removeItem("token"),Object(ee.a)(Object(ee.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{message:t.payload.message,status:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{message:{},status:{},id:{}};default:return e}}}),oe=[Y.a],le=Object(Q.e)(re,{},Object(Q.d)(Q.a.apply(void 0,oe),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),se=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1,name:""},e.toggle=function(){e.setState({modal:!e.state.modal})},e.onChangHandler=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a={name:e.state.name};e.props.onAddItem(a),e.toggle()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.props.auth.isAuthenticated&&r.a.createElement("div",null,r.a.createElement(w.a,{color:"dark",onClick:function(){return e.toggle()},style:{marginBottom:"2rem"}},"AddItem"),r.a.createElement(b.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(y.a,{toggle:this.toggle},"Add to Shopping List"),r.a.createElement(S.a,null,r.a.createElement(_.a,{onSubmit:function(t){return e.onFormSubmit(t)}},r.a.createElement(C.a,null,r.a.createElement(R.a,{for:"item"},"Item"),r.a.createElement(I.a,{type:"text",name:"name",id:"item",placeholder:"add item",onChange:function(t){return e.onChangHandler(t)},value:this.state.value}),r.a.createElement(w.a,{color:"dark",style:{marginTop:"2rem"}},"Add Item"))))))}}]),a}(n.Component),ce=Object(A.b)((function(e){return{auth:e.auth}}),(function(e){return{onAddItem:function(t){return e(function(e){return function(t,a){t(V()),k.a.post("https://mernshopserver.herokuapp.com/api/items",e,D(a)).then((function(e){console.log(e,"hit"),t({type:"ADD_ITEMS",payload:e.data.item})})).catch((function(e){T(e.response.data,e.response.status)}))}}(t))}}}))(se);var ie=function(){return Object(n.useEffect)((function(){le.dispatch((function(e,t){console.log("hit me now"),e({type:"USER_LOADING"}),k.a.get("https://mernshopserver.herokuapp.com/api/auth/user",D(t)).then((function(t){e({type:"USER_LOADED",payload:t.data})})).catch((function(t){console.log(t.response,"error"),e(T(t.response.data,t.response.status)),e({type:"AUTH_ERROR"})}))}))}),[]),r.a.createElement(A.a,{store:le},r.a.createElement("div",{className:"App"},r.a.createElement(J,null),r.a.createElement(d.a,null,r.a.createElement(ce,null)),r.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.fa003394.chunk.js.map