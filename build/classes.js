"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, health) {
        this.name = name;
        this.health = health;
        Player.players.push(this);
    }
    Player.getPlayers = function () {
        return this.players;
    };
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    Player.prototype.damage = function (amount, damager) {
        var updatedHealth = this.health - amount;
        console.log(damager ? "".concat(damager.getName(), " deu ").concat(amount, " de dano em ").concat(this.name) : "".concat(this.name, " tomou ").concat(amount, " de dano"));
        if (updatedHealth <= 0) {
            this.health = 0;
            this.die();
            return;
        }
    };
    Player.prototype.die = function (damager) {
        if (damager) {
            console.log(this.name, "foi morto por ", damager.getName());
        }
        console.log(this.name, "Morreu");
    };
    Player.players = [];
    return Player;
}());
exports.Player = Player;
var murilo = new Player("Murilo", 20);
var gusavo = new Player("Gustavo", 35);
console.log(Player.getPlayers());
