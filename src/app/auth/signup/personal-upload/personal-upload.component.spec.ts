import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalUploadComponent } from './personal-upload.component';

describe('PersonalUploadComponent', () => {
  let component: PersonalUploadComponent;
  let fixture: ComponentFixture<PersonalUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalUploadComponent]
    });
    fixture = TestBed.createComponent(PersonalUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
