import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
    public authState: FirebaseAuthState = null;

    constructor(public auth$: FirebaseAuth) {
        auth$.subscribe((state: FirebaseAuthState) => {
            this.authState = state;
        });
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get id(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    signIn(provider: number, creds: any): firebase.Promise<FirebaseAuthState> {
        return this.auth$.login({
            provider,
            email: creds.email,
            password: creds.password
        }).catch(error => console.log('ERROR @ AuthService#signIn() :', error));
    }

    signInWithEmail(credentials: any): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Password, credentials);
    }

    // signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    //     return this.signIn(AuthProviders.Facebook);
    // }
    //
    // signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    //     return this.signIn(AuthProviders.Google);
    // }
    //
    // signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    //     return this.signIn(AuthProviders.Twitter);
    // }

    signOut(): void {
        this.auth$.logout();
    }
}
