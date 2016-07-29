(function() {
  'use strict';

  angular
    .module('pasturaboscEditor')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(news, $log, toastr, services, methodologies, recipes) {
    var vm = this;
	vm.newsThings = [];
	vm.newsEdit = {};
	vm.newsThingFilter = {};
	vm.languageOptions = [];
	vm.selected = {};
	
	var newsService = news;

    activate();

    function activate() {
		loadLanguageOptions();
		getNewsThings();
		angular.element('#comment').wysihtml5({"html":true});
		resetNewsEdit();
		angular.element('#datetimepicker1').datetimepicker({
                format: 'DD/MM/YYYY'
        });
	}

    function resetNewsEdit() {
		vm.newsEdit = {
			"id": 0,
			"language": "ca",
			"image":"",
			"url":"",
			"date":"",
			"title":"",
			"description":"",
			"text":""
		};
		angular.element('#comment').data("wysihtml5").editor.setValue("");
    }	
	
    function getNewsThings() {
		newsService.getNews().then(function(data) {
			vm.newsThings = data;
		})
		.catch(function(err) {
			$log.error(err);
        });
    }	
	
	vm.loadNewsThing = function (id) {
		$log.debug('loadNewsThing id:' + id);
		for(var i = 0; i<vm.newsThings.length;i++) {
			if (vm.newsThings[i].id === id) {
				vm.newsEdit = vm.newsThings[i];
				angular.element('#comment').data("wysihtml5").editor.setValue(vm.newsEdit.text);
				break;
			}
		}
	}
	
	vm.remove = function (id) {
		for(var i = 0; i<vm.newsThings.length;i++) {
			if (vm.newsThings[i].id === id) {
				vm.newsThings.splice(i, 1);
				exportSaveJSONLink();
				toastr.success('Content removed correctly');
				resetNewsEdit();
				break;
			}
		}
	}
	
	vm.reset = function () {
		resetNewsEdit();
	}
	
	vm.save = function (newsEdited) {
		$log.debug('save newsEdited');
		newsEdited.text = angular.element('#comment').val();
		if(newsEdited.id === 0) {
			newsEdited.id = vm.newsThings.length +1;
			vm.newsThings.push(newsEdited);
			toastr.success('Content created correctly');
		} else {
			for(var i = 0; i<vm.newsThings.length;i++) {
				if (vm.newsThings[i].id === newsEdited.id) {
					vm.newsThings[i] = newsEdited;
					toastr.success('Content updated correctly');
					break;
				}
			}
		}
		exportSaveJSONLink();
		$log.debug(newsEdited);
	}
	
	function exportSaveJSONLink() {
		angular.element("#saveJsonContainer").html("");
		var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vm.newsThings));
		var fileName = newsService.getNewsFileName();
		angular.element('<a href="data:' + data + '" download="'+fileName+'">Exportar '+fileName+'</a>').appendTo('#saveJsonContainer');
	}
	
	function loadLanguageOptions() {
		vm.languageOptions = [
			{
				field: "ca",
				title: "Català"
			},
			{ 
				field:"es",
				title:"Castellà"
			},
			{
				field:"en",
				title:"Angles"
			},
			{
				field: "fr",
				title: "Frances"
			}
		];
		vm.selected = vm.languageOptions[0].field;
		vm.newsThingFilter.language = vm.selected;
	}
	
	vm.changeNewsLanguage = function() {
		vm.newsThingFilter.language = vm.selected;
		resetNewsEdit();
	}
	
	vm.changeService = function(serviceId) {
		resetNewsEdit();
		angular.element("#saveJsonContainer").html("");
		if(serviceId === 3) {
			newsService = methodologies;
		} else if(serviceId === 2) {
			newsService = recipes;
		} else if(serviceId === 1) {
			newsService = services;
		} else {
			newsService = news;
		}
		getNewsThings();
	}
	
	/*
	vm.saveJSON = function () {
		$log.debug('saveJSON');
		vm.toJSON = '';
		vm.toJSON = angular.toJson(vm.newsThings);
		var blob = new Blob([vm.toJSON], { type:"application/json;charset=utf-8;" });			
		//var blob = new Blob([vm.newsThings], { type:"application/json;charset=utf-8;" });			
		var downloadLink = angular.element('<a></a>');
        downloadLink.attr('href',URL.createObjectURL(blob));
        downloadLink.attr('download', 'news.json');
		$log.debug(downloadLink);
		downloadLink[0].click();
	}
	*/
	
  }
})();