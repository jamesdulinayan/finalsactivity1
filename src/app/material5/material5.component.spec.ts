import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Material5Component } from './material5.component';

describe('Material5Component', () => {
  let component: Material5Component;
  let fixture: ComponentFixture<Material5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Material5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Material5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
