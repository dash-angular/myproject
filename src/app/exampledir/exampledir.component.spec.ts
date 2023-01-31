import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampledirComponent } from './exampledir.component';

describe('ExampledirComponent', () => {
  let component: ExampledirComponent;
  let fixture: ComponentFixture<ExampledirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampledirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampledirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
