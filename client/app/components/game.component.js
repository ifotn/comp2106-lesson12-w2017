"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by RFreeman on 3/29/2017.
 */
var core_1 = require("@angular/core");
var game_service_1 = require("../services/game.service");
var GameComponent = (function () {
    function GameComponent(gameService) {
        this.gameService = gameService;
        this.getGames();
    }
    // get games
    GameComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getGames().subscribe(function (response) {
            _this.games = response;
        });
    };
    // add
    GameComponent.prototype.addGame = function () {
        var _this = this;
        var newGame = {
            title: this.title,
            developer: this.developer,
            genre: this.genre,
            year: this.year
        };
        this.gameService.addGame(newGame).subscribe(function (response) {
            _this.games.push(newGame);
            _this.clearForm();
        });
    };
    // clear form
    GameComponent.prototype.clearForm = function () {
        this.title = null;
        this.developer = null;
        this.genre = null;
        this.year = null;
    };
    return GameComponent;
}());
GameComponent = __decorate([
    core_1.Component({
        selector: 'game',
        templateUrl: '/app/views/game.html',
        providers: [game_service_1.GameService]
    }),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map