import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-angular-test',
  templateUrl: 'angular-test.component.html',
  styleUrls: ['angular-test.component.css']
})
export class AngularTestComponent {

    items: FirebaseListObservable<any[]>;
    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => console.log(auth));
        this.items = af.database.list('/items');
    }

    login() {
        console.log("Logging in");
        this.af.auth.login({
            provider: AuthProviders.Facebook
        });
    }

    pushData(userId: string) {
      this.items.push({
          "value": userId
      });

      console.log(this.af.auth);
    }

}
