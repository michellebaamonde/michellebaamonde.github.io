import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';

import { HomeComponent } from './pages/home/home.component';
import { CaseCardComponent } from './pages/home/case-card/case-card.component';

import { UncoverMoreComponent } from './pages/case-studies/uncover-more/uncover-more.component';
import { Pup101Component } from './pages/case-studies/pup-101/pup-101.component';
import { SpotifyComponent } from './pages/case-studies/spotify/spotify.component';
import { TemplateComponent } from './pages/case-studies/template/template.component';

import { ParamsService } from './service/params.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CaseCardComponent,
    UncoverMoreComponent,
    Pup101Component,
    SpotifyComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [ParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
