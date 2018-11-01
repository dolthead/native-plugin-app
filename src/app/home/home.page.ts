import { Component } from '@angular/core';
import {Vibration} from '@ionic-native/vibration/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private vibration: Vibration, private socialSharing: SocialSharing){}

  vibrate() {
      this.vibration.vibrate(1000);
  }

  async share() {
    const result = await this.socialSharing.share(
        'Check out this awesome plugin app!',
        'Plugginz',
        '/assets/icon/favicon.png',
        'https://beta.ionicframework.com/docs/native/social-sharing'
    );
    console.log(result);
  }
}
