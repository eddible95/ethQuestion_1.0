(window.webpackJsonp=window.webpackJsonp||[]).push([["135f"],{Juyh:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),r=a.n(n),l=a("O40h"),i=a("0iUn"),s=a("sLSF"),o=a("MI3g"),c=a("a7VT"),u=a("Tit0"),h=a("q1tI"),p=a.n(h),d=a("yE/o"),m=a("Mt1y"),E=a("3mGJ"),f=a("aQu0"),g=a("eetn"),w=a("UZm1"),b=a("5Yp1"),y=a("oZBQ"),v=a("OIDg"),A=a("XPRw"),x=(a("6JRj"),a("Ma5Y")),S=a.n(x),T=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(o.default)(this,Object(c.default)(t).call(this,e))).state={login:!1,loading:!0,accountType:null},a}return Object(u.default)(t,e),Object(s.default)(t,[{key:"componentDidMount",value:function(){var e=Object(l.default)(r.a.mark(function e(){var t,a,n,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==y.a){e.next=3;break}return this.setState({loading:!1}),e.abrupt("return");case 3:if(t=!1,!this.props.isLogin){e.next=16;break}return t=!0,e.next=8,v.a.methods.getProfile(this.props.account).call();case 8:return a=e.sent,n=Object(A.a)(a),e.next=12,n.methods.getAccountType().call();case 12:l=0==(l=e.sent)?"Admin":"User",this.setState({login:t}),this.setState({accountType:l});case 16:this.setState({loading:!1});case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.login?p.a.createElement(b.a,{accountType:this.state.accountType,page:"About"},p.a.createElement(d.a,null,p.a.createElement(m.a,{hidden:!0}),p.a.createElement(E.a,{raised:!0,textAlign:"left"},p.a.createElement(f.a,{as:"h2",textAlign:"center"},"SCSE19-0299: Block-Chain Based Question Answering System")),p.a.createElement(f.a,{as:"h3",textAlign:"left"},"Project Details"),p.a.createElement(m.a,null),p.a.createElement("p",{style:{fontSize:"16px"}},"This is an experimental system for School Of Computer Science & Engineereing (SCSE) Final Year Project titled SCSE19-0299."),p.a.createElement(f.a,{as:"h3",textAlign:"left"},"System Rules & Guidelines"),p.a.createElement(m.a,null),p.a.createElement("p",{style:{fontSize:"16px"}},"No posting of ",p.a.createElement("b",null,"Assignments ")," or ",p.a.createElement("b",null,"Tutorial Questions")," is allowed. Fraudulent accounts will be ",p.a.createElement("b",null,"removed from the system and banned from future use"),"."),p.a.createElement(f.a,{as:"h3",textAlign:"left"},"Getting EthQuestionToken (EQT)"),p.a.createElement(m.a,null),p.a.createElement("p",{style:{fontSize:"16px"}},"EthQuestionToken (EQT) is a cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s). Each user is given ",p.a.createElement("b",null,"10 EQTs")," upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals for each question. Additionally, user can exchange points earned through their participation on the system.",p.a.createElement("b",null," 5 EQTs")," for every ",p.a.createElement("b",null,"100 points")," earned."),p.a.createElement(m.a,{hidden:!0}),p.a.createElement(m.a,{hidden:!0}),p.a.createElement(E.a,{raised:!0,textAlign:"left"},p.a.createElement(f.a,{as:"h2",textAlign:"center"},"Leaderboard")),p.a.createElement(f.a,{as:"h3",textAlign:"left"},"Accumulating Points"),p.a.createElement(m.a,null),p.a.createElement("p",{style:{fontSize:"16px"}},"Points can be earned through the following ways:"),p.a.createElement("p",{style:{fontSize:"16px"}},p.a.createElement("b",null,"Asking Question With Reward Awarded:")," 5 Points"),p.a.createElement("p",{style:{fontSize:"16px"}},p.a.createElement("b",null,"Answer Selected:")," 4 Points"),p.a.createElement("p",{style:{fontSize:"16px"}},p.a.createElement("b",null,"Submit Answer:")," 2 Points"),p.a.createElement("p",{style:{fontSize:"16px"}},p.a.createElement("b",null,"Approve Answer with Highest Approvals:")," 2 Points"),p.a.createElement("p",{style:{fontSize:"16px"}},p.a.createElement("b",null,"Approving An Answer:")," 1 Point"),p.a.createElement(m.a,{hidden:!0}),p.a.createElement(E.a,{raised:!0},p.a.createElement(f.a,{as:"h2",textAlign:"center"},"System Functionality")),p.a.createElement(f.a,{as:"h3",textAlign:"left"},"Ask New Question"),p.a.createElement(m.a,null),p.a.createElement("p",{style:{fontSize:"16px"}},'Access using "',p.a.createElement("b",null,"Ask Question"),'" tab above. Each creation of new question requires at least',p.a.createElement("b",null," 1 EQT")," as the reward. In the event that there are no answers provided within the duration specified, the reward will be returned to the owner of the question."),p.a.createElement(f.a,{as:"h3",textAlign:"left"},"Provide Answer To Question"),p.a.createElement(m.a,null),p.a.createElement("p",{style:{fontSize:"16px"}},"All questions posted can be view from the Home Page access via ",p.a.createElement("b",null,'"Home"')," tab above. Clicking on the question title will provide additional details on the question as well as providing the form to submit an answer for the question. No EQT are required for answering of question."),p.a.createElement(f.a,{as:"h3",textAlign:"left"},"Approving Of Answers"),p.a.createElement(m.a,null),p.a.createElement("p",{style:{fontSize:"16px"}},"When the question is in the ",p.a.createElement("b",null,'"Voting Phase"'),", all users can view all answers that are submitted and approve each answer depending on its relevance and helpfulness. Each approval requires ",p.a.createElement("b",null,"1 EQT"),". Each user can only",p.a.createElement("b",null," approve each answer once"),'. After the "Voting Phase", users who approved the answer with the highest approvals will have their ',p.a.createElement("b",null,"1 EQT")," returned. Additionally, EQT from users who approve other answers would be distributed among users who approved the answer with the highest approvals."),p.a.createElement(E.a,{raised:!0},p.a.createElement(f.a,{as:"h2",textAlign:"center"},"User Guide")),p.a.createElement(g.a,{id:"pdRTt2QabOg",source:"youtube"}))):p.a.createElement(b.a,{accountType:this.state.accountType},p.a.createElement(w.a,{loading:this.state.loading,login:this.state.login}))}}],[{key:"getInitialProps",value:function(){var e=Object(l.default)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{isLogin:S()(t).login||"",account:S()(t).wallet||""});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);t.default=T},rB5V:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){var e=a("Juyh");return{page:e.default||e}}])}},[["rB5V","5d41","9da1"]]]);