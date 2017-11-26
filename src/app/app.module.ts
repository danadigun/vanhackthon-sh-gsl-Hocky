
import { RatePlayersPage } from './../pages/rate-players/rate-players';
import { RatingComponent } from './../components/rating/rating';

import { PopupService } from './../services/popup.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from './firebase.credentials';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { EventsListPage } from './../pages/events-list/events-list';
import { GamePage } from './../pages/game/game';
import { HomePage } from '../pages/home/home';
import { CommentsPage } from '../pages/comments/comments';
import { ListPage } from '../pages/list/list';
import { RewardPage } from '../pages/reward/reward';
import { ConcertPage } from '../pages/concert/concert';
import { RewardDetailsPage } from '../pages/reward-details/reward-details';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { ResetPasswordPage } from './../pages/reset-password/reset-password';
import { ResetPasswordCodePage } from './../pages/reset-password-code/reset-password-code';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { RewardModel } from '../models/reward.model';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MatchService } from './../services/match.service';
import { EventService } from "../services/event.service";
import { RewardService } from "../services/reward.service";
import { ToastService } from '../services/toast.service';
import { EarnService } from '../services/earn.service';
import { EventListService } from '../services/event-list.service';
import { AuthService } from './../services/auth.service';
import { LoadingService } from '../services/loading.service';
import { PopupService } from './../services/popup.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CommentsPage,
    ListPage,
    SigninPage,
    SignupPage,
    ResetPasswordPage,
    ResetPasswordCodePage,
    RewardPage,
    RewardDetailsPage,
    ConcertPage,
    GamePage,
    EventsListPage,
    RatingComponent,
    RatePlayersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CommentsPage,
    ListPage,
    SigninPage,
    SignupPage,
    ResetPasswordPage,
    ResetPasswordCodePage,
    RewardPage,
    RewardDetailsPage,
    ConcertPage,
    GamePage,
    EventsListPage,
    RatingComponent,
    RatePlayersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    EventService,
    RewardService,
    ToastService,
    MatchService,
    AngularFireAuth,
    EarnService,
    EventListService,
    LoadingService,
    PopupService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
