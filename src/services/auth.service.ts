import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    isAuthenticated: boolean = false;
    user$: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth,
        public firebase: AngularFireAuth
    ) {
        this.user$ = afAuth.authState;
    }

    singup(email: string, password: string) {
        return this.firebase.auth.createUserWithEmailAndPassword(email, password);
    }

    signin(email: string, password: string) {
        return this.firebase.auth.signInWithEmailAndPassword(email, password);
    }

    sendPasswordReset(email: string) {
        return this.firebase.auth.sendPasswordResetEmail(email);
    }

    confirmPasswordReset(code: string, newPassword: string) {
        return this.firebase.auth.confirmPasswordReset(code, newPassword);
    }

    signinWhitgGoogle() {

        return this.firebase.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    signinWithFacebook() {
        return this.firebase.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()).then(function () {
            this.firebase.auth.getRedirectResult()
        });
    }

    logout() {
        this.firebase.auth.signOut();
    }


    getActiveUser() {
        return this.firebase.auth.currentUser;
    }
}