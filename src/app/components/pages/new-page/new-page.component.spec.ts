import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewPageComponent } from './new-page.component';

describe('NewPageComponent', () => {
  let component: NewPageComponent;
  let fixture: ComponentFixture<NewPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
