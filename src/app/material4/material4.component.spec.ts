import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Material4Component } from './material4.component';

describe('Material4Component', () => {
  let component: Material4Component;
  let fixture: ComponentFixture<Material4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Material4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Material4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
