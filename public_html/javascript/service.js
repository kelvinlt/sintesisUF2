app.service("serv", function () {
    this.teamList = [];

    this.addTeam = function (team) {
        this.teamList.push(team);
    };

});

function Team(name, victories, defeats, game){
    this.name = name;
    this.victories = victories;
    this.defeats = defeats;
    this.game = game;
    
    
}