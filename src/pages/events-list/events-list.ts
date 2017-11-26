import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';
import { ConcertPage } from '../concert/concert';

@IonicPage()

@Component({
  selector: 'page-events-list',
  templateUrl: 'events-list.html',
})

export class EventsListPage {

  gamesTab = GamePage;
  concertTab = ConcertPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsListPage');
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}