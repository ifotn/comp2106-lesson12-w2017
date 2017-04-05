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
            this.games.push(newGame);
            this.clearForm();
        })
    }

    // clear form
    clearForm() {
        this.title = null;
        this.developer = null;
        this.genre = null;
        this.year = null;
    }
}
