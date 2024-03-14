(function(){"use strict";var e={512:function(e,t,n){var o=n(9242),r=n(3396),i=n(7718),l=n(3140);function s(e,t,n,o,s,a){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:1})}var a={name:"App",data:()=>({})},c=n(89);const u=(0,c.Z)(a,[["render",s]]);var p=u,d=n(8727);n(9773);async function f(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var h=n(2483);const m={key:0},g={key:1,class:"page-container"},y={class:"map-container"},v={class:"main-layout"},j={class:"filter-container"},w={class:"projects-container"},b={class:"projects"};function C(e,t,n,o,i,l){const s=(0,r.up)("FundingMap"),a=(0,r.up)("ProjectFilters"),c=(0,r.up)("ProjectCard");return(0,r.wg)(),(0,r.iD)("div",null,[i.loading?((0,r.wg)(),(0,r.iD)("div",m,"Loading...")):((0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("div",y,[(0,r.Wm)(s,{projects:i.filteredProjects,onSelectCountry:l.selectCountry,"reset-selection":i.resetMapSelection},null,8,["projects","onSelectCountry","reset-selection"])]),(0,r._)("div",v,[(0,r._)("div",j,[(0,r.Wm)(a,{ref:"projectFilters",projects:i.projects,onFilter:l.applyFilter,onContinentOrCountryChanged:l.resetCountrySelection,class:"filters"},null,8,["projects","onFilter","onContinentOrCountryChanged"])]),(0,r._)("div",w,[(0,r._)("div",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.filteredProjects,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(c,{project:e},null,8,["project"])])))),128))])])])]))])}var _=n(4108),O=n(5123),S=n(7379),k=n(6571);function D(e,t,n,o,i,l){return(0,r.wg)(),(0,r.j4)(_.Vc,{accordion:"",multiple:""},{default:(0,r.w5)((()=>[(0,r.Wm)(O.M,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k.rL,{modelValue:i.selectedContinent,"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedContinent=e),items:i.continentList,label:"Continents",multiple:"",onFocus:t[1]||(t[1]=e=>i.isAnyDropdownOpen=!0),onBlur:t[2]||(t[2]=e=>i.isAnyDropdownOpen=!1),onChange:l.keepDropdownOpen},null,8,["modelValue","items","onChange"])])),_:1}),(0,r.Wm)(O.M,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k.rL,{modelValue:i.selectedCountry,"onUpdate:modelValue":t[3]||(t[3]=e=>i.selectedCountry=e),items:l.filteredCountryList,label:"Countries",multiple:"",onFocus:t[4]||(t[4]=e=>i.isAnyDropdownOpen=!0),onBlur:t[5]||(t[5]=e=>i.isAnyDropdownOpen=!1),onChange:l.keepDropdownOpen},null,8,["modelValue","items","onChange"])])),_:1}),(0,r.Wm)(O.M,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k.rL,{modelValue:i.selectedTopic,"onUpdate:modelValue":t[6]||(t[6]=e=>i.selectedTopic=e),items:i.topicList,label:"Topics",multiple:"",onFocus:t[7]||(t[7]=e=>i.isAnyDropdownOpen=!0),onBlur:t[8]||(t[8]=e=>i.isAnyDropdownOpen=!1),onChange:l.keepDropdownOpen},null,8,["modelValue","items","onChange"])])),_:1}),(0,r.Wm)(O.M,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k.rL,{modelValue:i.selectedYear,"onUpdate:modelValue":t[9]||(t[9]=e=>i.selectedYear=e),items:i.yearList,label:"Years",multiple:"",onFocus:t[10]||(t[10]=e=>i.isAnyDropdownOpen=!0),onBlur:t[11]||(t[11]=e=>i.isAnyDropdownOpen=!1),onChange:l.keepDropdownOpen},null,8,["modelValue","items","onChange"])])),_:1}),(0,r.Wm)(O.M,null,{default:(0,r.w5)((()=>[(0,r.Wm)(S.m,{disabled:i.isAnyDropdownOpen,modelValue:i.selectedBudgetRange,"onUpdate:modelValue":t[12]||(t[12]=e=>i.selectedBudgetRange=e),max:i.maxBudget,min:0,step:"5000",label:"Budget","thumb-label":"always"},null,8,["disabled","modelValue","max"])])),_:1})])),_:1})}var F={props:["projects"],data(){return{selectedContinent:[],selectedCountry:[],selectedTopic:[],selectedYear:[],selectedBudgetRange:[0,1e6],maxBudget:1e6,continentList:[],countryList:[],topicList:[],yearList:[],isAnyDropdownOpen:!1}},computed:{filteredCountryList(){return 0===this.selectedContinent.length?this.countryList:[...new Set(this.projects.filter((e=>this.selectedContinent.includes(e.continent))).map((e=>e.country)))]}},methods:{keepDropdownOpen(){this.isAnyDropdownOpen=!0},closeAllDropdowns(){this.isAnyDropdownOpen=!1},updateFilterLists(){this.continentList=[...new Set(this.projects.map((e=>e.continent)))],this.countryList=[...new Set(this.projects.map((e=>e.country)))],this.topicList=[...new Set(this.projects.map((e=>e.topic)))],this.yearList=[...new Set(this.projects.map((e=>e.completion_date)))]},updateMaxBudget(){this.maxBudget=Math.max(...this.projects.map((e=>parseFloat(e.budget.replace(/[^0-9.]/g,"")))),0),this.selectedBudgetRange=[0,this.maxBudget]},filterProjects(){this.$emit("filter")}},watch:{projects:{immediate:!0,handler(e){e&&e.length&&(this.updateFilterLists(),this.updateMaxBudget())}},selectedContinent(){this.filterProjects()},selectedCountry(){this.filterProjects()},selectedTopic(){this.filterProjects()},selectedYear(){this.filterProjects()},selectedBudgetRange(){this.filterProjects()}},mounted(){this.updateFilterLists(),this.updateMaxBudget()}};const P=(0,c.Z)(F,[["render",D],["__scopeId","data-v-5acb7f54"]]);var L=P,A=n(7139);const M=e=>((0,r.dD)("data-v-5b6d5aba"),e=e(),(0,r.Cn)(),e),U={class:"project-card"},B={class:"card-content"},T=["src"],x={class:"card-details"},N=M((()=>(0,r._)("strong",null,"Country:",-1))),W=M((()=>(0,r._)("strong",null,"Topic:",-1))),V=M((()=>(0,r._)("strong",null,"Partner:",-1))),$=M((()=>(0,r._)("strong",null,"Stakeholders:",-1))),E=M((()=>(0,r._)("strong",null,"Budget:",-1))),R=M((()=>(0,r._)("strong",null,"Completion Date:",-1))),z=M((()=>(0,r._)("strong",null,"Description:",-1)));function I(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("div",U,[(0,r._)("div",B,[(0,r._)("img",{src:`${e.process.env.BASE_URL}logo/UNDP.png`,alt:"Agency Logo",class:"agency-logo"},null,8,T),(0,r._)("div",x,[(0,r._)("h3",null,(0,A.zw)(n.project.title||"No title available"),1),(0,r._)("p",null,[N,(0,r.Uk)(" "+(0,A.zw)(n.project.country||"No country available"),1)]),(0,r._)("p",null,[W,(0,r.Uk)(" "+(0,A.zw)(n.project.topic||"No topic available"),1)]),(0,r._)("p",null,[V,(0,r.Uk)(" "+(0,A.zw)(n.project.partner||"No partner available"),1)]),(0,r._)("p",null,[$,(0,r.Uk)(" "+(0,A.zw)(n.project.stakeholders||"No stakeholders available"),1)]),(0,r._)("p",null,[E,(0,r.Uk)(" "+(0,A.zw)(n.project.budget||"No budget available"),1)]),(0,r._)("p",null,[R,(0,r.Uk)(" "+(0,A.zw)(n.project.completion_date||"No completion date available"),1)]),(0,r._)("p",null,[z,(0,r.Uk)(" "+(0,A.zw)(n.project.description||"No description available"),1)])])])])}var Y={name:"ProjectCard",props:{project:{type:Object,required:!0}}};const Z=(0,c.Z)(Y,[["render",I],["__scopeId","data-v-5b6d5aba"]]);var q=Z;const G=e=>((0,r.dD)("data-v-19a165ca"),e=e(),(0,r.Cn)(),e),H={class:"map-and-disclaimer-container"},J={class:"map-container"},K=G((()=>(0,r._)("div",{class:"map-disclaimer"}," The designations employed and the presentation of material on this map do not imply the expression of any opinion whatsoever on the part of the Secretariat of the United Nations or UNDP concerning the legal status of any country, territory, city or area or its authorities, or concerning the delimitation of its frontiers or boundaries. References to Kosovo* shall be understood to be in the context of UN Security Council resolution 1244 (1999). ",-1)));function Q(e,t,n,o,i,l){const s=(0,r.up)("l-tile-layer"),a=(0,r.up)("l-map");return(0,r.wg)(),(0,r.iD)("div",H,[(0,r._)("div",J,[(0,r.Wm)(a,{zoom:2,center:[51.505,-.09],style:{height:"400px"},ref:"mapRef"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{url:e.arcgisTileUrl},null,8,["url"])])),_:1},512)]),K])}var X=n(4870),ee=n(7424),te=n(3153),ne=n.n(te),oe=(0,r.aZ)({components:{LMap:ee.iA,LTileLayer:ee.Hw},props:{resetSelection:Boolean,projects:Array},setup(e,{emit:t}){const n=(0,X.iH)(null),o="https://geoservices.un.org/arcgis/rest/services/ClearMap_WebTopo/MapServer/tile/{z}/{y}/{x}?blankTile=false";let i=null;const l=new Set;let s={};const a=e=>{const t=Math.max(...Object.values(s)),n=e/t,o=60-5*n;return`hsl(0, 0%, ${o}%)`},c=(e,t)=>{l.has(t)?e.setStyle({fillColor:"green",weight:1,opacity:1,fillOpacity:.6}):e.setStyle({fillColor:a(s[t]||0),weight:0,opacity:0,fillOpacity:s[t]?.6:0})},u=e=>{i&&i.eachLayer((t=>{const n=t.feature.properties.ISO_A2;n===e&&(l.has(e)?l.delete(e):l.add(e),c(t,e))})),t("select-country",Array.from(l))},p=()=>{i&&i.eachLayer((e=>{const t=e.feature.properties.ISO_A2;l.delete(t),c(e,t)})),l.clear()};return(0,r.bv)((async()=>{if(!n.value)return void console.error("Map container is not yet available");const e=n.value.$data.map,t=await fetch("/USPC-Map/SDG_2023.json"),o=await t.json();s={},o.projects.forEach((e=>{const t=parseFloat(e.budget.replace(/[^0-9.]/g,"")),n=e.country_code;s[n]=(s[n]||0)+t}));const r=await fetch("/USPC-Map/countries.json"),l=await r.json();i=ne().geoJSON(l,{style:e=>{const t=e.properties.ISO_A2,n=s[t]||0;return{fillColor:a(n),weight:0,opacity:0,fillOpacity:n>0?.6:0}},onEachFeature:(e,t)=>{s[e.properties.ISO_A2]&&t.on("click",(()=>{const t=e.properties.ISO_A2;u(t)}))}}).addTo(e)})),(0,r.YP)((()=>e.resetSelection),(e=>{e&&(p(),t("selection-reset"))})),{mapRef:n,arcgisTileUrl:o}}});const re=(0,c.Z)(oe,[["render",Q],["__scopeId","data-v-19a165ca"]]);var ie=re,le={components:{ProjectFilters:L,ProjectCard:q,FundingMap:ie},data(){return{projects:[],filteredProjects:[],loading:!0,selectedCountryCodes:[],resetMapSelection:!1}},methods:{fetchData(){fetch("/USPC-Map/SDG_2023.json").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.projects=e.projects,this.filteredProjects=[...this.projects],this.loading=!1})).catch((e=>{console.error("Error fetching data:",e),this.loading=!1}))},selectCountry(e){this.selectedCountryCodes=e,this.applyFilter()},resetCountrySelection(){this.selectedCountryCodes=[],this.resetMapSelection=!0,this.applyFilter()},applyFilter(){const[e,t]=this.$refs.projectFilters.selectedBudgetRange;this.filteredProjects=this.projects.filter((n=>{const o=parseFloat(n.budget.replace(/[^0-9.]/g,""));return(0===this.$refs.projectFilters.selectedContinent.length||this.$refs.projectFilters.selectedContinent.includes(n.continent))&&(0===this.$refs.projectFilters.selectedCountry.length||this.$refs.projectFilters.selectedCountry.includes(n.country))&&(0===this.$refs.projectFilters.selectedTopic.length||this.$refs.projectFilters.selectedTopic.includes(n.topic))&&(0===this.$refs.projectFilters.selectedYear.length||this.$refs.projectFilters.selectedYear.includes(n.completion_date))&&o>=e&&o<=t&&(0===this.selectedCountryCodes.length||this.selectedCountryCodes.includes(n.country_code))})),this.resetMapSelection=!1}},mounted(){this.fetchData()}};const se=(0,c.Z)(le,[["render",C],["__scopeId","data-v-6d4b50a2"]]);var ae=se;const ce=[{path:"/",component:ae}],ue=(0,h.p7)({history:(0,h.r5)(),routes:ce});var pe=ue,de=n(3494),fe=n(8539),he=n(7749);f(),de.vI.add(fe.wJh);const me=(0,d.Rd)({});(0,o.ri)(p).use(me).use(pe).component("font-awesome-icon",he.GN).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,a=0;a<o.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(s=!1,i<l&&(l=i));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){l[e]=function(){return o[e]}}));return l["default"]=function(){return o},n.d(i,l),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.5d298961.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="map-app:";n.l=function(o,r,i,l){if(e[o])e[o].push(r);else{var s,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+i){s=p;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/USPC-Map/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var l=n.p+n.u(t),s=new Error,a=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",s.name="ChunkLoadError",s.type=i,s.request=l,r[1](s)}};n.l(l,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],s=o[1],a=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var u=a(n)}for(t&&t(o);c<l.length;c++)i=l[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkmap_app"]=self["webpackChunkmap_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(512)}));o=n.O(o)})();
//# sourceMappingURL=app.75bbb514.js.map