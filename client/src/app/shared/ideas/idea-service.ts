import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from '../auth/auth-service';
import { IdeaInterface, Idea } from './idea';


@Injectable()
export class IdeaService {
    visibleIdeas$: Observable<IdeaInterface[]>;

    private filter$: ReplaySubject<any> = new ReplaySubject(1);
    private filteredIdeas$: FirebaseListObservable<IdeaInterface[]>;
    private ideas$: FirebaseListObservable<IdeaInterface[]>;


    constructor(af: AngularFire, auth: AuthService) {
        const path = '/ideas';

        this.ideas$ = af.database.list(path);

        this.filteredIdeas$ = af.database.list(path, {query: {
            orderByChild: 'province',
            equalTo: this.filter$
        }});

        this.visibleIdeas$ = Observable.merge(this.filter$)
            .switchMap(filter => filter === null ? this.ideas$ : this.filteredIdeas$);
    }


    filterIdeas(filter: string): void {
        switch (filter) {
            case 'false':
                this.filter$.next(false);
            break;

            case 'true':
                this.filter$.next(true);
            break;

            default:
                this.filter$.next(null);
            break;
        }
    }

    createIdea(title: string): firebase.Promise<any> {
        return this.ideas$.push(new Idea(title));
    }

    removeIdea(idea: IdeaInterface): firebase.Promise<any> {
        return this.ideas$.remove(idea.$key);
    }

    updateIdea(idea: IdeaInterface, changes: any): firebase.Promise<any> {
        return this.ideas$.update(idea.$key, changes);
    }
}
