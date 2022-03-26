import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoItemComponent } from './resumo-item.component';

describe('ResumoItemComponent', () => {
  let component: ResumoItemComponent;
  let fixture: ComponentFixture<ResumoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
