import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feladat';
  deviceInfo = true;

    constructor(private deviceService: DeviceDetectorService) {
      this.epicFunction()
    }
    epicFunction() {
      this.deviceInfo = this.deviceService.isMobile();
    }

}
