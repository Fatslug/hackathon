import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../shared/auth/auth-service';

@Component({
  moduleId: module.id,
  selector: 'idea-submission-form',
  templateUrl: 'idea-submission-form.component.html',
  styleUrls: ['idea-submission-form.component.css']
})
export class IdeaSubmissionFormComponent {

    constructor(public auth: AuthService) {}

    ideaTitle: string;
    ideaDescription: string;
    brokerage: string;
    province: string;
    currentUser: string = this.auth.authState.uid;

    @Output() createIdea: EventEmitter<any> = new EventEmitter(false);

    clear(): void {
        this.ideaTitle = '';
    }

    submit(event: any) {
        event.preventDefault();
        console.log("Running Submit");

        const ideaTitle: string = this.ideaTitle.trim();
        const ideaDescription: string = this.ideaDescription.trim();
        const brokerage: string = this.brokerage.trim();
        const province: string = this.province;
        const currentUser: string = this.currentUser;

        this.createIdea.emit({
            "userID": currentUser,
            "title": ideaTitle,
            "description": ideaDescription,
            "province": province,
            "brokerage": brokerage
        });
    }
}
