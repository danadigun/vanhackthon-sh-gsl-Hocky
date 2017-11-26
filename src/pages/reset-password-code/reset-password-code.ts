import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormControl } from "@angular/forms/src/model";
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-reset-password-code',
  templateUrl: 'reset-password-code.html',
})
export class ResetPasswordCodePage {

  constructor(
    public navCtrl: NavController,
    public auth: AuthService,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
  ) { }

  onSubmit(f: FormControl) {
    const load = this.loadCtrl.create({
      content: "Wait..."
    });

    load.present();

    this.auth.confirmPasswordReset(f.value.code, f.value.newPassword)
      .then(data => {
        load.dismiss();
        this.handleSuccess();
        this.navCtrl.push(SigninPage);
      })
      .catch((error) => {
        load.dismiss();
        this.handleError(error.message);
      });
  }

  handleSuccess() {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      message: 'New password created.',
      buttons: ['Ok']
    });
    alert.present();
  }

  handleError(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Error while reseting the password. Try again later.',
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }

}
