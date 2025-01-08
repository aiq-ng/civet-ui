import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveVideoMonitoringComponent } from './live-video-monitoring.component';

describe('LiveVideoMonitoringComponent', () => {
  let component: LiveVideoMonitoringComponent;
  let fixture: ComponentFixture<LiveVideoMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiveVideoMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveVideoMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
