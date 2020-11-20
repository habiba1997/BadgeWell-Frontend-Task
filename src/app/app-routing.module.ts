import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', redirectTo: '/search-and-list', pathMatch: 'full' },
    { 
      path: 'search-and-list', 
      loadChildren: () => import('./components/search-and-list/search-and-list.module').then(mod => mod.SearchAndListModule)
    },
   
    { path: '**', component: PageNotFoundComponent }, 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule],
  providers: [],
  declarations:[PageNotFoundComponent]
})
export class AppRoutingModule { }

