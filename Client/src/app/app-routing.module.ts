import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MusicComponent } from './music/music.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'Home', component: HomeComponent,},
  {path: 'LogIn', component: LoginComponent},
  {path: 'Registration', component: RegistrationComponent},
  {path: 'Music/music', component: MusicComponent},
  {path: 'Music/addSong', component: AddSongComponent, canActivate:[AuthGuard]},
  {path: 'Music/addReview/:id', component: AddReviewComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
