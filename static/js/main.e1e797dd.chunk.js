(this["webpackJsonpexercise-two"]=this["webpackJsonpexercise-two"]||[]).push([[0],{35:function(e,c,t){},36:function(e,c,t){},65:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t.n(n),i=t(26),r=t.n(i),a=(t(35),t(30)),o=t(3),d=(t(36),t(16)),l=t(27),h=t.n(l),j=t(7),u=t(8),m=t(1);var b=function(e){var c=e.weatherType,t=document.querySelectorAll("a");switch(c){case"Clouds":return document.body.style.backgroundImage="url('https://media.giphy.com/media/mno6BJfy8USic/source.gif')",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="cover",Object(m.jsx)(j.a,{icon:u.a});case"Clear":return document.body.style.backgroundImage="url('https://media.giphy.com/media/QmH77NDL04OX5vWQZE/giphy.gif')",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="cover",Object(m.jsx)(j.a,{icon:u.d});case"Snow":return document.body.style.backgroundImage="url('https://media.giphy.com/media/bGaOdqeqYQKc0/giphy.gif)",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="cover",Object(m.jsx)(j.a,{icon:u.c});case"Rain":return document.body.style.backgroundImage="url('https://i.gifer.com/AcU9.gif')",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="cover",document.body.style.color="white",t[0].style.color="white",t[1].style.color="white",t[2].style.color="white",t[3].style.color="white",Object(m.jsx)(j.a,{icon:u.b});default:return Object(m.jsx)(j.a,{icon:u.d})}};var p=function(e){var c=e.cloudiness,t=e.currentTemp,n=e.highTemp,s=e.humidity,i=e.lowTemp,r=e.weatherType,a=void 0===r?"Unknown":r,o=e.windSpeed;return Object(m.jsxs)("section",{className:"WeatherCard",children:[Object(m.jsxs)("p",{className:"currentTemp",children:[Object(m.jsx)("div",{className:"WeatherImageWrapper",children:Object(m.jsx)(b,{weatherType:a})}),"Currently",Object(m.jsxs)("strong",{children:[t,"\xb0"]})]}),Object(m.jsxs)("p",{className:"weather-type",children:["Weather Type: ",Object(m.jsxs)("strong",{children:[" ",a]})]}),Object(m.jsxs)("p",{className:"cloudiness",children:["Cloudiness: ",Object(m.jsxs)("strong",{children:[" ",c,"%"]})]}),Object(m.jsxs)("p",{className:"humidity",children:["Humidity: ",Object(m.jsxs)("strong",{children:[" ",s,"%"]})]}),Object(m.jsxs)("div",{className:"highlow",children:[Object(m.jsxs)("p",{className:"high",children:["High: ",Object(m.jsxs)("strong",{children:[" ",n,"\xb0"]})]}),Object(m.jsxs)("p",{className:"low",children:["Low: ",Object(m.jsxs)("strong",{children:[" ",i,"\xb0"]})]})]}),Object(m.jsxs)("p",{className:"wind",children:["Wind Speed: ",Object(m.jsxs)("strong",{children:[" ",o," mph"]})]})]})};function y(e){return Math.floor(1.8*(e-273)+32)}var g=function(){var e=Object(n.useState)(),c=Object(d.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)(),r=Object(d.a)(i,2),a=r[0],l=r[1],j=new URLSearchParams(Object(o.f)().search),u="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("8fb50a254d1d00c642f7408ac5294de5");Object(n.useEffect)((function(){var e=j.get("city");s(e)}),[j]),Object(n.useEffect)((function(){t&&h.a.get(u).then((function(e){l(e.data)})).catch((function(e){console.warn(e)}))}),[u,t]);var b=Object(n.useMemo)((function(){return a?{cloudiness:a.clouds.all,currentTemp:y(a.main.temp),highTemp:y(a.main.temp_max),humidity:a.main.humidity,lowTemp:y(a.main.temp_min),weatherType:a.weather[0].main,windSpeed:a.wind.speed}:{}}),[a]),g=b.cloudiness,O=b.currentTemp,x=b.highTemp,w=b.humidity,f=b.lowTemp,T=b.weatherType,v=b.windSpeed;return Object(m.jsxs)("main",{className:"App",children:[Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"cities",children:[Object(m.jsx)("h3",{className:"picker",children:"Pick a city: "}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"/?city=Beijing",children:"Beijing"})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"/?city=New+York",children:"New York"})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"/?city=London",children:"London"})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"/?city=Los+Angeles",children:"Los Angeles"})})]})}),Object(m.jsx)("h1",{className:"city-name",children:t}),Object(m.jsx)(p,{cloudiness:g,currentTemp:O,highTemp:x,humidity:w,lowTemp:f,weatherType:T,windSpeed:v})]})};var O=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(a.a,{children:Object(m.jsx)(o.c,{children:Object(m.jsx)(o.a,{path:"/",children:Object(m.jsx)(g,{})})})})})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),x()}},[[65,1,2]]]);
//# sourceMappingURL=main.e1e797dd.chunk.js.map