import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxWeekdayPickerModule } from 'ngx-weekday-picker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabGroupingComponent } from './tab-grouping/tab-grouping.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MobileMainContentComponent } from './mobile-main-content/mobile-main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabGroupingComponent,
    MobileHeaderComponent,
    MainContentComponent,
    MobileMainContentComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
    NgxWeekdayPickerModule
  ],
  providers: [DeviceDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
