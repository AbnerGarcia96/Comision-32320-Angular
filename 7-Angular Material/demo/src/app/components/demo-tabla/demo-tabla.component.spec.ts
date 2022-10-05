import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTablaComponent } from './demo-tabla.component';

describe('DemoTablaComponent', () => {
  let component: DemoTablaComponent;
  let fixture: ComponentFixture<DemoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
