import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoigneursComponent } from './soigneurs.component';

describe('SoigneursComponent', () => {
  let component: SoigneursComponent;
  let fixture: ComponentFixture<SoigneursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoigneursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoigneursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
