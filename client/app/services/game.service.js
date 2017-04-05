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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GameService = (function () {
    // when an instance of this class is created
    function GameService(http) {
        this.http = http;
    }
    // get Games
    GameService.prototype.getGames = function () {
        return this.http.get('/api').map(function (response) { return response.json(); });
    };
    // add
    GameService.prototype.addGame = function (newGame) {
        // set up a header to specify json content type
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api', JSON.stringify(newGame), { headers: headers }).map(function (response) {
            response.json();
        });
    };
    // delete
    GameService.prototype.deleteGame = function (_id) {
        return this.http.delete('/api/' + _id).map(function (response) {
            response.json();
        });
    };
    // update
    GameService.prototype.updateGame = function (game) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/' + game._id, JSON.stringify(game), { headers: headers }).map(function (response) {
            response.json();
        });
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map