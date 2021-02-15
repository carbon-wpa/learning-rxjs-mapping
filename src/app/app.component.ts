import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, Observable } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('button') button;

  btnClick$: Observable<any>;

  public clickedTimes = 0;

  constructor(public http: HttpClient) {
  }

  ngAfterViewInit(): void {
    this.btnClick$ = fromEvent(this.button.nativeElement, 'click');

    this.btnClick$
      .pipe(
        tap(() => this.clickedTimes++),
        exhaustMap(event => {
          console.log('----> ', event);
          return this.http.get('https://60295804289eb50017cf796d.mockapi.io/testData');
        })
      )
      .subscribe(console.log);
  }

}
