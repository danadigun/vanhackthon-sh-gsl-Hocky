import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RewardService } from '../../services/reward.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

@IonicPage()

@Component({
  selector: 'page-reward-details',
  templateUrl: 'reward-details.html'
})

export class RewardDetailsPage implements OnInit {
  rewards$: Observable<Event[]>;

  constructor(public navCtrl: NavController,
    public rewardService: RewardService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.rewards$ = this.rewardService
      .getRewardsDetails(this.authService.getActiveUser().email)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardDetailsPage');
  }

}
