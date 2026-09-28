import { Component } from '@angular/core';
import { collection, collectionEvent } from '../../shared/collection';
import { CollectionListItem} from '../collection-list-item/collection-list-item';

@Component({
  imports: [CollectionListItem],
  selector: 'app-collection-list',
  styleUrl: './collection-list.scss',
  templateUrl: './collection-list.html',
})
//list an array of 4 or more content items
export class CollectionList {
  collectible: collection[] = [
    {
      id: 1,
      name: 'Superman Comic',
      category: 'Collectible',
      value: 120.00,
      condition: 'Near Mint'
    },
    {
      id: 2,
      name: 'Charizard Figure',
      category: 'Figure',
      value: 200,
      condition: 'Mint'
    },
    {
      id: 3,
      name: 'Babe Ruth Baseball',
      category: 'Collectible',
      value: 175.00,
      condition: 'Near Mint'
    },
    {
      id: 4,
      name: 'Cal Ripkin Signed Card',
      category: 'Trading Card',
      value: 310
    }
  ];
  //listen for the collectionEvent emitted and handle it
  handleItemClick(event: collectionEvent): void {
    console.log(`Collectible ID ${event.id} action: ${event.action}`);
  }
}
