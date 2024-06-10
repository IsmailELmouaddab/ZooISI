import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSoigneursComponent } from './liste-soigneurs.component';

describe('ListeSoigneursComponent', () => {
  let component: ListeSoigneursComponent;
  let fixture: ComponentFixture<ListeSoigneursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeSoigneursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeSoigneursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
