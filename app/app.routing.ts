// Enable navigation from one view to the next as user performs application tasks
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

// an array of routes that describe how to navigate. Each route maps a URL path to a component
const appRoutes: Routes = [
    {path:'', component: SearchComponent},
    {path:'artist/:id', component: ArtistComponent},
    {path:'album/:id', component: AlbumComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
