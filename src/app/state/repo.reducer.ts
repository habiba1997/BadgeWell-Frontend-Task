import * as actions from "./repo.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as appstate from "./app-state";
import { Repository } from '../model/repo.model';
import * as actionTypes from "./repo.action-types";

export interface RepsoitoryState  {
  repositories: Repository[],
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends appstate.AppState {
  repositories: RepsoitoryState;
}

export const defaultRepository:  RepsoitoryState = {
  repositories: [],
  loading: false,
  loaded: false,
  error: ""
};

export function repositoryReducer(
        state = defaultRepository,
        action: actions.Actions
        ): RepsoitoryState 
{
        switch (action.type) {
            case actionTypes.RepositoryActionTypes.LOAD_REPOSITORIES_SUCCESS: 
            {
                return {
                    ...state,
                    repositories: action.payload,
                    loading: false,
                    loaded: true,
                };
            }
            case actionTypes.RepositoryActionTypes.LOAD_REPOSITORIES_FAIL: {
            return {
                ...state,
                repositories: [],                
                loading: false,
                loaded: false,
                error: action.payload
            };
            }

            default: {
            return defaultRepository;
            }
  }
}

const getRepositoriesFeatureState = createFeatureSelector<RepsoitoryState>(
  "repositories"
);

export const getRepositories = createSelector(
  getRepositoriesFeatureState,
  (state:RepsoitoryState) => state.repositories
);

export const getRepositoriesLoading = createSelector(
  getRepositoriesFeatureState,
  (state: RepsoitoryState) => state.loading
);

export const getRepositoriesLoaded = createSelector(
  getRepositoriesFeatureState,
  (state: RepsoitoryState) => state.loaded
);

export const getError = createSelector(
  getRepositoriesFeatureState,
  (state: RepsoitoryState) => state.error
);


