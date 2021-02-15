import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public http: HttpClient) {
  }

  public onBtnClick(): void {
    this.http.get('https://60295804289eb50017cf796d.mockapi.io/testData')
      .pipe(
        mapTo(true)
      )
      .subscribe(
        console.log
      );
  }
}
