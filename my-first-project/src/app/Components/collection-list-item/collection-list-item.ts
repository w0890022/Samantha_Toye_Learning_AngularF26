import { Component, input } from '@angular/core';
import { collection } from '../../shared/collection';

@Component({
  imports: [],
  selector: 'app-collection-list-item',
  styleUrl: './collection-list-item.scss',
  templateUrl: './collection-list-item.html',
})
//use input function to create a signal to read the template
export class CollectionListItem {
  item = input.required<collection>();
}
