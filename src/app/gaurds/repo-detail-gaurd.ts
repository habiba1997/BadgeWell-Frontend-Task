import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { AppState } from '../state/app-state';
import { getChoosenRepositoryUploaded } from '../state/repo.reducer';
import * as actionTypes from '../state/repo.action-types';

@Injectable({
    providedIn: 'root'
})
  
export class RepoDetailsEnterGaurd implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private navigate: NavigationService) {}

    canActivate() {
        let obj: any = this.store.select(getChoosenRepositoryUploaded);
        if(obj.actionsObserver._value.type === actionTypes.RepositoryActionTypes.LOAD_CHOOSEN_REPOSITORY)
        {
            return true;
        }
        else
        {
            window.alert("You currently don't have permissions to view this page");
            this.navigate.navigateTo("/search-and-list");
            return false;
        } 
        
    }
}
