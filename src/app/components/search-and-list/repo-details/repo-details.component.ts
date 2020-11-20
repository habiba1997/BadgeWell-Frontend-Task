import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { getChoosenRepository } from 'src/app/state/repo.reducer';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  
  faCodeBranch=faCodeBranch;
  constructor(
    private navigate: NavigationService,
    private store: Store<AppState>
  ) 
  {}

  repository$;

  ngOnInit() {
    this.repository$ = this.store.pipe(select(getChoosenRepository));
  }


  back()
  {
    this.navigate.navigateTo("/search-and-list");
  }

  

}
