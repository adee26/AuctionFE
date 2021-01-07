import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionThubmnailComponent } from './auction-thubmnail.component';

describe('AuctionThubmnailComponent', () => {
  let component: AuctionThubmnailComponent;
  let fixture: ComponentFixture<AuctionThubmnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionThubmnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionThubmnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
