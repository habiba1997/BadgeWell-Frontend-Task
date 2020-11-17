import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { AppState, getRepositories } from 'src/app/state/repo.reducer';
import * as actions from '../../state/repo.actions';

@Component({
  selector: 'app-search-and-list',
  templateUrl: './search-and-list.component.html',
  styleUrls: ['./search-and-list.component.css']
})
export class SearchAndListComponent implements OnInit {

  constructor(
    private store: Store<AppState>

  ) { }

  ngOnInit() {
  }

  repositories$: Observable<any>;
  
  searchUser($input) {
    if ($input=== '') {

    } else {
      this.store.dispatch(new actions.LoadRepositories("localization"));
      this.repositories$ = this.store.pipe(select(getRepositories));
      // setTimeout(()=>{ 
      //   console.log("repos:");
      //   this.repositories$.subscribe(data=>{
      //     console.log((data));
      //   })
      //   }, 5000);
     
    }
    console.log($input);
  }
}
