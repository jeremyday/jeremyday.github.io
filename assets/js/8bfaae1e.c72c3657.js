/*! For license information please see 8bfaae1e.c72c3657.js.LICENSE.txt */
(self.webpackChunkfirst_100_miler_docusaurus=self.webpackChunkfirst_100_miler_docusaurus||[]).push([[9598],{6970:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i,n=r(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},s.apply(this,arguments)}const a=e=>{let{title:t,titleId:r,...a}=e;return n.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","aria-labelledby":r},a),t?n.createElement("title",{id:r},t):null,i||(i=n.createElement("path",{d:"M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h99.4L87 263.6c-25.2-25.2-7.3-68.3 28.3-68.3H168V40c0-22.1 17.9-40 40-40h96c22.1 0 40 17.9 40 40v155.3h52.7c35.6 0 53.4 43.1 28.3 68.3L368.6 320H468c24.3 0 44 19.7 44 44zm-261.7 17.7c3.1 3.1 8.2 3.1 11.3 0L402.3 241c5-5 1.5-13.7-5.7-13.7H312V40c0-4.4-3.6-8-8-8h-96c-4.4 0-8 3.6-8 8v187.3h-84.7c-7.1 0-10.7 8.6-5.7 13.7l140.7 140.7zM480 364c0-6.6-5.4-12-12-12H336.6l-52.3 52.3c-15.6 15.6-41 15.6-56.6 0L175.4 352H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z"})))}},4371:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var i=r(7294);function n(e){let{slug:t,text:r,title:n=""}=e;const s=""===n.trim()?r:`${n} \xbb ${r}`;return i.createElement("a",{href:`/${t}`,className:"text-sm backlink"},s)}function s(e){let{terms:t}=e;return t.map((e=>{let{slug:t,text:r,title:s}=e;return i.createElement(n,{slug:t,text:r,title:s})})).reduce(((e,t)=>null===e?t:i.createElement("span",{className:"backlink"},e," | ",t)),null)}},3387:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(7294),n=r(5423),s=r(3757);function a(e){let{details:t}=e;const r=Object.keys(t).map(((e,r)=>{let a=r%2==0?"":s.iy;return i.createElement(n.SC,{key:r,classes:a,columns:[i.createElement(n.pj,{key:1,classes:"col-span-2",value:e}),i.createElement(n.pj,{key:2,classes:"col-span-10",value:t[e]})]})}));return i.createElement(n.iA,{headers:[],rows:r})}},4328:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var i=r(7294),n=r(7460),s=r.n(n),a=r(3883),o=r(269),u=r(9161),l=r(3757),c=r(5423);function h(e){let{csv:t}=e;const{data:r,fields:n}=g(t),s=i.createElement(c._O,{headers:n.map(((e,t)=>{const r=0===t?"col-span-2":"";return i.createElement(c.xD,{key:`header-${t}`,value:e,classes:r})}))}),a=r.map(((e,t)=>{let r=t%2==0?"":l.iy;return i.createElement(c.SC,{key:t,classes:r,columns:n.map(((r,n)=>{const s=0===n?`col-span-2 ${d(e,r)}`:d(e,r);return i.createElement(c.pj,{key:`${t}-${n}`,classes:s,value:f(e,r)})}))})}));return i.createElement(c.iA,{headers:s,rows:a})}const d=(e,t)=>{let r="";return["Crew","Drop Bags"].includes(t)&&"Yes"===e[t]&&(r=`${r} ${l.hZ}`),r},f=(e,t)=>{let r=e[t].trim();return["Cutoff"].includes(t)&&!(0,u.xbD)(r)&&(r=_(r)),t.endsWith("Pace")&&!(0,u.xbD)(r)&&(r=_(r)),"Gain"===t&&(r=(0,l.y4)((0,l.TV)(r))),r},p=(0,a.Z)("MM/dd h:mm aa"),g=e=>{let t=[],r=[];return s().parse(e,{header:!0,complete:e=>{t=e.data,r=e.meta.fields}}),t=t.slice(0,t.length-1),{data:t,fields:r}},m=(0,o.Z)(new Date,"MM/dd/yyyy H:m:s"),_=(0,u.zGw)(m,p)},5423:(e,t,r)=>{"use strict";r.d(t,{SC:()=>c,_O:()=>l,iA:()=>a,pj:()=>o,xD:()=>u});var i=r(7294),n=r(9161),s=r(3757);function a(e){let{headers:t,rows:r,margin:n="my-4"}=e;return i.createElement("div",{className:`border ${s.tv} border-solid container ${s.tU} divide-y ${n} p-0`},t,r)}function o(e){let{classes:t,value:r}=e;return i.createElement("div",{className:`${s.o3} ${h(t)}`},r)}function u(e){let{classes:t,value:r}=e;return i.createElement(o,{classes:`font-bold ${t}`,value:r})}function l(e){let{headers:t}=e;return i.createElement(c,{classes:s.Ht,columns:t})}function c(e){let{classes:t,columns:r}=e;return i.createElement("div",{className:`${s.tU} ${h(t)} divide-x grid grid-cols-12`},r)}const h=e=>(0,n.kKJ)(e)||(0,n.xbD)(e)?"":e.trim()},3757:(e,t,r)=>{"use strict";r.d(t,{Bb:()=>f,Ft:()=>u,Ht:()=>a,TV:()=>d,hZ:()=>o,iy:()=>c,o3:()=>h,tU:()=>s,tv:()=>n,w1:()=>l,y4:()=>p});var i=r(9161);const n="border-secondary-300 dark:border-secondary-500",s="divide-secondary-300 dark:divide-secondary-500",a="bg-secondary-200 dark:bg-secondary-700",o="bg-primary-100 dark:bg-primary-900",u="bg-primary-200 dark:bg-primary-800",l="bg-tertiary-100 dark:bg-tertiary-700",c="bg-secondary-100 dark:bg-secondary-800",h="p-2",d=function(e,t){return void 0===t&&(t=[]),(e=""+e).length<=3?(t.unshift(e),t.join(",")):(t.unshift((0,i.h$H)(3,e)),e=(0,i.tPi)(0,e.length-3,e),d(e,t))},f=e=>31==e?"50k":62==e?"100k":`${e} miles`,p=e=>""===e.trim()?"":`${e} feet`},2590:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var i=r(7462),n=(r(7294),r(3905)),s=r(4371),a=r(6970),o=r(3387);r(4328);const u={},l="Royal Gorge Groove 50k",c={unversionedId:"races/royal-gorge-groove-50k",id:"races/royal-gorge-groove-50k",title:"Royal Gorge Groove 50k",description:"Race Details",source:"@site/docs/races/royal-gorge-groove-50k.mdx",sourceDirName:"races",slug:"/races/royal-gorge-groove-50k",permalink:"/docs/races/royal-gorge-groove-50k",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rocky Raccoon 50 Miler",permalink:"/docs/races/rocky-raccoon-50"},next:{title:"Scout Mountain 100",permalink:"/docs/races/scout-mountain-100/"}},h={},d=[{value:"Race Details",id:"race-details",level:2},{value:"Race Reports",id:"race-reports",level:2}],f={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"royal-gorge-groove-50k"},"Royal Gorge Groove 50k"),(0,n.kt)("h2",{id:"race-details"},"Race Details"),(0,n.kt)(o.Z,{details:{Date:"7:00 AM - 6:00 PM April 22, 2023",Website:(0,n.kt)("a",{href:"https://www.aravaiparunning.com/royal-gorge-groove",className:"underline"},"https://www.aravaiparunning.com/royal-gorge-groove"),Distance:"31.06 miles","Elevation Gain":"4,208 feet","Low Point":"6,031 Feet","High Point":"7,121 Feet",Location:"Ca\xf1on City, CO",GPX:(0,n.kt)("a",{href:"/gpx/royal-gorge-groove-50k.gpx",className:"ml-2",target:"_blank"},(0,n.kt)(a.Z,{className:"fill-secondary-100 inline",height:"15",width:"15",title:"Download the course GPX file.",mdxType:"Download"}))},mdxType:"DetailsTable"}),(0,n.kt)(s.Z,{terms:[{slug:"docs/races/maces-hideout-100#training-races",text:"Training Races",title:"Mace's Hideout 100"},{slug:"docs/races/scout-mountain-100#training-races",text:"Training Races",title:"Scout Mountain 100"},{slug:"blog/royal-gorge-groove-50k-race-report#race-report",text:"Race Report",title:"Royal Gorge Groove 50k Race Report"}],mdxType:"Backlinks"}),(0,n.kt)("h2",{id:"race-reports"},"Race Reports"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/blog/royal-gorge-groove-50k-race-report#race-report"},"Royal Gorge Groove 50k Race Report"))))}p.isMDXComponent=!0},7460:function(e,t){var r,i,n;i=[],r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,n={},s=0,a={parse:function(r,i){var o=(i=i||{}).dynamicTyping||!1;if(b(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!b(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=m,u.id=s++,n[u.id]=u}();return u.userStep=i.step,u.userChunk=i.chunk,u.userComplete=i.complete,u.userError=i.error,i.step=b(i.step),i.chunk=b(i.chunk),i.complete=b(i.complete),i.error=b(i.error),delete i.worker,void u.postMessage({input:r,config:i,workerId:u.id})}var f=null;return a.NODE_STREAM_INPUT,"string"==typeof r?(r=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(r),f=i.download?new l(i):new h(i)):!0===r.readable&&b(r.read)&&b(r.on)?f=new d(i):(t.File&&r instanceof File||r instanceof Object)&&(f=new c(i)),f.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',u=o+o,l=!1,c=null,h=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(h=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var d=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,l);if("object"==typeof e[0])return f(c||Object.keys(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],l);throw new Error("Unable to serialize unrecognized input");function f(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&i){for(var l=0;l<e.length;l++)0<l&&(a+=n),a+=g(e[l],l);0<t.length&&(a+=s)}for(var c=0;c<t.length;c++){var h=o?e.length:t[c].length,d=!1,f=o?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!o&&(d="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&o){for(var p=[],m=0;m<h;m++){var _=u?e[m]:m;p.push(t[c][_])}d=""===p.join("").trim()}if(!d){for(var y=0;y<h;y++){0<y&&!f&&(a+=n);var v=o&&u?e[y]:y;a+=g(t[c][v],y)}c<t.length-1&&(!r||0<h&&!f)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=!1;h&&"string"==typeof e&&h.test(e)&&(e="'"+e,i=!0);var s=e.toString().replace(d,u);return(i=i||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(n)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=f,a.NetworkStreamer=l,a.FileStreamer=c,a.StringStreamer=h,a.ReadableStreamStreamer=d,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})})),n(),this;function n(){if(0!==i.length){var t,r,n,u,l=i[0];if(b(e.before)){var c=e.before(l.file,l.inputElem);if("object"==typeof c){if("abort"===c.action)return t="AbortError",r=l.file,n=l.inputElem,u=c.reason,void(b(e.error)&&e.error({name:t},r,n,u));if("skip"===c.action)return void s();"object"==typeof c.config&&(l.instanceConfig=o.extend(l.instanceConfig,c.config))}else if("skip"===c)return void s()}var h=l.instanceConfig.complete;l.instanceConfig.complete=function(e){b(h)&&h(e,l.file,l.inputElem),s()},a.parse(l.file,l.instanceConfig)}else b(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:l});else if(b(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!l||!b(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function c(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function h(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=k((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=k((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=k((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=k((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(e){var t,r,i,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,l=this,c=0,h=0,d=!1,f=!1,m=[],_={data:[],errors:[],meta:{}};if(b(e.step)){var y=e.step;e.step=function(t){if(_=t,E())w();else{if(w(),0===_.data.length)return;c+=t.data.length,e.preview&&c>e.preview?r.abort():(_.data=_.data[0],y(_,l))}}}function k(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){return _&&i&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(_.data=_.data.filter((function(e){return!k(e)}))),E()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;E()&&t<_.data.length;t++)_.data[t].forEach(r);_.data.splice(0,1)}else _.data.forEach(r);function r(t,r){b(e.transformHeader)&&(t=e.transformHeader(t,r)),m.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,r){var i,n=e.header?{}:[];for(i=0;i<t.length;i++){var s=i,a=t[i];e.header&&(s=i>=m.length?"__parsed_extra":m[i]),e.transform&&(a=e.transform(a,s)),a=R(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(i>m.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+i,h+r):i<m.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+i,h+r)),n}var r=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),r=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=m),h+=r,_}()}function E(){return e.header&&0===m.length}function R(t,r){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var i}function C(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),_.errors.push(n)}this.parse=function(n,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(n,u)),i=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(n),_.meta.delimiter=e.delimiter);else{var l=function(t,r,i,n,s){var o,u,l,c;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var h=0;h<s.length;h++){var d=s[h],f=0,p=0,m=0;l=void 0;for(var _=new g({comments:n,delimiter:d,newline:r,preview:10}).parse(t),y=0;y<_.data.length;y++)if(i&&k(_.data[y]))m++;else{var v=_.data[y].length;p+=v,void 0!==l?0<v&&(f+=Math.abs(v-l),l=v):l=v}0<_.data.length&&(p/=_.data.length-m),(void 0===u||f<=u)&&(void 0===c||c<p)&&1.99<p&&(u=f,o=d,c=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var c=v(e);return e.preview&&e.header&&c.preview++,t=n,r=new g(c),_=r.parse(t,s,o),w(),d?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,r.abort(),t=b(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){l.streamer._halted?(d=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,r.abort(),_.meta.aborted=!0,b(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,u=e.fastMode,l=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var c=0,h=!1;this.parse=function(a,d,f){if("string"!=typeof a)throw new Error("Input must be a string");var g=a.length,m=r.length,_=i.length,y=n.length,v=b(s),k=[],w=[],E=[],R=c=0;if(!a)return W();if(e.header&&!d){var C=a.split(i)[0].split(r),x=[],S={},O=!1;for(var D in C){var T=C[D];b(e.transformHeader)&&(T=e.transformHeader(T,D));var A=T,I=S[T]||0;for(0<I&&(O=!0,A=T+"_"+I),S[T]=I+1;x.includes(A);)A=A+"_"+I;x.push(A)}if(O){var L=a.split(i);L[0]=x.join(r),a=L.join(i)}}if(u||!1!==u&&-1===a.indexOf(t)){for(var M=a.split(i),j=0;j<M.length;j++){if(E=M[j],c+=E.length,j!==M.length-1)c+=i.length;else if(f)return W();if(!n||E.substring(0,y)!==n){if(v){if(k=[],H(E.split(r)),Z(),h)return W()}else H(E.split(r));if(o&&o<=j)return k=k.slice(0,o),W(!0)}}return W()}for(var F=a.indexOf(r,c),z=a.indexOf(i,c),P=new RegExp(p(l)+p(t),"g"),N=a.indexOf(t,c);;)if(a[c]!==t)if(n&&0===E.length&&a.substring(c,c+y)===n){if(-1===z)return W();c=z+_,z=a.indexOf(i,c),F=a.indexOf(r,c)}else if(-1!==F&&(F<z||-1===z))E.push(a.substring(c,F)),c=F+m,F=a.indexOf(r,c);else{if(-1===z)break;if(E.push(a.substring(c,z)),G(z+_),v&&(Z(),h))return W();if(o&&k.length>=o)return W(!0)}else for(N=c,c++;;){if(-1===(N=a.indexOf(t,N+1)))return f||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:k.length,index:c}),B();if(N===g-1)return B(a.substring(c,N).replace(P,t));if(t!==l||a[N+1]!==l){if(t===l||0===N||a[N-1]!==l){-1!==F&&F<N+1&&(F=a.indexOf(r,N+1)),-1!==z&&z<N+1&&(z=a.indexOf(i,N+1));var $=q(-1===z?F:Math.min(F,z));if(a.substr(N+1+$,m)===r){E.push(a.substring(c,N).replace(P,t)),a[c=N+1+$+m]!==t&&(N=a.indexOf(t,c)),F=a.indexOf(r,c),z=a.indexOf(i,c);break}var U=q(z);if(a.substring(N+1+U,N+1+U+_)===i){if(E.push(a.substring(c,N).replace(P,t)),G(N+1+U+_),F=a.indexOf(r,c),N=a.indexOf(t,c),v&&(Z(),h))return W();if(o&&k.length>=o)return W(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:k.length,index:c}),N++}}else N++}return B();function H(e){k.push(e),R=c}function q(e){var t=0;if(-1!==e){var r=a.substring(N+1,e);r&&""===r.trim()&&(t=r.length)}return t}function B(e){return f||(void 0===e&&(e=a.substring(c)),E.push(e),c=g,H(E),v&&Z()),W()}function G(e){c=e,H(E),E=[],z=a.indexOf(i,c)}function W(e){return{data:k,errors:w,meta:{delimiter:r,linebreak:i,aborted:h,truncated:!!e,cursor:R+(d||0)}}}function Z(){s(W()),k=[],w=[]}},this.abort=function(){h=!0},this.getCharIndex=function(){return c}}function m(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else b(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=n[e];b(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=v(e[r]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(h.prototype=Object.create(h.prototype)).constructor=h,(d.prototype=Object.create(u.prototype)).constructor=d,a},void 0===(n="function"==typeof r?r.apply(t,i):r)||(e.exports=n)}}]);