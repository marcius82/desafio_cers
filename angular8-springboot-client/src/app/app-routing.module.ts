import { NoticeDetailsComponent } from './notice-details/notice-details.component';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { UpdateNoticeComponent } from './update-notice/update-notice.component';

const routes: Routes = [
  { path: '', redirectTo: 'notices', pathMatch: 'full' },
  { path: 'notices', component: NoticeListComponent },
  { path: 'add', component: CreateNoticeComponent },
  { path: 'update/:id', component: UpdateNoticeComponent },
  { path: 'details/:id', component: NoticeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
