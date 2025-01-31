import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { AppLayoutComponent } from './app-layout.component';
import { LiveVideoMonitoringComponent } from './live-video-monitoring/live-video-monitoring.component';
import { ManageVideosComponent } from './manage-videos/manage-videos.component';
import { ManageDatabaseComponent } from './manage-database/manage-database.component';
import { AnalyseVideoComponent } from './analyse-video/analyse-video.component';
import { VideoReportComponent } from './video-report/video-report.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadVideoComponent } from './analyse-video/upload-video/upload-video.component';
import { ConnectCameraComponent } from './home/connect-camera/connect-camera.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { SearchPageComponent } from './home/search-page/search-page.component';
import { SearchDetailComponent } from './home/search-detail/search-detail.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppLayoutComponent,
    LiveVideoMonitoringComponent,
    ManageVideosComponent,
    ManageDatabaseComponent,
    AnalyseVideoComponent,
    VideoReportComponent,
    AnalyseComponent,
    UploadVideoComponent,
    ConnectCameraComponent,
    SearchPageComponent,
    SearchDetailComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    FormsModule
  ]
})
export class AppLayoutModule { }
