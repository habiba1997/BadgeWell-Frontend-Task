import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError, flatMap, reduce } from "rxjs/operators";
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
      this.httpGithubSearchService.getReposByName(action.payload).pipe(
        // flatMap(data => data.items),
        map(
          (object) =>{
            return new actions.LoadRepositoriesSuccess(object.items);
          },
        // reduce((acc, x) => (acc instanceof Array) ? acc.push(x): [acc, x]);
        ),
        catchError(err => of(new actions.LoadRepositoriesFail(err)))
      )
    )
  );

 
}
