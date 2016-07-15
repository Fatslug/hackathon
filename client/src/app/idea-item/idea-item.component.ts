import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IdeaInterface } from '../shared/ideas';
import { IdeaVotingComponent } from '../idea-voting';

@Component({
  moduleId: module.id,
  selector: 'idea-item',
  templateUrl: 'idea-item.component.html',
  styleUrls: ['idea-item.component.css'],
  directives: [IdeaVotingComponent]
})
export class IdeaItemComponent {

    @Input() idea: IdeaInterface;
    @Output() remove: EventEmitter<any> = new EventEmitter(false);
    @Output() update: EventEmitter<any> = new EventEmitter(false);
    title: string = '';

}
