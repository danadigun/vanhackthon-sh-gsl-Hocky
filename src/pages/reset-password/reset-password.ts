import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormControl } from "@angular/forms/src/model";
import { ResetPasswordCodePage } from '../reset-password-code/reset-password-code';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

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

    this.auth.sendPasswordReset(f.value.email)
      .then(data => {
        load.dismiss();
        this.handleSuccess();
        this.navCtrl.push(ResetPasswordCodePage);
      })
      .catch((error) => {
        load.dismiss();
        this.handleError(error.message);
      });
  }

  handleSuccess() {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      message: 'Password reset code sent to your e-mail.',
      buttons: ['Ok']
    });
    alert.present();
  }

  handleError(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Reset password error!',
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }

}
