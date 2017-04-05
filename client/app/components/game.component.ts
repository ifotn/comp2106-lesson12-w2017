/**
 * Created by RFreeman on 3/29/2017.
 */
import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
    selector: 'game',
    templateUrl: '/app/views/game.html',
    providers: [ GameService ]
})

export class GameComponent {
    games: Array<any>;
    _id: string;
    title: string;
    developer: string;
    genre: string;
    year: number;

    constructor(private gameService: GameService) {
        this.getGames();
    }

    // get games
    getGames() {
        this.gameService.getGames().subscribe(response => {
            this.games = response;
        });
    }

    // add
    addGame() {
        let newGame = {
            title: this.title,
            developer: this.developer,
            genre: this.genre,
            year: this.year
        };

        this.gameService.addGame(newGame).subscribe(response => {
            //this.games.push(response.game);
            this.getGames();
            this.clearForm();
        })
    }

    // clear form
    clearForm() {
        this.title = null;
        this.developer = null;
        this.genre = null;
        this.year = null;
        this._id = null;
    }

    // delete
    deleteGame(_id) {
        if (confirm('Are you sure???')) {
            this.gameService.deleteGame(_id).subscribe(response => {
                this.getGames();
            })
        }
    }

    // select
    selectGame(game) {
        this.title = game.title;
        this.developer = game.developer;
        this.genre = game.genre;
        this.year = game.year;
        this._id = game._id;
    }

    // update
    updateGame() {
        let game = {
            _id: this._id,
            title: this.title,
            developer: this.developer,
            genre: this.genre,
            year: this.year
        };

        this.gameService.updateGame(game).subscribe(response => {
            this.getGames();
            this.clearForm();
        });
    }
}
