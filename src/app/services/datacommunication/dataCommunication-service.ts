import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Repository } from 'src/app/model/repo.model';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  
  private behavioralsubjForRepository= new BehaviorSubject<Repository>(new Repository());
  observableForRepository =this.behavioralsubjForRepository.asObservable();


  sendRepository(repo){
    this.behavioralsubjForRepository.next(repo);
  }

}
