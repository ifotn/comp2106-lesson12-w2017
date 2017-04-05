/**
 * Created by RFreeman on 3/29/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {responseInterceptor} from "angular-in-memory-web-api";

@Injectable()
export class GameService {

    // when an instance of this class is created
    constructor(private http: Http) {

    }

    // get Games
    getGames() {
        return this.http.get('/api').map(response => response.json());
    }

    // add
    addGame(newGame) {
        // set up a header to specify json content type
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api', JSON.stringify(newGame), { headers: headers }).map(response => {
            response.json();
        });
    }

    // delete
    deleteGame(_id) {
        return this.http.delete('/api/' + _id).map(response => {
            response.json();
        });
    }

    // update
    updateGame(game) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put('/api/' + game._id, JSON.stringify(game), { headers: headers }).map(response => {
            response.json();
        });
    }

}