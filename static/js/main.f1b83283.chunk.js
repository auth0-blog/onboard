(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,n){e.exports=n(87)},51:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),o=n.n(i),l=n(92),c=(n(51),n(9)),s=n(10),u=n(13),p=n(14),h=n(15),m=n(91),d=n(3),f=n(89),g=n(4);function b(){var e=Object(d.a)(["\n  max-width: 770px;\n  margin: 0 auto;\n"]);return b=function(){return e},e}var v=g.a.div(b());function w(){var e=Object(d.a)(["\n  color: #fff;\n  background-color: #44c7f4;\n  border-color: #2cc0f3;\n"]);return w=function(){return e},e}function x(){var e=Object(d.a)(["\n  color: #fff;\n  background-color: #eb5424;\n  border-color: #e14615;\n"]);return x=function(){return e},e}function y(){var e=Object(d.a)(["\n  display: inline-block;\n  font-weight: 500;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  white-space: nowrap;\n  padding: 7px 10px;\n  font-size: 11px;\n  line-height: 2;\n  border-radius: 3px;\n  user-select: none;\n  transition: background-color .2s ease;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-width: 0;\n  color: #333;\n  background: #f1f1f1;\n  border-color: #ccc;\n"]);return y=function(){return e},e}var k=g.a.button(y()),E=(k.extend(x()),k.extend(w()));function O(){var e=Object(d.a)(["\n  border: 1px solid #eee;\n  margin-top: 30px;\n  padding: 30px;\n  box-sizing: border-box;\n  box-shadow: 0 0 20px rgba(0,0,0,.1);\n  line-height: 1.5;\n  \n  @media (max-width: 700px) {\n    padding: 15px;\n  }\n"]);return O=function(){return e},e}var A=g.a.section(O());function j(){var e=Object(d.a)(["\n  > div.actions {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 30px;\n  }\n"]);return j=function(){return e},e}var P=A.extend(j());var C=function(e){return r.a.createElement(v,null,r.a.createElement(P,null,r.a.createElement("h2",null,e.title),e.children,r.a.createElement("div",{className:"actions"},r.a.createElement("div",null,void 0!==e.cancel&&r.a.createElement(k,{onClick:e.cancel},e.cancelLabel)),r.a.createElement(E,{onClick:e.action},e.actionLabel))))},S=n(17),B=n.n(S),D=n(24),T=n(6),G=n(39),I=n.n(G),F=n(40),L=n.n(F),N=n(84),U=new(n(41).EventEmitter),z=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,null,[{key:"getEmitter",value:function(){return U}},{key:"success",value:function(e,t){M("success",e,t)}},{key:"warning",value:function(e,t){M("warning",e,t)}},{key:"danger",value:function(e,t){M("danger",e,t)}}]),e}(),M=function(e,t,n){console.log("SOOOOO??"),U.emit("new-notification",{type:e,message:t,title:n})},W=z,R=n(20),J={audience:"https://auth0-blog.github.io/onboard/",basename:"/onboard",clientID:"HPzKOMp0LP4k30TJwIDB74T5GWHYuAQq",domain:"auth0-blog.auth0.com"},H=Object(R.a)({},J),q=n(42),Y=n.n(q),Q=function(){function e(t){Object(c.a)(this,e),this.auth0Client=t}return Object(s.a)(e,[{key:"apply",value:function(e){var t=e.name,n=e.email,a=e.userId,r={"Content-Type":"application/json"};return this.auth0Client.isAuthenticated()&&(r.Authorization="Bearer ".concat(this.auth0Client.getAccessToken())),Y()("/api/",{method:"POST",headers:r,body:JSON.stringify({name:t,email:n,userId:a})})}}]),e}(),K={domain:"https://auth0-blog.github.io",prefix:"/onboard"},V=Object(R.a)({},K),X=new I.a({audience:H.audience,domain:H.domain,clientID:H.clientID,redirectUri:"".concat(V.domain+V.prefix,"/callback"),responseType:"token id_token",scope:"openid email profile"}),$=!1,_=!1,Z=function(e){return Object(N.a)(function(t){function n(e){var t;Object(c.a)(this,n),t=Object(u.a)(this,Object(p.a)(n).call(this,e));var a=X.isAuthenticated(),r=a?X.getProfile():null,i=r&&r.email?r.email:"";return t.state={authenticated:a,profile:r,email:i,ackCopyright:$,ackPlagiarism:_},X.subscribe(function(n){var a=n?X.getProfile():null,r=a&&a.email?a.email:"";t.setState({authenticated:n,profile:a,email:r}),"/callback"===e.location.pathname&&e.history.push("/")}),t.onboardClient=new Q(X),t.moveForward=t.moveForward.bind(Object(T.a)(Object(T.a)(t))),t.stepBack=t.stepBack.bind(Object(T.a)(Object(T.a)(t))),t.apply=t.apply.bind(Object(T.a)(Object(T.a)(t))),t.toggleCopyright=t.toggleCopyright.bind(Object(T.a)(Object(T.a)(t))),t.togglePlagiarism=t.togglePlagiarism.bind(Object(T.a)(Object(T.a)(t))),t.updateEmail=t.updateEmail.bind(Object(T.a)(Object(T.a)(t))),t}var a;return Object(h.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:(a=Object(D.a)(B.a.mark(function e(){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(X.subscribe(function(){var e=Object(D.a)(B.a.mark(function e(t){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return e.next=3,X.checkSession();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),!this.state.authenticated){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,X.checkSession();case 5:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"stepBack",value:function(){var e=this.props.location.pathname,t=Ce.map(function(e){return e.path}).indexOf(e);t<1||this.props.history.push("".concat(Ce[t-1].path))}},{key:"moveForward",value:function(){var e=this.props.location.pathname,t=Ce.map(function(e){return e.path}).indexOf(e);t!==Ce-1&&this.props.history.push("".concat(Ce[t+1].path))}},{key:"apply",value:function(){if(!this.state.authenticated)return W.danger("Please, log in to apply to the Guest Author program.");var e=this.state.email;if(!e||!L.a.validate(e))return W.danger("Please, enter a valid email address.","Invalid Email");var t=X.getProfile().sub,n=this.state.profile.name;this.onboardClient.apply({name:n,email:e,userId:t}),W.success("Thanks for applying!","Done")}},{key:"toggleCopyright",value:function(){$=!this.state.ackCopyright,this.setState({ackCopyright:$})}},{key:"togglePlagiarism",value:function(){_=!this.state.ackPlagiarism,this.setState({ackPlagiarism:_})}},{key:"updateEmail",value:function(e){this.setState({email:e})}},{key:"signOut",value:function(){X.signOut(V.domain+V.prefix)}},{key:"render",value:function(){var t=this.state,n=t.ackCopyright,a=t.ackPlagiarism,i=t.authenticated,o=t.profile,l=t.email;return r.a.createElement(e,{ackCopyright:n,ackPlagiarism:a,auth0Client:X,authenticated:i,moveForward:this.moveForward,email:l,profile:o,stepBack:this.stepBack,apply:this.apply,signOut:this.signOut,toggleCopyright:this.toggleCopyright,togglePlagiarism:this.togglePlagiarism,updateEmail:this.updateEmail},this.props.children)}}]),n}(r.a.Component))};function ee(){var e=Object(d.a)(["\n  color: #555;\n  border-bottom: 1px solid #ddd;\n  cursor: pointer;\n  font-weight: 700;\n"]);return ee=function(){return e},e}var te=g.a.a(ee());var ne=Z(function(e){var t=e.authenticated?"Next":"Sign In",n=e.authenticated?e.moveForward:function(){e.auth0Client.signIn()};return r.a.createElement(C,{title:"Introduction",actionLabel:t,action:n},r.a.createElement("p",null,"The present website exists to help on the onboard process of the Guest Author Program."),!e.authenticated&&r.a.createElement("p",null,"If you want to apply to this program, just click on the ",r.a.createElement("em",null,"Sign In")," button to get started."),e.authenticated&&r.a.createElement("p",null,"As you are already authenticated, move to ",r.a.createElement(te,{onClick:function(){}},"the next section")," to get started."))});var ae=Z(function(e){return r.a.createElement(C,{title:"Authorship",action:e.moveForward,actionLabel:"Next",cancel:e.stepBack,cancelLabel:"Go Back"},r.a.createElement("p",null,"First and foremost, Auth0 wants to make clear to authors that their ",r.a.createElement("strong",null,"moral rights as authors "),"will never be declined. That is, authors can rest assured that they will always have:"),r.a.createElement("ul",null,r.a.createElement("li",null,"the ",r.a.createElement("strong",null,"right of paternity"),";"),r.a.createElement("li",null,"the ",r.a.createElement("strong",null,"right of integrity"),";"),r.a.createElement("li",null,"and the right to ",r.a.createElement("strong",null,"object to false attribution"),";")),"to protect their work and themselves.")});var re=Z(function(e){return r.a.createElement(C,{title:"Copyright",action:e.moveForward,actionLabel:"Next",cancel:e.stepBack,cancelLabel:"Go Back"},r.a.createElement("p",null,"Regarding the copyright of the work, as Auth0 pays guest authors to research, develop, and write about different topics, authors are expected to ",r.a.createElement("strong",null,"give to Auth0 the following rights"),":"),r.a.createElement("ul",null,r.a.createElement("li",null,"the right to issue copies of the work to the public;"),r.a.createElement("li",null,"the right to communicate the work to the public;"),r.a.createElement("li",null,"the right to make an adaptation of the work;"),r.a.createElement("li",null,"the right to rent or lend the work to the public;")),r.a.createElement("p",null,"In other words, once Auth0 pays for an article, ",r.a.createElement("strong",null,"the author cannot publish it")," elsewhere without explicit consent from Auth0."))});var ie=Z(function(e){return r.a.createElement(C,{title:"Plagiarism",action:e.moveForward,actionLabel:"Next",cancel:e.stepBack,cancelLabel:"Go Back"},r.a.createElement("p",null,"Plagiarism is an extremelly important subject. Authors must be aware that ",r.a.createElement("strong",null,"committing plagiarism is prohibited"),". To protect itself, Auth0 uses modern plagiarism checkers like ",r.a.createElement("a",{href:"https://www.quetext.com/"},"Quetext "),"and ",r.a.createElement("a",{href:"https://www.grammarly.com/"},"Grammarly")," to check articles."),r.a.createElement("p",null,"Authors that copy excerpt from exist resources without adding credits, will no longer be able to participate in the program."))});function oe(){var e=Object(d.a)(["\n  label {\n    line-height: 30px;\n    display: block;\n    margin-bottom: 15px;\n    \n    :hover {\n      cursor: pointer;\n      \n      span {\n        background-color: #85cc85;\n        color: #fff;\n      }\n    }\n  }\n  \n  label > span {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    background-color: #eee;\n    margin-right: 10px;\n    float: left;\n    \n    span {\n      display: none;\n    }\n  }\n  \n  label > span.checked {\n    > span {\n      background-color: #85cc85;\n      color: #fff;\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n    }\n  }\n"]);return oe=function(){return e},e}var le=g.a.section(oe());var ce=Z(function(e){return r.a.createElement(C,{title:"Acknowledgement",action:e.moveForward,actionLabel:"Next",cancel:e.stepBack,cancelLabel:"Go Back"},r.a.createElement(le,null,r.a.createElement("p",null,"Regarding the copyright, do you acknowledge that you cannot publish the article elsewhere without Auth0's consent?"),r.a.createElement("label",{onClick:e.toggleCopyright},r.a.createElement("span",{className:e.ackCopyright?"checked":""},r.a.createElement("span",null,"\u2714")),"Yes, ",r.a.createElement("strong",null,"I acknowledge that I can't publish the article elsewhere"),"."),r.a.createElement("p",null,"Regarding plagiarism, do you acknowledge that you cannot copy content from other resources without giving the due credits?"),r.a.createElement("label",{onClick:e.togglePlagiarism},r.a.createElement("span",{className:e.ackPlagiarism?"checked":""},r.a.createElement("span",null,"\u2714")),"Yes, ",r.a.createElement("strong",null,"I acknowledge that I cannot commit plagiarism"),".")))});function se(){var e=Object(d.a)(["\n  font-size: 17px;\n  margin-top: 25px;\n  margin-bottom: -10px;\n"]);return se=function(){return e},e}var ue=g.a.h3(se());var pe=Z(function(e){return r.a.createElement(C,{title:"Payment",action:e.moveForward,actionLabel:"Next",cancel:e.stepBack,cancelLabel:"Go Back"},r.a.createElement("p",null,"Articles submitted to the Guest Author program are categorized and payed through the following rules:"),r.a.createElement(ue,null,"Theoretical Articles"),r.a.createElement("p",null,"Auth0 pays the following amounts to articles that explain concepts from a theoretical point of view:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Up to 1000 words: 75 USD"),r.a.createElement("li",null,"Up to 1250 words: 100 USD"),r.a.createElement("li",null,"Up to 1500 words: 125 USD"),r.a.createElement("li",null,"More than 1500 words: 150 USD")),r.a.createElement("p",null,"Plus 50 USD if authors explain, with at least 200 words, how Auth0 can help on the context being studied."),r.a.createElement(ue,null,"Technical Articles"),r.a.createElement("p",null,"For technical articles (those that include hands-on exercises), Auth0 pays the following amounts:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Up to 1000 words: 125 USD"),r.a.createElement("li",null,"Up to 1500 words: 175 USD"),r.a.createElement("li",null,"More than 1500 words: 225 USD")),r.a.createElement("p",null,"Plus 75 USD if authors explain how to integrate Auth0 on their samples."))});var he=Z(function(e){return r.a.createElement(C,{title:"Deadline",action:e.moveForward,actionLabel:"Next",cancel:e.stepBack,cancelLabel:"Go Back"},r.a.createElement("p",null,"The process ",r.a.createElement("strong",null,"duration will vary")," depending on the topic and on how busy authors are during it."),r.a.createElement("p",null,"Although most authors manage to produce ",r.a.createElement("strong",null,"an article within two or three weeks"),", Auth0 knows that authors have other duties and that they can get stuck with other important matters. Therefore, it won't be a problem if authors take a little longer."),r.a.createElement("p",null,"Just be careful not to end up with an unfinished article that becomes old news."))}),me=n(44),de=n.n(me);var fe=function(e){var t=e.start,n=e.end,i=e.id,o="M".concat(t.x," ").concat(t.y," T ").concat(n.x," ").concat(n.y);return r.a.createElement(a.Fragment,null,r.a.createElement("defs",{id:"arrow-def-".concat(i)},r.a.createElement("marker",{id:"arrow-head-".concat(i),orient:"auto",viewBox:"-100 -100 450 450",fill:"black",markerWidth:"50",markerHeight:"50"},r.a.createElement("polygon",{points:"-25,-20 15,0 -25,20",fill:"#999"}))),r.a.createElement("path",{d:o,stroke:"#999",strokeWidth:"2",markerEnd:"url(#arrow-head-".concat(i,")"),fill:"transparent"}))};function ge(){var e=Object(d.a)(["\n  cursor: default;\n  \n  @media (max-width: 700px) {\n    cursor: grab;\n  }\n"]);return ge=function(){return e},e}function be(){var e=Object(d.a)(["\n  fill: #eee;\n  stroke: #ccc;\n  stroke-width: 1px;\n"]);return be=function(){return e},e}function ve(){var e=Object(d.a)(["\n  opacity: 0.3;\n  \n  :hover {\n    cursor: pointer;\n  }\n  \n  &.active {\n    opacity: 1;\n  }\n"]);return ve=function(){return e},e}function we(){var e=Object(d.a)(["\n  width: 700px;\n  height: 430px;\n"]);return we=function(){return e},e}var xe=g.a.svg(we()),ye=g.a.g(ve()),ke=g.a.rect(be()),Ee=Object(g.a)(de.a)(ge());function Oe(e){var t=Math.floor(e/3),n=(t+1)%2===0,a=e-3*t;return n&&(a=2-a),{row:t,column:a,inverse:n}}var Ae=Z(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={steps:[{title:"Topic Definition",active:!0,description:"The Guest Author (GA) and Auth0 define a topic together."},{title:"Prototype Development",active:!1,description:"The GA develops a prototype with the chosen technologies and upload it to a GitHub repo with basic instructions on how to run it."},{title:"Prototype Review",active:!1,description:"Auth0 analyses the prototype, the code, and the whole implementation and approach to provide feedback."},{title:"Prototype Refactoring",active:!1,description:"The GA applies (if needed) any fix/enhancement asked by Auth0."},{title:"Outline Definition",active:!1,description:"The GA shares an outline of the article (just the main structure with headers and sub-headers, no content needed)."},{title:"Outline Review",active:!1,description:"Auth0 analyses and make comments on the outline."},{title:"Outline Amendments",active:!1,description:"The GA applies (if needed) corrections to the outline."},{title:"First Draft",active:!1,description:"The GA writes the post."},{title:"Draft Review",active:!1,description:"Auth0 reviews the post and, if needed, ask corrections, amendments, etc."},{title:"Draft Amendments",active:!1,description:"Auth0 and the GA work together to make the final adjustments to the article."},{title:"Payment",active:!1,description:"Auth0 pays for the article (in the case of a series, we might wait for the last piece to process the payment)."},{title:"Publish",active:!1,description:"Auth0 defines, based on its backlog, a publishing date for the article and informs the author."}]},n.selectStep=n.selectStep.bind(Object(T.a)(Object(T.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"selectStep",value:function(e){var t=this.state.steps.map(function(t,n){return t.active=n<=e,t});this.setState({steps:t});var n=this.state.steps.find(function(t,n){return n===e?t:null});W.success(n.description,n.title)}},{key:"render",value:function(){var e=this;return r.a.createElement(C,{title:"Editorial Process",action:this.props.moveForward,actionLabel:"Next",cancel:this.props.stepBack,cancelLabel:"Go Back"},r.a.createElement("p",null,"From ideation to publishment, the process of writing to the Guest Author Program consist of the following steps:"),r.a.createElement(Ee,{height:"460px",width:"100%"},r.a.createElement(xe,null,this.state.steps.map(function(t,n){var a=function(e){var t=Oe(e),n=t.row;return{x:235*t.column,y:115*n}}(n),i=function(e){var t=(e+1)%3===0,n=Oe(e),a=n.row,r=n.column,i=n.inverse;return t&&i?{start:{x:92.5+235*r,y:145*a+50},end:{x:92.5+235*r,y:195*a+50}}:t?{start:{x:92.5+235*r,y:115*a+80},end:{x:92.5+235*r,y:115*a+130}}:i?{start:{x:10+235*r,y:115*a+50},end:{x:235*r-55,y:115*a+50}}:{start:{x:175+235*r,y:115*a+50},end:{x:240+235*r,y:115*a+50}}}(n),o=n===e.state.steps.length-1;return r.a.createElement(ye,{key:n,className:t.active?"active":"",onClick:function(){return e.selectStep(n)}},!o&&r.a.createElement(fe,{start:i.start,end:i.end,id:n}),r.a.createElement(ke,{x:a.x+10,y:a.y+20,rx:"10",ry:"10",width:"165",height:"60"}),r.a.createElement("text",{x:a.x+20,y:a.y+55,fontFamily:"Verdana",fontSize:"12",fill:"666"},t.title))}))))}}]),t}(a.Component));function je(){var e=Object(d.a)(["\n  line-height: 25px;\n  font-size: 15px;\n  width: 100%;\n"]);return je=function(){return e},e}var Pe=g.a.input(je());var Ce=[{label:"Introduction",path:"/",component:ne},{label:"Authorship",path:"/authorship",component:ae},{label:"Copyright",path:"/copyright",component:re},{label:"Plagiarism",path:"/plagiarism",component:ie},{label:"Acknowledgement",path:"/acknowledgement",component:ce},{label:"Payment",path:"/payment",component:pe},{label:"Deadline",path:"/deadline",component:he},{label:"Process",path:"/process",component:Ae},{label:"Application",path:"/application",component:Z(function(e){return r.a.createElement(C,{title:"Application",action:e.moveForward,actionLabel:"Next",cancel:e.stepBack,cancelLabel:"Go Back"},r.a.createElement("p",null,"To apply to the Guest Author program, you must agree to the terms and conditions described in this website. After that, Auth0 ",r.a.createElement("strong",null," will send you a copy of these acknowledgements and invite you to a Slack channel"),"."),r.a.createElement("p",null,"Please, make sure that you have access to the email below, as the invitation and the acknowledgements will be sent to it."),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement(Pe,{id:"name",type:"text",value:e.profile?e.profile.name:"",disabled:!0})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement(Pe,{id:"email",type:"text",onChange:function(t){e.updateEmail(t.target.value)},value:e.email,disabled:e.profile&&e.profile.email})))})}];function Se(){var e=Object(d.a)(["\n  list-style: none;\n  font-size: 13px;\n  padding-left: 0;\n  text-align: center;\n  max-width: 770px;\n  overflow-x: auto;\n  margin: 15px 0 15px 0;\n  \n  > li {\n    display: inline;\n    margin-left: 5px;\n  }\n"]);return Se=function(){return e},e}function Be(){var e=Object(d.a)(["\n  margin-bottom: -15px;\n"]);return Be=function(){return e},e}var De=v.extend(Be()),Te=g.a.ul(Se());var Ge=function(){return r.a.createElement(De,null,r.a.createElement(Te,null,Ce.map(function(e,t){return r.a.createElement(a.Fragment,{key:t},r.a.createElement("li",null,r.a.createElement(f.a,{to:e.path},e.label)),t<Ce.length-1&&r.a.createElement("li",null,">"))})))};function Ie(){var e=Object(d.a)(["\n  margin: 0;\n  width: 100%;\n  color: #555;\n  \n  p, ol, ul, label {\n    color: #777;\n  }\n  \n  strong {\n    color: #555;\n    border-bottom: 1px solid #ddd;\n  }\n"]);return Ie=function(){return e},e}var Fe=g.a.section(Ie());function Le(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n    \n  > img {\n    max-width: 80px;\n  }\n"]);return Le=function(){return e},e}var Ne=g.a.div(Le());var Ue=function(){return r.a.createElement(Ne,null,r.a.createElement("img",{src:"".concat(V.domain+V.prefix,"/logo-grey.png"),alt:"Auth0 Logo"}))};function ze(){var e=Object(d.a)(["\n  width: 100%;\n  background-color: #222228;\n  padding: 5px;\n  \n  h1 {\n    color: #cacccc;\n    font-weight: normal;\n    font-size: 20px;\n  }\n  \n  > div {\n    display: flex;\n    justify-content: space-between;\n  }\n"]);return ze=function(){return e},e}var Me=g.a.div(ze()),We=n(90),Re=n(45);function Je(){var e=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 50;\n  background-color: transparent;\n  pointer-events: none;\n  text-align: right;\n  padding: 10px;\n\n  > div {\n    text-align: left;\n    width: 250px;\n    background-color: #fff;\n    border: 1px solid #eee;\n    border-radius: 3px;\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n    padding: 20px;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: 0;\n    animation-duration: 0.5s;\n    animation-name: notification-slide-in;\n    font-size: 14px;\n    line-height: 20px;\n    cursor: pointer;\n    pointer-events:all;\n    position: relative;\n\n    svg {\n      position: absolute;\n      top: 15px;\n      right: 15px;\n\n      line {\n        stroke: #999;\n      }\n    }\n\n    &:hover {\n      svg {\n        line {\n          stroke: #777;\n        }\n      }\n    }\n\n    h3 {\n      text-transform: uppercase;\n      font-size: 12px;\n      margin-top: -5px;\n      margin-bottom: 5px;\n      font-weight: 700;\n      color: #555;\n    }\n\n    &.success {\n      border-left: 5px solid #62cb31;\n    }\n\n    &.warning {\n      border-left: 5px solid #ffb606;\n    }\n\n    &.danger {\n      border-left: 5px solid #ea6557;\n    }\n  }\n  \n  @keyframes notification-slide-in {\n    from {\n      margin-right: -300px;\n    }\n  \n    to {\n      margin-right: 0;\n    }\n  }\n"]);return Je=function(){return e},e}var He=g.a.div(Je()),qe=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={notifications:[]},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=W.getEmitter();this.subscription=t.addListener("new-notification",function(t){var n=e.state.notifications.filter(function(e){return t.type!==e.type||t.message!==e.message});t.time=(new Date).getTime(),e.setState({notifications:Object(Re.a)(n).concat([t])})}),this.intervalSubscription=setInterval(function(){var t=(new Date).getTime(),n=e.state.notifications.filter(function(e){return t-e.time<1e4});e.setState({notifications:n})},100)}},{key:"componentWillUnmount",value:function(){this.subscription.remove(),clearInterval(this.intervalSubscription)}},{key:"removeNotification",value:function(e){var t=this.state.notifications.filter(function(t){return t.time!==e});this.setState({notifications:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(He,null,this.state.notifications.map(function(t){return r.a.createElement("div",{key:t.time,onClick:function(){e.removeNotification(t.time)},className:t.type},r.a.createElement("h3",null,t.title||t.type),t.message,r.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.a.createElement("line",{x1:"0",y1:"0",x2:"10",y2:"10",strokeWidth:3}),r.a.createElement("line",{x1:"0",y1:"10",x2:"10",y2:"0",strokeWidth:3})))}))}}]),t}(a.Component);function Ye(){var e=Object(d.a)(["\n  padding: 10px 30px 10px 30px;\n  display: flex;\n  justify-content: space-between;\n  \n  > div {\n    line-height: 40px;\n  }\n  \n  > div > img {\n    border-radius: 50%;\n    max-width: 40px;\n    float: left;\n    margin-right: 10px;\n  }\n"]);return Ye=function(){return e},e}var Qe=A.extend(Ye());var Ke=Object(We.a)(function(e){var t=e.authenticated&&e.profile.picture?e.profile.picture:"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg";return r.a.createElement(v,null,r.a.createElement(qe,null),e.authenticated&&r.a.createElement(Qe,null,r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"Author Profile"}),e.profile.name),r.a.createElement(k,{onClick:function(){return e.signOut()}},"Sair")))}),Ve=Z(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Fe,null,r.a.createElement(Me,null,r.a.createElement(v,null,r.a.createElement("h1",null,"The Guest Author Program"),r.a.createElement(Ue,null))),r.a.createElement(Ge,null),r.a.createElement(Ke,this.props),Ce.map(function(e){return r.a.createElement(m.a,{exact:!0,path:e.path,component:e.component,key:e.path})}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(Ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,2,1]]]);
//# sourceMappingURL=main.f1b83283.chunk.js.map