import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { HomeComponent } from './home/home.component';
import { LiveVideoMonitoringComponent } from './live-video-monitoring/live-video-monitoring.component';
import { ManageVideosComponent } from './manage-videos/manage-videos.component';
import { AnalyseVideoComponent } from './analyse-video/analyse-video.component';
import { ManageDatabaseComponent } from './manage-database/manage-database.component';
import { VideoReportComponent } from './video-report/video-report.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { ConnectCameraComponent } from './home/connect-camera/connect-camera.component';
import { SearchPageComponent } from './home/search-page/search-page.component';
import { SearchDetailComponent } from './home/search-detail/search-detail.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'cameras', component: ConnectCameraComponent},
      {path: 'manage-database', component: ManageDatabaseComponent},
      {path: 'search-page', component: SearchPageComponent},
      {path: 'search-detail/:id', component: SearchDetailComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
