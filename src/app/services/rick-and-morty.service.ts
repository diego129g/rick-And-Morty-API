import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  [x: string]: any;
  

 
  httpOptions: any
  api_url = "https://rickandmortyapi.com/api"

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getAllCharacters(){
    return new Promise(resolve => {
      this.http.get(this.api_url+'/character',this.httpOptions).subscribe(res => {
        console.log(res);
        resolve(res);
      }, err=> {
        console.log(err)
      })
    })
  }
  getAllEpisodes(){
    return new Promise(resolve => {
      this.http.get(this.api_url+'/episode',this.httpOptions).subscribe(res1 => {
        console.log(res1);
        resolve(res1);
      }, err1=> {
        console.log(err1)
      })
    })
  }
  
}

 

