import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiclientService {
  backendData;

  constructor(private http: Http) { }

  getData(url: string) {
    this.http.get(url)
        .map((response) => response.json())
        .subscribe((data) => this.backendData = data);
    return this.backendData;
  }
  postData(url: string, json: string) {}

}
