import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ListItem } from '../interfaces/list-item.interface';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponent {

  @ContentChild(TemplateRef) public contentTemplate: TemplateRef<any>;

  @Input() public items: Array<ListItem>;
}
