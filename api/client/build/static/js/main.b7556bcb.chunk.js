(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(244)},243:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"SAVE_DRAWING",function(){return h}),a.d(n,"GET_FILE",function(){return f}),a.d(n,"RENDER_DRAWING",function(){return g}),a.d(n,"AUTH_USER",function(){return b}),a.d(n,"AUTH_ERROR",function(){return v}),a.d(n,"SAVE_DESIGN",function(){return E}),a.d(n,"GET_DESIGN",function(){return w}),a.d(n,"GET_DESIGNS",function(){return y}),a.d(n,"signup",function(){return N}),a.d(n,"signin",function(){return S}),a.d(n,"signout",function(){return D}),a.d(n,"updateDrawing",function(){return O}),a.d(n,"getFile",function(){return j}),a.d(n,"getUserDesigns",function(){return k}),a.d(n,"getUserDesign",function(){return x}),a.d(n,"saveDesign",function(){return M}),a.d(n,"renderDrawing",function(){return I});var r=a(0),o=a.n(r),c=a(23),i=a(28),l=a(50),s=a(6),u=a(4),m=a(107),d=a(24),p=a.n(d),h="SAVE_DRAWING",f="GET_FILE",g="RENDER_DRAWING",b="AUTH_USER",v="AUTH_ERROR",E="SAVE_DESIGN",w="GET_DESIGN",y="GET_DESIGNS",N=function(e,t){return function(a){p.a.post("auth/signup",e).then(function(e){a({type:b,payload:e.data}),localStorage.setItem("token",e.data.token),localStorage.setItem("email",e.data.email),localStorage.setItem("name",e.data.name),t()}).catch(function(e){a({type:v,payload:"Email in use"})})}},S=function(e,t){return function(a){p.a.post("auth/signin",e).then(function(e){a({type:b,payload:e.data}),localStorage.setItem("token",e.data.token),localStorage.setItem("email",e.data.email),localStorage.setItem("name",e.data.name),t()}).catch(function(e){a({type:v,payload:"Email in use"})})}},D=function(){return localStorage.removeItem("token"),localStorage.removeItem("email"),localStorage.removeItem("name"),{type:b,payload:""}},O=function(e,t){return function(a){p.a.post("public/".concat(e),{data:t}).then(function(e){a({type:h,payload:e.data})}).catch(function(e){console.log(e)})}},j=function(e){return function(t){p.a.get("download/".concat(e)).then(function(e){t({type:f,payload:e})}).catch(function(e){console.log(e)})}},k=function(e){return function(t){p.a.get("".concat(e,"/designs")).then(function(e){t({type:y,payload:e.data})}).catch(function(e){console.log(e)})}},x=function(e,t){return function(a){p.a.get("".concat(e,"/designs/").concat(t)).then(function(e){a({type:w,payload:e.data})}).catch(function(e){console.log(e)})}},M=function(e,t){return function(a){p.a.get("user/".concat(e,"/designs/").concat(t,"/save")).then(function(e){a({type:E,payload:e.data})}).catch(function(e){console.log(e)})}},I=function(e){return function(t){var a="".concat("http://localhost:8000/","?"),n="",r=(localStorage.getItem("email"),e.fileString),o=e.extrude;r&&(n+="file=".concat(r,"&")),o&&(n+="extrude=".concat(o,"&")),n.length>0&&(a+=n),p.a.get(a).then(function(e){console.log(e),t({type:g,payload:e.data})}).catch(function(e){console.log(e)})}},C=a(74),G={authenticated:localStorage.getItem("token")||"",email:localStorage.getItem("email")||"",name:localStorage.getItem("name")||"",errorMessage:""},R=a(247),U=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(C.a)({},e,{authenticated:t.payload.token,email:t.payload.email,name:t.payload.name});case v:return Object(C.a)({},e,{errorMessage:t.payload});default:return e}},form:R.a,timeStamp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case h:case f:return{timeStamp:new Date};default:return e}},currentModel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tiger.svg",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload.file;default:return e}},designs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(t.error)return t.error;switch(t.type){case E:case w:case y:return t.payload;default:return e}}}),P=a(13),A=a(14),W=a(16),T=a(15),_=a(17);var F=Object(s.b)(function(e){return{authenticated:e.auth.authenticated,email:e.auth.email,name:e.auth.name}},n)(function(e){var t=e.authenticated,a=(e.email,e.name),n=e.signout,r=function(){n()};return o.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark align-middle text-align-middle"},o.a.createElement(c.c,{className:"navbar-brand",to:"/"},"MindDesign"),o.a.createElement("div",{className:""},o.a.createElement("ul",{className:"navbar-nav mr-2"},t?o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"nav-item mr-3"},o.a.createElement(c.b,{to:"/user/home",className:"btn btn-md btn-secondary"},a,"'s Designs")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("button",{onClick:r,className:"btn btn-md btn-info"},"Sign Out"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"nav-item mx-2"},o.a.createElement(c.b,{to:"/signup",className:"btn btn-sm btn-primary"},"Sign Up")),o.a.createElement("li",{className:"nav-item mx-2"},o.a.createElement(c.b,{to:"/signin",className:"btn btn-sm btn-success"},"Sign In"))))))}),L=a(22),H=a(110);window.THREE=H,a(198),a(199),a(200),a(69);var B=window.THREE,V=a(69),z=new B.Scene;z.background=new B.Color(14737632);var q,J,Y=new B.GridHelper(160,10);Y.rotation.x=Math.PI/2,z.add(Y),window.innerWidth<=768?(q=.8*window.innerWidth,J=.5*window.innerHeight):(q=.37*window.innerWidth,J=.5*window.innerHeight);var K=new B.PerspectiveCamera(50,q/J,1,1e3);K.position.set(0,0,200);var Q=new B.WebGLRenderer({antialias:!0});Q.setPixelRatio(window.devicePixelRatio),Q.setSize(q,J),new B.OrbitControls(K,Q.domElement).screenSpacePanning=!0;var X,Z={currentModel:"tiger.svg",extrude:!1},$=new B.SVGLoader,ee=new B.STLExporter,te=document.createElement("a");te.style.display="none",document.body.appendChild(te);var ae,ne=function e(){requestAnimationFrame(e),Q.render(z,K)},re=function(){window.innerWidth<=768?(q=.8*window.innerWidth,J=.5*window.innerHeight):(q=.37*window.innerWidth,J=.5*window.innerHeight),K.aspect=q/J,K.updateProjectionMatrix(),Q.setSize(q,J)},oe=function e(t){for(;t.children.length>1;)e(t.children[t.children.length-1]),t.remove(t.children[t.children.length-1]);t.geometry&&t.geometry.dispose(),void 0!==t.material&&(void 0!==t.material.length?t.material.forEach(function(e){e.dispose()}):t.material.dispose()),t.texture&&t.texture.dispose()},ce=function(e,t){e.scale.multiplyScalar(t),e.scale.y*=-1},ie=function(e,t){le(new Blob([e],{type:"application/octet-stream"}),t)},le=function(e,t){te.href=URL.createObjectURL(e),te.download=t,te.click()},se=function(e){for(var t=e.filter(function(e){return 0!==e}),a=[],n=0;n<t.length;n+=2){var r=new B.Vector2(t[n],t[n+1]);a.push(r)}return a},ue=function(e,t,a){return new B.MeshBasicMaterial({color:(new B.Color).setStyle(e),opacity:t,transparent:a,side:B.DoubleSide,depthWrite:!1})},me=function(e,t){$.load(e,function(a){var n=a.paths;X=new B.Group;var r={depth:7,steps:1,bevelEnabled:!1,bevelThickness:2,bevelSize:4,bevelSegments:1};!function(e){var t;e.includes("tiger")?(t=.25,X.position.x=-70,X.position.y=70):(t=.6,X.position.x=-85,X.position.y=85),ce(X,t),X.updateMatrixWorld(!0)}(e);for(var o=0;o<n.length;o++){var c=n[o],i=c.userData.style.fill;if(void 0!==i&&"none"!==i)for(var l=ue(i,c.userData.style.fillOpacity,c.userData.style.fillOpacity<1),s=c.toShapes(!0),u=0;u<s.length;u++){var m=s[u],d=new B.ShapeBufferGeometry(m),p=new B.Mesh(d,l);X.add(p)}var h=c.userData.style.stroke;if(void 0!==h&&"none"!==h){for(var f=ue(h,c.userData.style.strokeOpacity,c.userData.style.strokeOpacity<1),g=0,b=c.subPaths.length;g<b;g++){var v,E,w,y=c.subPaths[g];if(t&&!e.includes("tiger")){if(g<c.subPaths.length){v=new B.SVGLoader.pointsToStroke(y.getPoints(),c.userData.style);for(var N=se(v.attributes.position.array),S=0;S<N.length;S+=3){var D=new B.Shape([N[S],N[S+1],N[S+2]]);D&&(w=new B.ExtrudeBufferGeometry(D,r),E=new B.Mesh(w,f),X.add(E))}}}else g<c.subPaths.length&&(v=new B.SVGLoader.pointsToStroke(y.getPoints(),c.userData.style))&&(E=new B.Mesh(v,f),X.add(E))}z.add(X)}}var O=ue(65535,.3,!0);!function(e,t,a,n,r){var o=new B.BoxHelper(a,16776960),c=o.geometry.boundingSphere.center.x,i=o.geometry.boundingSphere.center.y;if(e&&!r.includes("tiger")){var l;if("circle"===t){var s=1/a.scale.x*o.geometry.boundingSphere.radius,u=new B.CylinderBufferGeometry(s,s,3,64);(l=new B.Mesh(u,n)).position.set(1/a.scale.x*(Math.abs(a.position.x)+c),-1/a.scale.y*(Math.abs(a.position.y)-i),1.5),l.rotation.set(Math.PI/2,0,0)}else"square"===t&&(l=new B.BoxHelper(a,16776960));a.add(l),z.updateMatrixWorld(!0)}}(t,"circle",X,[f,O],e)},function(e){},function(e){console.log("An error happened")})},de=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(W.a)(this,Object(T.a)(t).call(this,e))).createGUI=function(){(ae=new V.GUI({width:150})).add(Z,"extrude").name("Extrude?").onChange(function(){oe(z);var e="https://minddesign-assets.s3.amazonaws.com/"+a.props.currentModel;a.setState({extrude:!a.state.extrude},function(){me(e,a.state.extrude)})})},a.saveSVG=function(){var e="https://minddesign-assets.s3.amazonaws.com/"+this.props.currentModel;te.href=e,te.download="myDesign.svg",te.click()},a.state={circle:!0,extrude:!1},a.createGUI=a.createGUI.bind(Object(L.a)(a)),a.saveSVG=a.saveSVG.bind(Object(L.a)(a)),a.renderDownloadButton=a.renderDownloadButton.bind(Object(L.a)(a)),a.handleSaveDesign=a.handleSaveDesign.bind(Object(L.a)(a)),a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.mount.appendChild(Q.domElement),oe(z),this.createGUI(),this.mount.prepend(ae.domElement),me("https://minddesign-assets.s3.amazonaws.com/tiger.svg",!1),window.addEventListener("resize",re,!1),ne()}},{key:"componentDidUpdate",value:function(){var e="https://minddesign-assets.s3.amazonaws.com/"+this.props.currentModel;oe(z),me(e,this.state.extrude),ne()}},{key:"renderDownloadButton",value:function(e){var t=this;return e?o.a.createElement("button",{className:"btn btn-block btn-primary mb-2",onClick:function(e){e.preventDefault(),function(e){ce(e,.15),e.updateMatrixWorld(!0);var t=ee.parse(e,{binary:!0});ie(t,"thing.stl"),ce(e,6.1),e.updateMatrixWorld(!0)}(X)}},"Download As 3D Mini-Stamp"):o.a.createElement("button",{className:"btn btn-block btn-primary mb-2",onClick:function(e){e.preventDefault(),t.saveSVG()}},"Download As Picture")}},{key:"handleSaveDesign",value:function(e){if(e){var t=this.props.currentModel.indexOf("."),a=this.props.currentModel.slice(0,t);this.props.saveDesign(this.props.auth.name,a),alert("Designed saved! Check it out under ".concat(this.props.auth.name,"'s Designs"))}else alert("You'll to need to be Signed In to save! \nPlease use the links in the navigation above.")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container text-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},this.renderDownloadButton(this.state.extrude)),o.a.createElement("div",{className:"col-6"},o.a.createElement("button",{className:"btn btn-block btn-success mb-2",onClick:function(t){t.preventDefault(),e.handleSaveDesign(e.props.auth.authenticated)}},"Save My Design"))),o.a.createElement("div",{ref:function(t){return e.mount=t}}),o.a.createElement("button",{className:"btn btn-block btn-secondary",onClick:function(e){return oe(z)}},"Clear Canvas"))))}}]),t}(r.Component);var pe=Object(s.b)(function(e){return{currentModel:e.currentModel,timeStamp:e.timeStamp,auth:e.auth}},function(e){return Object(u.b)({renderDrawing:I,getFile:j,saveDesign:M},e)})(de),he=a(111),fe=a.n(he),ge=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(W.a)(this,Object(T.a)(t).call(this,e))).createRandomNumber=function(){return Math.floor(1e8*Math.random())},a.createFileName=function(){return a.props.auth.authenticated?"".concat(a.props.auth.name,"-").concat(a.createRandomNumber(),".svg"):"guest-".concat(a.createRandomNumber(),".svg")},a.clear=function(){a.setState({fileName:a.createFileName()},function(){a.sigPad.clear()})},a.renderDrawing=function(){a.setState({svgDataURL:a.sigPad.toDataURL("image/svg+xml")},function(){var e=a.state.svgDataURL.split(",");a.props.updateDrawing(a.state.fileName,atob(e[1]))})},a.state={svgDataURL:null,fileNumber:null},a.sigPad={},a.createRandomNumber=a.createRandomNumber.bind(Object(L.a)(a)),a.createFileName=a.createFileName.bind(Object(L.a)(a)),a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.setState({fileName:this.createFileName()})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container text-center justify-content-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("h3",{className:"text-center justify-content-center"},"Start Sketching:"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(fe.a,{ref:function(t){e.sigPad=t},penColor:"black",backgroundColor:"rgb(255,255,255)",canvasProps:{width:300,height:300,minwidth:30,maxwidth:35,mindistance:10,throttle:0,className:"sigPad mt-4"}}))),o.a.createElement("button",{className:"btn btn-secondary btn-lg mr-2",onClick:this.clear},"Clear Pad"),o.a.createElement("button",{className:"btn btn-success btn-lg",onClick:this.renderDrawing},"Draw To Canvas"))}}]),t}(r.Component);var be=Object(s.b)(function(e){return{auth:e.auth,timeStamp:e.timeStamp}},function(e){return Object(u.b)({updateDrawing:O,getFile:j},e)})(ge),ve=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 text-center"},o.a.createElement("div",{className:"jumbotron mt-2"},o.a.createElement("h1",null,"Hello, User"),o.a.createElement("p",null," We'll probably put some user info here? ",o.a.createElement("i",{className:"fas fa-crown"}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6 mb-4"},o.a.createElement(pe,null)),o.a.createElement("div",{className:"col-12 col-md-6 canvas text-center mb-5"},o.a.createElement(be,null))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8 offset-md-1"})))},Ee=a(246),we=a(245),ye=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(W.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.signup(e,function(){a.props.history.push("/")})},a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-10 offset-1 mt-4"},o.a.createElement("form",{onSubmit:e(this.onSubmit)},o.a.createElement("fieldset",{className:"form-group"},o.a.createElement("label",null,"Name"),o.a.createElement(Ee.a,{name:"name",type:"text",placeholder:"What's your handle?",component:"input",autoComplete:"none",className:"form-control"})),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement("label",null,"Email"),o.a.createElement(Ee.a,{name:"email",type:"text",placeholder:"rick@councilofricks.singularity",component:"input",autoComplete:"none",className:"form-control"})),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement("label",null,"Password"),o.a.createElement(Ee.a,{name:"password",type:"password",placeholder:"Anything but 'password'...",component:"input",autoComplete:"none",className:"form-control"})),o.a.createElement("div",null,this.props.errorMessage),o.a.createElement("button",{className:"btn btn-lg btn-outline-success"},"Sign Up!")))))}}]),t}(r.Component);var Ne=Object(u.d)(Object(s.b)(function(e){return{errorMessage:e.auth.errorMessage}},n),Object(we.a)({form:"signup"}))(ye),Se=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(W.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.signin(e,function(){a.props.history.push("/")})},a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-10 offset-1 mt-4"},o.a.createElement("form",{onSubmit:e(this.onSubmit)},o.a.createElement("fieldset",{className:"form-group"},o.a.createElement("label",null,"Email"),o.a.createElement(Ee.a,{name:"email",placeholder:"root@eruditorum.org",type:"text",component:"input",autoComplete:"none",className:"form-control"})),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement("label",null,"Password"),o.a.createElement(Ee.a,{name:"password",type:"password",component:"input",autoComplete:"none",className:"form-control"})),o.a.createElement("div",null,this.props.errorMessage),o.a.createElement("button",{className:"btn btn-lg btn-outline-primary"},"Sign In!")))))}}]),t}(r.Component);var De=Object(u.d)(Object(s.b)(function(e){return{errorMessage:e.auth.errorMessage}},n),Object(we.a)({form:"signin"}))(Se);var Oe=Object(s.b)(null,function(e){return Object(u.b)({},e)})(function(e){var t=e.design;return o.a.createElement("div",{className:"card text-center align-middle text-white bg-dark border-dark shadow",onClick:function(e){e.preventDefault(),alert("clicked design ".concat(t.designName))}},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.designName),o.a.createElement("img",{src:t.svgLink,height:"auto",width:"auto",className:"card-img-top",alt:"sweet design"})),o.a.createElement("div",{className:"card-footer"}))}),je=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(W.a)(this,Object(T.a)(t).call(this,e))).state={},a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserDesigns(this.props.auth.name)}},{key:"renderDesigns",value:function(e){return e.map(function(e){return o.a.createElement(Oe,{design:e,key:e._id})})}},{key:"render",value:function(){return this.props.designs?0===this.props.designs.length?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("h4",null,"Hey! Looks like you don't have any designs just yet..."))):o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"card-group"},o.a.createElement("div",{className:"card-columns mb-4"},this.renderDesigns(this.props.designs))))):o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("h1",null,"Nothing to see here yet... hold please...")))}}]),t}(r.Component);var ke=Object(s.b)(function(e){return{auth:e.auth,designs:e.designs,timeStamp:e.timeStamp}},function(e){return Object(u.b)({getUserDesigns:k},e)})(je),xe=function(e){function t(e){return Object(P.a)(this,t),Object(W.a)(this,Object(T.a)(t).call(this,e))}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,null),o.a.createElement("div",{className:"container main-app"},o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/",component:ve}),o.a.createElement(i.b,{exact:!0,path:"/signin",component:De}),o.a.createElement(i.b,{exact:!0,path:"/signup",component:Ne}),o.a.createElement(i.b,{exact:!0,path:"/user/home",component:ke}),o.a.createElement(i.a,{to:"/"}))))}}]),t}(r.Component);var Me=Object(s.b)(function(e){return{auth:e.auth}},null)(xe),Ie=(a(241),a(242),a(243),Object(u.e)(U,{},Object(u.a)(m.a)));Object(l.render)(o.a.createElement(s.a,{store:Ie},o.a.createElement(c.a,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/",component:Me})))),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.b7556bcb.chunk.js.map