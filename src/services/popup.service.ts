import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class PopupService {

    constructor(private alert: AlertController) { }

    show(title: string, message: string) {
        this.alert.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        }).present();
    }

}