import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IdeaInterface } from '../shared/ideas';
import { IdeaItemComponent } from '../idea-item';

@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ideas-list',
  templateUrl: 'ideas-list.component.html',
  styleUrls: ['ideas-list.component.css'],
  directives: [IdeaItemComponent]
})
export class IdeasListComponent {

    @Input() filter: string;
    @Input() ideas: FirebaseListObservable<IdeaInterface[]>;

    @Output() remove: EventEmitter<any> = new EventEmitter(false);
    @Output() update: EventEmitter<any> = new EventEmitter(false);

    // ideas: FirebaseListObservable<any>;
    // votesSnap: FirebaseListObservable<any>;
    // votesTally: any;
    //
    // constructor(public af: AngularFire) {
    //     this.af.auth.subscribe(auth => {
    //         this.ideas = af.database.list('/ideas');
    //     });
    // }
    //
    // ngOnInit() {
    // }
    //
    // delete(ideaID: string) {
    //     this.ideas.remove({
    //       "$key": ideaID
    //     });
    // }
    //
    // addVote(voteType: any, ideaID: string) {
    //     console.log(ideaID + ": " + voteType.value);
    //     console.log(this.votesTally);
    // }

}
