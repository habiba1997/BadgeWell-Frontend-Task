import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HTTPGithubSearchService {
      
  
      Host ="http://api.github.com/";
       "https://api.github.com/repos/{owner}/{repository_name}"
    
      constructor(
        private http:HttpClient) { 
      }
  
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin' :'*'
     
        })
      };
  
        getReposByName(repoName:string)
        {
          let url = this.Host+"search/repositories?q="+repoName;

          return this.http.get<any>(
          "http://api.github.com/search/repositories?q=localization");
        }
        
     

 
}
