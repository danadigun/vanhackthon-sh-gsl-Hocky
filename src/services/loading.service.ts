import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {

    constructor(private loadingCtrl: LoadingController) {

    }

    show(message: string, duration: number = 3000) {
        return this.loadingCtrl.create({
            content: message,
            duration: duration
        }).present();
    }

}