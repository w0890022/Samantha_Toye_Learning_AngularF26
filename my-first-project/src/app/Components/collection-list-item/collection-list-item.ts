import { Component, input, output } from '@angular/core';
import { collection, collectionEvent } from '../../shared/collection';

@Component({
  imports: [],
  selector: 'app-collection-list-item',
  styleUrl: './collection-list-item.scss',
  templateUrl: './collection-list-item.html',
})
//use input function to create a signal to read the template
export class CollectionListItem {
  item = input.required<collection>();

  //output() from event goes here from collectionEvent
  itemClicked = output<collectionEvent>();
  expanded = false;

  toggle(): void {
    this.expanded = !this.expanded;

    //emit an event carrying the item id and action taken
    this.itemClicked.emit({
      id: this.item().id,
      action: 'available'
    });
  }

}
