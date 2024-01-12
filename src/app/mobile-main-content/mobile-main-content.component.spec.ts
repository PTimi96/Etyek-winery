import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMainContentComponent } from './mobile-main-content.component';

describe('MobileMainContentComponent', () => {
  let component: MobileMainContentComponent;
  let fixture: ComponentFixture<MobileMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileMainContentComponent]
    });
    fixture = TestBed.createComponent(MobileMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
