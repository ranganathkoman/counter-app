(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(16),a(8)),s=a(7),i=a(1),u=a(2),d=a(4),m=a(3),f=a(5),h=a(6),p="https://rudderstacocr.dataplane.rudderstack.com",b="2Dmwv0Hkb18ldTh6cs4S8zuRKEg";function v(e,t){console.log(t),h.track(e,t)}h.ready(function(){console.log("we are all set!!!")}),h.load(b,p,{logLevel:"DEBUG",integrations:{All:!0}});var g="abcdefghijklmnopqrstuvwxyz1234567890",E=function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("i",{className:"fa fa-shopping-cart fa-lg m-2","aria-hidden":"true"}),r.a.createElement("span",{className:"badge badge-pill badge-info m-2",style:{width:50,fontSize:"24px"}},t),"Items",r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){var e,t=function(){for(var e="",t=0;t<15;t++)e+=g[Math.floor(Math.random()*g.length)];return e}();console.log(t),e=t,h.identify(e,{name:e,category:"Identify User",email:"".concat(e,"@gmail.com"),logins:Math.floor(100*Math.random())},{page:{path:"",referrer:"",search:"",title:"",url:""}},function(){console.log("in identify call")})}},"Switch")))},y={};function N(e){y.latitude=e.coords.latitude,y.longitude=e.coords.longitude}!function(){if(!navigator.geolocation)return"Geolocation is not supported by this browser.";navigator.geolocation.getCurrentPosition(N)}();var O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getBadgeClasses=function(){var e="badge m-2 badge-";return e+=0===a.props.counter.value?"warning":"primary"},a.formatCount=function(){return a.props.counter.value},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:""},r.a.createElement("span",{style:{fontSize:24},className:this.getBadgeClasses()},this.props.counter.name)),r.a.createElement("div",{className:""},r.a.createElement("span",{style:{fontSize:24},className:this.getBadgeClasses()},this.formatCount())),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){var t=e.props.counter,a=t.id,n=t.name,r=t.value;y&&y.latitude&&y.longitude?v("".concat(n,"_added_to_cart"),{category:n,label:"Add",product_id:a,value:r+1,location:{latitude:y.latitude,longitude:y.longitude}}):console.log("No position"),e.props.onIncrement(e.props.counter)}},r.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-info m-2",onClick:function(){var t=e.props.counter,a=t.id,n=t.name,r=t.value;v("".concat(n,"_removed_from_cart"),{category:n,label:"Remove",product_id:a,value:r-1}),e.props.onDecrement(e.props.counter)},disabled:0===this.props.counter.value?"disabled":""},r.a.createElement("i",{className:"fa fa-minus-circle","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.onDelete(e.props.counter.id)}},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})))))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,a=e.onIncrement,n=e.onDelete,o=e.onDecrement,c=e.counters,l=e.onRestart;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:""},r.a.createElement("button",{className:"btn btn-success m-2",onClick:t,disabled:0===c.length?"disabled":""},r.a.createElement("i",{className:"fa fa-refresh","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-primary m-2",onClick:l,disabled:0!==c.length?"disabled":""},r.a.createElement("i",{className:"fa fa-recycle","aria-hidden":"true"})))),c.map(function(e){return r.a.createElement(O,{key:e.id,counter:e,onIncrement:a,onDecrement:o,onDelete:n})}))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:0,name:"Book"},{id:2,value:0,name:"Watch"},{id:3,value:0,name:"Food"},{id:4,value:0,name:"Drink"},{id:5,value:0,name:"Phone"}]},a.handleIncrement=function(e){var t=Object(s.a)(a.state.counters),n=t.indexOf(e);t[n]=Object(l.a)({},t[n]),t[n].value++,a.setState({counters:t})},a.handleDecrement=function(e){var t=Object(s.a)(a.state.counters),n=t.indexOf(e);t[n]=Object(l.a)({},t[n]),t[n].value--,a.setState({counters:t})},a.handleReset=function(){var e=a.state.counters.map(function(e){return e.value=0,e});a.setState({counters:e})},a.handleDelete=function(e){var t=a.state.counters.filter(function(t){return t.id!==e});a.setState({counters:t})},a.handleRestart=function(){window.location.reload()},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main__wrap"},r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"card__box"},r.a.createElement(E,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),r.a.createElement(j,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onRestart:this.handleRestart}))))}}]),t}(n.Component);a(18),a(19);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.383cf069.chunk.js.map