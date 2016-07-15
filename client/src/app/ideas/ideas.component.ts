import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { IdeaService } from '../shared/ideas/idea-service';
import { IdeasListComponent } from '../ideas-list';
import { IdeaSubmissionFormComponent } from '../idea-submission-form';


@Component({
    moduleId: module.id,
    selector: 'ideas',
    styleUrls: ['ideas.component.css'],
    templateUrl: 'ideas.component.html',
    directives: [IdeasListComponent, IdeaSubmissionFormComponent],
    providers: [IdeaService]
})

export class Ideas {
    filter: Observable<any>;

    constructor(public route: ActivatedRoute, public ideaService: IdeaService, public router: Router) {
        this.filter = route.params
            .pluck('province')
            .do((value: string) => ideaService.filterIdeas(value));
    }

    submitPage() {
        this.router.navigate(['/submit']);
    }
}
