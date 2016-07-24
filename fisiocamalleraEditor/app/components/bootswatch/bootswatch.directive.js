'use strict';

angular.module('fisioCamalleraEditor')
    .directive('jhSwitchTheme', function() {
        /*Directive binds to anchor to update the bootswatch theme selected*/
        return {
            restrict: 'A',
            scope: {
                theme : '=jhSwitchTheme'
            },
            link: function (scope, element) {
                var currentTheme = angular.element("#bootswatch-css").attr('title');
                if(scope.theme.name === currentTheme){
                    element.parent().addClass("active");
                }

                element.on('click',function(){
                    angular.element("#bootswatch-css").attr("href", scope.theme.css);
                    angular.element(".theme-link").removeClass("active");
                    element.parent().addClass("active");
                });
            }
        };
    });