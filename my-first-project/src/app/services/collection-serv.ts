import { Service, signal, computed, effect } from '@angular/core';
import { collection } from '../shared/collection';
@Service()
export class CollectionServ {
  private Collection = signal<collection[]>([
    {
      id: 1,
      name: 'Superman Comic',
      category: 'Collectible',
      value: 120.0,
      condition: 'Near Mint',
    },
    {
      id: 2,
      name: 'Charizard Figure',
      category: 'Figure',
      value: 200,
      condition: 'Mint',
    },
    {
      id: 3,
      name: 'Babe Ruth Baseball',
      category: 'Collectible',
      value: 175.0,
      condition: 'Near Mint',
    },
    {
      id: 4,
      name: 'Cal Ripkin Signed Card',
      category: 'Trading Card',
      value: 310,
    },
  ]);
  CollectionList = this.Collection.asReadonly();

  //this is the computed signal
  collectionCount = computed(() => this.CollectionList().length);

  //constructor does an effect when the signal changes
  constructor() {
    effect(() => {
      console.log('Collection count is now: ', this.collectionCount());
    });
  }

  //this is the method using update that adds a new item
  addCollection(c: collection) {
    this.Collection.update(list => [...list, c]);
  }
}
