import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularoTemplateComponent } from './formularo-template.component';

describe('FormularoTemplateComponent', () => {
  let component: FormularoTemplateComponent;
  let fixture: ComponentFixture<FormularoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularoTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
