import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MusicComponent } from './music/music.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddSongComponent } from './add-song/add-song.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'LogIn', component: LoginComponent},
  {path: 'Registration', component: RegistrationComponent},
  {path: 'Music/music', component: MusicComponent},
  {path: 'Music/addSong', component: AddSongComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
