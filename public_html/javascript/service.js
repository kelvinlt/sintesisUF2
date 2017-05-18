app.service("serv", function () {
    this.teamList = [];

    this.addTeam = function (team) {
        this.teamList.push(team);
    };

});

function Player(name,nickname,position,points){
    this.name=name;
    this.nickname=nickname;
    this.position=position;
    this.points=points;
    
    this.setName = function (name) {
        this.name = name;
    };
    this.setNickname = function (nickname) {
        this.nickname = nickname;
    };
    this.setPosition = function (position) {
        this.position = position;
    };
    this.setPoints = function (points) {
        this.points = points;
    };
    
};
function Team(name, victories, defeats, game){
    this.name = name;
    this.victories = victories;
    this.defeats = defeats;
    this.game = game;
    
    this.players = {};
    this.setName = function (name) {
        this.name = name;
    };
    this.setVictories = function (victories) {
        this.victories = victories;
    };
    this.setDefeats = function (defeats) {
        this.defeats = defeats;
    };
    this.setType = function (type) {
        this.type = type;
    };
    this.addPlayer = function (player) {
        this.players[player.nickname] = player;
    };
    this.getPlayer = function (nick) {
        return this.players[nick];
    };
    
}