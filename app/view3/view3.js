'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$http', function ($http) {
        var self = this;
        this.stworzNoweZadanie = function () {
            $http.post("http://localhost:8080/registerTask", self.objectToSend)
                .then(
                    function (dane) {
                        console.log("Dane: " + dane);
                    },
                    function (error) {
                        console.log("Error: " + error);
                    });
        };

    }]);