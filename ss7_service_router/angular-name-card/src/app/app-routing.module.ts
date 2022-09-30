import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionayPageComponent} from "./dictionay-page/dictionay-page.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";


const routes: Routes = [
  // {
  //   path: 'youtube',
  //   component: YoutubePlaylistComponent,
  //   children: [{
  //     path: ':id',
  //     component: YoutubePlayerComponent
  //   }]
  // }
  // {path:"",component:DictionayPageComponent},
  // {path:"detail/:word",component:DictionaryDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
