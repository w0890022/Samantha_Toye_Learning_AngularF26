import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionListItem } from './collection-list-item';

describe('CollectionListItem', () => {
  let component: CollectionListItem;
  let fixture: ComponentFixture<CollectionListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
