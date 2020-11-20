import { Action } from "@ngrx/store";
import { Repository } from '../model/repo.model';
import { RepositoryActionTypes } from './repo.action-types';

export class LoadRepositories implements Action {
  readonly type = RepositoryActionTypes.LOAD_REPOSITORIES;

  constructor(public payload: string) {}
}

export class LoadChoosenRepository implements Action {
  readonly type = RepositoryActionTypes.LOAD_CHOOSEN_REPOSITORY;

  constructor(public payload: Repository) {}
}

export class LoadRepositoriesSuccess implements Action {
  readonly type = RepositoryActionTypes.LOAD_REPOSITORIES_SUCCESS;

  constructor(public payload) {}
}

export class LoadRepositoriesFail implements Action {
  readonly type = RepositoryActionTypes.LOAD_REPOSITORIES_FAIL;
  constructor(public payload) {}
}

export type Actions = 
                    LoadRepositories |  
                    LoadRepositoriesSuccess | 
                    LoadRepositoriesFail | 
                    LoadChoosenRepository
