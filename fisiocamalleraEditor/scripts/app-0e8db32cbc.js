!function(){"use strict";angular.module("fisioCamalleraEditor",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","ng-translation","uiGmapgoogle-maps"])}(),function(){"use strict";function e(e,t){var a=this;a.changeLanguage=function(a){t.debug("TranslateController.changeLanguage to "+a),e.use(a)}}e.$inject=["ngTranslation","$log"],angular.module("fisioCamalleraEditor").controller("TranslateController",e)}(),function(){"use strict";function e(e,t){function a(){var a=t.defer(),n=a.promise;return e.get("assets/news/news.json").success(function(e){a.resolve(e)}).error(function(e){a.reject(e)}),n}this.getNews=a}e.$inject=["$http","$q"],angular.module("fisioCamalleraEditor").service("news",e)}(),function(){"use strict";function e(){function e(e,t,a,n){n.changeLanguage=function(e){t.debug("NavbarController.changeLanguage to "+e),n.language=e,a.use(e)}}e.$inject=["moment","$log","ngTranslation","$scope"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{relativeDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("fisioCamalleraEditor").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(e,t){function a(){n()}function n(){t.get().then(function(t){e.themes=t,e.themes.unshift({name:"Default",css:""})})}e.themes=[],a()}e.$inject=["$scope","BootSwatchService"];var t={restrict:"E",templateUrl:"app/components/footer/footer.html",scope:{relativeDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("fisioCamalleraEditor").directive("acmeFooter",e)}(),angular.module("fisioCamalleraEditor").factory("BootSwatchService",["$http",function(e){return{get:function(){return e.get("http://bootswatch.com/api/3.json").then(function(e){return e.data.themes})}}}]),angular.module("fisioCamalleraEditor").directive("jhSwitchTheme",function(){return{restrict:"A",scope:{theme:"=jhSwitchTheme"},link:function(e,t){var a=angular.element("#bootswatch-css").attr("title");e.theme.name===a&&t.parent().addClass("active"),t.on("click",function(){angular.element("#bootswatch-css").attr("href",e.theme.css),angular.element(".theme-link").removeClass("active"),t.parent().addClass("active")})}}}),function(){"use strict";function e(e,t,a){function n(){i(),angular.element("#comment").wysihtml5({html:!0}),s(),angular.element("#datetimepicker1").datetimepicker({format:"DD/MM/YYYY"})}function s(){o.newsEdit={id:0,image:"",url:"",date:"",title:"",description:"",text:""},angular.element("#comment").data("wysihtml5").editor.setValue("")}function i(){e.getNews().then(function(e){o.newsThings=e})["catch"](function(e){t.error(e)})}function l(){angular.element("#saveJsonContainer").html("");var e="text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(o.newsThings));angular.element('<a href="data:'+e+'" download="news.json">Exportar news.json</a>').appendTo("#saveJsonContainer")}var o=this;o.newsThings=[],o.newsEdit={},n(),o.loadNewsThing=function(e){t.debug("loadNewsThing id:"+e);for(var a=0;a<o.newsThings.length;a++)if(o.newsThings[a].id===e){o.newsEdit=o.newsThings[a],angular.element("#comment").data("wysihtml5").editor.setValue(o.newsEdit.text);break}},o.remove=function(e){for(var t=0;t<o.newsThings.length;t++)if(o.newsThings[t].id===e){o.newsThings.splice(t,1),l(),a.success("New removed correctly"),s();break}},o.reset=function(){s()},o.save=function(e){if(t.debug("save newsEdited"),e.text=angular.element("#comment").val(),0===e.id)e.id=o.newsThings.length+1,o.newsThings.push(e),a.success("New saved correctly");else for(var n=0;n<o.newsThings.length;n++)if(o.newsThings[n].id===e.id){o.newsThings[n]=e,a.success("New edited correctly");break}l(),t.debug(e)}}e.$inject=["news","$log","toastr"],angular.module("fisioCamalleraEditor").controller("MainController",e)}(),function(){"use strict";function e(e,t,a){t.use(a.search().lang),e.debug("runBlock end")}e.$inject=["$log","ngTranslation","$location"],angular.module("fisioCamalleraEditor").run(e)}(),function(){"use strict";function e(e,t){e.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("fisioCamalleraEditor").config(e)}(),function(){"use strict";angular.module("fisioCamalleraEditor").constant("moment",moment)}(),function(){"use strict";function e(e,t,a){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0,a.setDirectory("app/i18n").setFilesSuffix(".json").langsFiles({en:"en",fr:"fr",es:"es",ca:"ca"}).fallbackLanguage("ca")}e.$inject=["$logProvider","toastrConfig","ngTranslationProvider"],angular.module("fisioCamalleraEditor").config(e)}(),angular.module("fisioCamalleraEditor").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="text-center"><h1>{{\'EDITFORM_TITLE\' | translate}}</h1><p class="lead">{{\'EDITFORM_TEXT\' | translate}}</p><form novalidate="" class="form-horizontal"><input type="hidden" ng-model="main.newsEdit.id"><div class="form-group"><label class="control-label col-sm-2" for="title">{{\'EDITFORM_TITLE_FIELD\' | translate}}:</label><div class="col-sm-10 input-group"><input type="text" class="form-control" name="title" id="title" placeholder="{{\'EDITFORM_TITLE_FIELD\' | translate}}" ng-model="main.newsEdit.title"></div></div><div class="form-group"><label class="control-label col-sm-2" for="description">{{\'EDITFORM_DESCRIPTION_FIELD\' | translate}}:</label><div class="col-sm-10 input-group"><input type="text" class="form-control" name="description" id="description" placeholder="{{\'EDITFORM_DESCRIPTION_FIELD\' | translate}}" ng-model="main.newsEdit.description"></div></div><div class="form-group"><label class="control-label col-sm-2" for="comment">{{\'EDITFORM_TEXT_FIELD\' | translate}}:</label><div class="col-sm-10 input-group"><textarea class="form-control" id="comment" name="comment" ng-model="main.newsEdit.text">{{main.newsEdit.text}}</textarea></div></div><div class="form-group"><label class="control-label col-sm-2" for="image">{{\'EDITFORM_IMAGE_FIELD\' | translate}}:</label><div class="col-sm-10 input-group"><input type="text" class="form-control" name="image" id="image" placeholder="{{\'EDITFORM_IMAGE_FIELD\' | translate}}" ng-model="main.newsEdit.image"></div></div><div class="form-group"><label class="control-label col-sm-2" for="url">{{\'EDITFORM_URL_FIELD\' | translate}}:</label><div class="col-sm-10 input-group"><input type="text" class="form-control" name="url" id="url" placeholder="{{\'EDITFORM_URL_FIELD\' | translate}}" ng-model="main.newsEdit.url"></div></div><div class="form-group"><label class="control-label col-sm-2" for="newsDate">{{\'EDITFORM_DATE_FIELD\' | translate}}:</label><div class="col-sm-10 input-group date" id="datetimepicker1"><input type="text" class="form-control" name="newsDate" id="newsDate" ng-model="main.newsEdit.date"> <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="submit" ng-click="main.save(main.newsEdit)" class="btn btn-default">{{\'EDITFORM_SUBMIT\' | translate}}</button>&nbsp; <button type="button" ng-hide="main.newsEdit.id === 0" ng-click="main.remove(main.newsEdit.id)" class="btn btn-default">{{\'EDITFORM_DELETE\' | translate}}</button>&nbsp; <button type="button" ng-click="main.reset()" class="btn btn-default">{{\'EDITFORM_RESET\' | translate}}</button></div></div></form></div><br><div id="saveJsonContainer"></div><br><div class="list-group"><a href="" ng-click="main.loadNewsThing(newsThing.id)" class="list-group-item" ng-repeat="newsThing in main.newsThings"><h4 class="list-group-item-heading">{{newsThing.title}}</h4><p class="list-group-item-text">{{newsThing.description}}</p></a></div>'),e.put("app/components/footer/footer.html",'<div class="footer"><p class="pull-left">This is your footer</p><div class="btn-group dropup pull-right" uib-dropdown="" is-open="status.isopen"><a id="dataToggle2" name="dataToggle2" data-toggle2="uib-dropdown" class="btn btn-default uib-dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled"><span class="glyphicon glyphicon-adjust"></span> <span class="hidden-tablet">Theme</span> <b class="caret"></b></a><ul class="uib-dropdown-menu" role="menu"><li class="theme-link" ng-repeat="theme in themes"><a href="" jh-switch-theme="theme">{{theme.name}}</a></li></ul></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#/"><span class="glyphicon glyphicon-home"></span> {{\'NAVBAR_TITLE\' | translate}}</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#/">{{\'NAVBAR_HOME\' | translate}}</a></li></ul><ul class="nav navbar-nav navbar-right"><li><div class="btn-group" uib-dropdown="" is-open="status.isopen"><a id="dataToggle" name="dataToggle" data-toggle="uib-dropdown" class="btn uib-dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled"><i class="glyphicon glyphicon-flag"></i><span class="caret"></span></a><ul class="uib-dropdown-menu"><li><a href="" ng-click="changeLanguage(\'ca\')" title="{{ \'LANGUAGE_CATALONIAN\' | translate }}"><img alt="Flag icon" ng-src="assets/images/catalonia-flag.svg" style="width:16px;height:16px"> {{ \'LANGUAGE_CATALONIAN\' | translate }}</a></li><li><a href="" ng-click="changeLanguage(\'es\')" title="{{ \'LANGUAGE_SPANISH\' | translate }}"><img alt="Flag icon" ng-src="assets/images/spain-flag.svg" style="width:16px;height:16px"> {{ \'LANGUAGE_SPANISH\' | translate }}</a></li><li><a href="" ng-click="changeLanguage(\'en\')" title="{{ \'LANGUAGE_ENGLISH\' | translate }}"><img alt="Flag icon" ng-src="assets/images/uk-flag.svg" style="width:16px;height:16px"> {{ \'LANGUAGE_ENGLISH\' | translate }}</a></li><li><a href="" ng-click="changeLanguage(\'fr\')" title="{{ \'LANGUAGE_FRENCH\' | translate }}"><img alt="Flag icon" ng-src="assets/images/france-flag.svg" style="width:16px;height:16px"> {{ \'LANGUAGE_FRENCH\' | translate }}</a></li></ul></div></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-0e8db32cbc.js.map
