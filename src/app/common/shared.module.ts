// 公共模块
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CropperImgComponent} from './components/cropper-img/cropper-img.component';
import {ZwHttpInterceptor} from './service/zw-httpInterceptor';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpServer} from './service/http-server';
import {DateSet} from './service/date-set';
import {IsImgService} from './service/is-img.service';
import {SetCodeService} from './service/set-code.service';
import {EssenceNg2PrintModule} from 'essence-ng2-print';
import {CodeService} from './restService/code-service';
import {CodeNamePipe} from './pipe/code-name.pipe';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CropperImgModalComponent} from './components/cropper-img-modal/cropper-img-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './restService/user-service';
import {IScoll5Directive} from './directives/i-scoll5.directive';
import {MyDragDirective} from './directives/my-drag.directive';
import {MyDragBoxDirective} from './directives/my-drag-box.directive';
import {FilterNamePipe} from './pipe/filter-name.pipe';
import {AddComponent} from './components/user-add/add.component';
import {WeekService} from './service/week.service';
import {ScaleService} from './service/scale.service';
import {FileService} from './restService/file-service';
import {ScaleBoxDirective} from './directives/scale-box.directive';
import { CssTableComponent } from './components/css-table/css-table.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {BigScreenService} from './restService/big-screen-service';
import {AdminService} from './restService/admin-service';
import { TreeComponent } from './components/tree/tree.component';

@NgModule({
  imports: [
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    CropperImgComponent,
    CropperImgModalComponent,
    CodeNamePipe,
    IScoll5Directive,
    MyDragDirective,
    MyDragBoxDirective,
    FilterNamePipe,
    AddComponent,
    ScaleBoxDirective,
    CssTableComponent,
    TreeComponent
    
  ],
  exports: [
    ReactiveFormsModule,
    CropperImgComponent,
    EssenceNg2PrintModule,
    CodeNamePipe,
    IScoll5Directive,
    MyDragDirective,
    MyDragBoxDirective,
    FilterNamePipe,
    ScaleBoxDirective,
    NgxEchartsModule,
    TreeComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZwHttpInterceptor,
      multi: true,
    },
    DateSet,
    SetCodeService,
    CodeService,
    HttpServer,
    UserService,
    IsImgService,
    WeekService,
    ScaleService,
    FileService,
    BigScreenService,
    AdminService
  ],
  entryComponents: [
    CropperImgModalComponent,
    AddComponent
  ]
})

export class SharedModule {
}
