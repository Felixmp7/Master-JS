import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillaComponent } from './zapatilla.component';

describe('ZapatillaComponent', () => {
  let component: ZapatillaComponent;
  let fixture: ComponentFixture<ZapatillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
