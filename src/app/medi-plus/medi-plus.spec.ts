import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediPlus } from './medi-plus';

describe('MediPlus', () => {
  let component: MediPlus;
  let fixture: ComponentFixture<MediPlus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediPlus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediPlus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
