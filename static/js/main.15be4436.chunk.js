(this["webpackJsonpcoin-flip"]=this["webpackJsonpcoin-flip"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/heads.99a10729.jpg"},function(e,t,n){e.exports=n.p+"static/media/tails.43f803d7.jpg"},,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(9),s=n.n(c),l=(n(15),n(16),n(17),n(2)),r=n(3),o=n(1),u=n(5),p=n(4),d=(n(18),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"Coin"},a.a.createElement("img",{src:this.props.imgSrc}))}}]),n}(i.Component)),h=(n(19),n(6)),m=n.n(h),f=n(7),g=n.n(f),v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={flipping:!1,currCoin:null,nFlips:0,nHeads:0,nTails:0},i.handleClick=i.handleClick.bind(Object(o.a)(i)),i.flipCoin=i.flipCoin.bind(Object(o.a)(i)),i.flipping=i.flipping.bind(Object(o.a)(i)),i}return Object(r.a)(n,[{key:"choice",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"flipCoin",value:function(){var e=this.choice(this.props.coins);this.setState((function(t){return{flipping:!0,currCoin:e,nFlips:t.nFlips+1,nHeads:t.nHeads+("heads"===e.side?1:0),nTails:t.nTails+("tails"===e.side?1:0)}})),setTimeout(this.flipping,1e3)}},{key:"flipping",value:function(){this.setState({flipping:!1})}},{key:"handleClick",value:function(e){this.flipCoin()}},{key:"render",value:function(){var e=this.state.flipping?a.a.createElement("div",{className:"CoinFlipper"},a.a.createElement("div",{className:"heads face"},a.a.createElement("img",{src:m.a})),a.a.createElement("div",{className:"tails face"},a.a.createElement("img",{src:g.a}))):a.a.createElement("div",null,this.state.currCoin&&a.a.createElement(d,{imgSrc:this.state.currCoin.imgSrc}),a.a.createElement("button",{onClick:this.handleClick},"Flip Me!"),this.state.currCoin&&a.a.createElement("p",null,a.a.createElement("strong",null,"**You flipped ",this.state.currCoin.side,"**")),a.a.createElement("p",null,"Out of ",this.state.nFlips," flips, there have been ",this.state.nHeads," ","heads and ",this.state.nTails," tails."));return a.a.createElement("div",{className:"CoinContainer"},a.a.createElement("h2",null,"Let's Flip A Coin!"),e)}}]),n}(i.Component);v.defaultProps={coins:[{side:"heads",imgSrc:m.a},{side:"tails",imgSrc:g.a}]};var C=v;var E=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.15be4436.chunk.js.map