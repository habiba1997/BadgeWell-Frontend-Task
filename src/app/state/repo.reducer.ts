import * as actions from "./repo.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as appstate from "./app-state";
import { Repository } from '../model/repo.model';
import * as actionTypes from "./repo.action-types";

export interface RepsoitoryState  {
  repositories: Repository[];
  choosenRepository: Repository;
  choosenRepositoryUploaded:boolean;
  count_name_repos: number;
  count_user_repos: number;
  count_topic_repos:number;
  loaded: boolean;
  error: string;
}

export interface AppState extends appstate.AppState {
  repositories: RepsoitoryState;
}

export const defaultRepository:  RepsoitoryState = {
  repositories: [],
  choosenRepository:null,
  choosenRepositoryUploaded: false,
  count_name_repos:null,
  count_user_repos:null,
  count_topic_repos:null,
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
                let search_name_result = action.payload[0];
                let search_user_result = action.payload[1];
                let search_topic_result = action.payload[2];
                return{
                    ...state,
                    repositories: search_name_result.items
                                    .concat(search_user_result)
                                    .concat(search_topic_result.items),      
                    count_name_repos: search_name_result.total_count,
                    count_user_repos: search_user_result.length,
                    count_topic_repos: search_topic_result.total_count,
                    loaded: true,
                    error:null
                };
            }
            case actionTypes.RepositoryActionTypes.LOAD_REPOSITORIES_FAIL: {
            return {
                ...state,
                repositories: [],                
                loaded: true,
                error: action.payload.name+": "+ action.payload.error.message
              };
            }
            case actionTypes.RepositoryActionTypes.LOAD_CHOOSEN_REPOSITORY: {
              return{
                ...state,
                loaded:false,
                choosenRepository: action.payload,
                choosenRepositoryUploaded: true           
              }
            }
            default: 
            {
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
export const getChoosenRepository = createSelector(
  getRepositoriesFeatureState,
  (state:RepsoitoryState) => state.choosenRepository
);

export const getChoosenRepositoryUploaded = createSelector(
  getRepositoriesFeatureState,
  (state:RepsoitoryState) => state.choosenRepositoryUploaded
);

export const getNameCounts = createSelector(
  getRepositoriesFeatureState,
  (state:RepsoitoryState) => state.count_name_repos);
   

export const getTopicCounts = createSelector(
  getRepositoriesFeatureState,
  (state:RepsoitoryState) =>state.count_topic_repos);


export const getUserCounts = createSelector(
  getRepositoriesFeatureState,
  (state:RepsoitoryState) => state.count_user_repos);

export const getTotalCounts = createSelector(
  getRepositoriesFeatureState,
  (state:RepsoitoryState) => 
  (state.count_name_repos+state.count_user_repos+state.count_topic_repos));
  


export const getRepositoriesLoaded = createSelector(
  getRepositoriesFeatureState,
  (state: RepsoitoryState) => state.loaded
);

export const getError = createSelector(
  getRepositoriesFeatureState,
  (state: RepsoitoryState) => state.error
);


