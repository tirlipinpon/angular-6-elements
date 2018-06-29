import {Component, Injector, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {CommonServiceService} from '../services/common-service.service';

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
      dummy data = {{dummy}}
    </div>
    <div>
      <pre>{{data$ | async | json}}</pre>
      <button (click)="getData()">get data from service</button>
      <button (click)="auth()">auth</button>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  AppInjector: Injector;

  @Input()
  set counter(counter: number) {
    this._counter = counter;
  }

  get counter(): number {
    return this._counter;
  }

  _counter = 1;
  data$: Observable<any>;
  dummy: string;

  constructor( // private authService: AuthService,
    private commonServiceService: CommonServiceService,
    injector: Injector) {
    this.setAppInjector(injector);
  }

  ngOnInit() {
  }

  getData() {
    this.data$ = this.commonServiceService.getData(this.counter);
  }

  increase() {
    this.counter++;
  }

  descrease() {
    this.counter--;
  }

  auth() {
    const appLoadService = this.AppInjector.get(AuthService);
    console.log(appLoadService);
    // this.authService.login();
  }

  setAppInjector(injector: Injector) {
    if (this.AppInjector) {
      // Should not happen
      console.error('Programming error: AppInjector was already set');
    } else {
      this.AppInjector = injector;
    }
  }
}
