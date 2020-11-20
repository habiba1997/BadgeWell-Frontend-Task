import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { forkJoin } from 'rxjs';
import { HTTPGithubSearchService } from '../services/http-github-search/http-github-search.service';
import * as actions from "./repo.actions";
import { RepositoryActionTypes }  from "./repo.action-types";
import { Repository } from '../model/repo.model';


@Injectable()
export class RepositoriesEffect {

  constructor(
    private actions$: Actions,
    private httpGithubSearchService: HTTPGithubSearchService
  ) {}

  @Effect()
  loadedRepositories$: Observable<Action> = this.actions$.pipe(
    ofType<actions.LoadRepositories>(RepositoryActionTypes.LOAD_REPOSITORIES),
    mergeMap((action: actions.LoadRepositories) =>
    forkJoin([
      this.httpGithubSearchService.getReposByName(action.payload),
      this.httpGithubSearchService.getReposByUser(action.payload),
      this.httpGithubSearchService.getReposByTopic(action.payload),
    ])
      .pipe(
        map(combinedObject=> new actions.LoadRepositoriesSuccess(combinedObject)),
        catchError(err => of(new actions.LoadRepositoriesFail(err)))
      )
    )
  );

 
}
