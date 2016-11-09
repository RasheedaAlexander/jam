import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '/app/components/artist/artist.component';
import {Album} from '/app/components/album/album.component';


@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers:[SpotifyService]
})
export class SearchComponent {
    searchStr:string;
    searchRes: Artist[];

    constructor(private _spotifyService:SpotifyService){

    }

    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            })
    }
}
