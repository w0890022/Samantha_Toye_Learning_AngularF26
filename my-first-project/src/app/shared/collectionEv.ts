/** Add interface that sends an event to the parent using output()
 * for this I am going on if a user adds item to their inventory and posts for sale:
 * if they recently sold an item or if it's available
 */

export interface collectionEv {
  id: string | number;
  action: 'sold' | 'available';
}
