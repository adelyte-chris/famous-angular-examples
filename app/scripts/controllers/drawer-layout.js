'use strict';
angular.module('integrationApp')
  .controller('DrawerLayoutCtrl', function ($scope, $famous) {
    $scope.toggle = function () {
      console.log("toggle");
      $famous.find('#drawer-layout')[0].toggle();
    };

    $scope.open = function () {
      console.log("open");
      $famous.find('#drawer-layout')[0].open();
    };

    $scope.close = function () {
      console.log("close");
      $famous.find('#drawer-layout')[0].close();
    };
  }
);
