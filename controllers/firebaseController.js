angular
  .module("myapp")
  .controller("firebaseController", firebaseController);

function firebaseController($firebaseArray, $scope, $firebaseAuth) {
  var firebaseRef = new Firebase("https://burning-inferno-8419.firebaseio.com")
  
  

  $scope.user = { email: "", password: "" };
  $scope.messages = $firebaseArray(firebaseRef);
    
  $scope.addMessage = function(e) {

    if (e.keyCode != 13) return;
    $scope.messages.$add({name: $scope.name, body: $scope.msg});
    $scope.msg = "";
  }


}