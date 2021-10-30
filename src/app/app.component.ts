import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private screenOrientation: ScreenOrientation) {
    this.getCurrentScreenOrientation();
  }
  // Get the current screen orientation such landscape or Portrait
  getCurrentScreenOrientation(){
    console.log(this.screenOrientation.type);
  }

  // Lock the screen orientation to portrait
  lockScreenOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
