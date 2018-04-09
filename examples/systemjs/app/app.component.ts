import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { City } from './data/models/city';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  private data: Array<City>;

  constructor(private _http: Http) { 
    this.data = new Array<City>();
  }

  ngOnInit(): void {
    this._http.get("./assets/cities.json")
      .map(res => <Array<City>>res.json())
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data;
        }, 1000);
      });
   }   

   onUpdate(data: any) {
     this.data = data;
     console.log('Emitted: ' + data);
   }
}