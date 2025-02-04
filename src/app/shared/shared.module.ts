import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { SearchUploadHeaderComponent } from './search-upload-header/search-upload-header.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ButtonComponent } from './button/button.component';
import { TagComponent } from './tag/tag.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { CameraCardComponent } from './camera-card/camera-card.component';
import { RouterModule } from '@angular/router';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { WarningModalComponent } from './warning-modal/warning-modal.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    VideoListComponent,
    SectionTitleComponent,
    AlertListComponent,
    VideoPlayerComponent,
    VideoCardComponent,
    SearchUploadHeaderComponent,
    ImageCardComponent,
    ButtonComponent,
    TagComponent,
    EmptyPageComponent,
    CameraCardComponent,
    SuccessModalComponent,
    WarningModalComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    VideoListComponent,
    SectionTitleComponent,
    AlertListComponent,
    VideoPlayerComponent,
    VideoCardComponent,
    SearchUploadHeaderComponent,
    ImageCardComponent,
    TagComponent,
    EmptyPageComponent,
    CameraCardComponent,
    SuccessModalComponent,
    WarningModalComponent,
    LoaderComponent

  ]
})
export class SharedModule {
  constructor(){
    console.log('SharedModule loaded');
  }
}
