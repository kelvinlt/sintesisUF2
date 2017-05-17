var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", "serv"
            , function ($scope, serv) {
                var team = new Team("Souls Crusaders", 100, 0, "Dark Souls");

                var player1 = new Player("Kelvin", "player1", "Magician", 90, 110);
                var player2 = new Player("Lluis", "player2", "Paladin", 10, 30);
                var player3 = new Player("Danyl", "player3", "Warrior", 210, 400);
                var player4 = new Player("Marc", "player4", "Warrior", 910, 200);

                team.addPlayer(player1);
                team.addPlayer(player2);
                team.addPlayer(player3);
                team.addPlayer(player4);

                $scope.team = team;

                $scope.newTeam = {};
                $scope.newPlayer = {};

                serv.addTeam(team);

                var team1 = new Team("Profes", 200, 0, "Stucom");
                var prof1 = new Player("Cristian", "prof1", "FrontEnd", 90, 110);
                var prof2 = new Player("Alfredo", "prof2", "BackEnd", 10, 30);
                var prof3 = new Player("Lluis", "prof3", "Servidores", 210, 400);
                var prof4 = new Player("Diana", "prof4", "Tutora", 910, 200);

                $scope.team1 = team1;

                team1.addPlayer(prof1);
                team1.addPlayer(prof2);
                team1.addPlayer(prof3);
                team1.addPlayer(prof4);

                serv.addTeam(team1);


                $scope.teamList = serv.teamList;
                $scope.createTeam = function () {
                    if ($scope.newTeam.name !== undefined) {
                        var team = new Team($scope.newTeam.name, $scope.newTeam.victories, $scope.newTeam.defeats, $scope.newTeam.game);
                        serv.addTeam(team);
                    }
                };
                $scope.createPlayer = function () {
                    if ($scope.teamList[$scope.activeTeam] !== undefined && $scope.newPlayer.nickname !== undefined) {
                        var player = new Player($scope.newPlayer.name, $scope.newPlayer.nickname, $scope.newPlayer.position, $scope.newPlayer.points);
                        if ($scope.teamList[$scope.activeTeam].players[player.nickname] === undefined) {
                            $scope.teamList[$scope.activeTeam].addPlayer(player);
                        } else {
                            $scope.teamList[$scope.activeTeam].players[player.nickname] = player;
                        }
                    }
                };
            }]);