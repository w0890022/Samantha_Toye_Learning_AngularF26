//creating a new interface for sports cards, collectibles, and figures
//says one property must be optional with ? at the end
export interface collection {
  id: string | number; //union allows 101 or 'A101' for types to be used like this
  name: string;
  category: 'Trading Card' | 'Figure' | 'Collectible'; //union types with |
  value: number;
  condition?: 'Poor' | 'Good' | 'Near Mint' | 'Mint'; //optional? property
}

/** Add interface that sends an event to the parent using output()
 * for this I am going on if a user adds item to their inventory and posts for sale:
 * if they recently sold an item or if it's available
 */

export interface collectionEvent {
  id: string | number;
  action: 'sold' | 'available';
}
