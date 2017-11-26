import { ToastService } from './toast.service';
import { Event, EventJoined } from './../models/event.model';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EventService {


    private eventsRef = this.db.list<Event>('events');
    private eventJoinedRef = this.db.list<EventJoined>('event-joined');

    constructor(
        private db: AngularFireDatabase,
    ) { }

    getTodaysEvents() {
        return this.eventsRef;
    }

    getEventsByUser(user: string) {
        return this.db.list<EventJoined>('events-joined',
            ref => ref.orderByChild('username')
                .equalTo(user))


    }

    getEventById(id) {
        return this.db.object('/events/' + id).valueChanges();
    }

    AddEvent(event: Event) {
        return this.eventsRef.push(event);
    }

    getAllEvents() {
        return this.eventsRef;
    }

    joinEvent(event: Event, user: string) {
        let eventToJoin = new EventJoined();

        eventToJoin.eventKey = event.key,
            eventToJoin.username = user;

        var key = this.eventJoinedRef.push(eventToJoin).key;
        this.db.object('/event-joined/' + key).update({
            key: key
        })
    }

    leaveEvent(event: Event) {

        return this.db.object('/event-joined/' + event.key).remove();

    }

    likeEvent(event: Event) {
    }


}