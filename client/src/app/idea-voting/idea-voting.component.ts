import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'idea-voting',
    templateUrl: 'idea-voting.component.html',
    styleUrls: ['idea-voting.component.css']
})
export class IdeaVotingComponent implements OnInit {

    @Input() ideaID: string;
    currentUser: string;
    timestamp: number;
    votes: FirebaseListObservable<any[]>;

    @Output() onVote = new EventEmitter();

    constructor(public af: AngularFire, public auth: FirebaseAuth) {
        this.af.auth.subscribe(auth => {
            this.votes = af.database.list('/votes');
            this.currentUser = auth.uid;
        });
    }

    ngOnInit() {
    }

    voteUp(ideaID: string) {
        this.timestamp = Date.now();

        this.votes.push({
            "ideaID": this.ideaID,
            "userID": this.currentUser,
            "timestamp": this.timestamp,
            "voteType": 1
        });

        this.onVote.emit({
            value: 1
        });
    }

    voteDown(ideaID: string) {
        this.timestamp = Date.now();

        this.votes.push({
            "ideaID": ideaID,
            "userID": this.currentUser,
            "timestamp": this.timestamp,
            "voteType": -1
        });

        this.onVote.emit({
            value: -1
        });
    }

}
