(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var u=a[s];0!==n[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e31ada4f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}n[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/chat-firebase/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3654:function(e,t,a){"use strict";var r=a("caba"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-card",{attrs:{flat:""}},[a("v-toolbar",{attrs:{color:"primary",dark:"",extended:"",flat:""}}),a("v-card",{staticClass:"mx-auto",staticStyle:{"margin-top":"-64px"},attrs:{"max-width":"700"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"grey--text"},[e.user?a("div",{staticClass:"current_user"},[a("img",{staticStyle:{width:"40px"},attrs:{src:e.user.avatar,alt:""}}),a("p",[e._v(" "+e._s(e.user.name)+" ")])]):e._e()]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:e.logout}},[a("v-icon",[e._v("mdi-location-exit")])],1)],1),a("v-divider"),a("v-main",[a("v-container",[a("router-view")],1)],1)],1)],1)],1)},o=[],s=a("5530"),i=a("2f62"),u=a("59ca"),c=a.n(u),l=(a("ea7b"),{name:"App",data:function(){return{}},mounted:function(){var e=c.a.auth().currentUser;if(e){var t={email:e.email,uid:e.uid,name:e.displayName,avatar:e.photoURL};this.$store.commit("setUser",t)}},methods:Object(s["a"])({},Object(i["b"])(["logout"])),computed:Object(s["a"])({},Object(i["c"])(["user"]))}),f=l,p=(a("cf25"),a("2877")),d=a("6544"),m=a.n(d),v=a("7496"),b=a("8336"),h=a("b0af"),g=a("a523"),y=a("ce7e"),x=a("132d"),j=a("f6c4"),O=a("2fa4"),w=a("71d9"),_=a("2a7f"),k=Object(p["a"])(f,n,o,!1,null,null,null),T=k.exports;m()(k,{VApp:v["a"],VBtn:b["a"],VCard:h["a"],VContainer:g["a"],VDivider:y["a"],VIcon:x["a"],VMain:j["a"],VSpacer:O["a"],VToolbar:w["a"],VToolbarTitle:_["a"]});a("d3b7");var V=a("8c4f"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[e.user?e._e():a("v-btn",{attrs:{color:"primary"},on:{click:e.loginUser}},[e._v("Login con Google")]),a("ul",e._l(e.reverseMessageList,(function(t,r){return a("li",{key:r,class:{right:t.user==e.user.name}},[a("v-chip",{attrs:{pill:"",color:t.user==e.user.name?"primary":""}},[a("v-avatar",{attrs:{left:""}},[a("v-img",{attrs:{src:t.avatar}})],1),e._v(" "+e._s(t.text)+" ")],1)],1)})),0),a("v-text-field",{attrs:{label:"mensaje aqui...",required:""},on:{keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.sendMessage():null}},model:{value:e.messageText,callback:function(t){e.messageText=t},expression:"messageText"}})],1)},L=[],S=(a("4160"),a("b0c0"),a("25f0"),a("159b"),a("66ce"),{apiKey:"AIzaSyCcob0zhYUizC9ZdDnPjRXmaIOpFDIko_I",authDomain:"vue-firebase-chat-19fe7.firebaseapp.com",databaseURL:"https://vue-firebase-chat-19fe7.firebaseio.com",projectId:"vue-firebase-chat-19fe7",storageBucket:"vue-firebase-chat-19fe7.appspot.com",messagingSenderId:"386124787757",appId:"1:386124787757:web:515d351edf84bfcdab48a4"});c.a.initializeApp(S);var M=c.a.auth(),P=c.a.database(),U={name:"Home",data:function(){return{messageList:[],messageText:""}},mounted:function(){this.getMessages()},methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["loginUser"])),{},{getMessages:function(){var e=this;P.ref("/messages").on("value",(function(t){e.messageList=[],t.forEach((function(t){e.messageList.unshift(t.val())}))}))},sendMessage:function(){var e={text:this.messageText,user:this.user.name,avatar:this.user.avatar};P.ref("/messages/"+this.messageList.length).set(e),this.messageText=""},ID:function(){return"_"+Math.random().toString(36).substr(2,9)}}),computed:Object(s["a"])(Object(s["a"])({},Object(i["c"])(["user"])),{},{reverseMessageList:function(){return this.messageList.reverse()}})},I=U,A=(a("3654"),a("8212")),E=a("cc20"),D=a("adda"),z=a("8654"),R=Object(p["a"])(I,C,L,!1,null,null,null),$=R.exports;m()(R,{VAvatar:A["a"],VBtn:b["a"],VChip:E["a"],VImg:D["a"],VTextField:z["a"]}),r["a"].use(V["a"]);var q=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],B=new V["a"]({mode:"history",base:"/chat-firebase/",routes:q}),F=B;r["a"].use(i["a"]);var G=new i["a"].Store({state:{user:null},mutations:{setUser:function(e,t){e.user=t}},actions:{loginUser:function(e){var t=e.commit,a=new c.a.auth.GoogleAuthProvider;M.signInWithPopup(a).then((function(e){console.log(e);var a={email:e.user.email,uid:e.user.uid,name:e.user.displayName,avatar:e.user.photoURL};t("setUser",a)})).catch((function(e){console.log("ha ocurrido un error al autenficar",e)}))},logout:function(e){var t=e.commit;M.signOut().then((function(){t("setUser",null)})).catch((function(e){console.log(e)}))}},modules:{}}),H=a("f309");r["a"].use(H["a"]);var J=new H["a"]({});r["a"].config.productionTip=!1;var N=null;M.onAuthStateChanged((function(){N||(N=new r["a"]({router:F,store:G,vuetify:J,render:function(e){return e(T)}}).$mount("#app"))}))},caba:function(e,t,a){},cf25:function(e,t,a){"use strict";var r=a("fea6"),n=a.n(r);n.a},fea6:function(e,t,a){}});
//# sourceMappingURL=app.25b5e022.js.map