import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-idea-submission',
  templateUrl: 'idea-submission.component.html',
  styleUrls: ['idea-submission.component.css']
})
export class IdeaSubmissionComponent implements OnInit {

    ngOnInit() {
    }

    ideaTitle: string;
    ideaDescription: string;
    brokerage: string;
    province: string;
    fulltime: number;

    currentUser: string;
    items: FirebaseListObservable<any[]>;

    constructor(public af: AngularFire, public auth: FirebaseAuth) {
        this.items = af.database.list('/ideas');
        this.af.auth.subscribe(auth => {
            console.log(auth)
            this.currentUser = auth.uid;
        });
    }

    pushData(event) {
        event.preventDefault();

        this.fulltime = Date.now();
        var d = new Date(this.fulltime);
        var n = d.getFullYear();

        console.log(n);
        // console.log(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
        // console.log(this.currentUser);
        //
        // console.log(this.ideaTitle);

        this.items.push({
            "userID": this.currentUser,
            "timestamp": this.fulltime,
            "title": this.ideaTitle,
            "description": this.ideaDescription,
            "brokerage": this.brokerage,
            "province": this.province
        });
    }
}
