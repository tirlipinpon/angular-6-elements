import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { ButtonComponent } from './button/button.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {CommonServiceService} from './services/common-service.service';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [AuthService, CommonServiceService],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('custom-element', el);
  }
}
