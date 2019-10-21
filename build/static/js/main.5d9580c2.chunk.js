(this["webpackJsonpsong-drop-app"]=this["webpackJsonpsong-drop-app"]||[]).push([[0],{21:function(e,t,n){e.exports=n(37)},26:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),l=n.n(i),s=(n(26),n(3)),r=n(2),u=n(4),c=n(5),h=n(1),d=n(6),p=n(14),g=(n(30),n(45)),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){this.handlePlayRateChange(this.props.playRate)}},{key:"smoothAlgorithm",value:function(e){return Math.pow(e/100,Math.log(10)/Math.log(2))}},{key:"onPlayRateStateChange",value:function(e){var t=this;this.setState({playRate:e},(function(){t.props.client.send(JSON.stringify(t.state))}))}},{key:"handlePlayRateChange",value:function(e){this.props.source.playbackRate.value=this.smoothAlgorithm(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"PlayRateSlider"},o.a.createElement("p",null,"Play Rate"),o.a.createElement("div",{style:{marginLeft:"25%",marginRight:"25%"}},o.a.createElement(g.a,{id:"slider",onChange:function(t,n){e.onPlayRateStateChange(n)},min:0,max:200,value:this.props.playRate})))}}]),t}(a.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){this.handleVolumeChange(this.props.volume)}},{key:"smoothAlgorithm",value:function(e){return Math.pow(e/100,Math.log(10)/Math.log(2))}},{key:"onVolumeStateChange",value:function(e){var t=this;this.setState({volume:e},(function(){t.props.client.send(JSON.stringify(t.state))}))}},{key:"handleVolumeChange",value:function(e){this.props.gainNode.gain.value=this.smoothAlgorithm(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"VolumeSlider"},o.a.createElement("p",null,"Volume"),o.a.createElement("div",{style:{marginLeft:"25%",marginRight:"25%"}},o.a.createElement(g.a,{id:"slider",onChange:function(t,n){e.onVolumeStateChange(n)},min:0,max:200,value:this.props.volume})))}}]),t}(a.Component),v=n(12),y=n.n(v),b=n(17),O=(n(36),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={highlight:!1},n.fileInputRef=o.a.createRef(),n.openFileDialog=n.openFileDialog.bind(Object(h.a)(n)),n.onFilesAdded=n.onFilesAdded.bind(Object(h.a)(n)),n.onDragOver=n.onDragOver.bind(Object(h.a)(n)),n.onDragLeave=n.onDragLeave.bind(Object(h.a)(n)),n.onDrop=n.onDrop.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"openFileDialog",value:function(){this.props.disabled||this.fileInputRef.current.click()}},{key:"onFilesAdded",value:function(e){if(!this.props.disabled){var t=e.target.files;if(this.props.onFilesAdded){var n=this.fileListToArray(t);this.props.onFilesAdded(n)}}}},{key:"fileListToArray",value:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.item(n));return t}},{key:"onDragOver",value:function(e){e.preventDefault(),this.props.disabled||this.setState({hightlight:!0})}},{key:"onDragLeave",value:function(){this.setState({hightlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.props.disabled){var t=e.dataTransfer.files;if(this.props.onFilesAdded){var n=this.fileListToArray(t);this.props.onFilesAdded(n)}this.setState({hightlight:!1})}}},{key:"render",value:function(){return o.a.createElement("div",{className:"Dropzone ".concat(this.state.hightlight?"Highlight":""),onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop,onClick:this.openFileDialog},o.a.createElement("img",{alt:"upload",className:"Icon",src:"cloud_upload-24px.svg"}),o.a.createElement("input",{ref:this.fileInputRef,className:"FileInput",type:"file",multiple:!0,onChange:this.onFilesAdded}),o.a.createElement("span",null,"Upload Files"))}}]),t}(a.Component)),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={files:[]},n.uploadFiles=n.uploadFiles.bind(Object(h.a)(n)),n.sendRequest=n.sendRequest.bind(Object(h.a)(n)),n.onFilesAdded=n.onFilesAdded.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onFilesAdded",value:function(e){var t=this;this.setState((function(t){return{files:t.files.concat(e)}})),setTimeout((function(){console.log(t.state.files),t.uploadFiles()}),0)}},{key:"uploadFiles",value:function(){var e=Object(b.a)(y.a.mark((function e(){var t,n=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],this.state.files.forEach((function(e){t.push(n.sendRequest(e)),console.log(t)})),e.prev=2,e.next=5,Promise.all(t);case 5:this.setState({files:void 0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"sendRequest",value:function(e){return new Promise((function(t,n){var a=new XMLHttpRequest,o=new FormData;o.append("file",e,e.name),a.open("POST","http://172.18.86.35:5001/upload"),a.send(o)}))}},{key:"render",value:function(){return o.a.createElement(O,{onFilesAdded:this.onFilesAdded,disabled:!1})}}]),t}(a.Component),j=new(window.AudioContext||window.webkitAudioContext),R=new p.w3cwebsocket("ws://172.18.86.35:5000"),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={volume:0,playRate:0,pitch:0},n.source=j.createBufferSource(),n.buttonLabel="Begin",n.gainNode=j.createGain(),n.gainNode.connect(j.destination),console.log(j),n.getSound(),n.playing=!1,n.togglePlay=n.togglePlay.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"smoothAlgorithm",value:function(e){return Math.pow(e/100,Math.log(10)/Math.log(2))}},{key:"getSound",value:function(){this.source=j.createBufferSource();var e=new XMLHttpRequest;e.open("GET","http://172.18.86.35:5001/sound",!0),e.responseType="arraybuffer";var t=this;this.source.onended=function(){t.getSound()},e.onload=function(){j.decodeAudioData(e.response).then((function(e){t.source.buffer=e,t.source.playbackRate.value=t.smoothAlgorithm(t.state.playRate),t.source.connect(t.gainNode),t.source.start(0)}),(function(e){console.log(e)}))},e.send()}},{key:"togglePlay",value:function(){this.playing=!this.playing,this.playSoundLoop()}},{key:"playSoundLoop",value:function(){var e=document.getElementById("toggleButton");this.playing?(j.resume(),e.innerHTML="Stop"):(j.suspend(),e.innerHTML="Start")}},{key:"componentDidMount",value:function(){var e=this;R.onopen=function(){console.log("WebSocket Client Connected")},R.onmessage=function(t){var n=JSON.parse(t.data);e.setState({volume:n.volume}),e.setState({playRate:n.playRate})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("center",null,o.a.createElement(m,{gainNode:this.gainNode,volume:this.state.volume,client:R}),o.a.createElement(f,{source:this.source,playRate:this.state.playRate,client:R}),o.a.createElement("button",{id:"toggleButton",type:"button",onClick:function(t,n){e.togglePlay()}},"Begin")),o.a.createElement("div",{className:"Upload"},o.a.createElement(k,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(S,{style:{backgroundImage:'url(require("screaming.png"))'}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.5d9580c2.chunk.js.map