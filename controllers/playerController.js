angular
  .module("myapp")
  .controller("playerController", playerController);

  function playerController($firebaseArray, $scope, $firebaseAuth) {
    var firebasePlayer = new Firebase("https://playerturns.firebaseio.com")
    
    $scope.players = $firebaseArray(firebasePlayer)
    var players = $scope.players


    if (players.length == 0){
      $scope.playerText = "Player 1 enter your name"
    }else if (players.length == 1){
      $scope.playerText = "Player 2 enter your name"
    }else if (players.length == 2){
      $scope.playerText = "Player 3 enter your name"
    }else if (players.length == 3){
      $scope.playerText = "Player 4 enter your name"
    }


    $scope.addPlayers = function(e){
      if (e.keyCode != 13) return;
      players.$add({player: $scope.player});
      players = "";
    }


        

    

    
  }