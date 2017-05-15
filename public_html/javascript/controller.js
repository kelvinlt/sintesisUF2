var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", "serv"
    , function ($scope, serv) {
    var team = new Team("Souls Crusaders", 100, 0, "Dark Souls");

        var player1 = new Player("Kelvin", "player1", "Magician", 90,110);
        var player2 = new Player("Lluis", "player2", "Paladin", 10,30);
        var player3 = new Player("Danyl", "player3", "Warrior", 210,400);
        var player4 = new Player("Marc", "player4", "Warrior", 910,200);

        team.addPlayer(player1);
        team.addPlayer(player2);
        team.addPlayer(player3);
        team.addPlayer(player4);
    
        $scope.team = team;
        $scope.player1 = player1;
        
        $scope.newTeam={};
        $scope.newPlayer={};
        
        serv.addTeam(team);
        
        $scope.teamList = serv.teamList;
        $scope.createTeam = function () {
            if ($scope.newTeam.name !== undefined) {
                var team = new Team($scope.newTeam.name, $scope.newTeam.victories, $scope.newTeam.defeats, $scope.newTeam.game);
                serv.addTeam(team);
            }
        };
    
}]);