(this["webpackJsonperror-boundary"]=this["webpackJsonperror-boundary"]||[]).push([[0],[,,,function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},,,,,,,function(e,t,r){e.exports=r(17)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(2),o=r.n(c),s=(r(15),r(7)),l=r(3),i=r.n(l);r(16);var u=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1];if(r)throw"A simulated error in JS =D";return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),n.a.createElement("p",null,"Error Boundaries Example!"),n.a.createElement("button",{className:"App-button",onClick:function(){return c(!0)}},"Dispatch JS error")))},m=r(4),p=r(5),d=r(8),h=r(6),E=r(9),f=function(e){function t(e){var r;return Object(m.a)(this,t),(r=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={error:!1,msg:"",stack:null},r}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({msg:e,stack:t})}},{key:"render",value:function(){return this.state.error?n.a.createElement("div",{className:"Error-area"},n.a.createElement("h1",null,"Ops, an unexpected problem occurred :("),n.a.createElement("a",{href:"/"},"Reload page"),n.a.createElement("details",null,n.a.createElement("div",{className:"Error-stack"},n.a.createElement("h2",null," Error: ",this.state.msg," "),this.state.stack&&this.state.stack.componentStack))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{error:!0}}}]),t}(a.Component);o.a.render(n.a.createElement(f,null,n.a.createElement(u,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.b33fe275.chunk.js.map