(this.webpackJsonpreactapi=this.webpackJsonpreactapi||[]).push([[0],{25:function(e,t,a){},51:function(e,t,a){e.exports=a(69)},56:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),m=(a(56),a(9)),i=a(10),s=a(12),o=a(11),u=a(13),E=a(20),h=a(18),d=a(21),b=(a(25),a(76)),p=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).goBack=a.goBack.bind(Object(d.a)(a)),console.log(a.props.match.params.title),a.state={match:{},isLoaded:!1,title:a.props.title},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.scorebat.com/video-api/v1/").then((function(e){return e.json()})).then((function(t){e.setState({match:t.filter((function(t){return t.title==e.props.match.params.title}))})}))}},{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return console.log(this.state.match),null!=this.state.match[0]?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"space"}),l.a.createElement("button",{className:"goBack",onClick:this.goBack},"Go Back"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{id:"listone"},l.a.createElement(b.a,{className:"card",text:"white",style:{width:"50rem"}},l.a.createElement(b.a.Header,null,this.state.match[0].side1.name,l.a.createElement("p",{className:"matchescore"}," VS")," ",this.state.match[0].side2.name),l.a.createElement("br",null),l.a.createElement("p",{className:"viewdetails1"},"LEAGUE",l.a.createElement("p",{className:"matchescore"}," | "),this.state.match[0].competition.name),l.a.createElement("p",{className:"viewdetails2"},this.state.match[0].date.substring(0,10)),l.a.createElement("br",null),l.a.createElement("div",{className:"video"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.match[0].videos[0].embed}})),l.a.createElement("br",null),l.a.createElement("p",{className:"viewdetails"},"HIGHLIGHTS"),l.a.createElement("p",{className:"viewdetails2"},this.state.match[0].videos[0].title),l.a.createElement("br",null),l.a.createElement("a",{className:"viewdetails3",href:this.state.match[0].url,target:"_blank"},"View on Scorebat"),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)):l.a.createElement("div",{className:"loading"},"Loading...")}}]),t}(l.a.Component),v=(a(33),a(71)),f=a(45),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={matches:[],isLoaded:!1,filtered:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.scorebat.com/video-api/v1/").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,matches:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.matches;return t?l.a.createElement("div",{classNameName:"App"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{classNameName:"topcard",text:"white",style:{width:"37rem"}},l.a.createElement(b.a.Header,null,"LATEST FIXTURES")),a.map((function(e,t){return l.a.createElement("div",{classNameName:"App"},l.a.createElement(b.a,{classNameName:"card",text:"white",style:{width:"37rem"}},l.a.createElement(b.a.Body,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(v.a,{key:t},l.a.createElement(f.a,{md:"auto"},l.a.createElement("img",{className:"image",src:e.thumbnail,height:"150",alt:""})),l.a.createElement(f.a,{md:"auto"},l.a.createElement("p",null,e.competition.name.substring(0,24)),l.a.createElement("br",null),l.a.createElement("p",null,e.title.substring(0,30)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.b,{className:"link",to:{pathname:"/MatchDetails/".concat(e.title)}},l.a.createElement("p",{className:"matchescore"},"Match Score")),l.a.createElement("br",null),l.a.createElement("p",null,e.videos[0].title),l.a.createElement("br",null),l.a.createElement("p",null,e.date.substring(0,10)),l.a.createElement("br",null),l.a.createElement("br",null))))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}))):l.a.createElement("div",{classNameName:"loading"},"Loading...")}}]),t}(l.a.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"App"},l.a.createElement(b.a,{className:"card",text:"white",style:{width:"65rem",height:"30rem"}},l.a.createElement(b.a.Body,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement(f.a,{md:"auto"},l.a.createElement("div",{className:"aboutimg"}," ")),l.a.createElement(f.a,null,l.a.createElement("h1",null,"About LiveScore"),l.a.createElement("p",null,"Live score is a type of service offered by many sports-related websites and broadcasters as well as online sports betting operators.",l.a.createElement("br",null),l.a.createElement("br",null),"The idea of live scores is to provide real time info about sports results from various disciplines. Live scores like this are usually free and are very popular among sports betting enthusiasts, as they allow viewing collected data on many sports events. ",l.a.createElement("a",{className:"matchescore",href:"https://en.wikipedia.org/wiki/Live_scores"},"[1]"),l.a.createElement("br",null),l.a.createElement("br",null)," You can view any match from the list provided on the homepage showing all latest matches in top tier football. Then, simply by clicking Match Score, you can view highlights and live action videos from that particular match. By clicking the View on scorebat link at the bottom of any match details page, you can also view any further info about this fixture on Scorebat.com",l.a.createElement("br",null),l.a.createElement("br",null)))))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(l.a.Component),N=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contactApp"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{className:"topcard2",text:"white",style:{width:"35rem"}},l.a.createElement(b.a.Header,null,"CONTACT US")),l.a.createElement(b.a,{className:"contactcard",text:"white",style:{width:"35rem"}},l.a.createElement(b.a.Body,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement("div",{className:"centred"},l.a.createElement(f.a,{md:"auto"},l.a.createElement("p",null,"Send e-mail to livescorefeedback@gmail.com")))),l.a.createElement("br",null),l.a.createElement("form",{action:"mailto:someone@example.com",method:"post",enctype:"text/plain"},l.a.createElement(v.a,null,l.a.createElement("div",{className:"centred"},l.a.createElement(f.a,{md:"auto"},l.a.createElement("p",null,"First Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"Firstname"})),l.a.createElement(f.a,{md:"auto"},l.a.createElement("p",null,"Last Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"Lastname"})))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement("div",{className:"centred"},l.a.createElement(f.a,{md:"auto"},l.a.createElement("p",null,"Email"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"mail",style:{width:"24rem"}})))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement("div",{className:"centred"},l.a.createElement(f.a,{md:"auto"},l.a.createElement("p",null,"Comment"),l.a.createElement("br",null),l.a.createElement("textarea",{name:"comment",size:"50",style:{width:"24rem"}})))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement("div",{className:"centred"},l.a.createElement(f.a,{md:"auto"},l.a.createElement("input",{type:"submit",value:"Send"}),l.a.createElement("div",{className:"gap"}),l.a.createElement("input",{type:"reset",value:"Reset"}))))),l.a.createElement("br",null),l.a.createElement("br",null))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(l.a.Component),w=a(73),j=a(74),O=a(75),k=a(50),S=a(72),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){a.setState({match:e})},a.handleSubmit=function(e){alert("match is: "+a.state.match),e.preventDefault()},a.state={match:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(w.a,{className:"nav fixed-top"},l.a.createElement("div",{className:"icon"}),l.a.createElement(w.a.Brand,{href:"/"},this.props.heading),l.a.createElement(j.a,{className:"mr-auto"},l.a.createElement(j.a.Link,{href:"About"},"About"),l.a.createElement(j.a.Link,{href:"Contact"},"Contact")),l.a.createElement(O.a,{onSubmit:this.handleSubmit,inline:"inline"},l.a.createElement(k.a,{type:"text",placeholder:"Search",onChange:this.handleChange,className:"mr-sm-2"}),l.a.createElement(S.a,{className:"search",type:"submit",value:"Submit"},"Search")))}}]),t}(l.a.Component),L=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(x,{heading:"LiveScore"}),l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:y}),l.a.createElement(h.a,{exact:!0,path:"/About",component:g}),l.a.createElement(h.a,{exact:!0,path:"/Contact",component:N}),l.a.createElement(h.a,{exact:!0,path:"/MatchDetails/:title",component:p})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.1fe8736f.chunk.js.map