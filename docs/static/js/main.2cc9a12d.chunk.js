(this["webpackJsonpfleshmonk-soundboard"]=this["webpackJsonpfleshmonk-soundboard"]||[]).push([[0],{108:function(e,t,a){},170:function(e,t,a){e.exports=a.p+"static/media/fleshmonk.bdd75fa5.png"},171:function(e,t,a){e.exports=a(383)},377:function(e,t,a){},378:function(e,t,a){},383:function(e,t,a){"use strict";a.r(t);a(172),a(181);var n=a(1),r=a.n(n),o=a(169),i=a.n(o),s=(a(377),a(25)),l=a(30),c=a(32),u=a(31),d=a(33),m=(a(108),a(170)),h=a.n(m),g=a(82),p=(a(378),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).letterContainer=function(e){var t=a.props.wordList,n=a.props.addWord;return null!=t?r.a.createElement("div",{className:"letterContainer"},r.a.createElement("h3",null,e),r.a.createElement("ul",null,t.map((function(t,o){return t[0].toLowerCase()===e?r.a.createElement("li",{key:"li_"+t},r.a.createElement("button",{onClick:n.bind(Object(g.a)(a),t)},t)):null})))):void 0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];return r.a.createElement("div",{className:"wordList"},r.a.createElement("h2",null,"available words"),r.a.createElement("div",{className:"flex"},t.map((function(a,n){return e.letterContainer(a,t)}))))}}]),t}(r.a.Component)),f=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.props.word),r.a.createElement("audio",{controls:!0,id:"audio_"+this.props.word+"_"+this.props.index,src:this.props.audioData,className:"audioPlayer"},"Your browser does not support the",r.a.createElement("code",null,"audio")," element."))}}]),t}(r.a.Component),y=function e(){Object(s.a)(this,e),this.data=["a","abs","action","affairs","agree","ai_yah","aliens","all_around","also","am","american","and","anime","ape","applies","aquarium","ar","are","army","art","arts","asian","at","attack","attacks","awesome","back","basically","because","before","bending","berry","best_friends","bit","black","blends","block","blocks","boilded","boom","both","branching","bro","bugs","bullets","bunch","bust","busters","button","by","cans","cantonese","carries","cast","cave","character","chinese","city","clear","close","collect","combat","combos","commercial","content","cool","cops","county","cover","cradle","crazy","created","creates","crime","cry","culture","dad","different","dislike","do","dogs","don't","dong","dont","dope","drama","driving","dude","dump","easy","elements","enough","entire","enviromental","escaping","everything","excited","expect","expected","explore","fans","feel","fight","fish","flash","flesh","fleshmonk","fleshy","flow","focus","follow","food","for","format","fresh","from","fuck","fucking","fun","game","gangster","gawd","gay","get","get_good","glace","got","grade","graphics","greetings","grinding","growing","guns","gut","hard","he","healthy","hell","help","hey","his","hong","hong_kong","huge","hydra","i'm","i","ing","ingredients","instead","is","japan","jiggle","jiggles","just","killzone","kissing","kong","kung_fu","lard","large","larger","let","lie_to_you","light","lights","like","little","loki","loops","love","lower","made","magnetized","make","man","martial_arts","me","mission","missions","mom","most","movies","murder","music","must","myself","neon","no","now","object","offering","ok","okay","once","outside","overcompensate","pass","past","people","plagiarism","playing","point","police","power","present","punch","put","really","recommend","require","retire","rocket","rules","s","safe","sauce","say","school","seats","see","sick","sickly","sing","sleep","sleeping","sleeping_dogs","slowmo","smashing","so","soap","soap_opera","soldier","solid","some","soy_sauce","space","speakers","statues","stay","stay_fleshy","steroids","still","stories","street","stuff","styles","surrounded","take","talking","ten","that","the","them","there","these","thing","things","tight","time","timeline","tire","to","toally","today","together","trash","travel","triad","triads","tv","twitter","uh","under","unlike","unrealistic","up","upgrade","ve","version","very","viewers","want","was","wash","watch","whats_up","while","white","why","wild","with","wonder","wonderful","worth","xp","you"]},b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).generateFromOrigin=function(){for(var e=a.getQuery().split(" "),t=[],n=0;n<e.length;n++){var r="./sounds/"+e[n]+".wav",o={};o[e[n]]=r,t.push(o)}t!=[]&&(a.setState({isLoaded:!0,generated:t}),document.getElementById("audioContainer").classList.remove("hide"))},a.generateFromAPI=function(){var e=a.getQuery();fetch(a.API_ADDRESS+"generate/"+e).then((function(e){return e.json()})).then((function(e){(a.setState({isLoaded:!0,generated:e.data}),null!=a.state.generated)&&document.getElementById("audioContainer").classList.remove("hide")}),(function(e){a.setState({isLoaded:!0,error:e})}))},a.getQuery=function(){var e=document.getElementById("req_input");if(null!=e){var t=e.value.toLowerCase();return t=t.trim()}},a.addWord=function(e){console.log("add "+e);var t=document.getElementById("req_input");t.value=t.value+" "+e},a.clearInput=function(){document.getElementById("req_input").value="",document.getElementById("audioContainer").classList.add("hide");for(var e=document.getElementsByClassName("audioPlayer"),t=0;t<e.length;t++)e[t].pause()},a.playAudio=function(e){for(var t=[],n=[],r=0;r<e.length;r++)t.push(document.getElementById("audio_"+Object.keys(e[r])[0]+"_"+r)),n.push("audio_"+Object.keys(e[r])[0]+"_"+r);for(var o=0;o<n.length;o++)o+1<n.length&&t[o].setAttribute("onEnded",a.getNext(n[o+1]));t[0].play()},a.getNext=function(e){return'setTimeout(function(){ document.getElementById("'+e+'").play(); }, 25);'},a.copyShare=function(){var e=document.getElementById("req_input"),t=document.getElementById("shared_Input"),a=document.getElementById("shared_Notice"),n=e.value;n=n.replace(/ /g,","),n=window.location.href.split("?")[0]+"?q="+n,t.value=n,t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),a.classList.remove("hide"),a.classList.add("ani"),setTimeout((function(){a.classList.add("hide")}),3e3)},a.API_ADDRESS="https://fleshmonk.johnsonlu.dev/",a.state={error:null,isLoaded:!1,clips:[],generated:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.search,t=new URLSearchParams(e).get("q");if(console.log(t),null!=t&&" "!=t&&""!=t){var a=document.getElementById("req_input");t=t.replace(/,/g," "),a.value=t,this.generateFromOrigin()}this.getWordListFromOrigin()}},{key:"getWordListFromOrigin",value:function(){var e=new y;this.setState({isLoaded:!0,clips:e.data})}},{key:"getWordListFromAPI",value:function(){var e=this;fetch(this.API_ADDRESS+"getWordList").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,clips:t.list})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"printWorldList",value:function(){var e=a(379);console.log(e.inspect(this.state.clips,{maxArrayLength:null}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=(e.isLoaded,e.clips);return r.a.createElement("main",{className:""},r.a.createElement("p",{className:"desc"},"Fleshmonk Sound Board. Compile sounds from the YouTuber ",r.a.createElement("a",{href:"https://www.youtube.com/user/MrWilkins88"},"Fleshmonk")," and generate your own voice clips! In the future, maybe support for auto generated voice with machine learning.",r.a.createElement("br",null),r.a.createElement("strong",null," Currently you can only use the words that are available below. Clicking on the words is strongly recommended")),null!=t?r.a.createElement("div",{className:"ErrorMsg"},"Error -- Could not connect to server"):r.a.createElement("div",null),r.a.createElement("div",{id:"audioContainer",className:"hide"},null!=this.state.generated?r.a.createElement("button",{onClick:this.playAudio.bind(this,this.state.generated)},"Play ",r.a.createElement("i",{className:"fas fa-play","aria-hidden":"true"}),r.a.createElement("span",{className:"scr_rd"})):null,r.a.createElement("span",null,null!=this.state.generated?this.state.generated.map((function(e,t){return r.a.createElement(f,{key:t,index:t,word:Object.keys(e)[0],audioData:e[Object.keys(e)[0]]})})):null),null!=this.state.generated?r.a.createElement("span",{id:"shareLink"},r.a.createElement("button",{className:"share_btn",onClick:this.copyShare},r.a.createElement("i",{"aria-hidden":"true",className:"fas fa-link"})),r.a.createElement("div",{id:"shared_Notice",className:"hide"},"Share Link Copied!"),r.a.createElement("input",{id:"shared_Input",className:"scr_rd",type:"text"})):null),r.a.createElement("div",{id:"req_container"},r.a.createElement("input",{id:"req_input",type:"text",placeholder:"Stay Fleshy..."}),r.a.createElement("button",{id:"clear_input",onClick:this.clearInput},"X")),r.a.createElement("button",{id:"req_generate",onClick:this.generateFromOrigin},"generate"),r.a.createElement("div",{id:"fleshmonk_container"},r.a.createElement("img",{id:"fleshmonk_logo",src:h.a,alt:"fleshmonk logo"})),r.a.createElement(p,{wordList:a,addWord:this.addWord}))}}]),t}(r.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"fleshmonk sound board"))}}]),t}(r.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement("footer",null,r.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",alt:"react logo"}),r.a.createElement("p",null,"Made by Johnson Lu with React.js")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[171,1,2]]]);
//# sourceMappingURL=main.2cc9a12d.chunk.js.map