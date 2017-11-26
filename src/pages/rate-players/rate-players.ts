import { Player } from './../../models/player.model';
import { Match } from './../../models/match.model';
import { MatchService } from './../../services/match.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { EarnService } from '../../services/earn.service';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-rate-players',
  templateUrl: 'rate-players.html',
})

export class RatePlayersPage implements OnInit {
  match: Match
  arrPlayers: Player[] = [];

  constructor(
    public matchService: MatchService,
    public earnService: EarnService,
    private toastService: ToastService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.matchService.getMatch()
      .subscribe(
      data => {
        this.match = data
      }
      )
  }

  rate(p: Player, rate: number) {
    p.rate = rate;
    this.arrPlayers.push(p)
  }

  rateMatch(rate: number) {
    console.log(rate);
    this.match.rate = rate;
  }

  saveRatings() {
    this.earnService.addRewardFromRatePlayer(this.arrPlayers);
    this.earnService.addRewardFromMatch(this.match);
    this.toastService.show("Thank You for enjoy it - You Gain Reward Point", 5000);
    this.navCtrl.setRoot(HomePage);
  }

  public mat = 'match';
}
