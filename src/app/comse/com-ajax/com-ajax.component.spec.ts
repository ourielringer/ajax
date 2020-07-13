import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAjaxComponent } from './com-ajax.component';

describe('ComAjaxComponent', () => {
  let component: ComAjaxComponent;
  let fixture: ComponentFixture<ComAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
