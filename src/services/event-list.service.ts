import { ToastService } from './toast.service';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import { AngularFireDatabase } from 'angularfire2/database';
import { EventList } from '../models/eventlist.model';

@Injectable()
export class EventListService {
    private eventlistRef = this.db.list<EventList>('event-list');
    private eventListGameRef = this.db.list<EventList>('event-list', ref => ref.orderByKey().startAt('game-'));
    private eventListConcertRef = this.db.list<EventList>('event-list', ref => ref.orderByKey().startAt('concert-'));

    constructor(
        private db: AngularFireDatabase,
        private toast: ToastService
    ) { }

    getGameInfo() {
        console.log(this.eventListGameRef);
        return this.eventListGameRef;
    }

    getConcertInfo() {
        return this.eventListConcertRef;
    }
}