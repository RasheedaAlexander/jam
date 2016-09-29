// NgModule takes a metadata object that tells Angular how to compile and run module code
import { NgModule }      from '@angular/core';
// The metadata (thst tells Angular how to compile & run module code)imports helper modules, mainly BrowserModule,
  // browsermodule is the module every browser app must import
    // registers critical application service providers
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import { AppComponent }  from './app.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

// Modules help organize app into cohesive blocks of functionality

// declarations list identifies the application's only component, the root component, the top of this app's rather bare component tree

// @NgModule decorator defines the metadata for the module
  // it tells Angular how to compile and run module code
  // register providers by importing other NgModules to root NgModule
@NgModule({
  // define modules components and directives
  // make them public so external components (templates) can use them
  imports: [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent ],
    // @NgModule.bootstrap property identifies this AppComponent as the bootstrap component
    // declarations list identifies the application's only component, the root component, the top of this app's rather bare component tree
    bootstrap: [ AppComponent ]
  })
  export class AppModule { }
