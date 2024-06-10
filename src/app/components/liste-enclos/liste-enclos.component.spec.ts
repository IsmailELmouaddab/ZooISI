import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEnclosComponent } from './liste-enclos.component';

describe('LiseEnclosComponent', () => {
  let component: ListeEnclosComponent;
  let fixture: ComponentFixture<ListeEnclosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEnclosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeEnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
