import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSoigneursComponent } from './view-soigneurs.component';

describe('ViewSoigneursComponent', () => {
  let component: ViewSoigneursComponent;
  let fixture: ComponentFixture<ViewSoigneursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSoigneursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSoigneursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
