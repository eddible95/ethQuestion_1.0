(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{KQm4:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return n}))},KTCV:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newQuestion",function(){return a("Mfci")}])},Mfci:function(e,t,a){"use strict";a.r(t),function(e){var n=a("KQm4"),r=a("o0o1"),i=a.n(r),s=a("1OyB"),o=a("vuIU"),l=a("JX7q"),u=a("Ji7U"),c=a("md7G"),f=a("foSv"),d=a("rePB"),p=a("q1tI"),h=a.n(p),g=a("3mGJ"),m=a("aQu0"),y=a("D1pA"),b=a("QetY"),v=a("MqQV"),w=a("yE/o"),x=a("Mt1y"),O=a("vFsZ"),S=a("umxb"),j=a("yZlV"),_=a("pLir"),T=a("TbSc"),k=a("fuXp"),q=a("NrgV"),Q=a("UZm1"),P=a("VcKe"),F=a("5Yp1"),N=a("OIDg"),C=a("l+mR"),E=a("XPRw"),L=a("oZBQ"),D=a("gb1n"),R=(a("6JRj"),a("8cHP")),A=a("jeEK"),I=a("ObTy"),M=a("Ma5Y"),U=a.n(M),H=h.a.createElement;function B(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var J=function(t){Object(u.a)(p,t);var a,r=(a=p,function(){var e,t=Object(f.a)(a);if(B()){var n=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(c.a)(this,e)});function p(t){var a;return Object(s.a)(this,p),a=r.call(this,t),Object(d.a)(Object(l.a)(a),"onSubmit",(function(){var e,t,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.setState({loading:!0,errorMessage:""}),!(Object(I.a)(a.state.questionTitle)&&Object(I.a)(a.state.content)&&Object(I.b)(a.state.reward)&&Object(I.c)(a.state.maxDuration))){r.next=22;break}return r.prev=2,e=a.props.account,t=Object(I.d)("Created New Question: "+a.state.questionTitle+" ["+a.state.reward+" EQT(s) as reward]"),r.next=7,i.a.awrap(N.a.methods.createQuestion(a.state.questionTitle,a.state.content,Object(I.e)(a.state.tag),1e4*Number(a.state.reward),60*parseFloat(a.state.maxDuration)*60,a.state.fileHashes_array,a.state.fileNames_array,t,D.a._address).send({from:e,gasPrice:"0"}));case 7:return r.next=9,i.a.awrap(N.a.methods.getLastDeployedQuestion().call());case 9:return n=r.sent,r.next=12,i.a.awrap(D.a.methods.transfer(n,1e4*Number(a.state.reward)).send({from:e,gasPrice:"0"}));case 12:R.Router.pushRoute("/home"),r.next=19;break;case 15:r.prev=15,r.t0=r.catch(2),"Returned error: authentication needed: password or unlock"==r.t0.message&&(a.setState({loading:!1}),a.setState({timeout:!0})),a.setState({errorMessage:r.t0.message+" Or check if you have sufficient EQT(s)"});case 19:a.setState({loading:!1}),r.next=24;break;case 22:a.setState({errorMessage:"Required Field(s) Empty or Invalid Input"}),a.setState({loading:!1});case 24:case"end":return r.stop()}}),null,null,[[2,15]],Promise)})),Object(d.a)(Object(l.a)(a),"onFileSelected",(function(){var t,n,r,s,o,l;return i.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:t=new FileReader,n=a.fileInput.files[0],a.setState({fileLoading:!0}),n instanceof Blob&&(r=a.state,s=r.files_array,o=r.fileNames_array,l=r.fileHashes_array,s.push(n),o.push(n.name),a.setState({files_array:s,fileNames_array:o}),console.log("fileNames_array: ",o),t.onloadend=function(){var r;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,i.a.awrap(a.setState({fileUrl:t.result,fileLoading:!0,buffer:e.from(t.result)}));case 2:if(!a.state.buffer){s.next=8;break}return s.next=5,i.a.awrap(Object(A.a)(n));case 5:s.t0=s.sent,s.next=9;break;case 8:s.t0="0";case 9:r=s.t0,l.push(r),a.setState({fileHashes_array:l}),console.log("fileHashes_array: ",l),a.setState({fileLoading:!1});case 14:case"end":return s.stop()}}),null,null,null,Promise)},t.readAsDataURL(n));case 4:case"end":return u.stop()}}),null,null,null,Promise)})),Object(d.a)(Object(l.a)(a),"onFileRemoved",(function(e){var t=0,n=a.state,r=n.files_array,i=n.fileHashes_array,s=n.fileNames_array;for(console.log("file: ",e),t=0;t<r.length;t++)if(e===r[t]){r.splice(t,1),s.splice(t,1),i.splice(t,1);break}a.setState({files_array:r,fileNames_array:s,fileHashes_array:i}),console.log("fileNames_array",s),console.log("fileHashes_array: ",i)})),Object(d.a)(Object(l.a)(a),"handleAddition",(function(e,t){var r=t.value;a.setState({tagOptions:[{text:r,value:r}].concat(Object(n.a)(a.state.tagOptions))})})),a.state={questionTitle:"",content:"",tag:[],tagOptions:[],reward:"",maxDuration:"",errorMessage:"",loading:!1,fileLoading:!1,buffer:null,files_array:[],fileHashes_array:[],fileNames_array:[],login:!1,resourceLoading:!0,timeout:!1,accountType:null},a}return Object(o.a)(p,[{key:"componentDidMount",value:function(){var e,t,a,r,s,o,l,u,c,f,d,p;return i.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:if("undefined"!==typeof L.a){h.next=3;break}return this.setState({loading:!1}),h.abrupt("return");case 3:if(e=!1,!this.props.isLogin){h.next=34;break}return e=!0,h.next=8,i.a.awrap(N.a.methods.getProfile(this.props.account).call());case 8:return t=h.sent,a=Object(E.a)(t),h.next=12,i.a.awrap(a.methods.getAccountType().call());case 12:return r=0==(r=h.sent)?"Admin":"User",h.next=16,i.a.awrap(N.a.methods.getDeployedQuestions().call());case 16:s=h.sent,o=s.length,l=[],u=[],c=0;case 21:if(!(c<o)){h.next=30;break}return f=Object(C.a)(s[c]),h.next=25,i.a.awrap(f.methods.getSummary().call());case 25:d=h.sent,l=[].concat(Object(n.a)(l),Object(n.a)(d[8]));case 27:c++,h.next=21;break;case 30:for(l=(l=Object(n.a)(new Set(l))).reverse().slice(0,30),p=0;p<l.length;p++)u.push({key:p,text:l[p],value:l[p]});this.setState({login:e,accountType:r,tagOptions:u});case 34:this.setState({resourceLoading:!1});case 35:case"end":return h.stop()}}),null,this,null,Promise)}},{key:"renderFilesUpload",value:function(e){var t=this;this.state.files_array;return 0==this.state.files_array.length?H(g.a,{placeholder:!0},H(m.a,{icon:!0},H(y.a,{name:"images outline"}),"No images are uploaded for this question"),H("input",{style:{display:"none"},type:"file",onChange:function(){return t.onFileSelected()},ref:function(e){return t.fileInput=e}}),H(b.a,{primary:!0,onClick:function(){return t.fileInput.click()},loading:this.state.fileLoading},"Upload Image")):H(g.a,{placeholder:!0},H("center",null,H("div",{style:{marginBottom:"20px"}},e),H("input",{style:{display:"none"},type:"file",onChange:function(){return t.onFileSelected()},ref:function(e){return t.fileInput=e}}),H(b.a,{primary:!0,onClick:function(){return t.fileInput.click()},loading:this.state.fileLoading},"Upload Files")))}},{key:"render",value:function(){var e=this;if(this.state.login){var t=this.state.files_array,a=null;return null!==t&&(a=t.map((function(t,a){return H(v.a,{as:"a",key:a,size:"big"},t.name,H(y.a,{name:"delete",onClick:function(){return e.onFileRemoved(t)}}))}))),H(F.a,{accountType:this.state.accountType,page:"New"},H(w.a,null,H(x.a,{hidden:!0}),H(g.a,{textAlign:"center",as:"h3"},"Creating Of New Question"),H(O.a,{error:!!this.state.errorMessage,style:{marginTop:"10px"}},H(O.a.Field,{required:!0},H("label",null,"Question Title"),H(S.a,{placeholder:"Enter Title",value:this.state.questionTitle,onChange:function(t){return e.setState({questionTitle:t.target.value})}})),H(O.a.Field,{required:!0},H("label",null,"Question Description (To include math questions, delimit the latex format with $$)"),H(v.a,null,"Example: This is my equation: $$1 \\triangleright 1 \\bigcirc  \\bigcirc $$"),H("a",{style:{display:"table-cell"},href:"https://www.codecogs.com/latex/eqneditor.php",target:"_blank"},"Link to Supported Latex Editor"),H(j.a,{placeholder:"Enter Description",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}})),H(O.a.Field,null,H("label",null,"Tags"),H(_.a,{clearable:!0,options:this.state.tagOptions,selection:!0,multiple:!0,allowAdditions:!0,search:!0,placeholder:"Select from recently used tags or create your own tags",value:this.state.tag,onChange:function(t,a){var n=a.value;return e.setState({tag:n})},onAddItem:this.handleAddition})),H(O.a.Field,{required:!0},H("label",null,"EQT(s)"),H(S.a,{label:"EQT(s)",labelPosition:"right",placeholder:"Enter your value of reward",value:this.state.reward,onChange:function(t){return e.setState({reward:t.target.value})}})),H(O.a.Field,{required:!0},H("label",null,"Maximum Duration"),H(S.a,{label:"hour(s)",labelPosition:"right",placeholder:"Enter the duration for the question to be valid",value:this.state.maxDuration,onChange:function(t){return e.setState({maxDuration:t.target.value})}})),H(O.a.Field,null,this.renderFilesUpload(a)),H(T.a,{error:!0,header:"Oops!",content:this.state.errorMessage}),H(k.a,{open:this.state.loading,trigger:H(b.a,{primary:!0,onClick:this.onSubmit},"Submit Question"),basic:!0,size:"small"},H(m.a,{content:"Posting New Question"}),H(k.a.Content,null,H("p",null,"System is submitting your question to the blockchain. Upon successful submission, you will be redirected to the Home Page. This process might take awhile."),H(q.a,{active:!0,inline:"centered"},"Loading"))))),H(P.a,{timeout:this.state.timeout}))}return H(F.a,{accountType:this.state.accountType},H(Q.a,{loading:this.state.resourceLoading,login:this.state.login}))}}],[{key:"getInitialProps",value:function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{isLogin:U()(e).login||"",account:U()(e).wallet||""});case 1:case"end":return t.stop()}}),null,null,null,Promise)}}]),p}(p.Component);t.default=J}.call(this,a("tjlA").Buffer)}},[["KTCV",0,2,1,3,4,5,6,7,8,9,12]]]);