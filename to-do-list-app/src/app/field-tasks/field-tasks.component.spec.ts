import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTasksComponent } from './field-tasks.component';

describe('FieldTasksComponent', () => {
  let component: FieldTasksComponent;
  let fixture: ComponentFixture<FieldTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
