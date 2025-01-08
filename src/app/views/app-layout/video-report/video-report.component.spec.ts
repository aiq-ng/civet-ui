import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoReportComponent } from './video-report.component';

describe('VideoReportComponent', () => {
  let component: VideoReportComponent;
  let fixture: ComponentFixture<VideoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
