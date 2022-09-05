(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var o=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===o?new Date(t.getTime()):"number"==typeof t||"[object Number]"===o?new Date(t):("string"!=typeof t&&"[object String]"!==o||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function n(n){e(1,arguments);var r=o(n);return t(1e3*r)}function r(e,t){const o=n(e+t).toUTCString();let r,c=o.slice(17,19),u=o.slice(20,22);return r=c>11?"pm":"am",c>12&&(c-=12),"0"===c&&(c=12),c<10&&"am"===r&&(c=c.slice(1,2)),`${c}:${u} ${r}`}function c(e,t){let o=n(e+t).toUTCString().slice(0,3);return"Mon"===o?o="Monday":"Tue"===o?o="Tuesday":"Wed"===o?o="Wednesday":"Thu"===o?o="Thursday":"Fri"===o?o="Friday":"Sat"===o?o="Saturday":"Sun"===o&&(o="Sunday"),o}function u(e,t){let o,r=n(e+t).toUTCString().slice(17,19);return o=r>11?"pm":"am",r>12&&(r-=12),"0"===r&&(r=12),r<10&&"am"===o&&(r=r.slice(1,2)),`${r} ${o}`}function i(e){return"01d"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/01d@2x.png">':"01n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/01n@2x.png">':"02d"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/02d@2x.png">':"02n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/02n@2x.png">':"03d"===e||"03n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/03d@2x.png">':"04d"===e||"04n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/04d@2x.png">':"09d"===e||"09n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/09d@2x.png">':"10d"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/10d@2x.png">':"10n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/10n@2x.png">':"11d"===e||"11n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/11d@2x.png">':"13d"===e||"13n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/13d@2x.png">':"50d"===e||"50n"===e?'<img class="small-icon" src="https://openweathermap.org/img/wn/50d@2x.png">':""}function l(e,t){(function(e,t){var o;document.querySelector(".center-location").textContent=e.name,document.querySelector(".center-date").textContent=function(e,t){const o=n(e+t).toUTCString();let r,c,u=o.slice(8,11),i=o.slice(5,7),l=o.slice(17,19),s=o.slice(20,22);return i<10&&(i=i.slice(1)),r="1"===i.slice(-1)&&"11"!==i.slice(-1)?"st":"2"===i.slice(-1)&&"12"!==i.slice(-1)?"nd":"3"===i.slice(-1)&&"13"!==i.slice(-1)?"rd":"th",c=l>11?"pm":"am",l>12&&(l-=12),"0"===l&&(l=12),l<10&&"am"===c&&(l=l.slice(1,2)),`${l}:${s} ${c}, ${u} ${i}${r}`}(e.current.dt,e.timezone_offset),document.querySelector(".center-weather").textContent=function(e){const t=e.toLowerCase().split(" ");for(let e=0;e<t.length;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].substring(1);return t.join(" ")}(e.current.weather[0].description),document.querySelector(".center-image").innerHTML="01d"===(o=e.current.weather[0].icon)?'<img src="https://openweathermap.org/img/wn/01d@4x.png">':"01n"===o?'<img src="https://openweathermap.org/img/wn/01n@4x.png">':"02d"===o?'<img src="https://openweathermap.org/img/wn/02d@4x.png">':"02n"===o?'<img src="https://openweathermap.org/img/wn/02n@4x.png">':"03d"===o||"03n"===o?'<img src="https://openweathermap.org/img/wn/03d@4x.png">':"04d"===o||"04n"===o?'<img src="https://openweathermap.org/img/wn/04d@4x.png">':"09d"===o||"09n"===o?'<img src="https://openweathermap.org/img/wn/09d@4x.png">':"10d"===o?'<img src="https://openweathermap.org/img/wn/10d@4x.png">':"10n"===o?'<img src="https://openweathermap.org/img/wn/10n@4x.png">':"11d"===o||"11n"===o?'<img src="https://openweathermap.org/img/wn/11d@4x.png">':"13d"===o||"13n"===o?'<img src="https://openweathermap.org/img/wn/13d@4x.png">':"50d"===o||"50n"===o?'<img src="https://openweathermap.org/img/wn/50d@4x.png">':"",document.querySelector(".center-temp").textContent=`${Math.round(e.current.temp)}°`,document.querySelector(".high").textContent=`${Math.round(e.daily[0].temp.max)}°`,document.querySelector(".low").textContent=`${Math.round(e.daily[0].temp.min)}°`,document.querySelector(".feel-details").textContent=`${Math.round(e.current.feels_like)}°`;let c="in",u=e.daily[0].rain?e.daily[0].rain/2.54:0;"metric"===t&&(c="cm",u=e.daily[0].rain?e.daily[0].rain:0),document.querySelector(".precip-details").textContent=`${Math.round(10*u)/10} ${c}`,document.querySelector(".rain-details").textContent=`${e.daily[0].pop} %`,document.querySelector(".humid-details").textContent=`${e.current.humidity}%`;let i="mph",l=e.current.wind_speed;"metric"===t&&(i="km/h",l=e.current.wind_speed*=3.6),document.querySelector(".wind-details").textContent=`${Math.round(10*l)/10} ${i}`,document.querySelector(".uv-details").textContent=e.current.uvi,document.querySelector(".sunrise-details").textContent=r(e.current.sunrise,e.timezone_offset),document.querySelector(".sunset-details").textContent=r(e.current.sunset,e.timezone_offset)})(e,t),function(e){const t=document.querySelector(".day-1-title"),o=document.querySelector(".day-1-icon"),n=document.querySelector(".day-1-high"),r=document.querySelector(".day-1-low");t.textContent=c(e.daily[1].dt,e.timezone_offset),o.innerHTML=i(e.daily[1].weather[0].icon),n.textContent=`${Math.round(e.daily[1].temp.max)}°`,r.textContent=`${Math.round(e.daily[1].temp.min)}°`;const u=document.querySelector(".day-2-title"),l=document.querySelector(".day-2-icon"),s=document.querySelector(".day-2-high"),a=document.querySelector(".day-2-low");u.textContent=c(e.daily[2].dt,e.timezone_offset),l.innerHTML=i(e.daily[2].weather[0].icon),s.textContent=`${Math.round(e.daily[2].temp.max)}°`,a.textContent=`${Math.round(e.daily[2].temp.min)}°`;const d=document.querySelector(".day-3-title"),m=document.querySelector(".day-3-icon"),h=document.querySelector(".day-3-high"),y=document.querySelector(".day-3-low");d.textContent=c(e.daily[3].dt,e.timezone_offset),m.innerHTML=i(e.daily[3].weather[0].icon),h.textContent=`${Math.round(e.daily[3].temp.max)}°`,y.textContent=`${Math.round(e.daily[3].temp.min)}°`;const p=document.querySelector(".day-4-title"),g=document.querySelector(".day-4-icon"),S=document.querySelector(".day-4-high"),q=document.querySelector(".day-4-low");p.textContent=c(e.daily[4].dt,e.timezone_offset),g.innerHTML=i(e.daily[4].weather[0].icon),S.textContent=`${Math.round(e.daily[4].temp.max)}°`,q.textContent=`${Math.round(e.daily[4].temp.min)}°`;const f=document.querySelector(".day-5-title"),w=document.querySelector(".day-5-icon"),x=document.querySelector(".day-5-high"),C=document.querySelector(".day-5-low");f.textContent=c(e.daily[5].dt,e.timezone_offset),w.innerHTML=i(e.daily[5].weather[0].icon),x.textContent=`${Math.round(e.daily[5].temp.max)}°`,C.textContent=`${Math.round(e.daily[5].temp.min)}°`;const M=document.querySelector(".day-6-title"),L=document.querySelector(".day-6-icon"),$=document.querySelector(".day-6-high"),T=document.querySelector(".day-6-low");M.textContent=c(e.daily[6].dt,e.timezone_offset),L.innerHTML=i(e.daily[6].weather[0].icon),$.textContent=`${Math.round(e.daily[6].temp.max)}°`,T.textContent=`${Math.round(e.daily[6].temp.min)}°`;const _=document.querySelector(".day-7-title"),z=document.querySelector(".day-7-icon"),v=document.querySelector(".day-7-high"),H=document.querySelector(".day-7-low");_.textContent=c(e.daily[7].dt,e.timezone_offset),z.innerHTML=i(e.daily[7].weather[0].icon),v.textContent=`${Math.round(e.daily[7].temp.max)}°`,H.textContent=`${Math.round(e.daily[7].temp.min)}°`}(e),function(e){const t=document.querySelector(".hour-1-title"),o=document.querySelector(".hour-1-icon"),n=document.querySelector(".hour-1-temp");t.textContent=u(e.hourly[1].dt,e.timezone_offset),o.innerHTML=i(e.hourly[1].weather[0].icon),n.textContent=`${Math.round(e.hourly[1].temp)}°`;const r=document.querySelector(".hour-2-title"),c=document.querySelector(".hour-2-icon"),l=document.querySelector(".hour-2-temp");r.textContent=u(e.hourly[2].dt,e.timezone_offset),c.innerHTML=i(e.hourly[2].weather[0].icon),l.textContent=`${Math.round(e.hourly[2].temp)}°`;const s=document.querySelector(".hour-3-title"),a=document.querySelector(".hour-3-icon"),d=document.querySelector(".hour-3-temp");s.textContent=u(e.hourly[3].dt,e.timezone_offset),a.innerHTML=i(e.hourly[3].weather[0].icon),d.textContent=`${Math.round(e.hourly[3].temp)}°`;const m=document.querySelector(".hour-4-title"),h=document.querySelector(".hour-4-icon"),y=document.querySelector(".hour-4-temp");m.textContent=u(e.hourly[4].dt,e.timezone_offset),h.innerHTML=i(e.hourly[4].weather[0].icon),y.textContent=`${Math.round(e.hourly[4].temp)}°`;const p=document.querySelector(".hour-5-title"),g=document.querySelector(".hour-5-icon"),S=document.querySelector(".hour-5-temp");p.textContent=u(e.hourly[5].dt,e.timezone_offset),g.innerHTML=i(e.hourly[5].weather[0].icon),S.textContent=`${Math.round(e.hourly[5].temp)}°`;const q=document.querySelector(".hour-6-title"),f=document.querySelector(".hour-6-icon"),w=document.querySelector(".hour-6-temp");q.textContent=u(e.hourly[6].dt,e.timezone_offset),f.innerHTML=i(e.hourly[6].weather[0].icon),w.textContent=`${Math.round(e.hourly[6].temp)}°`;const x=document.querySelector(".hour-7-title"),C=document.querySelector(".hour-7-icon"),M=document.querySelector(".hour-7-temp");x.textContent=u(e.hourly[7].dt,e.timezone_offset),C.innerHTML=i(e.hourly[7].weather[0].icon),M.textContent=`${Math.round(e.hourly[7].temp)}°`;const L=document.querySelector(".hour-8-title"),$=document.querySelector(".hour-8-icon"),T=document.querySelector(".hour-8-temp");L.textContent=u(e.hourly[8].dt,e.timezone_offset),$.innerHTML=i(e.hourly[8].weather[0].icon),T.textContent=`${Math.round(e.hourly[8].temp)}°`;const _=document.querySelector(".hour-9-title"),z=document.querySelector(".hour-9-icon"),v=document.querySelector(".hour-9-temp");_.textContent=u(e.hourly[9].dt,e.timezone_offset),z.innerHTML=i(e.hourly[9].weather[0].icon),v.textContent=`${Math.round(e.hourly[9].temp)}°`;const H=document.querySelector(".hour-10-title"),b=document.querySelector(".hour-10-icon"),k=document.querySelector(".hour-10-temp");H.textContent=u(e.hourly[10].dt,e.timezone_offset),b.innerHTML=i(e.hourly[10].weather[0].icon),k.textContent=`${Math.round(e.hourly[10].temp)}°`;const E=document.querySelector(".hour-11-title"),j=document.querySelector(".hour-11-icon"),N=document.querySelector(".hour-11-temp");E.textContent=u(e.hourly[11].dt,e.timezone_offset),j.innerHTML=i(e.hourly[11].weather[0].icon),N.textContent=`${Math.round(e.hourly[11].temp)}°`;const D=document.querySelector(".hour-12-title"),U=document.querySelector(".hour-12-icon"),P=document.querySelector(".hour-12-temp");D.textContent=u(e.hourly[12].dt,e.timezone_offset),U.innerHTML=i(e.hourly[12].weather[0].icon),P.textContent=`${Math.round(e.hourly[12].temp)}°`;const A=document.querySelector(".hour-13-title"),F=document.querySelector(".hour-13-icon"),I=document.querySelector(".hour-13-temp");A.textContent=u(e.hourly[13].dt,e.timezone_offset),F.innerHTML=i(e.hourly[13].weather[0].icon),I.textContent=`${Math.round(e.hourly[13].temp)}°`;const O=document.querySelector(".hour-14-title"),W=document.querySelector(".hour-14-icon"),G=document.querySelector(".hour-14-temp");O.textContent=u(e.hourly[14].dt,e.timezone_offset),W.innerHTML=i(e.hourly[14].weather[0].icon),G.textContent=`${Math.round(e.hourly[14].temp)}°`;const B=document.querySelector(".hour-15-title"),J=document.querySelector(".hour-15-icon"),K=document.querySelector(".hour-15-temp");B.textContent=u(e.hourly[15].dt,e.timezone_offset),J.innerHTML=i(e.hourly[15].weather[0].icon),K.textContent=`${Math.round(e.hourly[15].temp)}°`;const Q=document.querySelector(".hour-16-title"),R=document.querySelector(".hour-16-icon"),V=document.querySelector(".hour-16-temp");Q.textContent=u(e.hourly[16].dt,e.timezone_offset),R.innerHTML=i(e.hourly[16].weather[0].icon),V.textContent=`${Math.round(e.hourly[16].temp)}°`;const X=document.querySelector(".hour-17-title"),Y=document.querySelector(".hour-17-icon"),Z=document.querySelector(".hour-17-temp");X.textContent=u(e.hourly[17].dt,e.timezone_offset),Y.innerHTML=i(e.hourly[17].weather[0].icon),Z.textContent=`${Math.round(e.hourly[17].temp)}°`;const ee=document.querySelector(".hour-18-title"),te=document.querySelector(".hour-18-icon"),oe=document.querySelector(".hour-18-temp");ee.textContent=u(e.hourly[18].dt,e.timezone_offset),te.innerHTML=i(e.hourly[18].weather[0].icon),oe.textContent=`${Math.round(e.hourly[18].temp)}°`;const ne=document.querySelector(".hour-19-title"),re=document.querySelector(".hour-19-icon"),ce=document.querySelector(".hour-19-temp");ne.textContent=u(e.hourly[19].dt,e.timezone_offset),re.innerHTML=i(e.hourly[19].weather[0].icon),ce.textContent=`${Math.round(e.hourly[19].temp)}°`;const ue=document.querySelector(".hour-20-title"),ie=document.querySelector(".hour-20-icon"),le=document.querySelector(".hour-20-temp");ue.textContent=u(e.hourly[20].dt,e.timezone_offset),ie.innerHTML=i(e.hourly[20].weather[0].icon),le.textContent=`${Math.round(e.hourly[20].temp)}°`;const se=document.querySelector(".hour-21-title"),ae=document.querySelector(".hour-21-icon"),de=document.querySelector(".hour-21-temp");se.textContent=u(e.hourly[21].dt,e.timezone_offset),ae.innerHTML=i(e.hourly[21].weather[0].icon),de.textContent=`${Math.round(e.hourly[21].temp)}°`;const me=document.querySelector(".hour-22-title"),he=document.querySelector(".hour-22-icon"),ye=document.querySelector(".hour-22-temp");me.textContent=u(e.hourly[22].dt,e.timezone_offset),he.innerHTML=i(e.hourly[22].weather[0].icon),ye.textContent=`${Math.round(e.hourly[22].temp)}°`;const pe=document.querySelector(".hour-23-title"),ge=document.querySelector(".hour-23-icon"),Se=document.querySelector(".hour-23-temp");pe.textContent=u(e.hourly[23].dt,e.timezone_offset),ge.innerHTML=i(e.hourly[23].weather[0].icon),Se.textContent=`${Math.round(e.hourly[23].temp)}°`;const qe=document.querySelector(".hour-24-title"),fe=document.querySelector(".hour-24-icon"),we=document.querySelector(".hour-24-temp");qe.textContent=u(e.hourly[24].dt,e.timezone_offset),fe.innerHTML=i(e.hourly[24].weather[0].icon),we.textContent=`${Math.round(e.hourly[24].temp)}°`}(e)}const s=document.querySelector("body"),a=document.querySelector(".search-input"),d=document.querySelector(".error"),m=document.querySelector(".fa-magnifying-glass"),h=document.querySelector(".fahrenheit"),y=document.querySelector(".celsius"),p=document.querySelector(".daily-btn"),g=document.querySelector(".daily-container"),S=document.querySelector(".hourly-btn"),q=document.querySelector(".hourly-arrows"),f=document.querySelector(".fa-angles-left"),w=document.querySelector(".fa-angles-right"),x=document.querySelector(".hourly-container"),C=document.querySelector(".hourly-section-1"),M=document.querySelector(".hourly-section-2"),L=document.querySelector(".hourly-section-3");let $="imperial",T=!1,_="seattle";async function z(e,t=!1){try{let o;if(o=t?"seattle":function(){const e=document.querySelector(".search-input").value;return e?e.replace(/(\s+$|^\s+)/g,"").replace(/(,\s+)/g,",").replace(/(\s+,)/g,",").replace(/\s+/g,"+"):""}(),!o)return;T&&(o=_),_=o;const n=function(e){return`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=a0edb149c3730e0823adf6965fdd3a09`}(o),r=await async function(e){const t=await fetch(e),o=await t.json(),{coord:n}=o;return n.name=o.name,n.country=o.sys.country,n}(n),c=function(e,t){return`https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${e.lon}&exclude=minutely,alerts&units=${t}&appid=a0edb149c3730e0823adf6965fdd3a09`}(r,e),u=await async function(e){const t=await fetch(e);return await t.json()}(c);u.name=r.name,u.country=r.country,d.style.display="none",l(u,e),t=!1,s.style.visibility="visible"}catch(e){d.style.display="block"}a.value=""}s.style.visibility="hidden",z($,!0),m.addEventListener("click",(()=>{z($)})),a.addEventListener("keydown",(e=>{"Enter"===e.key&&z($)})),h.addEventListener("click",(async()=>{"imperial"!==$&&"metric"===$&&($="imperial",T=!0,await z($,!0),y.classList.remove("selected-degrees"),h.classList.add("selected-degrees"))})),y.addEventListener("click",(async()=>{"metric"!==$&&"imperial"===$&&($="metric",T=!0,await z($,!0),h.classList.remove("selected-degrees"),y.classList.add("selected-degrees"))})),p.addEventListener("click",(()=>{p.classList.contains("selected-forecast-night")||(p.classList.add("selected-forecast-night"),S.classList.remove("selected-forecast-night"),q.classList.remove("hourly-open"),g.classList.add("selected-daily"),x.classList.remove("selected-hourly"))})),S.addEventListener("click",(()=>{S.classList.contains("selected-forecast-night")||(S.classList.add("selected-forecast-night"),p.classList.remove("selected-forecast-night"),q.classList.add("hourly-open"),g.classList.remove("selected-daily"),x.classList.add("selected-hourly"),C.classList.contains("hourly-section-open")||(M.classList.contains("hourly-section-open")?(M.classList.remove("hourly-section-open"),C.classList.add("hourly-section-open")):L.classList.contains("hourly-section-open")&&(L.classList.remove("hourly-section-open"),C.classList.add("hourly-section-open"))))})),f.addEventListener("click",(()=>{C.classList.contains("hourly-section-open")||(M.classList.contains("hourly-section-open")?(M.classList.remove("hourly-section-open"),C.classList.add("hourly-section-open")):L.classList.contains("hourly-section-open")&&(L.classList.remove("hourly-section-open"),M.classList.add("hourly-section-open")))})),w.addEventListener("click",(()=>{L.classList.contains("hourly-section-open")||(C.classList.contains("hourly-section-open")?(C.classList.remove("hourly-section-open"),M.classList.add("hourly-section-open")):M.classList.contains("hourly-section-open")&&(M.classList.remove("hourly-section-open"),L.classList.add("hourly-section-open")))}))})();