/**
 * Created by RFreeman on 3/29/2017.
 */
// dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './components/game.component';

@NgModule ({
    declarations: [ GameComponent ],
    imports: [ BrowserModule, HttpModule, FormsModule ],
    providers: [],
    bootstrap: [ GameComponent ]
})

export class AppModule {}



