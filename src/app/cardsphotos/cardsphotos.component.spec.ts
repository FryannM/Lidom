import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsphotosComponent } from './cardsphotos.component';

describe('CardsphotosComponent', () => {
  let component: CardsphotosComponent;
  let fixture: ComponentFixture<CardsphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
