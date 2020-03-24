import { Component } from '@angular/core';

import { SplashScreenService } from './services/splash-screen.service';

@Component({
    selector: 'blaze-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private splashScreenService: SplashScreenService) { }

}
