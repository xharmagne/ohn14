"bundle";!function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <require from="./filter"></require> <require from="./filter-count"></require> <require from="./list-count"></require> <div class="title-row full-width"> <div class="row content-width"> <div id="site-title" class="small-12 small-centered columns"> <a name="home"></a> <h1><a href="index.html" target="_self"><img class="ohn-logo" src="img/ohn-logo.svg" alt="OHN14"></a></h1> </div> </div> </div> <div id="top" class="header-row full-width"> <div class="row content-width"> <div class="small-12 small-centered text-center columns"> <h3 class="text-center">${message}</h3> </div> </div> </div> <div class="row content-width"> <div class="small-12 small-centered text-center columns"> <p class="text-center">Automatically updated list of people who have <a href="/registration.html">registered for OHN14</a>. <br> Please <a href="/index.html#contact">contact us</a> if you\'ve registered but can\'t see your name on this list. </p> </div> </div> <div class="toggle-row full-width"> <div class="row content-width"> <div class="small-12 text-center columns"> <input id="chkShowFilterOptions" type="checkbox" checked.bind="showFilterOptions" class="hidden-accessible"> <label for="chkShowFilterOptions"> <span if.bind="showFilterOptions">Hide filter options</span> <span if.bind="!showFilterOptions">Show filter options</span> </label> </div> </div> </div> <div class="options-row full-width"> <div class="filter-options row" style="max-width:53rem"> <div class="au-animate options-container small-12 columns" if.bind="showFilterOptions"> <div class="row"> <div class="option-column medium-3 columns"> <label for="txtGamertag">Gamertag</label> <input type="text" id="txtGamertag" value.bind="filterGamertag"> </div> <div class="option-column medium-3 columns"> <label for="selRegion">Region</label> <select id="selRegion" value.bind="filterRegion"> <option repeat.for="option of regions" value.bind="option.value">${option.name}</option> </select> </div> <div class="option-column medium-3 columns"> <label for="selPassType">Pass type</label> <select id="selPassType" value.bind="filterPassType"> <option repeat.for="option of passTypes" value.bind="option.value">${option.name}</option> </select> </div> <div class="option-column medium-3 columns"> <label for="selGames">Game</label> <select id="selGames" value.bind="filterGame"> <option repeat.for="option of games" value.bind="option.value">${option.name}</option> </select> </div> </div> </div> </div> </div> <div class="results-row full-width"> <div class="small-12 columns"> <table align="center"> <thead> <tr> <td>Gamertag</td> <td>Region</td> <td class="pass-type">Pass type</td> <td>Games</td> </tr> </thead> <tbody> <tr class="registrant-name" repeat.for="registrant of registrants | filter:filterGamertag:filterRegion:filterPassType:filterGame"> <td><div style="font-size:1.1rem">${registrant.gamertag}</div></td> <td><div>${registrant.region}</div></td> <td class="pass-type"><div>${registrant.passType}</div></td> <td> <div> <span class="game-name" if.bind="registrant.games.sfRegistered">SFV</span> <span class="game-name" if.bind="registrant.games.tkRegistered">T7</span> <span class="game-name" if.bind="registrant.games.mkRegistered">MKX</span> <span class="game-name" if.bind="registrant.games.a1Registered">VF5FS</span> <span class="game-name" if.bind="registrant.games.s1Registered">SSBM Singles</span> <span class="game-name" if.bind="registrant.games.s2Registered">SSBM Doubles <span if.bind="registrant.s2Notes != \'\'"> (with ${registrant.s2Notes})</span> </span> <span class="game-name" if.bind="registrant.games.s3Registered">SSB4 Singles</span> <span class="game-name" if.bind="registrant.games.s4Registered">SSB4 Doubles <span if.bind="registrant.s4Notes != \'\'"> (with ${registrant.s4Notes})</span> </span> </div> </td> </tr> <tr class="registrants-sum"> <td colspan="4" class="text-center"><span style="font-weight:700">${registrants | filterCount:filterGamertag:filterRegion:filterPassType:filterGame}</span> of <span style="font-weight:700">${registrants | listCount}</span> registrants</td> </tr> </tbody> </table> </div> </div> </template>'})}(),System.register("app.js",["aurelia-framework","aurelia-fetch-client","fetch"],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.inject},function(a){e=a.HttpClient},function(a){}],execute:function(){a("App",(f=d(e),h=f(g=function(){function a(b){c(this,a),this.message="Registrants",this.filterGamertag="",this.filterRegion="",this.filterPassType="",this.filterGame="",this.showFilterOptions=!1,this.regions=[{value:"",name:"All"},{value:"NSW",name:"NSW"},{value:"ACT",name:"ACT"},{value:"QLD",name:"QLD"},{value:"VIC",name:"VIC"},{value:"WA",name:"WA"},{value:"SA",name:"SA"},{value:"NT",name:"NT"},{value:"TAS",name:"TAS"}],this.passTypes=[{value:"",name:"All"},{value:"Competitor",name:"Competitor"},{value:"Spectator",name:"Spectator"}],this.games=[{value:"",name:"All"},{value:"SF",name:"SFV"},{value:"TK",name:"TK7"},{value:"MK",name:"MKX"},{value:"A1",name:"VF5FS"},{value:"S1",name:"Smash Melee Singles"},{value:"S2",name:"Smash Melee Doubles"},{value:"S3",name:"Smash Wii U Singles"},{value:"S4",name:"Smash Wii U Doubles"}],b.configure(function(a){a.useStandardConfiguration().withBaseUrl("http://dev.ozhadou.net/scripts/")}),this.http=b}return a.prototype.activate=function(){var a=this;return this.http.fetch("registrants.php").then(function(a){return a.json()}).then(function(b){return a.registrants=b})},a}())||g)),a("App",h)}}}),System.register("filter-count.js",[],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("FilterCountValueConverter",d=function(){function a(){c(this,a)}return a.prototype.toView=function(a,b,c,d,e){if(!a)return 0;var f=a.filter(function(a){return(!b||a.gamertag.toLowerCase().includes(b.toLowerCase()))&&(!c||a.region==c)&&(!d||a.passType==d)&&(!e||"SF"==e&&a.games.sfRegistered||"TK"==e&&a.games.tkRegistered||"MK"==e&&a.games.mkRegistered||"A1"==e&&a.games.a1Registered||"S1"==e&&a.games.s1Registered||"S2"==e&&a.games.s2Registered||"S3"==e&&a.games.s3Registered||"S4"==e&&a.games.s4Registered)});return f.length},a}()),a("FilterCountValueConverter",d)}}}),System.register("filter.js",[],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("FilterValueConverter",d=function(){function a(){c(this,a)}return a.prototype.toView=function(a,b,c,d,e){if(!a)return a;var f=a.filter(function(a){return(!b||a.gamertag.toLowerCase().includes(b.toLowerCase()))&&(!c||a.region==c)&&(!d||a.passType==d)&&(!e||"SF"==e&&a.games.sfRegistered||"TK"==e&&a.games.tkRegistered||"MK"==e&&a.games.mkRegistered||"A1"==e&&a.games.a1Registered||"S1"==e&&a.games.s1Registered||"S2"==e&&a.games.s2Registered||"S3"==e&&a.games.s3Registered||"S4"==e&&a.games.s4Registered)});return f},a}()),a("FilterValueConverter",d)}}}),System.register("list-count.js",[],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("ListCountValueConverter",d=function(){function a(){c(this,a)}return a.prototype.toView=function(a){return a?a.length:0},a}()),a("ListCountValueConverter",d)}}}),System.register("main.js",[],function(a,b){return{setters:[],execute:function(){function b(a){a.use.standardConfiguration().developmentLogging(),a.use.plugin("aurelia-animator-css"),a.start().then(function(){return a.setRoot()})}a("configure",b)}}});
