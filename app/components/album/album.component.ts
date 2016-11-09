import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '/app/components/artist/artist.component';
import {Album} from '/app/components/album/album.component';
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent {
    id:string;
    album:Album[];

    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute){

    }

     ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
            })
    }
}
