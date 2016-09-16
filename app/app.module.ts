import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import { AppComponent }  from './app.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule { }
