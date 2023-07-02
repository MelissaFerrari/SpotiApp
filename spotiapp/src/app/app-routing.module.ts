import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import {HomeSpoComponent} from './components/home-spo/home-spo.component';
import{SearchComponent} from './components/search/search.component';
const routes: Routes = [

  {
     path: 'home',
      component: HomeSpoComponent,
  },
  {
      path:'artista/:id',
      component:ArtistaComponent,
  },
 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  
  {
    path:'search',
    component:SearchComponent,
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }