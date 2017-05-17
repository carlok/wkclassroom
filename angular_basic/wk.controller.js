'use strict';


(function () {
    app.controller('WkController', ['$scope',
        function ($scope) {
          $scope.aaa = 1;
        }]);
})();

/*angular.module('wkApp', [$scope])
  .controller('WkController', function ($scope) {
    let wk = this;

    wk.aaa = 'bbbb2';
    $scope.qqq = 2;
    axios.get('http://localhost:8000/hello')
      .then(function (response) {
        console.log(response.data.b);

        wk.b = response.data.b;
      })
      .catch(function (error) {
        console.log(error);
      });
  });*/