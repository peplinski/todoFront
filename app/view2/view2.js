'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .controller('View2Ctrl', ['$http', function ($http) {
        //this.zmienna = 5;
        var self = this;

        this.funkcja = function () {
            $http.get('http://localhost:8080/listUsers')
                .then(
                    // jeśli nie bedzie bledu
                    function (daneJesliOk) {
                        // console.log('Wszystko bangla!');
                        //  console.log(daneJesliOk);
                        self.dane = daneJesliOk.data;
                    },
                    // jesli bedzie blad
                    function (daneJesliBlad) {
                        console.log('Ej, jest błąd!');
                    });
        }
    }]);