(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{294:function(e,t,a){e.exports=a(427)},427:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),o=a.n(l),c=a(141),s=a(21),d=a(83),i=a(22),u=a.n(i),m=a(42),f="GET_ALL",p="DELETE_COUNTRY",h="SET_COUNTRY",v="UNSET_COUNTRY",b="SET_LIST_DATA",E="SET_COUNTRTY_DETAIL_DATA",g="SET_GLOBAL_DATA",y="DELETE_DATA",C="SET_DAILY_DATA",O="GET_NEWS_DATA",D=a(174),j=a.n(D),w=j.a.create({baseURL:"https://covid19.mathdro.id/"}),T=j.a.create({baseURL:"http://newsapi.org/"}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return(function(){var t=Object(m.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("api/countries/".concat(e));case 2:(r=t.sent)&&a({type:E,data:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},F={id:null,otherLocations:null,totalConfirmed:null,totalRecovered:null,reportDateString:""},S=a(455),x=a(452),U=a(453),A=a(62),R=a(454),k=a(457),L=a(246),Y=a(436),I=a(432),B=a(456),N=a(459),M=a(258),G=a(281),P=a.n(G),X=a(97),W=a(81),J=a.n(W),V=Object(c.b)((function(e){return{detail:e.countryDetail,daily:e.daily,news:e.news}}),(function(e){return{getCountryDetailById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ID";return e(_(t))},getGlobalData:function(){return e(function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("api/");case 2:(a=e.sent).data&&t({type:g,data:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setDailyChart:function(){return e(function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("api/daily");case 2:if(a=e.sent,r=[],200===a.status){for(n=a.data.length-1;n>=0;n--)F.id=a.data[n].objectid,F.otherLocations=a.data[n].otherLocations,F.totalConfirmed=a.data[n].totalConfirmed,F.totalRecovered=a.data[n].totalRecovered,F.reportDateString=a.data[n].reportDateString,r.push(F),F={};t({type:C,data:r})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setCountryList:function(){return e(function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("api/confirmed");case 2:a=e.sent,t({type:b,data:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setCountry:function(){return e(function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("api/countries");case 2:(a=e.sent).data&&t({type:f,data:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getNews:function(){return e(function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("v2/everything?domains=detik.com&q=corona&apiKey=3669b0deabbd4827810cda4cc61cea5d");case 2:if(!(a=e.sent).data){e.next=5;break}return e.abrupt("return",t({type:O,data:a.data}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=Object(r.useState)({labels:["Confirmed","Deaths","Recovered"],datasets:[{data:[0,0,0],backgroundColor:["#FFCE56","#FA2D58","#15F900"],hoverBackgroundColor:["#FFCE56","#FF6384","#36A2EB"]}]}),a=Object(d.a)(t,2),l=a[0],o=a[1],c=Object(r.useState)({labels:["Confirmed","Deaths","Recovered"],datasets:[{data:[0,0,0],backgroundColor:["#FFCE56","#FA2D58","#15F900"],hoverBackgroundColor:["#FFCE56","#FF6384","#36A2EB"]}]}),i=Object(d.a)(c,2),u=i[0],m=i[1],f=Object(r.useState)([]),p=Object(d.a)(f,2),h=p[0],v=p[1],b=Object(r.useState)({}),E=Object(d.a)(b,2),g=E[0],y=E[1],C=Object(r.useState)({}),O=Object(d.a)(C,2),D=O[0],j=O[1];return Object(r.useEffect)((function(){if(""!==e.detail.defaultCountry.lastUpdate){m(Object(s.a)({},u,{datasets:[Object(s.a)({},u.datasets[0],{data:[e.detail.global.confirmed.value,e.detail.global.deaths.value,e.detail.global.recovered.value]})]})),o(Object(s.a)({},l,{datasets:[Object(s.a)({},l.datasets[0],{data:[e.detail.defaultCountry.confirmed.value,e.detail.defaultCountry.deaths.value,e.detail.defaultCountry.recovered.value]})]}));for(var t={labels:[],datasets:[]},a=[],r=[],n=e.daily.data.length-1;n>=0;n--)t.labels.push(e.daily.data[n].reportDateString),r.push(e.daily.data[n].totalConfirmed),a.push(e.daily.data[n].totalRecovered);t.datasets.push({label:"Recovered",borderColor:"#15F900",backgroundColor:"transparent",data:a}),t.datasets.push({label:"Confirmed",borderColor:"#F9F400",backgroundColor:"transparent",pointBackgroundColor:"#F9F400",data:r}),y(t);for(var c={labels:[],datasets:[]},d=[],i=[],f=e.daily.data.length-1;f>=0&&e.daily.data.length-1-f!==30;f--)c.labels.unshift(e.daily.data[e.daily.data.length-f].reportDateString),i.unshift(e.daily.data[e.daily.data.length-f].totalConfirmed),d.unshift(e.daily.data[e.daily.data.length-f].totalRecovered);c.datasets.push({label:"Recovered",borderColor:"#15F900",backgroundColor:"transparent",data:d}),c.datasets.push({label:"Confirmed",borderColor:"#F9F400",backgroundColor:"transparent",pointBackgroundColor:"#F9F400",data:i}),j(c);var p=[];for(var h in e.detail.list){var b=e.detail.list;p.push({locations:"".concat(b[h].countryRegion," ").concat(b[h].provinceState?b[h].provinceState:""),confirmed:b[h].confirmed,recovered:b[h].recovered,deaths:b[h].deaths,lastUpdate:J()(b[h].lastUpdate).format("DD/MM/YYYY hh:mm:ss")})}v(p)}else e.setCountry(),e.getGlobalData(),e.getCountryDetailById(),e.setDailyChart(),e.setCountryList(),e.getNews()}),[e.detail]),n.a.createElement(S.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center"},n.a.createElement(S.a,{items:!0,xs:12,lg:12,md:12,sm:12,wrap:"wrap-reverse"},n.a.createElement(x.a,{style:{width:"80vw"}},n.a.createElement(U.a,null,n.a.createElement(S.a,{container:!0,direction:"column",alignItems:"center"},n.a.createElement(S.a,{items:!0},n.a.createElement("h2",null,"Global"))),n.a.createElement(X.a,{data:u}),n.a.createElement(S.a,{items:!0},n.a.createElement(A.a,null,"Last Update = ",J()(e.detail.global.lastUpdate).format("DD/MM/YYYY hh:mm:ss")))),n.a.createElement(U.a,null,n.a.createElement(S.a,{container:!0,direction:"column",alignItems:"center"},n.a.createElement(S.a,{items:!0},n.a.createElement("h2",null,"Indonesia"))),n.a.createElement(X.a,{data:l}),n.a.createElement(S.a,{items:!0},n.a.createElement(A.a,null,"Last Update = ",J()(e.detail.defaultCountry.lastUpdate).format("DD/MM/YYYY hh:mm:ss")))),n.a.createElement(S.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center"},n.a.createElement(S.a,{items:!0,xs:12,lg:12,md:12,sm:12},n.a.createElement("h4",null,"All Day"))),n.a.createElement(U.a,null,n.a.createElement(X.b,{data:g})),n.a.createElement(S.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center"},n.a.createElement(S.a,{items:!0,xs:12,lg:12,md:12,sm:12},n.a.createElement("h4",null,"Per 30 Day"))),n.a.createElement(U.a,null,n.a.createElement(X.b,{data:D})),n.a.createElement(S.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center"},n.a.createElement(S.a,{items:!0,xs:12,lg:12,md:12,sm:12},n.a.createElement("h4",null,"Global"))),n.a.createElement(R.a,null,n.a.createElement(k.a,null,n.a.createElement(L.a,null,n.a.createElement(P.a,{columns:[{name:"locations",label:"Locations"},{name:"confirmed",label:"Confirmed"},{name:"recovered",label:"Recovered"},{name:"deaths",label:"Deaths"},{name:"lastUpdate",label:"Last Update"}],data:h,options:{selectableRows:"none",responsive:"scrollFullHeight"}})))),n.a.createElement(R.a,null,n.a.createElement(Y.a,{style:{marginTop:50}},e.news.articles.map((function(e){return n.a.createElement(I.a,{alignItems:"flex-start"},n.a.createElement(B.a,null,n.a.createElement(N.a,{alt:e.author,src:e.urlToImage})),n.a.createElement(M.a,{primary:n.a.createElement("a",{href:e.url},e.title),secondary:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,e.content),n.a.createElement("div",null,J()(e.publishedAt).format("DD/MM/YYYY hh:mm:ss")))}))}))))),n.a.createElement(S.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",style:{marginTop:50,marginBottom:20}},n.a.createElement(S.a,{items:!0},"API From ",n.a.createElement("a",{href:"https://github.com/mathdroid/covid-19-api"},"Mathdroid/covid-19-api")))))}));var q=function(){return n.a.createElement(V,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(53),K=a(286),$={currentCountry:"",countries:[]},z={defaultCountry:{confirmed:{},recovered:{},deaths:{},lastUpdate:""},global:{confirmed:{},recovered:{},deaths:{},lastUpdate:""},list:[]},Q={data:[]},Z={status:"",totalResult:"",articles:[]},ee={country:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var a=Object.values(t.data.countries);return Object(s.a)({},e,{countries:a});case p:return $;case h:return Object(s.a)({},e,{currentCountry:t.data});case v:return Object(s.a)({},e,{currentCountry:""});default:return e}},countryDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(s.a)({},e,{defaultCountry:{confirmed:t.data.confirmed,recovered:t.data.recovered,deaths:t.data.deaths,lastUpdate:t.data.lastUpdate}});case g:return Object(s.a)({},e,{global:{confirmed:t.data.confirmed,recovered:t.data.recovered,deaths:t.data.deaths,lastUpdate:t.data.lastUpdate}});case b:return Object(s.a)({},e,{list:t.data});case y:return z;default:return e}},daily:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(s.a)({},e,{data:t.data});default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(s.a)({},e,{status:t.data.status,totalResult:t.data.totalResult,articles:t.data.articles});default:return e}}},te=Object(H.c)(ee),ae=Object(H.e)(te,Object(H.d)(Object(H.a)(K.a),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||H.d));o.a.render(n.a.createElement(c.a,{store:ae},n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[294,1,2]]]);
//# sourceMappingURL=main.0202e914.chunk.js.map