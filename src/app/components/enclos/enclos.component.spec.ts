import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosComponent } from './enclos.component';

describe('EnclosComponent', () => {
  let component: EnclosComponent;
  let fixture: ComponentFixture<EnclosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnclosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
