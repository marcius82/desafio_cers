import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { NoticeDetailsComponent } from './notice-details/notice-details.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateNoticeComponent } from './update-notice/update-notice.component';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoticeComponent,
    NoticeDetailsComponent,
    NoticeListComponent,
    UpdateNoticeComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
