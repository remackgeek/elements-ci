import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Injector } from '@angular/core';

import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello/hello.component';
import { AppComponent, RatingService } from './app.component';

@NgModule({
  declarations: [
    HelloComponent,
    AppComponent
  ],
  providers: [RatingService],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [HelloComponent, AppComponent],

})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {

    // const customElement = createCustomElement(AppComponent, { injector: this.injector });
    // customElements.define('my-app', customElement);

    const strategyFactory = new ElementZoneStrategyFactory(AppComponent, this.injector);
    const customElementWithStrat = createCustomElement(AppComponent, { injector: this.injector, strategyFactory });
    customElements.define('my-app', customElementWithStrat);
  }
}

