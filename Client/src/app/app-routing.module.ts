import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'LogIn', component: LoginComponent},
  {path: 'Music', component: MusicComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
