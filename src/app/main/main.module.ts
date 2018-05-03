import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../common/shared.module';

import {AppComponent} from './component/app/app.component';
import {LoginComponent} from './component/login/login.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {MenuComponent} from './component/menu/menu.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {EventService} from '../common/service/event.service';

import {BigScreenModule} from '../big-screen/big-screen.module';
import {IndexComponent} from './component/index/index.component';


@NgModule({
  declarations: [AppComponent, LoginComponent,
    NotFoundComponent, MenuComponent,IndexComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    BigScreenModule,
    RouterModule.forRoot([
      {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        data: {
          name: 'css管理端',
          type: [0, 1],
          hideChild: true,
        }
      },
      {
        path: '**',
        component: NotFoundComponent
      }

    ], {useHash: true})
  ],
  providers: [EventService],
  bootstrap: [AppComponent],
  entryComponents: []
})

export class MainModule {
}
