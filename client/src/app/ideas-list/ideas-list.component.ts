import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';
import { IdeaVotingComponent } from '../idea-voting';

@Component({
  moduleId: module.id,
  selector: 'app-ideas-list',
  templateUrl: 'ideas-list.component.html',
  styleUrls: ['ideas-list.component.css'],
  directives: [IdeaVotingComponent]
})
export class IdeasListComponent implements OnInit {

    ideas: FirebaseListObservable<any>;
    votesSnap: FirebaseListObservable<any>;
    votesTally: any;

    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => {
            this.ideas = af.database.list('/ideas');
            this.votesSnap = af.database.list('/votes', { preserveSnapshot: true });
            this.votesSnap.subscribe(snapshots => {
                snapshots.forEach(snapshot => {
                    console.log(snapshot.val().ideaID);
                    this.votesTally += snapshot.val().voteType;
                });
            })
        });
    }

    ngOnInit() {
    }

    delete(ideaID: string) {
        this.ideas.remove({
          "$key": ideaID
        });
    }

    addVote(voteType: any, ideaID: string) {
        console.log(ideaID + ": " + voteType.value);
        console.log(this.votesTally);
    }

}
