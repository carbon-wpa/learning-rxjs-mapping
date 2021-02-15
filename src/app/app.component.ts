import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('input1') input1;

  @ViewChild('input2') input2;

  input1$: Observable<any>;
  input2$: Observable<any>;


  constructor() {
  }

  ngAfterViewInit(): void {
    this.input1$ = fromEvent(this.input1.nativeElement, 'keydown');
    this.input2$ = fromEvent(this.input2.nativeElement, 'keydown');

    this.input1$
      .pipe(
        map(event => event.target.value),
        mergeMap(
          value => this.input2$.pipe(
            map(event2 => value + ' ---- ' + event2.target.value)
          )
        )
      )
      .subscribe(
        console.log
      );

  }

}
