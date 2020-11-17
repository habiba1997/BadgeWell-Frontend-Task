import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatCommonModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatListModule} from '@angular/material/list'; 


import { SearchAndListComponent } from './search-and-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { HTTPGithubSearchService } from 'src/app/services/http-github-search/http-github-search.service';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { repositoryReducer } from "../../state/repo.reducer"
import { RepositoriesEffect } from "../../state/repo.effects";

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
    component: RepoDetailsComponent
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
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("repositories", repositoryReducer),
    EffectsModule.forFeature([RepositoriesEffect]),
    HttpClientModule,


  ],
  providers: [,
    NavigationService,
    HTTPGithubSearchService
  ]

})
export class SearchAndListModule { }
