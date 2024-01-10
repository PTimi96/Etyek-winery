import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupingComponent } from './tab-grouping.component';

describe('TabGroupingComponent', () => {
  let component: TabGroupingComponent;
  let fixture: ComponentFixture<TabGroupingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupingComponent]
    });
    fixture = TestBed.createComponent(TabGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
