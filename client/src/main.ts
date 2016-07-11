import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, AngularFire, defaultFirebase, firebaseAuthConfig, AuthMethods, AuthProviders } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    FIREBASE_PROVIDERS,
    defaultFirebase({
        apiKey: "AIzaSyCpTJ_58Kehx6_El4MS-fXlJHl7D-vBxI4",
        authDomain: "hackathon-79470.firebaseapp.com",
        databaseURL: "https://hackathon-79470.firebaseio.com",
        storageBucket: "hackathon-79470.appspot.com"
    }),
    firebaseAuthConfig({
        provider: AuthProviders.Google,
        method: AuthMethods.Redirect
    })
]);
