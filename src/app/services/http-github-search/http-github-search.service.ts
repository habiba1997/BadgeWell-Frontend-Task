import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HTTPGithubSearchService {
      
  
      Host ="http://api.github.com";
    
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
          let url = this.Host+"/search/repositories?q="+repoName;
          return this.http.get<any>(url);
        }
        
        getReposByUser(username:string){
          let url = this.Host + "/users/"+username+"/repos";
          return this.http.get<any>(url);
        }

        getReposByTopic(topic:string){
          let url = this.Host + "/search/repositories?q=topic:"+topic;
          return this.http.get<any>(url);
        }

      
}
