import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-idea-submission',
  templateUrl: 'idea-submission.component.html',
  styleUrls: ['idea-submission.component.css']
})
export class IdeaSubmissionComponent implements OnInit {

    ideaTitle: string;
    ideaDescription: string;
    brokerage: string;
    province: string;
    timestamp: number;
    currentUser: string;
    ideas: FirebaseListObservable<any[]>;

    constructor(public af: AngularFire, public auth: FirebaseAuth) {
        this.af.auth.subscribe(auth => {
            this.currentUser = auth.uid;
            this.ideas = af.database.list('/ideas');
        });
    }

    ngOnInit() {
    }

    pushData(event) {
        event.preventDefault();

        this.timestamp = Date.now();
        var d = new Date(this.timestamp);

        // console.log(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
        // console.log(this.currentUser);
        //
        // console.log(this.ideaTitle);

        this.ideas.push({
            "userID": this.currentUser,
            "timestamp": this.timestamp,
            "title": this.ideaTitle,
            "description": this.ideaDescription,
            "brokerage": this.brokerage,
            "province": this.province
        });
    }
}
