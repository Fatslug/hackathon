import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
    FIREBASE_PROVIDERS,
    defaultFirebase({
        apiKey: "AIzaSyCpTJ_58Kehx6_El4MS-fXlJHl7D-vBxI4",
        authDomain: "hackathon-79470.firebaseapp.com",
        databaseURL: "https://hackathon-79470.firebaseio.com",
        storageBucket: "hackathon-79470.appspot.com"
    }),
    firebaseAuthConfig({
        method: AuthMethods.Password,
        remember: 'default'
    })
];
