import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IdeaService } from '../shared/ideas/idea-service';
import { IdeasListComponent } from '../ideas-list';


@Component({
    moduleId: module.id,
    selector: 'ideas',
    styleUrls: ['ideas.component.css'],
    templateUrl: 'ideas.component.html',
    directives: [IdeasListComponent],
    providers: [IdeaService]
})

export class Ideas {
    filter: Observable<any>;

    constructor(public route: ActivatedRoute, public ideaService: IdeaService) {
        this.filter = route.params
            .pluck('province')
            .do((value: string) => ideaService.filterIdeas(value));
    }
}
