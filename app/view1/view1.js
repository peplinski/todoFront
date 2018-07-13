'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$http', function ($http) {
        var self1 = this;

        this.funkcja = function () {
            $http.get('http://localhost:8080/listTask')
                .then(
                    // jeśli nie bedzie bledu
                    function (daneJesliOk) {
                        // console.log('Wszystko bangla!');
                        console.log(daneJesliOk);
                        self1.dane = daneJesliOk.data;
                    },
                    // jesli bedzie blad
                    function (daneJesliBlad) {
                        console.log('Ej, jest błąd!');
                    });
            this.done = function (taskId, status) {

                $http.post("http://localhost:8080/done/" + taskId + "/" + status, {})
                    .then(
                        function (dane) {
                            console.log('Udalo sie ' + dane);
                        },
                        function (error) {
                            console.log("nie udalo sie " + error)
                        }
                    )
            }
        };
    }]);