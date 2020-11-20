import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { AppState, 
         getRepositories, 
         getRepositoriesLoaded, 
         getError,
         getNameCounts,
         getUserCounts,
         getTopicCounts,
         getTotalCounts
        } from 'src/app/state/repo.reducer';
import * as actions from '../../state/repo.actions';

@Component({
  selector: 'app-search-and-list',
  templateUrl: './search-and-list.component.html',
  styleUrls: ['./search-and-list.component.css']
})
export class SearchAndListComponent implements OnInit {
  
  repositories$: Observable<any>;
  loading=null;
  error$ = null;
  count_user$=null;
  count_name$=null;
  count_topic$=null;
  total_count$=null;
  loaded=false;

  constructor(
    private store: Store<AppState>,
    private navigate : NavigationService)
    {}

  ngOnInit()
  {
    this.loading= null;
    this.store.select(getRepositoriesLoaded).subscribe(loaded=>{
      if(loaded) 
      {
        this.loading=false;
        this.loaded=true;
      }
    });
  }
  
  chooseRepository(repository)
  {
      this.store.dispatch(new actions.LoadChoosenRepository(repository));
      this.navigate.navigateTo("/search-and-list/repository-details")
  }


  searchUser(input) {
    this.loading=true;
    if (input==='') {
      alert("Please enter a search keyword");
    } 
    else {
      input = input.split(' ').join('+');
      this.store.dispatch(new actions.LoadRepositories(input));
      
      this.repositories$ = this.store.pipe(select(getRepositories)); 
      this.error$ = this.store.pipe(select(getError));
      this.count_name$ = this.store.pipe(select(getNameCounts));
      this.count_user$ = this.store.pipe(select(getUserCounts));
      this.count_topic$= this.store.pipe(select(getTopicCounts));
      this.total_count$ = this.store.pipe(select(getTotalCounts));
    }
  }
}
