import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDropdownComponent } from './create-new-dropdown.component';

describe('CreateNewDropdownComponent', () => {
  let component: CreateNewDropdownComponent;
  let fixture: ComponentFixture<CreateNewDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
