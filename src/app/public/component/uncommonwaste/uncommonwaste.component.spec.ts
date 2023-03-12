import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonwasteComponent } from './uncommonwaste.component';

describe('UncommonwasteComponent', () => {
  let component: UncommonwasteComponent;
  let fixture: ComponentFixture<UncommonwasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncommonwasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncommonwasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
