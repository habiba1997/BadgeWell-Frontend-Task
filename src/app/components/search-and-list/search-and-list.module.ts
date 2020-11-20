import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatCommonModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatListModule} from '@angular/material/list'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 

import { SearchAndListComponent } from './search-and-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { HTTPGithubSearchService } from 'src/app/services/http-github-search/http-github-search.service';
import { CommonModule } from '@angular/common';
import { RepoDetailsEnterGaurd } from 'src/app/gaurds/repo-detail-gaurd';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



const routes: Routes = [
  {
    path: '',
    component: SearchAndListComponent
  },
  {
    path: 'search-and-list',
    component: SearchAndListComponent
  },
  {
    path: 'repository-details',
    component: RepoDetailsComponent,
    canActivate: [RepoDetailsEnterGaurd]

  }
]


@NgModule({
  declarations: [
    SearchAndListComponent,
    RepoDetailsComponent
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatCommonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  providers: [,
    NavigationService,
    HTTPGithubSearchService,
    RepoDetailsEnterGaurd
  ],
})
export class SearchAndListModule { }
