import { Component } from '@angular/core';
import { SignupPage } from './../signup/signup';
import { ResetPasswordPage } from './../reset-password/reset-password';
import { AuthService } from './../../services/auth.service';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormControl } from "@angular/forms/src/model";
import { HomePage } from '../home/home';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'signin.html',
})

export class SigninPage {

  constructor(
    public navCtrl: NavController,
    public auth: AuthService,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
  ) { }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

  onSubmit(f: FormControl) {
    let load = this.handleLoading();
    load.present();

    this.auth.signin(f.value.email, f.value.password)
      .then(() => {
        load.dismiss();
        this.navCtrl.push(HomePage);
        this.navCtrl.setRoot(HomePage)
      })
      .catch((error) => {
        load.dismiss();
        this.handleError(error.message);
      });
  }

  loginWithGoogle() {
    let load = this.handleLoading();
    load.present();
    this.auth.signinWhitgGoogle()
      .then(() => {
        load.dismiss();
        this.navCtrl.push(HomePage);
        this.navCtrl.setRoot(HomePage)
      })
      .catch((error) => {
        load.dismiss();
        this.handleError(error.message)
      });
  }

  loginWithFacebook() {
    let load = this.handleLoading();
    load.present();
    this.auth.signinWithFacebook()
      .then(() => {
        load.dismiss();
        this.navCtrl.push(HomePage);
        this.navCtrl.setRoot(HomePage)
      })
      .catch((error) => {
        load.dismiss();
        this.handleError(error.message)
      });
  }

  handleError(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Sing in Error .',
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  handleLoading() {
    return this.loadCtrl.create({
      content: "Wait..."
    });
  }

}
