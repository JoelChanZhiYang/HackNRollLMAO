(this.webpackJsonphacknroll=this.webpackJsonphacknroll||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(8),o=n.n(s),i=(n(15),n(2)),l=n(3),u=n(6),j=n(5),m=n(4),d=(n(16),n(9)),h=n.n(d),b=n.p+"static/media/down_arrow.2a820a86.svg",O=(n(21),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"row_segment",children:Object(a.jsx)("img",{src:b,className:"plain_arrow"})})}}]),n}(c.Component)),g=(n(22),["Hello there","What's cooking good looking?","Life is a journey, not a destination.","Don't Give Up!","You're almost there.","Discipline is the bridge between goals and accomplishments."]);!function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t}(g);var p=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=g[Math.floor(this.props.randNum*g.length)];return Object(a.jsx)("p",{className:"plain_text row_segment",children:e})}}]),n}(c.Component),f=(n(23),n.p+"static/media/Treasure.c3414e87.png"),v=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"row_segment",children:Object(a.jsx)("img",{className:"treasure_img",src:f,onClick:this.props.fku})})}}]),n}(c.Component),x=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={header:"Scroll Down For Something Cool",items:[],length:0},a.loadItems=a.loadItems.bind(Object(u.a)(a)),a.bringToTop=a.bringToTop.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"loadItems",value:function(){this.setState((function(e){return{items:e.items.concat(Math.random()),length:e.length+1}}))}},{key:"bringToTop",value:function(){this.setState((function(e){return{items:[],length:0,header:"Oops that Treasure is a TRAPsure!"}})),document.body.scrollTop=0,document.documentElement.scrollTop=0}},{key:"randomNum",value:function(e){return Math.seed(e),Math.random()}},{key:"emptyRowSegment",value:function(){return Object(a.jsx)("div",{className:"row_segment"})}},{key:"render",value:function(){var e=this,t=Object(a.jsx)("div",{className:"loader",children:"Loading ..."},0),n=this.state.items.map((function(t,n){return t<.05?Object(a.jsxs)("div",{className:"one_row",children:[e.emptyRowSegment(),Object(a.jsx)(O,{}),Object(a.jsx)(p,{randNum:10*t})]},n):t<.1?Object(a.jsxs)("div",{className:"one_row",children:[Object(a.jsx)(p,{randNum:10*t}),Object(a.jsx)(O,{}),e.emptyRowSegment()]},n):t<.9?Object(a.jsxs)("div",{className:"one_row",children:[e.emptyRowSegment(),Object(a.jsx)(O,{}),e.emptyRowSegment()]},n):Object(a.jsxs)("div",{className:"one_row",children:[e.emptyRowSegment(),Object(a.jsx)(O,{}),Object(a.jsx)(v,{fku:e.bringToTop})]},n)}));return Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsxs)("div",{className:"col-sm-12 col-md-9 col-lg-8",children:[Object(a.jsx)("h1",{className:"text-center",children:this.state.header}),Object(a.jsx)(h.a,{pageStart:0,loadMore:this.loadItems,hasMore:this.state.length<1e3,loader:t,children:Object(a.jsx)("div",{className:"tracks",children:n})})]})})}}]),n}(c.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(24);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),w()}},[[25,1,2]]]);
//# sourceMappingURL=main.9648ac1a.chunk.js.map