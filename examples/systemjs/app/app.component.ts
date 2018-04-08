import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  private data;

  constructor(private _http: Http) { }

  ngOnInit(): void {
    this.data = new Array<any>();
    this._http.get("app/cities.json")
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
          console.log(data[0]);
        }, 1000);
      });
   }   
}