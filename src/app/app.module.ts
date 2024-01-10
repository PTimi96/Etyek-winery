import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabGroupingComponent } from './tab-grouping/tab-grouping.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabGroupingComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
