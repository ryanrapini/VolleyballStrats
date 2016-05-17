// $(function() {
// 	$('.edit').editable('/save.php');
// });

var vballApp = angular.module('vballApp', ['ui.sortable', 'ngRoute']);

vballApp.controller('vballCtrl', function ($scope, $location) {

  var $inputteam = $location.search().team;

  if($inputteam){
    var arr = $inputteam.split(",");
    if (arr.length == 6){
      $scope.team = [];
      arr.forEach(function (value, i){
        var tmp = [];
        tmp.name = value
        tmp.position = i
        $scope.team.push(tmp)
      });
    }
    console.log($scope.team);
  }
  else{ 
    $scope.team = [
    { name: '1', position: 0 },
    { name: '2', position: 1 },
    { name: '3', position: 2 },
    { name: '6', position: 3 },
    { name: '5', position: 4 },
    { name: '4', position: 5 }
    ];
  }

  $scope.sortableOptions = {
    stop: function(e, ui) {
      for (var i in $scope.team) {
        $scope.team[i].position = i;
      }
      console.log("Saving new places...")
      console.log($scope.team)
    }
  };


  $scope.rotate = function() {
    var rotmap = [1,2,5,0,3,4];

    for (var i in $scope.team) {
      
      $scope.team[i].position = rotmap[$scope.team[i].position];   
    }
    console.log("Rotating...")
    console.log($scope.team)
  }

});

vballApp.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);