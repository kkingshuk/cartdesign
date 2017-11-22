import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiDataService {

  constructor(
    private http: Http
  ) { }
  public fetchData(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').map(
      (response) =>response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }
}
