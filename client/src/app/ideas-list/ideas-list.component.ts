import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-ideas-list',
  templateUrl: 'ideas-list.component.html',
  styleUrls: ['ideas-list.component.css']
})
export class IdeasListComponent implements OnInit {

    ideas: FirebaseListObservable<any[]>;
    constructor(public af: AngularFire, public auth: FirebaseAuth) {
        this.ideas = af.database.list('/ideas');
    }

    delete(itemID: string) {
        this.ideas.remove({
          "$key": itemID
        })
    }

    ngOnInit() {
    }

}
