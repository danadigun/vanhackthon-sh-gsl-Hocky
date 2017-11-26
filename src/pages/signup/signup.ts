import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';
import { FormControl } from "@angular/forms/src/model";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
    public auth: AuthService,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
  ) { }

  onSubmit(f: FormControl) {
    const load = this.loadCtrl.create({
      content: "Wait..."
    });

    load.present();

    this.auth.singup(f.value.email, f.value.password)
      .then(data => load.dismiss())
      .catch((error) => {
        load.dismiss();
        this.handleError(error.message);
      }
      );
  }

  handleError(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Sing Up error',
      message: message,
      buttons: ['Ok']
    });
  }

}
