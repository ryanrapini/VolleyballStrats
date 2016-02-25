// $(function() {
// 	$('.edit').editable('/save.php');
// });


var vballApp = angular.module('vballApp', ['ui.sortable']);

vballApp.controller('vballCtrl', function ($scope) {
	$scope.team = [
		{ name: 'Ryan', position: 1 },
		{ name: 'Karin', position: 3 },
		{ name: 'Kayla', position: 4 },
		{ name: 'Derek', position: 5 },
		{ name: 'Brandon', position: 6 },
		{ name: 'Luke', position: 2 }
	];
  
  $scope.sortableOptions = {
    stop: function(e, ui) {
      for (var position in $scope.team) {
        $scope.team[position].position = position;
      }
      console.log($scope.team)
    }
  };
  
});