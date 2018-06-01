import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { ButtonComponent } from './button/button.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('custom-element', el);
  }
}
