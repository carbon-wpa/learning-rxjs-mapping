import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
        map((data: any) => data.map(item => item.name))
      )
      .subscribe(
        console.log
      );
  }
}
