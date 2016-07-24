!function(){"use strict";angular.module("fisioCamallera",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","ng-translation","uiGmapgoogle-maps"])}(),function(){"use strict";function e(e,a){var t=this;t.changeLanguage=function(t){a.debug("TranslateController.changeLanguage to "+t),e.use(t)}}e.$inject=["ngTranslation","$log"],angular.module("fisioCamallera").controller("TranslateController",e)}(),function(){"use strict";function e(e,a){function t(){var t=a.defer(),i=t.promise;return e.get("assets/news/news.json").success(function(e){t.resolve(e)}).error(function(e){t.reject(e)}),i}function i(t){var i=a.defer(),l=i.promise;return e.get("assets/news/news.json").success(function(e){for(var a=0;a<e.length;a++)if(e[a].id==t){i.resolve(e[a]);break}}).error(function(e){i.reject(e)}),l}this.getNews=t,this.getNewsBy=i}e.$inject=["$http","$q"],angular.module("fisioCamallera").service("news",e)}(),function(){"use strict";function e(){function e(e,a,t,i,l){function n(){s()}function s(){l.getNews().then(function(e){a.debug(e),i.newsCount=e.length})["catch"](function(e){a.error(e)})}i.newsCount=0,n(),i.changeLanguage=function(e){a.debug("NavbarController.changeLanguage to "+e),i.language=e,t.use(e)}}e.$inject=["moment","$log","ngTranslation","$scope","news"];var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{relativeDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("fisioCamallera").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"Sobre mi",url:"#/about",description:"conoceme",logo:"LOGO MANS.jpg"},{title:"Contacto",url:"#/contact",description:"Mis datos de contacto",logo:"LOGO MANS.jpg"},{title:"Contacta conmigo",url:"#/contactus",description:"Envia un email",logo:"LOGO MANS.jpg"},{title:"Noticies",url:"#/news",description:"Ultimas noticias",logo:"LOGO MANS.jpg"}];this.getMenuEntries=e}angular.module("fisioCamallera").service("menuEntries",e)}(),function(){"use strict";function e(){function e(e,a){function t(){i()}function i(){a.get().then(function(a){e.themes=a,e.themes.unshift({name:"Default",css:""})})}e.themes=[],t()}e.$inject=["$scope","BootSwatchService"];var a={restrict:"E",templateUrl:"app/components/footer/footer.html",scope:{relativeDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("fisioCamallera").directive("acmeFooter",e)}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"primer curso",image:"",url:"",date:"29/02/2016",text:"primer curso"},{title:"segundo curso",image:"",url:"",date:"01/03/2016",text:"segundo curso"}];this.getEvents=e}angular.module("fisioCamallera").service("events",e)}(),angular.module("fisioCamallera").factory("BootSwatchService",["$http",function(e){return{get:function(){return e.get("http://bootswatch.com/api/3.json").then(function(e){return e.data.themes})}}}]),angular.module("fisioCamallera").directive("jhSwitchTheme",function(){return{restrict:"A",scope:{theme:"=jhSwitchTheme"},link:function(e,a){var t=angular.element("#bootswatch-css").attr("title");e.theme.name===t&&a.parent().addClass("active"),a.on("click",function(){angular.element("#bootswatch-css").attr("href",e.theme.css),angular.element(".theme-link").removeClass("active"),a.parent().addClass("active")})}}}),function(){"use strict";function e(){}angular.module("fisioCamallera").controller("ServicesController",e)}(),function(){"use strict";function e(e,a,t){function i(){l()}function l(){e.getNewsBy(a.newsId).then(function(e){t.debug(e),n.detail=e})["catch"](function(e){t.error(e)})}var n=this;n.detail={title:"titulo",text:"description"},n.newsId=a.newsId,i()}e.$inject=["news","$stateParams","$log"],angular.module("fisioCamallera").controller("NewsDetailController",e)}(),function(){"use strict";function e(e,a){function t(){i()}function i(){e.getNews().then(function(e){a.debug(e),l.newsThings=e})["catch"](function(e){a.error(e)})}var l=this;l.newsThings=[],t()}e.$inject=["news","$log"],angular.module("fisioCamallera").controller("NewsController",e)}(),function(){"use strict";function e(e){function a(){i();for(var e=0;5>e;e++)t()}function t(){n.push({image:["assets/images/IMG_4691.jpg","assets/images/IMG_4699.jpg","assets/images/IMG_4727.jpg","assets/images/IMG_4788.jpg","assets/images/P1020671.JPG"][n.length%5],text:["Nice image","Awesome photograph","That is so cool","I love that","foto 5"][n.length%5],id:s++})}function i(){l.awesomeThings=e.getMenuEntries(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.myInterval=5e3,l.noWrapSlides=!1;var n=l.slides=[],s=0;l.awesomeThings=[],a()}e.$inject=["menuEntries"],angular.module("fisioCamallera").controller("MainController",e)}(),function(){"use strict";function e(e){function a(){t()}function t(){i.mailData={email:"",sendTo:"aritxun@gmail.com",subject:"Contacta con nosotros",content:"",phone:""}}var i=this;i.mailData={},a(),i.send=function(){var a="Buenos dias, me gustaria contactar con fisio camallera.";""!=i.mailData.email&&(a+=" Mi email es "+i.mailData.email+"."),""!=i.mailData.phone&&(a+=" Mi teléfono es "+i.mailData.phone+"."),a+="El motivo del contacto es el siguiente: "+i.mailData.content,e.open("mailto:"+i.mailData.sendTo+"?subject="+i.mailData.subject+"&body="+a,"_self")}}e.$inject=["$window"],angular.module("fisioCamallera").controller("ContactUsController",e)}(),function(){"use strict";function e(){var e=this;e.map={center:{latitude:45,longitude:-73},zoom:8}}angular.module("fisioCamallera").controller("ContactController",e)}(),function(){"use strict";function e(e,a,t){a.use(t.search().lang),e.debug("runBlock end")}e.$inject=["$log","ngTranslation","$location"],angular.module("fisioCamallera").run(e)}(),function(){"use strict";function e(e,a){e.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"contact"}).state("contactus",{url:"/contactus",templateUrl:"app/contactus/contactus.html",controller:"ContactUsController",controllerAs:"contactus"}).state("news",{url:"/news",templateUrl:"app/news/news.html",controller:"NewsController",controllerAs:"news"}).state("services",{url:"/services",templateUrl:"app/services/services.html",controller:"ServicesController",controllerAs:"services"}).state("news-detail",{url:"/news-detail/:newsId",templateUrl:"app/news-detail/news-detail.html",controller:"NewsDetailController",controllerAs:"detail"}),a.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("fisioCamallera").config(e)}(),function(){"use strict";angular.module("fisioCamallera").constant("moment",moment)}(),function(){"use strict";function e(e,a,t){e.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0,t.setDirectory("app/i18n").setFilesSuffix(".json").langsFiles({en:"en",fr:"fr",es:"es",ca:"ca"}).fallbackLanguage("ca")}e.$inject=["$logProvider","toastrConfig","ngTranslationProvider"],angular.module("fisioCamallera").config(e)}(),angular.module("fisioCamallera").run(["$templateCache",function(e){e.put("app/contact/contact.html",'<div class="text-center"><h1>{{\'CONTACT_TITLE\' | translate}}</h1><p class="lead">{{\'CONTACT_TEXT\' | translate}}</p></div><ui-gmap-google-map center="contact.map.center" zoom="contact.map.zoom"></ui-gmap-google-map>'),e.put("app/contactus/contactus.html",'<div class="text-center"><h1>{{\'CONTACTUS_TITLE\' | translate}}</h1><p class="lead">{{\'CONTACTUS_TEXT\' | translate}}</p><form class="form-horizontal" role="form"><div class="form-group"><label class="control-label col-sm-2" for="email">{{\'CONTACTUS_EMAIL\' | translate}}:</label><div class="col-sm-10"><input type="email" class="form-control" id="email" placeholder="{{\'CONTACTUS_EMAIL_ALT\' | translate}}" ng-model="contactus.mailData.email"></div></div><div class="form-group"><label class="control-label col-sm-2" for="phone">{{\'CONTACTUS_PHONE\' | translate}}:</label><div class="col-sm-10"><input type="tel" class="form-control" id="phone" placeholder="{{\'CONTACTUS_PHONE_ALT\' | translate}}" ng-model="contactus.mailData.phone"></div></div><div class="form-group"><label class="control-label col-sm-2" for="comment">{{\'CONTACTUS_COMMENT\' | translate}}:</label><div class="col-sm-10"><textarea class="form-control" id="comment" placeholder="{{\'CONTACTUS_COMMENT_ALT\' | translate}}" ng-model="contactus.mailData.content"></textarea></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="contactus.send()" class="btn btn-default" target="_blank">{{\'CONTACTUS_SUBMIT\' | translate}}</a></div></div></form></div>'),e.put("app/main/main.html",'<div><uib-carousel interval="main.myInterval" no-wrap="main.noWrapSlides"><uib-slide ng-repeat="slide in main.slides" index="slide.id"><img ng-src="{{slide.image}}" height="305" width="305" style="margin:auto;"><div class="carousel-caption"><h4>Slide {{slide.id}}</h4><p>{{slide.text}}</p></div></uib-slide></uib-carousel></div><br><br><div class="main-list" layout-align="center"><div class="row"><div class="col-sm-6 col-md-3" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}" height="242" width="200"></div><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a href="{{ awesomeThing.url }}" class="btn btn-primary" role="button">view</a></p></div></div></div></div>'),e.put("app/news/news.html",'<div class="main-list" layout-align="center"><div class="row"><div class="col-sm-6 col-md-3" ng-repeat="newsThing in news.newsThings | orderBy:\'date\'"><div class="thumbnail"><img ng-src="assets/images/{{ newsThing.image }}" alt="{{ newsThing.title }}" height="242" width="200"></div><div class="caption"><h3>{{ newsThing.title }}</h3><p>{{ newsThing.description }}</p><p ng-show="newsThing.url"><a href="{{ newsThing.url }}" class="btn btn-primary" role="button">view</a></p><p ng-hide="newsThing.url"><a href="#/news-detail/{{ newsThing.id }}" class="btn btn-primary" role="button">view</a></p></div></div></div></div>'),e.put("app/news-detail/news-detail.html",'<ol class="breadcrumb" style="margin-bottom: 5px;"><li><a href="#/news">{{\'NAVBAR_NEWS\' | translate}}</a></li><li class="active">{{detail.detail.title}}</li></ol><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">{{detail.detail.title}}</h3></div><div class="panel-body" ng-bind-html="detail.detail.text"></div></div>'),e.put("app/services/services.html",'<h1>Fisioteràpia global i manual: teràpies manuals i guiades en tots els àmbits</h1><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Fisioteràpia especialitzada en:</h3></div><div class="panel-body"><ul class="list-group"><li class="list-group-item">Recuperació funcional</li><li class="list-group-item">Rehabilitació global<ul class="list-group"><li class="list-group-item">respiratòria ( patologies i patrons)</li><li class="list-group-item">postural: consciència corporal i recuperació postural</li></ul></li><li class="list-group-item">prevenció i manteniment</li></ul></div></div><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">tècniques, conceptes, mètodes:</h3></div><div class="panel-body"><ul class="list-group"><li class="list-group-item">ortopédic manual teràpia</li><li class="list-group-item">propioceptiva (FNP)</li><li class="list-group-item">teràpia reflex respiratori (massatge profund)</li><li class="list-group-item">concepte Bobath</li><li class="list-group-item">drenatge linfàtic manual</li><li class="list-group-item">cyriax</li><li class="list-group-item">movilització mandibular (ATM)</li><li class="list-group-item">metode hipopressiu</li><li class="list-group-item">fisiopilates Klein Vogelbach Brunkow</li><li class="list-group-item">massatge terapeutic</li><li class="list-group-item">complementàris: crioteràpia, termoteràpia, torva calenta</li></ul></div><div class="panel-footer"><p>“Prevenció i Solució” ( d’anàlisi al canvi)</p><p>“moviment és vida” (Moshe Feldenkrais) “Salut en moviment”</p><p>“Llibertat en moviment”</p><p>Convalidesa amb mútues Visites a domicili Hores convingudes</p><p>Horaris: dilluns a divendres de 9 a 20</p><p>Clases de Fisiopilates: dimarts 18 i 19.15, dimecres 19 i dijous 9.30</p></div></div>'),e.put("app/components/footer/footer.html",'<div class="footer"><p class="pull-left">This is your footer</p><div class="btn-group dropup pull-right" uib-dropdown="" is-open="status.isopen"><a id="dataToggle2" name="dataToggle2" data-toggle2="uib-dropdown" class="btn btn-default uib-dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled"><span class="glyphicon glyphicon-adjust"></span> <span class="hidden-tablet">Theme</span> <b class="caret"></b></a><ul class="uib-dropdown-menu" role="menu"><li class="theme-link" ng-repeat="theme in themes"><a href="" jh-switch-theme="theme">{{theme.name}}</a></li></ul></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#/"><span class="glyphicon glyphicon-home"></span> {{\'NAVBAR_TITLE\' | translate}}</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#/">{{\'NAVBAR_HOME\' | translate}}</a></li><li><a ng-href="#/about">{{\'NAVBAR_ABOUT\' | translate}}</a></li><li><a ng-href="#/contact">{{\'NAVBAR_CONTACT\' | translate}}</a></li><li><a ng-href="#/contactus">{{\'NAVBAR_CONTACTUS\' | translate}}</a></li><li><a ng-href="#/services">{{\'NAVBAR_SERVICES\' | translate}}</a></li><li><a ng-href="#/news">{{\'NAVBAR_NEWS\' | translate}} <span class="badge">{{newsCount}}</span></a></li></ul><ul class="nav navbar-nav navbar-right"><li><div class="btn-group" uib-dropdown="" is-open="status.isopen"><a id="dataToggle" name="dataToggle" data-toggle="uib-dropdown" class="btn uib-dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled"><i class="glyphicon glyphicon-flag"></i><span class="caret"></span></a><ul class="uib-dropdown-menu"><li><a href="" ng-click="changeLanguage(\'ca\')" title="{{ \'LANGUAGE_CATALONIAN\' | translate }}"><img alt="Flag icon" ng-src="assets/images/catalonia-flag.svg" style="width:16px;height:16px"> {{ \'LANGUAGE_CATALONIAN\' | translate }}</a></li><li><a href="" ng-click="changeLanguage(\'es\')" title="{{ \'LANGUAGE_SPANISH\' | translate }}"><img alt="Flag icon" ng-src="assets/images/spain-flag.svg" style="width:16px;height:16px"> {{ \'LANGUAGE_SPANISH\' | translate }}</a></li><li><a href="" ng-click="changeLanguage(\'en\')" title="{{ \'LANGUAGE_ENGLISH\' | translate }}"><img alt="Flag icon" ng-src="assets/images/uk-flag.svg" style="width:16px;height:16px"> {{ \'LANGUAGE_ENGLISH\' | translate }}</a></li><li><a href="" ng-click="changeLanguage(\'fr\')" title="{{ \'LANGUAGE_FRENCH\' | translate }}"><img alt="Flag icon" ng-src="assets/images/france-flag.svg" style="width:16px;height:16px"> {{ \'LANGUAGE_FRENCH\' | translate }}</a></li></ul></div></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-df50ea4aaa.js.map