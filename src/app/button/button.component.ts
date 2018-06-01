import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'custom-button',
  template: `
    <span>v:1.0.0</span>
    <div>
      <span>cpt: {{counter}}</span>
      <button (click)="increase()">inc</button>
      <button (click)="descrease()">dec</button>
    </div>
      <div>
        <pre>{{data$ | async | json}}</pre>
        <button (click)="getData()">get data</button>
      </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  @Input()
  set counter(counter: number) {
    this._counter = counter;
  }
  get counter(): number {
    return this._counter;
  }
  _counter = 1;
  data$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  getData() {  this.data$ =  this.http.get('https://jsonplaceholder.typicode.com/posts/' + this._counter); }
  increase() { this.counter++; }
  descrease() { this.counter--; }
}
