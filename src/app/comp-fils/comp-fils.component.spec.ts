import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFilsComponent } from './comp-fils.component';

describe('CompFilsComponent', () => {
  let component: CompFilsComponent;
  let fixture: ComponentFixture<CompFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
