
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {
    constructor(
        public http: Http
    ) {

    }

    getMatch() {
        return this.http.get("assets/data-samples.json")
            .map(
            response => response.json().match
            )
    }

}