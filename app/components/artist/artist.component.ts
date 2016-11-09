//call {decorator} from module
import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '/app/components/artist/artist.component';
import {Album} from '/app/components/album/album.component';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

//decorators must be prefixed with an @
@Component({
    moduleId:module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit{
  // Initialize the directive/component after Angular 1st displays the data-bound properties and sets the directive/component's input properties
  // Called once, after the first ngOnChanges
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute){

    }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })

                this._spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })
            })
    }
}
//back button component
class AppCmp {
    constructor(private _location: Location) {
    }
    backClicked() {
        this._location.back();
    }
}
