(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(99)},41:function(e,t,a){},93:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(41),a(9)),i=a(10),s=a(12),m=a(11),u=a(13),h=a(3),b=(a(93),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100",margin:"auto"}},r.a.createElement(h.Grid,{className:"landing-grid"},r.a.createElement(h.Cell,{col:12},r.a.createElement("img",{className:"avatar-img",src:"https://media.licdn.com/dms/image/C5603AQHAROAlfQ8A7g/profile-displayphoto-shrink_200_200/0?e=1544659200&v=beta&t=hDRIHUqa7PHOvBfwm9OQV9n9dEnfuYSyke_Oi377xzY",alt:"avatar"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Full Stack Web Developer"),r.a.createElement("hr",null),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://github.com/kotharan",target:"_blank",rel:"noopener noreferrer"}," ",r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/anand-kothari/",target:"_blank",rel:"noopener noreferrer"}," ",r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}))," ")))))}}]),t}(n.Component)),d=a(103),E=a(102),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"AboutMe Page "))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact Page "))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeTab:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?r.a.createElement(h.Card,{shadow:6,style:{width:"450px",margin:"auto"}},r.a.createElement(h.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://images.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg?auto=compress&cs=tinysrgb&h=350) center / cover"}},"Hackathon Project"),r.a.createElement(h.CardText,null,"Yet not decided what to eat tonight?? ",r.a.createElement("br",null),"Come join us, we will help you."),r.a.createElement(h.CardActions,{border:!0},r.a.createElement(h.Button,{style:{width:"50%"},colored:!0,href:"https://team-delicious.herokuapp.com/home",target:"_blank"},"Decide NOW!"),r.a.createElement(h.Button,{style:{width:"40%"},target:"_blank",colored:!0},r.a.createElement("a",{href:"https://github.com/kotharan/Hackathon_team_delicious",target:"_blank",rel:"noopener noreferrer"}," ",r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true",style:{color:"black","font-size":"30px"}})))),r.a.createElement(h.CardMenu,{style:{color:"#fff"}},r.a.createElement(h.IconButton,{hre:!0,name:"share"}),r.a.createElement("br",null))):1===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is tab 1")):2===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is tab 2")):3===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is tab 3")):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category-tabs"},r.a.createElement(h.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(h.Tab,null,"HTML / CSS / JS"),r.a.createElement(h.Tab,null,"C++"),r.a.createElement(h.Tab,null,"Python")),r.a.createElement("section",{className:"projects-grid"},r.a.createElement(h.Grid,{className:"projects-grid"},r.a.createElement(h.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories())))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Resume Page "))}}]),t}(n.Component),j=function(){return r.a.createElement(d.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:b}),r.a.createElement(E.a,{path:"/aboutme",component:p}),r.a.createElement(E.a,{path:"/contacts",component:f}),r.a.createElement(E.a,{path:"/projects",component:g}),r.a.createElement(E.a,{path:"/resume",component:v}))},O=a(100),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(h.Layout,null,r.a.createElement(h.Header,{className:"header-color",title:"My Portfolio Tabs",scroll:!0},r.a.createElement(h.Navigation,null,r.a.createElement(O.a,{to:"/resume"},"Resume"),r.a.createElement(O.a,{to:"/aboutme"},"About Me"),r.a.createElement(O.a,{to:"/projects"},"Projects"),r.a.createElement(O.a,{to:"/contacts"},"Contact"))),r.a.createElement(h.Drawer,{title:"My Portfolio Tabs"},r.a.createElement(h.Navigation,null,r.a.createElement(O.a,{to:"/resume"},"Resume"),r.a.createElement(O.a,{to:"/aboutme"},"About Me"),r.a.createElement(O.a,{to:"/projects"},"Projects"),r.a.createElement(O.a,{to:"/contacts"},"Contact"))),r.a.createElement(h.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(j,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(96),a(98);var y=a(101);l.a.render(r.a.createElement(y.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.e794cad0.chunk.js.map