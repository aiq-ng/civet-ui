import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailComponent } from './search-detail.component';

describe('SearchDetailComponent', () => {
  let component: SearchDetailComponent;
  let fixture: ComponentFixture<SearchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
