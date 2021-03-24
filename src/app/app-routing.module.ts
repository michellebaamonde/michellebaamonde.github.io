import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UncoverMoreComponent } from './pages/case-studies/uncover-more/uncover-more.component';
import { Pup101Component } from './pages/case-studies/pup-101/pup-101.component';
import { SpotifyComponent } from './pages/case-studies/spotify/spotify.component';
import { ClearSkyComponent } from './pages/case-studies/clearsky/clearsky.component';
import { PocketComponent } from './pages/case-studies/pocket/pocket.component';
import { TemplateComponent } from './pages/case-studies/template/template.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'uncover-more', component: UncoverMoreComponent },
  { path: 'pup-101', component: Pup101Component },
  { path: 'spotify', component: SpotifyComponent },
  { path: 'clearsky', component: ClearSkyComponent },
  { path: 'pocket', component: PocketComponent },
  { path: 'template', component: TemplateComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
