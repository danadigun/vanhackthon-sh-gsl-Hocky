import { PopupService } from './popup.service';
import { EventList } from './../models/eventlist.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { RewardModel } from './../models/reward.model'
import { RewardDetailsPageModule } from '../pages/reward-details/reward-details.module';
import { Event } from "../models/event.model"
import { AuthService } from './auth.service';
import { Player } from '../models/player.model';
import { Match } from '../models/match.model';
import { platformBrowser } from '@angular/platform-browser/src/browser';

@Injectable()
export class EarnService {
    constructor(
        private db: AngularFireDatabase,
        private authService: AuthService,
        private alert : PopupService
    ) { }
    private rewardModel: RewardModel = new RewardModel();
    private rewardsRef = this.db.list<RewardModel>('rewards');

    addRewardFromEvent(event: Event) {
        this.rewardModel.place = event.name;
        this.rewardModel.key = this.authService.getActiveUser().email;
        this.rewardModel.date = Date.now();
        this.rewardModel.point = 30;

        console.log(this.rewardModel)
        this.rewardsRef.push(this.rewardModel);

        this.isRewardMax();
    }

    addRewardFromRatePlayer(players: Player[]) {
        players.forEach(player => {

            this.rewardModel.place = player.name,
                this.rewardModel.key = this.authService.getActiveUser().email,
                this.rewardModel.date = Date.now(),
                this.rewardModel.point = 5,

                console.log('Player :::' + this.rewardModel)
            this.rewardsRef.push(this.rewardModel);
        });

        this.isRewardMax();
    }

    addRewardFromMatch(match: Match) {
        this.rewardModel.place = match.name;
        this.rewardModel.key = this.authService.getActiveUser().email;
        this.rewardModel.date = Date.now();
        this.rewardModel.point = 5;

        console.log(this.rewardModel)
        this.rewardsRef.push(this.rewardModel);

        this.isRewardMax();
    }

    addRewardFromEventList(event: EventList) {
        this.rewardModel.place = event.title;
        this.rewardModel.key = this.authService.getActiveUser().email;
        this.rewardModel.date = Date.now();
        this.rewardModel.point = 30;

        console.log(this.rewardModel)
        this.rewardsRef.push(this.rewardModel);

        this.isRewardMax();
    }

    isRewardMax(){
       let allRewards = this.rewardsRef;
       
       let sumOfPoints = 0;
       allRewards.valueChanges().subscribe(rewards => {
           rewards.forEach(reward => {
               //sum points
               sumOfPoints = sumOfPoints + reward.point;
           })

           //check if points is 100
           if(sumOfPoints >= 200){
               //alert user to take selfie
               this.alert.show('Max Reward!!', "Hurray!! You have reached above 200 points!! As a reward take a selfie and we'll show the world!!!");
           }
       })
    }
}