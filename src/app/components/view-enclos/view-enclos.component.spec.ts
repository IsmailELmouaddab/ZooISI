import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnclosComponent } from './view-enclos.component';

describe('ViewEnclosComponent', () => {
  let component: ViewEnclosComponent;
  let fixture: ComponentFixture<ViewEnclosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEnclosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
