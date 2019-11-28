import { Component, OnInit } from '@angular/core';
import { Notice } from '../notice';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'app-update-notice',
  templateUrl: './update-notice.component.html',
  styleUrls: ['./update-notice.component.css']
})
export class UpdateNoticeComponent implements OnInit {

  id: number;
  notice: Notice;

  constructor(private route: ActivatedRoute,private router: Router, private noticeService: NoticeService) { }

  ngOnInit() {
    this.notice = new Notice();

    this.id = this.route.snapshot.params.id;

    this.noticeService.getNotice(this.id).subscribe(data => {
        console.log(data);
        this.notice = data;
      }, error => console.log(error));
  }

  updateNotice() {
    this.noticeService.updateNotice(this.id, this.notice)
      .subscribe(data => console.log(data), error => console.log(error));
    this.notice = new Notice();
    this.gotoList();
  }

  onSubmit() {
    this.updateNotice();
  }

  gotoList() {
    this.router.navigate(['/notices']);
  }
}
