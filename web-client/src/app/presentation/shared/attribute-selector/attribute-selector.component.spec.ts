import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSelectorComponent } from './attribute-selector.component';

describe('AttributeSelectorComponent', () => {
  let component: AttributeSelectorComponent;
  let fixture: ComponentFixture<AttributeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
