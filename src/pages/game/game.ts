import { ToastService } from './../../services/toast.service';
import { EarnService } from './../../services/earn.service';
import { SigninPage } from './../signin/signin';
import { AuthService } from './../../services/auth.service';
import { PopupService } from './../../services/popup.service';
import { Event } from './../../models/event.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { EventListService } from '../../services/event-list.service';
import { Observable } from 'rxjs/Observable';
import { EventList } from '../../models/eventlist.model';
import { Event } from '../../models/event.model';
import { EarnService } from '../../services/earn.service';
import { ToastService } from '../../services/toast.service';

@IonicPage()

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})

export class GamePage {
  eventlist$: Observable<EventList[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventService : EventService,
    public alert : PopupService,
    public toast : ToastService,
    public authService : AuthService,
    public earnService : EarnService,
    public eventlistService : EventListService
    ) {

    this.getData();

    //check for authentication
    this.authService.user$.subscribe(user => {
      if(user) return;
      this.navCtrl.setRoot(SigninPage)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  getData() {
    console.log('getdata');
    this.eventlist$ = this.eventlistService
      .getGameInfo()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  join(eventList: EventList){
    console.log('Clicked on Join ', eventList);

    let event: Event = {
      name: eventList.title,
      eventType: eventList.key.split('-')[0],
      description: eventList.desc,
      date: eventList.date,
      imgUrl: eventList.img,
      comments: 15,
      likes: 2,
      liked: false,
      checkedIn: false,
    };

    this.
      .AddEvent(event);
    this.earnService.addRewardFromEvent(event);
    this.alert.show('Points Earned', 'You have just earned 30 points');

    this.toast.show(`You have joined the ${event.name} event!!`)
  }

}
