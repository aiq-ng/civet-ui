import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDatabaseComponent } from './manage-database.component';

describe('ManageDatabaseComponent', () => {
  let component: ManageDatabaseComponent;
  let fixture: ComponentFixture<ManageDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageDatabaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
