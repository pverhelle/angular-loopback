import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SDKBrowserModule } from './shared/sdk/index';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
