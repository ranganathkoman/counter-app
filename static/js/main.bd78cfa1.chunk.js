(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a(12),l=(a(28),a(16)),i=a(5),s=a(7),u=a(8),d=a(10),m=a(6),h=a(9),f=window.rudderanalytics=window.rudderanalytics||[];function b(e,t){var a=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}("moe_uuid");a&&(console.log(f.getAnonymousId()),f.setAnonymousId(a),console.log(f.getAnonymousId())),f.track(e,t)}var p="abcdefghijklmnopqrstuvwxyz1234567890",g=function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("i",{className:"fa fa-shopping-cart fa-lg m-2","aria-hidden":"true"}),r.a.createElement("span",{className:"badge badge-pill badge-info m-2",style:{width:50,fontSize:"24px"}},t),"Items",r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){var e,t=function(){for(var e="",t=0;t<15;t++)e+=p[Math.floor(Math.random()*p.length)];return e}();console.log(t),e=t,console.log("I got called"),f.identify({name:e,category:"Identify User",email:"".concat(e,"@gmail.com"),logins:Math.floor(100*Math.random())},{page:{path:"",referrer:"",search:"",title:"",url:""}},function(){console.log("in identify call")})}},"Switch"),r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){f.reset(!0)}},"Clear")))},v={};function E(e){v.latitude=e.coords.latitude,v.longitude=e.coords.longitude}!function(){if(!navigator.geolocation)return"Geolocation is not supported by this browser.";navigator.geolocation.getCurrentPosition(E)}();var y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getBadgeClasses=function(){var e="badge m-2 badge-";return e+=0===a.props.counter.value?"warning":"primary"},a.formatCount=function(){return a.props.counter.value},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:""},r.a.createElement("span",{style:{fontSize:24},className:this.getBadgeClasses()},this.props.counter.name)),r.a.createElement("div",{className:""},r.a.createElement("span",{style:{fontSize:24},className:this.getBadgeClasses()},this.formatCount())),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){var t=e.props.counter,a=t.id,n=t.name,r=t.value;v&&v.latitude&&v.longitude?b("".concat(n,"_added_to_cart"),{category:n,label:"Add",product_id:a,price:1025.6,value:r+1,key1:"Blah",key2:"Blah Again",location:{latitude:v.latitude,longitude:v.longitude}}):(console.log("No position"),b("".concat(n,"_added_to_cart"),{category:n,moe_logged_in_status:!0,label:"Add",product_id:a,value:r+1,key1:"Blah",key2:"Blah Again"})),e.props.onIncrement(e.props.counter)}},r.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-info m-2",onClick:function(){var t,a,n=e.props.counter,r=n.id,o=n.name,c=n.value;t="".concat(o,"_removed_from_cart"),a={category:o,moe_logged_in_status:!1,label:"Remove",product_id:r,value:c-1},console.log(a),console.log(t),f.track(t,a),e.props.onDecrement(e.props.counter)},disabled:0===this.props.counter.value?"disabled":""},r.a.createElement("i",{className:"fa fa-minus-circle","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.onDelete(e.props.counter.id)}},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})))))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,a=e.onIncrement,n=e.onDelete,o=e.onDecrement,c=e.counters,l=e.onRestart;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:""},r.a.createElement("button",{className:"btn btn-success m-2",onClick:t,disabled:0===c.length?"disabled":""},r.a.createElement("i",{className:"fa fa-refresh","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-primary m-2",onClick:l,disabled:0!==c.length?"disabled":""},r.a.createElement("i",{className:"fa fa-recycle","aria-hidden":"true"})))),c.map(function(e){return r.a.createElement(y,{key:e.id,counter:e,onIncrement:a,onDecrement:o,onDelete:n})}))}}]),t}(n.Component),k=a(1),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:0,name:"Book"},{id:2,value:0,name:"Watch"},{id:3,value:0,name:"Food"},{id:4,value:0,name:"Drink"},{id:5,value:0,name:"Phone"}]},a.handleIncrement=function(e){var t=Object(i.a)(a.state.counters),n=t.indexOf(e);t[n]=Object(l.a)({},t[n]),t[n].value++,a.setState({counters:t})},a.handleDecrement=function(e){var t=Object(i.a)(a.state.counters),n=t.indexOf(e);t[n]=Object(l.a)({},t[n]),t[n].value--,a.setState({counters:t})},a.handleReset=function(){var e=a.state.counters.map(function(e){return e.value=0,e});a.setState({counters:e})},a.handleDelete=function(e){var t=a.state.counters.filter(function(t){return t.id!==e});a.setState({counters:t})},a.handleRestart=function(){window.location.reload()},a.handleNavClick=function(e){var t,a,n=e.target,r=n.innerHTML,o=n.href,c=n.baseURI;t=r,a={url:o,referrer:c,sender:"Ranganath"},f.page(t,a)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main__wrap"},r.a.createElement("main",{className:"container"},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/",onClick:this.handleNavClick},"Home")," |",r.a.createElement(c.b,{to:"about",onClick:this.handleNavClick},"About")," |",r.a.createElement(c.b,{to:"contact",onClick:this.handleNavClick},"Contact")),r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/",element:r.a.createElement("div",{className:"card__box"},r.a.createElement(g,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),r.a.createElement(N,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onRestart:this.handleRestart}))}),r.a.createElement(k.a,{path:"about",element:r.a.createElement("h1",null,"This is the about page")}),r.a.createElement(k.a,{path:"contact",element:r.a.createElement("h1",null,"This is the contact page")}))))}}]),t}(n.Component);a(29),a(30);o.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(c.a,null,n.createElement(C,null))))}},[[19,1,2]]]);
//# sourceMappingURL=main.bd78cfa1.chunk.js.map