import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, FirebaseAuth } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    items: FirebaseListObservable<any[]>;
    constructor(public af: AngularFire, public auth: FirebaseAuth) {
        this.items = af.database.list('/ideas');
    }

    ngOnInit() {
    }

    login() {
      console.log("Logging in");
      this.af.auth.login({
          provider: AuthProviders.Facebook
      });
    }

}
