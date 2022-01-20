import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIraComponent } from './create-ira.component';

describe('CreateIraComponent', () => {
  let component: CreateIraComponent;
  let fixture: ComponentFixture<CreateIraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
