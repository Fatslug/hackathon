import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-angular-test',
  templateUrl: 'angular-test.component.html',
  styleUrls: ['angular-test.component.css']
})
export class AngularTestComponent implements OnInit {

  ngOnInit() {
  }

  items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
      this.af.auth.subscribe(auth => console.log(auth));
      this.items = af.database.list('/items');
  }

  login() {
      this.af.auth.login();
  }

  pushData(userId: string) {
      this.items.push({
          "value": userId
      });

      console.log(this.af.auth);
  }

}
