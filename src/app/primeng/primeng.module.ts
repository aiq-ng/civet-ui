import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ChipsModule } from 'primeng/chips';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';


const primeNG: any = [
  ButtonModule,
  MenuModule,
  MultiSelectModule,
  OverlayPanelModule,
  InputGroupModule,
  InputGroupAddonModule,
  ChipsModule,
  CarouselModule,
  TagModule,
  FileUploadModule,
  BadgeModule,
  ProgressBarModule,
  ToastModule,
  CheckboxModule,
  BreadcrumbModule,
  CardModule,
  DialogModule,
  TableModule
  //... more primeng modules...
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [primeNG]
})
export class PrimengModule { }
